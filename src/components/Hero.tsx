"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-2 bg-[#0a2c65] text-white">
      {/* FONDOS DECORATIVOS */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-900/40 opacity-70 blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-blue-700/30 opacity-60 blur-2xl -translate-x-1/2 translate-y-1/2" />

      {/* CONTENIDO */}
      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="rounded-3xl p-8 md:p-12 bg-blue-800/30 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* TEXTO */}
            <div className="md:col-span-6 lg:col-span-7">
              {/* BADGE CON LOGO + TEXTO */}
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 mb-6">
                <div className="relative h-9 w-9 rounded-xl bg-white flex items-center justify-center">
                  <Image
                    src="/screenshots/LogoSinFondo.png"
                    alt="Logo PyMe Fiel"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-blue-100 font-semibold">
                    Plataforma PyMe Fiel
                  </p>
                  <p className="text-xs text-blue-100/80">
                    Programa de lealtad para negocios inteligentes
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                La Lealtad que Impulsa el
                <br /> Crecimiento de tu Negocio
              </h1>

              <p className="mt-5 text-white/80 text-lg">
                El sistema todo en uno que digitaliza a tus clientes y aumenta tus ventas.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/526441565045?text=¡Hola!%20Estoy%20interesado%20en%20probar%20la%20demo%20de%20PyMe%20Fiel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-full font-semibold bg-blue-500 hover:bg-blue-400 transition duration-300 text-white shadow-xl shadow-blue-500/30 ring-1 ring-white/10"
                >
                  Solicitar Demo Gratuita
                </a>

                <a
                  href="#precios"
                  className="py-3 px-6 rounded-full font-semibold border border-white/40 hover:bg-white/10 transition duration-300 text-white"
                >
                  Ver Planes y Precios
                </a>
              </div>
            </div>

            {/* MOCKUP (click para ampliar) */}
            <div className="relative md:col-span-6 lg:col-span-5 flex justify-center md:justify-end items-center pt-12 md:pt-8">
              <div className="w-full max-w-[800px] ml-auto drop-shadow-2xl">
                <button
                  type="button"
                  aria-label="Ampliar captura de PyMe Fiel Admin"
                  onClick={() => setOpen(true)}
                  className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-white/5 flex items-center justify-center cursor-zoom-in hover:scale-[1.02] transition"
                >
                  <div className="relative w-full max-h-[440px] flex items-center justify-center">
                    <Image
                      src="/screenshots/LoginNew.png"
                      alt="Panel PyMe Fiel Admin"
                      width={1200}
                      height={800}
                      className="object-contain w-full h-auto"
                      priority
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FULLSCREEN */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-6xl w-[92%] md:w-[90%] animate-[zoomIn_.18s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/screenshots/Login.png"
              alt="Vista ampliada — PyMe Fiel Admin"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
            <button
              type="button"
              aria-label="Cerrar vista ampliada"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animación */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
