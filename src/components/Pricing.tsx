"use client";
import React from "react";

export default function Pricing() {
  return (
    <section id="precios" className="bg-white pt-20 md:pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 text-sm font-semibold">
            💙 Nuevo • Paquete Básico
          </span>
          <p className="mt-3 text-slate-600">
            Un solo plan para empezar a fidelizar y vender desde el primer día.
          </p>
        </div>

        {/* Plan Card */}
        <div className="relative">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-200/30 via-blue-100/20 to-blue-200/30 blur-xl" />

          <div className="relative rounded-3xl bg-white/90 shadow-xl ring-1 ring-slate-200 overflow-hidden">
            {/* ribbon */}
            <div className="absolute -right-12 top-6 rotate-45 bg-blue-600 text-white text-xs px-16 py-1 shadow-lg">
              Recomendado
            </div>

            <div className="grid md:grid-cols-[1.1fr_.9fr]">
              {/* Left: Info + Price */}
              <div className="p-8 md:p-12">
                <div className="flex items-end gap-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    Paquete Básico
                  </h3>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                    Web + Android
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                    $200
                  </span>
                  <span className="text-slate-500 font-medium">MXN / mes</span>
                </div>

                <p className="mt-3 text-slate-600">
                  Incluye acceso a la app web para administración y a la app
                  Android para vender y fidelizar. Ideal para empezar sin
                  complicaciones.
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-800 px-5 py-3 font-semibold transition"
                  >
                    Descargar App Android
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M8 3h8v2H8V3Zm-3 4h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Zm4 3v8h2v-8H9Zm4 0v8h2v-8h-2Z" />
                    </svg>
                  </a>
                </div>

                {/* Small note */}
                <p className="mt-3 text-xs text-slate-500">
                  *Precio en pesos mexicanos. Incluye soporte básico.
                </p>
              </div>

              {/* Right: Feature columns */}
              <div className="p-8 md:p-12 bg-gradient-to-b from-slate-50 to-white md:border-l md:border-slate-200">
                <div className="grid gap-6">
                  {/* Web App */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-600 grid place-items-center">
                        {/* web icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                          fill="currentColor"
                        >
                          <path d="M3 4h18v4H3V4Zm0 6h18v10H3V10Zm2 2v6h14v-6H5Z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">
                        Aplicación Web
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {[
                        "Administrar Negocio",
                        "Administrar usuarios",
                        "Dashboard de ventas",
                        "Envío de notificaciones personalizadas",
                        "Promociones personalizadas",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="mt-0.5 text-green-600">✔</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Android App */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-600 grid place-items-center">
                        {/* android icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                          fill="currentColor"
                        >
                          <path d="M6 9h12v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9Zm10.5-4.793 1.207-1.207 1.414 1.414-1.2 1.2A6.96 6.96 0 0 1 19 8H5c.108-1.077.512-2.07 1.08-2.906l-1.2-1.2 1.414-1.414L7.5 4.207A6.956 6.956 0 0 1 12 3c1.658 0 3.18.579 4.5 1.207ZM8 7h8a5 5 0 0 0-8 0Z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">
                        Aplicación Android
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {[
                        "Ventas",
                        "Crear usuarios",
                        "Ver promociones personalizadas",
                        "Ver otras promociones de negocios",
                        "Acumulación de puntos",
                        "Configuración de puntos por venta"
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="mt-0.5 text-green-600">✔</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer bar */}
            <div className="px-8 md:px-12 py-5 bg-slate-50/70 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <div className="text-slate-600">
                  Comienza hoy. Puedes cambiar o cancelar cuando lo necesites.
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1">
                    ✓ Sin costo de instalación
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1">
                    ✓ Soporte básico incluido
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
