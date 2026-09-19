import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { TagList } from '@/components/TagList';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'STACK DE OPERAÇÃO',
    kicker: 'containers · iac · ci/cd · observabilidade',
    heading: 'O stack que mantém sistemas',
    headingAccent: 'em produção com zero surpresas.',
    description: 'Ferramentas que uso no dia a dia — não só no currículo. Cada camada cobre um ponto crítico do ciclo de vida da infraestrutura.',
    footer: 'Todos aplicados em projetos reais — não apenas labs. Infraestrutura como código é o padrão, não a exceção.',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'OPERATIONS STACK',
    kicker: 'containers · iac · ci/cd · observability',
    heading: 'The stack that keeps systems',
    headingAccent: 'in production with zero surprises.',
    description: 'Tools I use daily — not just on the resume. Each layer covers a critical point in the infrastructure lifecycle.',
    footer: 'All applied in real projects — not just labs. Infrastructure as Code is the standard, not the exception.',
  },
};

export function DevOpsStackSlide() {
  const text = useTranslations(t);
  const { devopsStack } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[60ch] animate-fade-in-up">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-stagger">
          {devopsStack.map((category) => (
            <div
              key={category.title}
              className="bg-panel border border-line p-5 animate-fade-in-up group hover:border-teal transition-colors duration-300"
            >
              <div className="font-mono text-panel-title text-teal mb-1">{category.title}</div>
              <TagList tags={category.tags} />
            </div>
          ))}
        </div>

        <div className="mt-4 bg-panel-2 border border-line-soft p-4 animate-fade-in-up">
          <p className="font-mono text-kicker text-text-dim">
            <span className="text-amber">›</span> {text.footer}
          </p>
        </div>
      </div>
    </>
  );
}
