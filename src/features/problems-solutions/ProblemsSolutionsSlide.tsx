import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 2 · PROBLEMAS QUE RESOLVO',
    title: 'ONDE EU ENTRO EM AÇÃO',
    kicker: 'dores reais · soluções aplicadas',
    heading: 'Problemas que travam times.',
    headingAccent: 'Soluções que já entreguei.',
  },
  'en': {
    part: 'PART 2 · PROBLEMS I SOLVE',
    title: 'WHERE I COME IN',
    kicker: 'real pain points · applied solutions',
    heading: 'Problems that slow teams down.',
    headingAccent: 'Solutions I\'ve already delivered.',
  },
};

export function ProblemsSolutionsSlide() {
  const text = useTranslations(t);
  const { problemSolutions } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-amber">{text.headingAccent}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-stagger">
          {problemSolutions.map((item) => (
            <div
              key={item.title}
              className="bg-panel border border-line p-5 animate-fade-in-up group hover:border-amber transition-colors duration-300"
            >
              <div className="font-mono text-panel-title text-amber mb-3">{item.title}</div>
              <div className="font-mono text-kicker text-text-dim mb-2">{item.arrow}</div>
              <p className="text-panel-body text-text-muted group-hover:text-text transition-colors duration-300">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
