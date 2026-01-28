import { Footer as SimpleFooter } from "@/components/ui/simple-footer";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <SimpleFooter
      logo={
        <img src="/logoindicar.png" alt="IndiCar Logo" className="h-10 w-auto" />
      }
      brandName=""
      socialLinks={[
        {
          icon: <Instagram className="h-5 w-5" />,
          href: "https://instagram.com",
          label: "Instagram",
        },
        {
          icon: <Facebook className="h-5 w-5" />,
          href: "https://facebook.com",
          label: "Facebook",
        },
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <MessageCircle className="h-5 w-5" />,
          href: "https://wa.me/5511999999999",
          label: "WhatsApp",
        },
      ]}
      mainLinks={[
        { href: "#inicio", label: "Início" },
        { href: "#precos", label: "Preços" },
        { href: "#crm", label: "CRM" },
        { href: "#faq", label: "FAQ" },
      ]}
      legalLinks={[
        { href: "#", label: "Termos de Uso" },
        { href: "#", label: "Política de Privacidade" },
        { href: "#", label: "LGPD" },
      ]}
      copyright={{
        text: `© ${new Date().getFullYear()} IndiCar`,
        license: "Todos os direitos reservados",
      }}
    />
  );
};
