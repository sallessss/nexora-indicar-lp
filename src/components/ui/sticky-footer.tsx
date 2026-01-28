import { cn } from '@/lib/utils';
import {
    Car,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MessageCircle,
    Shield,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import React from 'react';
import { Button } from './button';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-[720px] w-full', className)}
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
			{...props}
		>
			<div className="fixed bottom-0 h-[720px] w-full">
				<div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t bg-foreground px-4 py-8 md:px-12">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-primary/.15)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-primary/.05)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-primary/.08)_0,--theme(--color-primary/.02)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-primary/.08)_0,--theme(--color-primary/.02)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
						</div>

						{/* LGPD Notice */}
						<AnimatedContainer className="relative z-10 bg-background/10 rounded-2xl p-6 mb-4">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center flex-shrink-0">
									<Shield className="w-6 h-6 text-background" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-2 text-background">Aviso LGPD</h3>
									<p className="text-background/80 text-sm leading-relaxed">
										A Plataforma IndiCar respeita integralmente a Lei Geral de Proteção de Dados (Lei 13.709/2018) 
										e adota medidas rigorosas para garantir a privacidade e a segurança das informações tratadas. 
										Nós não disponibilizamos de forma alguma quaisquer dados pessoais de proprietários de veículos, 
										nem de terceiros do tipo pessoa física, seja de forma integral ou parcial.
									</p>
								</div>
							</div>
						</AnimatedContainer>

						<div className="relative z-10 mt-4 flex flex-col gap-8 md:flex-row xl:mt-0">
							<AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
								<div className="flex items-center gap-2">
									<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
										<Car className="w-5 h-5 text-primary-foreground" />
									</div>
									<span className="text-2xl font-bold text-background">
										indi<span className="text-primary">Car</span>
									</span>
								</div>
								<p className="text-background/70 mt-8 text-sm md:mt-0">
									Plataforma exclusiva de geração de leads qualificados para consultores de proteção veicular. 
									Encontre novos clientes e aumente suas vendas de seguro automotivo.
								</p>
								<div className="flex gap-2">
									{socialLinks.map((link) => (
										<Button key={link.title} size="icon" variant="outline" className="size-8 border-background/20 bg-background/10 hover:bg-background/20 text-background">
											<link.icon className="size-4" />
										</Button>
									))}
								</div>
							</AnimatedContainer>
							{footerLinkGroups.map((group, index) => (
								<AnimatedContainer
									key={group.label}
									delay={0.1 + index * 0.1}
									className="w-full"
								>
									<div className="mb-10 md:mb-0">
										<h3 className="text-sm uppercase text-background">{group.label}</h3>
										<ul className="text-background/70 mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
											{group.links.map((link) => (
												<li key={link.title}>
													<a
														href={link.href}
														className="hover:text-primary inline-flex items-center transition-all duration-300"
													>
														{link.icon && <link.icon className="me-1 size-4" />}
														{link.title}
													</a>
												</li>
											))}
										</ul>
									</div>
								</AnimatedContainer>
							))}
						</div>
						<div className="relative z-10 text-background/60 flex flex-col items-center justify-between gap-2 border-t border-background/20 pt-4 text-sm md:flex-row">
							<p>© {new Date().getFullYear()} IndiCar. Todos os direitos reservados.</p>
							<p className="flex items-center gap-1">
								<MessageCircle className="size-4" />
								Suporte via WhatsApp
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Facebook', href: '#', icon: FacebookIcon },
	{ title: 'Instagram', href: '#', icon: InstagramIcon },
	{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Navegação',
		links: [
			{ title: 'Início', href: '#inicio' },
			{ title: 'Preços', href: '#precos' },
			{ title: 'CRM', href: '#crm' },
			{ title: 'FAQ', href: '#faq' },
		],
	},
	{
		label: 'Plataforma',
		links: [
			{ title: 'Área do Cliente', href: '#' },
			{ title: 'Painel de Leads', href: '#' },
			{ title: 'Relatórios', href: '#' },
			{ title: 'Integrações', href: '#' },
		],
	},
	{
		label: 'Suporte',
		links: [
			{ title: 'Central de Ajuda', href: '#' },
			{ title: 'Tutoriais', href: '#' },
			{ title: 'Contato', href: '#' },
			{ title: 'WhatsApp', href: '#' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Termos de Uso', href: '#' },
			{ title: 'Política de Privacidade', href: '#' },
			{ title: 'LGPD', href: '#' },
			{ title: 'Cookies', href: '#' },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
