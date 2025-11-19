"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { name: "Inicio", id: "inicio" },
  { name: "Configuración", id: "novedades" },
  { name: "Información", id: "adminPanels" },
  { name: "Precios", id: "precios" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Efecto de fondo sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar con ESC y bloquear scroll de body cuando el menú está abierto
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
    } else {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // cerrar panel en móvil al navegar
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${solid ? "bg-[#0B2A5D]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
      aria-label="Barra de navegación"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Links Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-white/85">
          {LINKS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón Solo ADMIN (desktop) */}
          <a
            href="https://pymefieladminapp.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-pill border border-white/30 text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Iniciar Sesión
          </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {!open ? (
            // Icono hamburguesa
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          ) : (
            // Icono cerrar
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* OVERLAY (móvil) */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* PANEL MÓVIL (drawer derecha) */}
      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-screen w-72 bg-[#0B2A5D] border-l border-white/10
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <span className="text-white/90 font-semibold">Menú</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="rounded p-2 text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="p-3">
          <ul className="grid gap-1">
            {LINKS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="w-full text-left rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-white/10 pt-3">
            <button
              onClick={() => go("demo")}
              className="w-full inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Solo ADMIN
            </button>
          </div>
        </div>
      </aside>
    </nav>
  );
}
