import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from 'react-router-dom'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Leads são exclusivos?',
            answer: 'Sim, cada lead é 100% exclusivo. Não existe a menor chance do envio do mesmo Lead para outros clientes.',
        },
        {
            id: 'item-2',
            question: 'Formas de pagamento?',
            answer: 'Você pode escolher a compra Avulsa, pagando apenas por 01 Lead recebido ou você pode escolher um de nossos pacotes disponíveis.',
        },
        {
            id: 'item-3',
            question: 'Como vocês lidam com Leads improdutivos?',
            answer: 'Não trabalhamos com contestação, enviaremos 50% a mais de leads na aquisição dos pacotes para cobrir possível leads improdutivas e no na aquisição de Lead Avulso, vamos mandar outro Lead a mais para compensar (100% no Avulso).',
        },
        {
            id: 'item-4',
            question: 'Como funciona todo o processo de geração do lead?',
            answer: 'A geração de leads é um processo de marketing digital, que se inicia na busca do cliente no Google pelo produto específico ou em um banner que ele vê nas redes sociais ou youtube, uma vez interessado o cliente opta por deixar suas informações em um formulário com título "falar com o corretor/vendedor", este formulário é integrado ao seu email ou planilha sheets do google, fazendo com que o lead chegue na plataforma instantaneamente após cadastrado.',
        },
        {
            id: 'item-5',
            question: 'Vocês validam os leads, entram em contato previamente?',
            answer: 'Não, você que faz o contato com o cliente em potencial, tendo em vista que o Lead é exclusivo e não repassado para nenhum outro consultor ou empresa de seguros.',
        },
        {
            id: 'item-6',
            question: 'Existe alguma garantia de sucesso?',
            answer: 'Infelizmente é impossível garantir o fechamento das vendas, isso depende de muitas variáveis específicas da atividade do consultor de proteção veicular, porém fazemos de tudo para que nossos clientes consigam lucrar com nossas ações de marketing que fazemos com muito zelo, comprometimento e muito esforços de nossos parceiros e Afiliados que contribuem para o cadastramento de Leads na plataforma.',
        },
    ]

    return (
        <section className=" py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Perguntas Frequentes</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Tire suas dúvidas sobre nossos serviços de geração de leads exclusivos.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card rounded-lg w-full border px-8 py-3 shadow-sm">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base text-muted-foreground">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
