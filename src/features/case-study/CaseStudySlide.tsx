import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { ProjectStep } from '@/components/ProjectStep';
import { Panel } from '@/components/Panel';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 2 · PROBLEMAS QUE RESOLVO',
    title: 'PROVA DE EXECUÇÃO',
    kicker: 'projeto real · rag com ia · deploy em produção',
    heading: 'SRE Knowledge Assistant —',
    headingAccent: 'RAG sobre documentação interna',
    description: 'Agente de Q&A sobre manuais de SRE e runbooks de incidentes. Responde perguntas em linguagem natural via LLM NVIDIA Nemotron, sem precisar abrir PDFs.',
    stackTitle: 'STACK UTILIZADO',
    stack: ['LangChain · FAISS · Python', 'NVIDIA Nemotron via NVIDIA NIM', 'Streamlit (UI web)', 'OCI Compute (deploy)'],
    resultTitle: 'RESULTADO',
    results: ['Consulta a documentação em segundos', 'Redução de tempo em resolução de incidentes', 'Inferência local: dados não saem da infra', 'Interface acessível a não-engenheiros'],
  },
  'en': {
    part: 'PART 2 · PROBLEMS I SOLVE',
    title: 'PROOF OF EXECUTION',
    kicker: 'real project · rag with ai · production deploy',
    heading: 'SRE Knowledge Assistant —',
    headingAccent: 'RAG over internal documentation',
    description: 'Q&A agent for SRE manuals and incident runbooks. Answers questions in natural language via NVIDIA Nemotron LLM, without having to open PDFs.',
    stackTitle: 'TECH STACK',
    stack: ['LangChain · FAISS · Python', 'NVIDIA Nemotron via NVIDIA NIM', 'Streamlit (web UI)', 'OCI Compute (deployment)'],
    resultTitle: 'RESULTS',
    results: ['Documentation queries in seconds', 'Reduced incident resolution time', 'Local inference: data stays in-house', 'Interface accessible to non-engineers'],
  },
};

export function CaseStudySlide() {
  const text = useTranslations(t);
  const { projectSteps } = usePortfolioData();

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

        <div className="flex flex-col md:flex-row mt-7 animate-fade-in-up">
          {projectSteps.map((step, index) => (
            <ProjectStep
              key={step.num}
              num={step.num}
              title={step.title}
              description={step.description}
              isLast={index === projectSteps.length - 1}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 animate-fade-in-up">
          <Panel title={text.stackTitle} titleColor="teal">
            <ul className="mt-3 space-y-1.5 text-panel-body text-text-muted">
              {text.stack.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-teal">›</span> {item}</li>
              ))}
            </ul>
          </Panel>
          <Panel title={text.resultTitle} titleColor="amber">
            <ul className="mt-3 space-y-1.5 text-panel-body text-text-muted">
              {text.results.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-amber">›</span> {item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </>
  );
}
