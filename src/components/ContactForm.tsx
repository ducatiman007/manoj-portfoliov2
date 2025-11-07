"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setOk(res.ok);
      if (res.ok) form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        name="name"
        placeholder="Your name"
        className="rounded-2xl bg-ink-soft border border-[rgba(215,178,74,.18)] px-4 py-3 outline-none focus:border-[rgba(215,178,74,.5)]"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="rounded-2xl bg-ink-soft border border-[rgba(215,178,74,.18)] px-4 py-3 outline-none focus:border-[rgba(215,178,74,.5)]"
        required
      />
      <textarea
        name="message"
        rows={5}
        placeholder="How can I help you?"
        className="rounded-2xl bg-ink-soft border border-[rgba(215,178,74,.18)] px-4 py-3 outline-none focus:border-[rgba(215,178,74,.5)]"
        required
      />
      <button
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {ok === true && <p className="text-sm text-gold">Thanks! I’ll get back to you.</p>}
      {ok === false && <p className="text-sm" style={{ color: "#ff6b6b" }}>Something went wrong.</p>}
    </form>
  );
}
