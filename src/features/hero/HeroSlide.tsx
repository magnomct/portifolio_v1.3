import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { StatPanel } from '@/components/StatPanel';
import { heroStats } from '@/data/portfolio';

export function HeroSlide() {
  return (
    <>
      <StatusBar part="PARTE 1 · IMPACTO" title="HERO" />
      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker>cloud engineer · infraestrutura de missão crítica</Kicker>
        <h1 className="text-hero-name font-display">
          Infraestrutura que não pode falhar.<br />
          <span className="block mt-2">Automação que não para de escalar.</span>
        </h1>
        <div className="font-mono text-[18px] text-teal mt-4.5">
          Carlos Magno Cordeiro da Silva — SRE & DevOps Engineer · Telecomunicações & Tecnologia
        </div>
        <p className="text-body text-text-muted mt-3 max-w-[60ch]">
          12+ anos de tecnologia sustentando sistemas em produção. Hoje, aplico essa base
          para operar infraestrutura multicloud com automação de ponta a ponta — e agentes
          de IA como próxima camada de eficiência.
        </p>
        <div className="flex gap-0 mt-13 border-t border-line">
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