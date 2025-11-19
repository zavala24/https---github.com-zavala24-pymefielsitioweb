// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "PyMe Fiel",
  description: "Fideliza clientes con una experiencia digital moderna.",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-premia text-white">
        {/* ⬇️ navbar se renderiza una sola vez aquí */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
