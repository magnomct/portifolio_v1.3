import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { problemSolutions } from '@/data/portfolio';

export function ProblemsSolutionsSlide() {
  return (
    <>
      <StatusBar part="PARTE 2 · PROBLEMAS QUE RESOLVO" title="ONDE EU ENTRO EM AÇÃO" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">dores reais · soluções aplicadas</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          Problemas que travam times.<br />
          <span className="text-amber">Soluções que já entreguei.</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-8 animate-stagger">
          {problemSolutions.map((item) => (
            <div
              key={item.title}
              className="bg-panel border border-line p-5 animate-fade-in-up group hover:border-amber transition-colors duration-300"
            >
              <div className="font-mono text-panel-title text-amber mb-3">
                {item.title}
              </div>
              <div className="font-mono text-kicker text-text-dim mb-2">
                {item.arrow}
              </div>
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
