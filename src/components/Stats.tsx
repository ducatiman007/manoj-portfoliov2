export default function Stats() {
  const items = [
    { k: "Tech Stack", v: "Next.js · Tailwind · Firebase · MongoDB" },
    { k: "Certifications", v: "CyberSec · Ethical Hacking · AI · ML" },
    { k: "Availability", v: "Immediate" },
    { k: "Focus", v: "Full-Stack · UI/UX · Performance" },
  ];
  return (
    <section className="section !pt-8 !pb-8">
      <div className="ribbon relative p-5">
        <div className="grain absolute inset-0 rounded-2xl" />
        <div className="grid gap-4 md:grid-cols-4 relative">
          {items.map((it, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-gold text-xs uppercase tracking-[0.22em]">{it.k}</p>
              <p className="mt-1 opacity-90">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
