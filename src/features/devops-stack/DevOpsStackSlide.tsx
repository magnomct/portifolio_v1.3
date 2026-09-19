import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { TagList } from '@/components/TagList';
import { devopsStack } from '@/data/portfolio';

export function DevOpsStackSlide() {
  return (
    <>
      <StatusBar part="PARTE 3 · EXPERTISE & CERTIFICAÇÕES" title="STACK DE OPERAÇÃO" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">containers · iac · ci/cd · observabilidade</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          O stack que mantém sistemas<br />
          <span className="text-teal">em produção com zero surpresas.</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[60ch] animate-fade-in-up">
          Ferramentas que uso no dia a dia — não só no currículo. Cada camada cobre um ponto
          crítico do ciclo de vida da infraestrutura.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8 animate-stagger">
          {devopsStack.map((category) => (
            <div
              key={category.title}
              className="bg-panel border border-line p-5 animate-fade-in-up group hover:border-teal transition-colors duration-300"
            >
              <div className="font-mono text-panel-title text-teal mb-1">
                {category.title}
              </div>
              <TagList tags={category.tags} />
            </div>
          ))}
        </div>

        {/* Additional context panel */}
        <div className="mt-4 bg-panel-2 border border-line-soft p-4 animate-fade-in-up">
          <p className="font-mono text-kicker text-text-dim">
            <span className="text-amber">›</span>
            {' '}Todos aplicados em projetos reais — não apenas labs. Infraestrutura como código é o padrão, não a exceção.
          </p>
        </div>
      </div>
    </>
  );
}
