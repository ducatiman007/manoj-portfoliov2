import Link from "next/link";

const Icon = ({ name }: { name: "github"|"linkedin"|"instagram" }) => {
  if (name === "github") return <span aria-hidden></span>;
  if (name === "linkedin") return <span aria-hidden></span>;
  return <span aria-hidden></span>;
};

const Item = ({ href, label, name }:{ href:string; label:string; name:"github"|"linkedin"|"instagram" }) => (
  <Link
    href={href}
    target="_blank"
    className="btn"
    aria-label={label}
    title={label}
  >
    <Icon name={name} />
    <span className="opacity-90">{label}</span>
  </Link>
);

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Item href="https://github.com/ducatiman007" label="GitHub" name="github" />
      <Item href="https://www.linkedin.com/in/manoj-kumar-0b1b66373/" label="LinkedIn" name="linkedin" />
      <Item href="https://www.instagram.com/sebarrex/" label="Instagram" name="instagram" />
    </div>
  );
}
