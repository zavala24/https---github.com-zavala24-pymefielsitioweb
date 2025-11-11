"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AdminPanels() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Bloquea el scroll cuando el modal está abierto
useEffect(() => {
  if (openSrc) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [openSrc]);
  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="adminPanels" className="relative scroll-mt-28 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,.5)] px-6 py-10 md:px-10 md:py-12">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
            El Panel de Administración que Necesitas
          </h2>

          {/* Rejilla de 3 paneles */}
          <div className="grid items-start gap-8 md:grid-cols-3 place-items-center">
            {/* 1️⃣ Panel de ventas y métricas */}
            <button
              onClick={() => setOpenSrc("/screenshots/PyMeFielDashboard.jpeg")}
              className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-white/5 hover:scale-[1.02] transition cursor-zoom-in"
            >
              <Image
                src="/screenshots/PyMeFielDashboard.jpeg"
                alt="Panel de ventas y métricas"
                width={500}
                height={300}
                className="object-contain w-full h-auto"
                priority
              />
            </button>

            {/* 2️⃣ App móvil centrada */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={() => setOpenSrc("/screenshots/PyMeFielVentasMovil.png")}
                className="cursor-zoom-in hover:scale-[1.05] transition"
              >
                <Image
                  src="/screenshots/PyMeFielVentasMovil.png"
                  alt="App móvil de ventas"
                  width={200}
                  height={400}
                  className="w-[120px] md:w-[180px] h-auto drop-shadow-2xl"
                  priority
                />
              </button>
            </div>

            {/* 3️⃣ Notificaciones y campañas */}
            <button
              onClick={() => setOpenSrc("/screenshots/Notificaciones.png")}
              className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-white/5 hover:scale-[1.02] transition cursor-zoom-in"
            >
              <Image
                src="/screenshots/Notificaciones.png"
                alt="Notificaciones y campañas"
                width={500}
                height={300}
                className="object-contain w-full h-auto"
                priority
              />
            </button>
          </div>


          {/* Textos inferiores */}
          <div className="mt-14 md:mt-16 grid gap-10 md:grid-cols-3 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Panel de Ventas y Métricas
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Visualiza <b>gráficas de ventas</b>, el desempeño de tus
                productos e indicadores clave en tiempo real para tomar mejores
                decisiones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">App Móvil de Ventas</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Realiza <b>ventas desde tu teléfono</b>, registra compras y
                fideliza clientes en el momento y lugar que lo necesites.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Notificaciones y Campañas
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Envía <b>notificaciones y promociones</b> a tus clientes de
                forma segmentada para impulsar la fidelidad y las ventas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: imagen ampliada */}
{openSrc && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={() => setOpenSrc(null)}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="relative animate-[zoomIn_.18s_ease-out] flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-w-[90vw] md:max-w-[60vw] max-h-[80vh] flex items-center justify-center">
        <Image
          src={openSrc}
          alt="Vista ampliada"
          width={1000}
          height={1000}
          className="w-auto h-auto max-h-[70vh] max-w-full rounded-lg shadow-2xl"
          priority
        />
      </div>

      <button
        type="button"
        aria-label="Cerrar vista ampliada"
        onClick={() => setOpenSrc(null)}
        className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
      >
        ✕
      </button>
    </div>
  </div>
)}

      {/* keyframes para la animación del modal */}
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
