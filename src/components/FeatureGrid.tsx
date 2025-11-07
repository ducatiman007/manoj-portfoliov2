const features = [
  { t: "Elegant UI", d: "Luxury black/white/gold, glass surfaces, subtle motion." },
  { t: "Clean Code", d: "TypeScript, components, data-driven sections." },
  { t: "Performance", d: "Lightweight CSS effects. No heavy libs." },
  { t: "Deploy-Ready", d: "Next.js + Vercel, CI-friendly." },
  { t: "Scalable", d: "Firebase Auth, MongoDB backend later." },
  { t: "Responsive", d: "Mobile-first, crisp spacing & rhythm." },
];

export default function FeatureGrid() {
  return (
    <section className="section">
      <h2 className="section-title">Craft & Principles</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <article key={i} className="card p-6 hover:-translate-y-[2px] transition-transform">
            <div className="shine" />
            <h3 className="font-semibold">{f.t}</h3>
            <p className="opacity-85 mt-2">{f.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
