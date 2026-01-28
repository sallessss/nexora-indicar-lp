import FeatureSection from "@/components/ui/feature-section";
import { Target, Shield, Clock, TrendingUp, Users, Zap } from "lucide-react";

const tasks = [
  {
    title: "Leads Qualificados",
    subtitle: "Clientes prontos para comprar",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "100% Exclusivo",
    subtitle: "Não repassamos para outros",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Economia de Tempo",
    subtitle: "Encontre clientes de casa",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Aumente Vendas",
    subtitle: "Estratégia eficaz comprovada",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Compensação Garantida",
    subtitle: "Leads extras se improdutivos",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Entrega Imediata",
    subtitle: "Leads instantâneos no cadastro",
    icon: <Zap className="h-5 w-5" />,
  },
];

export const Benefits = () => {
  return (
    <FeatureSection
      badge="Por que IndiCar?"
      title={
        <>
          Leads que <span className="text-gradient">realmente convertem</span>
        </>
      }
      description={
        <>
          Adquira leads qualificados para vender mais seguro automotivo e dedique-se ao que você faz de melhor: <strong>vender!</strong> Nossa plataforma automatiza a captação de clientes enquanto você foca no fechamento.
        </>
      }
      badges={["Leads Exclusivos", "Conforme LGPD", "Suporte 24h"]}
      tasks={tasks}
    />
  );
};
