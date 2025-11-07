import Image from "next/image";
import Button from "./Button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className={`card p-6 hover:-translate-y-[2px] transition-transform ${p.highlight ? "ring-1 ring-[rgba(215,178,74,.25)]" : ""}`}>
      <div className="shine" />
      {/* Optional image */}
      {p.image ? (
        <div className="mb-4 overflow-hidden rounded-2xl">
          <Image src={p.image} alt={p.title} width={1200} height={630} className="w-full h-auto object-cover" />
        </div>
      ) : null}

      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="opacity-80 mt-2">{p.summary}</p>

      {/* Tags */}
      {p.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2 text-xs">
          {p.tags.map((t, i) => (
            <li key={i} className="px-2 py-1 rounded-full border border-[rgba(215,178,74,.25)] bg-[rgba(255,255,255,.03)]">
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-3">
        {p.live ? <Button href={p.live} variant="primary">Live</Button> : null}
        {p.repo ? <Button href={p.repo}>GitHub</Button> : null}
      </div>
    </article>
  );
}
