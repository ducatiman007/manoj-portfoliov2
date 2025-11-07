import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(215,178,74,.16)] bg-[rgba(12,12,12,.6)] backdrop-blur-md">
      <div className="section !py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm tracking-wide">
          <span className="text-gold font-semibold">Manoj</span>
          <span className="opacity-70">/ Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button href="/Manoj_Kumar_Resume.pdf" className="ml-2">Download CV</Button>
        </nav>
      </div>
    </header>
  );
}
