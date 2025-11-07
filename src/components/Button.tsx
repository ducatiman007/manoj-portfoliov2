import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "default" | "primary";
  className?: string;
};

export default function Button({ href, onClick, children, className = "", variant = "default" }: Props) {
  const base = `btn ${variant === "primary" ? "btn-primary" : ""} ${className}`;
  return href ? (
    <Link href={href} className={base}>{children}</Link>
  ) : (
    <button className={base} onClick={onClick}>{children}</button>
  );
}
