import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2247] text-white/70">
      <div className="container-xl py-8 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex gap-6">
            <p>© {new Date().getFullYear()} PyMe Fiel. Todos los derechos reservados.</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
