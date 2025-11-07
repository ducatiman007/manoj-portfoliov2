// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-80">
        <div className="hr-glow mb-6"></div>
        <p>© {new Date().getFullYear()} Manoj Kumar S — All rights reserved.</p>
      </div>
    </footer>
  );
}
