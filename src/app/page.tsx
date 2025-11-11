import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import AdminPanels from "@/components/AdminPanels";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <main className="bg-premia text-white">
      {/* HERO - sección inicio */}
      <section id="inicio" className="scroll-mt-28">
        <Hero />
      </section>

      {/* NOVEDADES */}
      <section
        id="novedades"
        className="scroll-mt-28  min-h-[50vh] px-6 flex items-center justify-center" style={{ backgroundColor: "white" }}
      >
        <div className="w-full max-w-7xl">
          <Steps />
        </div>
      </section>

      {/* PRECIOS */}
      <section
        id="adminPanels"
        className="scroll-mt-28 min-h-screen px-6 flex items-center justify-center"
      >
        <div className="w-full max-w-7xl">
          <AdminPanels />
        </div>
      </section>

        {/* DEMO */}
        <section
        id="precios"
        className="scroll-mt-28 min-h-[50vh] px-6 flex items-center justify-center" style={{ backgroundColor: "white" }}
      >
        <div className="w-full max-w-7xl">
          <Pricing />
        </div>
      </section>

      {/* DEMO */}
      <section
        id="contacto"
        className="scroll-mt-28 min-h-[50vh] px-6 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl">
          <CTA />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-28" >
        <Footer />
      </section>
    </main>
  );
}
