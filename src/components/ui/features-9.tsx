'use client'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import DottedMap from 'dotted-map'
import { MessageCircle, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { Area, AreaChart, CartesianGrid } from 'recharts'

export function Features() {
    return (
        <section id="faq" className="px-4 py-16 md:py-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Users className="size-4" />
                            Captação Nacional de Leads
                        </span>

                        <p className="mt-8 text-2xl font-semibold">Sistema avançado de captação. Receba leads de seguro automotivo de todo o Brasil.</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-[--radius] bg-background z-[1] dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-black/5">
                                <span className="text-lg">🇧🇷</span> Novo lead de São Paulo, SP
                            </div>
                            <div className="rounded-[--radius] bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-black/5 dark:bg-zinc-900"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            Suporte via WhatsApp
                        </span>

                        <p className="my-8 text-2xl font-semibold">Atendimento rápido e humanizado para tirar todas as suas dúvidas.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border">
                                    <span className="size-3 rounded-full bg-primary"/>
                                </span>
                                <span className="text-muted-foreground text-xs">Seg 20 Jan</span>
                            </div>
                            <div className="rounded-[--radius] bg-background mt-1.5 w-3/5 border p-3 text-xs">Olá, recebi um lead mas não consigo acessar os dados.</div>
                        </div>

                        <div>
                            <div className="rounded-[--radius] mb-1 ml-auto w-3/5 bg-primary p-3 text-xs text-white">Oi! Acabei de verificar e já liberamos o acesso. Seus leads estão disponíveis no painel. Pode conferir agora! 🚗</div>
                            <span className="text-muted-foreground block text-right text-xs">Agora</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="size-8 text-primary" />
                            <p className="text-center text-4xl font-semibold lg:text-7xl">100% Exclusivo</p>
                        </div>
                        <p className="text-muted-foreground text-center max-w-lg">Cada lead é enviado apenas para você. Sem competição, sem divisão.</p>
                    </div>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="size-4" />
                            Taxa de Conversão
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                            Acompanhe sua performance em tempo real. <span className="text-muted-foreground">Métricas que ajudam você a vender mais.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    leads: {
        label: 'Leads Recebidos',
        color: 'hsl(24 100% 50%)',
    },
    conversoes: {
        label: 'Conversões',
        color: 'hsl(24 100% 70%)',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'Jan', leads: 56, conversoes: 12 },
    { month: 'Fev', leads: 78, conversoes: 18 },
    { month: 'Mar', leads: 126, conversoes: 32 },
    { month: 'Abr', leads: 205, conversoes: 52 },
    { month: 'Mai', leads: 180, conversoes: 45 },
    { month: 'Jun', leads: 320, conversoes: 85 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillLeads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-leads)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-leads)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillConversoes" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-conversoes)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-conversoes)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="conversoes" type="stepBefore" fill="url(#fillConversoes)" fillOpacity={0.1} stroke="var(--color-conversoes)" stackId="a" />
                <Area strokeWidth={2} dataKey="leads" type="stepBefore" fill="url(#fillLeads)" fillOpacity={0.1} stroke="var(--color-leads)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
