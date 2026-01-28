import { Footer as SimpleFooter } from "@/components/ui/simple-footer";
import { Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <SimpleFooter
      logo={
        <img src="/indicarbranco.png" alt="Indicar Logo Branco" className="h-10 w-auto" />
      }
      brandName=""
      socialLinks={[
        {
          icon: <Facebook className="h-5 w-5" />,
          href: "https://facebook.com/indicar.top",
          label: "Facebook",
        },
        {
          icon: <MessageCircle className="h-5 w-5" />,
          href: "https://wa.me/5531993417687",
          label: "WhatsApp",
        },
      ]}
      mainLinks={[
        { href: "#inicio", label: "Início" },
        { href: "#precos", label: "Preços" },
        { href: "#crm", label: "CRM" },
        { href: "#faq", label: "FAQ" },
      ]}
      legalLinks={[]}
      copyright={{
        text: `© ${new Date().getFullYear()} IndiCar · Desenvolvido por ` +
          '<a href="https://instagram.com/nexorasistemas" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Nexora Consulting</a>',
        license: "Todos os direitos reservados",
      }}
    />
  );
};
