import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Footer as SimpleFooter } from "@/components/ui/simple-footer";
import { Facebook, MessageCircle } from "lucide-react";
import * as React from "react";





export const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const copyrightText = `© ${new Date().getFullYear()} IndiCar · Desenvolvido por ` +
    '<a href="https://instagram.com/nexorasistemas" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Nexora Consulting</a>';

  // Links principais + LGPD
  const mainLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#precos", label: "Preços" },
    { href: "#crm", label: "CRM" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          ...mainLinks,
          {
            href: "#lgpd",
            label: (
              <DialogTrigger asChild>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="text-sm text-primary underline-offset-4 hover:underline bg-transparent border-none cursor-pointer p-0 m-0"
                  style={{ background: "none", border: "none" }}
                >
                  Aviso LGPD
                </button>
              </DialogTrigger>
            ),
          },
        ]}
        legalLinks={[]}
        copyright={{
          text: `<div>${copyrightText}</div>` +
            '<div>Todos os direitos reservados</div>',
        }}
      />
      <DialogContent>
        <DialogHeader>
          <strong>Aviso LGPD</strong>
        </DialogHeader>
        <div className="mt-2 text-sm text-foreground">
          <p>
            A Plataforma IndiCar respeita integralmente a Lei Geral de Proteção de Dados (Lei 13.709/2018) e adota medidas rigorosas para garantir a privacidade e a segurança das informações tratadas.
          </p>
          <p className="mt-2">
            Nós não disponibilizamos de forma alguma quaisquer dados pessoais de proprietários de veículos, nem de terceiros do tipo pessoa física, seja de forma integral ou parcial.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
