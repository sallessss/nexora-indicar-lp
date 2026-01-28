import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Loader2, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Pacote {
  id: number;
  nome: string;
  descricao: string;
  quantidadeLeads: number;
  bonusLeads: number;
  totalLeads: number;
  preco: number;
  precoOriginal: number | null;
  precoPorLead: number;
  destaque: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

export const Pricing = () => {
  const [pacotes, setPacotes] = useState<Pacote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const response = await fetch(`${API_URL}/api/pacotes`);
        const data = await response.json();
        if (data.success) {
          setPacotes(data.data);
        }
      } catch (error) {
        console.error('Erro ao carregar pacotes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPacotes();
  }, []);

  const getFeatures = (pacote: Pacote) => {
    const features = ["Você escolhe os Leads no painel"];
    
    if (pacote.quantidadeLeads === 1) {
      features.push("Compre 1 ganhe outro");
      features.push("100% de compensação");
    } else {
      features.push("50% a mais de compensação");
      features.push(`Você receberá ${pacote.totalLeads} leads`);
    }
    features.push("Exclusividade na entrega");
    
    return features;
  };

  const handleComprar = (pacoteId: number) => {
    // Redireciona para o app com o pacote selecionado
    window.location.href = `${APP_URL}/cadastro-cliente?pacote=${pacoteId}`;
  };

  if (loading) {
    return (
      <section id="precos" className="py-24 bg-background">
        <div className="container mx-auto px-4 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="precos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Escolha sua maneira de <span className="text-gradient">Prospectar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacotes flexíveis para atender às suas necessidades. Quanto mais leads, menor o custo por contato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pacotes.map((pacote, index) => {
            const features = getFeatures(pacote);
            return (
              <motion.div
                key={pacote.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 ${
                  pacote.destaque 
                    ? "border-primary shadow-glow scale-105" 
                    : "border-border/50 hover:border-primary/50 shadow-card hover:shadow-card-hover"
                }`}
              >
                {pacote.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" fill="currentColor" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">Pacote {pacote.nome}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {pacote.quantidadeLeads.toString().padStart(2, '0')} {pacote.quantidadeLeads === 1 ? 'Lead' : 'Leads'}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-black text-foreground">
                      {pacote.preco.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    R$ {pacote.precoPorLead.toFixed(2).replace('.', ',')} por lead
                  </p>
                </div>

                <div className="bg-accent/50 rounded-xl p-4 mb-6">
                  <p className="text-center text-sm font-semibold text-accent-foreground">
                    Total: {pacote.totalLeads} leads entregues
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pacote.destaque ? "pricing" : "outline"} 
                  className="w-full"
                  size="lg"
                  onClick={() => handleComprar(pacote.id)}
                >
                  Adquira Já
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
