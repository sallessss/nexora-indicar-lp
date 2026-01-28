import { NavBar } from "@/components/ui/tubelight-navbar";
import { DollarSign, HelpCircle, Home, Users } from "lucide-react";

export const Header = () => {
  const navItems = [
    { name: "Início", url: "#inicio", icon: Home },
    { name: "Preços", url: "#precos", icon: DollarSign },
    { name: "CRM", url: "#crm", icon: Users },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
  ];

  return <NavBar items={navItems} />;
};
