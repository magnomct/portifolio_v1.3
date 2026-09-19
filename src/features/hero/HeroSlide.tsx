import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { StatPanel } from '@/components/StatPanel';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 1 · IMPACTO',
    title: 'HERO',
    location: 'SÃO PAULO, BR',
    kicker: 'cloud engineer · infraestrutura de missão crítica',
    heading1: 'Infraestrutura que não pode falhar.',
    heading2: 'Automação que não para de escalar.',
    subtitle: 'Carlos Magno Cordeiro da Silva — SRE & DevOps Engineer · Telecomunicações & Tecnologia',
    description: '12+ anos de tecnologia sustentando sistemas em produção. Hoje, aplico essa base para operar infraestrutura multicloud com automação de ponta a ponta — e agentes de IA como próxima camada de eficiência.',
  },
  'en': {
    part: 'PART 1 · IMPACT',
    title: 'HERO',
    location: 'SÃO PAULO, BR',
    kicker: 'cloud engineer · mission-critical infrastructure',
    heading1: 'Infrastructure that can\'t afford to fail.',
    heading2: 'Automation that never stops scaling.',
    subtitle: 'Carlos Magno Cordeiro da Silva — SRE & DevOps Engineer · Telecom & Technology',
    description: '12+ years in technology keeping production systems running. Today, I leverage that foundation to operate multicloud infrastructure with end-to-end automation — and AI agents as the next layer of efficiency.',
  },
};

export function HeroSlide() {
  const text = useTranslations(t);
  const { heroStats } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} location={text.location} />
      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker>{text.kicker}</Kicker>
        <h1 className="text-hero-name md:text-hero-name text-hero-name-mobile font-display">
          {text.heading1}<br />
          <span className="block mt-2">{text.heading2}</span>
        </h1>
        <div className="font-mono text-[18px] text-teal mt-4.5">
          {text.subtitle}
        </div>
        <p className="text-body text-text-muted mt-3 max-w-[60ch]">
          {text.description}
        </p>
        <div className="flex flex-col md:flex-row gap-0 mt-13 border-t border-line">
          {heroStats.map((stat, index) => (
            <StatPanel
              key={index}
              num={stat.num}
              label={stat.label}
              className="flex-1 pr-6 pt-5.5 border-r border-line last:border-r-0 last:pr-0"
            />
          ))}
        </div>
      </div>
    </>
  );
}