"use client";
import React from "react";

const steps = [
  {
    title: "Configura",
    desc: "Personaliza promociones, puntos y recompensas.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a7.98 7.98 0 0 1-1.1 1.9l1.2 2.1-2.1 2.1-2.1-1.2c-.6.4-1.3.7-1.9 1.1l-.3 2.4H12l-.3-2.4c-.7-.2-1.3-.5-1.9-1.1l-2.1 1.2-2.1-2.1 1.2-2.1c-.4-.6-.7-1.3-1.1-1.9L1.3 15v-3l2.4-.3c.2-.7.5-1.3 1.1-1.9L3.6 7.7l2.1-2.1 2.1 1.2c.6-.4 1.3-.7 1.9-1.1L12 3l.3 2.4c.7.2 1.3.5 1.9 1.1l2.1-1.2 2.1 2.1-1.2 2.1c.4.6.7 1.3 1.1 1.9l2.4.3V15l-2.4.3z"
        />
      </svg>
    ),
  },
  {
    title: "Vende y Suma",
    desc: "Acumula las compras y los perfiles de tus clientes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18zM6 2l2 4h11l-2 7H8L6 2zM3 2h1l3.6 12h10.8l2-7H8.4L7 2H3z"
        />
      </svg>
    ),
  },
  {
    title: "Promociona",
    desc: "Activa campañas con notificaciones y emails.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zM18 16V9a6 6 0 0 0-5-5.91V2h-2v1.09A6 6 0 0 0 6 9v7l-2 2v1h16v-1l-2-2z"
        />
      </svg>
    ),
  },
];

export default function Steps() {
  return (
     <section id="novedades" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contenedor central */}
        <div className="rounded-3xl bg-white shadow-2xl border border-gray-200 p-10 md:p-12">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
            Digitaliza la Fidelidad de tus Clientes en 3 Pasos Simples
          </h2>

          {/* Tarjetas */}
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white border border-gray-100 rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}