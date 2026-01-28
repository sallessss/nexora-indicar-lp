import { HeroSection2 } from '@/components/ui/hero-section-2';

const APP_URL = import.meta.env.VITE_APP_URL;

export const Hero = () => {
  return (
    <HeroSection2
      id="inicio"
      logo={{
        url: "/logoindicar.png",
        alt: "IndiCar Logo",
      }}
      slogan="PLATAFORMA DE LEADS EXCLUSIVOS"
      title={
        <>
          Leads para Vender <br />
          <span className="text-primary">Seguro Automotivo</span>
        </>
      }
      subtitle="Plataforma exclusiva de geração de leads qualificados. Uma estratégia eficaz para Consultores de proteção veicular de sucesso."
      callToAction={{
        text: "COMEÇAR AGORA",
        href: "#precos",
      }}
      secondaryAction={{
        text: "ACESSAR APP",
        href: APP_URL,
      }}
      backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
      contactInfo={{
        website: "indicar.top",
        phone: "(31) 99341-7687",
        address: "Brasil - Atuamos em todo território nacional",
      }}
    />
  );
};
