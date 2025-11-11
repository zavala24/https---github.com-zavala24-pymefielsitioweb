"use client";
import React from "react";

export default function CTA() {
  return (
    <section id="contacto" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(2,6,23,0.1)] p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-3">
            ¿Tienes dudas? <span className="text-[#1D4ED8]">Hablemos</span>
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Comunícate con nosotros y descubre cómo PyMe Fiel impulsa la
            fidelidad de tus clientes.
          </p>

          <div className="flex flex-col items-start space-y-6 sm:items-center">
            {/* Contenedor uniforme */}
            {[
              {
                icon: (
                  <path d="M20 4H4a2 2 0 0 0-2 2v1l10 6 10-6V6a2 2 0 0 0-2-2Zm0 5.236-8.445 5.068a1 1 0 0 1-1.11 0L2 9.236V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.236Z" />
                ),
                label: "Correo",
                value: "ing.juliozavala@gmail.com",
                link: "mailto:ing.juliozavala@gmail.com",
              },
              {
                icon: (
                  <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z" />
                ),
                label: "Teléfono / WhatsApp",
                value: "644 156 5045",
                link: "https://wa.me/526441565045",
              },
              {
                icon: (
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 11h-4a1 1 0 0 1 0-2h3V7a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Z" />
                ),
                label: "Horario de atención",
                value: "Lunes a Viernes, 8:00 a.m. – 5:00 p.m.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 w-full justify-center sm:justify-start"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="block h-5 w-5"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-lg font-medium text-slate-900 hover:text-[#1D4ED8] leading-tight"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-slate-900 leading-tight">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
