import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { aiDifferentiatorStats } from '@/data/portfolio';

export function AIDifferentiatorSlide() {
  return (
    <>
      <StatusBar part="PARTE 3 · EXPERTISE & CERTIFICAÇÕES" title="DIFERENCIAL IA" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">langchain · langgraph · n8n · nvidia nim</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          IA aplicada à operação —<br />
          <span className="text-teal">não ao hype.</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[65ch] animate-fade-in-up">
          269h+ em trilhas de IA aplicada (Alura + Oracle ONE AI FOR TECH). O foco não é
          usar IA por usar — é remover tarefas repetitivas do caminho crítico da engenharia
          e fazer o time operar com menos fricção.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8 animate-stagger">
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
            Diferencial: engenharia de infraestrutura com camada de IA operacional —
            automação inteligente que vai além de scripts.
          </p>
        </div>
      </div>
    </>
  );
}
