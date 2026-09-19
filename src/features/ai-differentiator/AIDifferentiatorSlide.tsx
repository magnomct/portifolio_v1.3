import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'DIFERENCIAL IA',
    kicker: 'langchain · langgraph · n8n · nvidia nim',
    heading: 'IA aplicada à operação —',
    headingAccent: 'não ao hype.',
    description: '269h+ em trilhas de IA aplicada (Alura + Oracle ONE AI FOR TECH). O foco não é usar IA por usar — é remover tarefas repetitivas do caminho crítico da engenharia e fazer o time operar com menos fricção.',
    footer: 'Diferencial: engenharia de infraestrutura com camada de IA operacional — automação inteligente que vai além de scripts.',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'AI DIFFERENTIATOR',
    kicker: 'langchain · langgraph · n8n · nvidia nim',
    heading: 'AI applied to operations —',
    headingAccent: 'not to hype.',
    description: '269h+ in applied AI tracks (Alura + Oracle ONE AI FOR TECH). The focus isn\'t using AI for the sake of it — it\'s removing repetitive tasks from the engineering critical path and helping the team operate with less friction.',
    footer: 'Differentiator: infrastructure engineering with an operational AI layer — intelligent automation that goes beyond scripts.',
  },
};

export function AIDifferentiatorSlide() {
  const text = useTranslations(t);
  const { aiDifferentiatorStats } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[65ch] animate-fade-in-up">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-stagger">
          {aiDifferentiatorStats.map((stat) => (
            <div
              key={stat.num}
              className="bg-panel border border-line p-5 flex gap-4 items-start animate-fade-in-up group hover:border-teal transition-colors duration-300"
            >
              <div className="font-mono text-stat-num text-teal shrink-0">{stat.num}</div>
              <div className="text-panel-body text-text-muted mt-1 group-hover:text-text transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-panel-2 border border-teal-dim p-4 animate-fade-in-up">
          <p className="font-mono text-kicker text-text-muted">
            <span className="text-teal glow-teal inline-block w-1.5 h-1.5 rounded-full mr-2" />
            {text.footer}
          </p>
        </div>
      </div>
    </>
  );
}
