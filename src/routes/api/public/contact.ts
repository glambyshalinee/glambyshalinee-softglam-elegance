import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const OWNER_EMAIL = "glambyshalinee@gmail.com";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().nullable(),
  service: z.string().trim().max(60).optional().nullable(),
  event_date: z.string().trim().max(20).optional().nullable(),
  message: z.string().trim().max(2000).optional().nullable(),
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = ContactSchema.safeParse(json);
          if (!parsed.success) {
            return Response.json({ error: "Invalid input" }, { status: 400 });
          }
          const data = parsed.data;

          // Save to DB
          const supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
          );
          await supabase.from("contact_submissions").insert({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            service: data.service || null,
            event_date: data.event_date || null,
            message: data.message || null,
          });

          // Send email via Resend
          const RESEND_API_KEY = process.env.RESEND_API_KEY;
          if (!RESEND_API_KEY) {
            return Response.json({ error: "Email service not configured" }, { status: 500 });
          }

          const html = `
            <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#fff;padding:32px;border:1px solid #e8d9c4;border-radius:16px;">
              <h2 style="color:#b76e79;margin:0 0 8px;">New Booking Enquiry</h2>
              <p style="color:#888;margin:0 0 24px;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Glam by Shalinee</p>
              <table style="width:100%;border-collapse:collapse;font-size:15px;color:#333;">
                <tr><td style="padding:8px 0;color:#888;width:130px;">Name</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(data.name)}</td></tr>
                <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#b76e79;">${escapeHtml(data.email)}</a></td></tr>
                ${data.phone ? `<tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;">${escapeHtml(data.phone)}</td></tr>` : ""}
                ${data.service ? `<tr><td style="padding:8px 0;color:#888;">Service</td><td style="padding:8px 0;">${escapeHtml(data.service)}</td></tr>` : ""}
                ${data.event_date ? `<tr><td style="padding:8px 0;color:#888;">Event Date</td><td style="padding:8px 0;">${escapeHtml(data.event_date)}</td></tr>` : ""}
              </table>
              ${data.message ? `<div style="margin-top:24px;padding:20px;background:#faf5ef;border-radius:12px;"><div style="color:#888;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Message</div><div style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.message)}</div></div>` : ""}
              <p style="margin-top:32px;color:#aaa;font-size:12px;text-align:center;">Sent from glambyshalinee website</p>
            </div>`;

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Glam by Shalinee <onboarding@resend.dev>",
              to: [OWNER_EMAIL],
              reply_to: data.email,
              subject: `New Booking Enquiry — ${data.name}${data.service ? ` (${data.service})` : ""}`,
              html,
            }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error("Resend error:", res.status, errText);
            return Response.json({ ok: true, emailed: false }, { status: 200 });
          }

          return Response.json({ ok: true, emailed: true });
        } catch (err) {
          console.error("Contact submit error:", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
