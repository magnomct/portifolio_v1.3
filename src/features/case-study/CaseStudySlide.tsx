import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { ProjectStep } from '@/components/ProjectStep';
import { Panel } from '@/components/Panel';
import { projectSteps } from '@/data/portfolio';

export function CaseStudySlide() {
  return (
    <>
      <StatusBar part="PARTE 2 · PROBLEMAS QUE RESOLVO" title="PROVA DE EXECUÇÃO" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">projeto real · rag com ia · deploy em produção</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          SRE Knowledge Assistant —<br />
          <span className="text-teal">RAG sobre documentação interna</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[65ch] animate-fade-in-up">
          Agente de Q&amp;A sobre manuais de SRE e runbooks de incidentes. Responde perguntas
          em linguagem natural via LLM NVIDIA Nemotron, sem precisar abrir PDFs.
        </p>

        {/* Pipeline steps */}
        <div className="flex mt-7 animate-fade-in-up">
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

        {/* Tech stack + impact */}
        <div className="grid grid-cols-2 gap-4 mt-5 animate-fade-in-up">
          <Panel title="STACK UTILIZADO" titleColor="teal">
            <ul className="mt-3 space-y-1.5 text-panel-body text-text-muted">
              <li className="flex gap-2"><span className="text-teal">›</span> LangChain · FAISS · Python</li>
              <li className="flex gap-2"><span className="text-teal">›</span> NVIDIA Nemotron via NVIDIA NIM</li>
              <li className="flex gap-2"><span className="text-teal">›</span> Streamlit (UI web)</li>
              <li className="flex gap-2"><span className="text-teal">›</span> OCI Compute (deploy)</li>
            </ul>
          </Panel>

          <Panel title="RESULTADO" titleColor="amber">
            <ul className="mt-3 space-y-1.5 text-panel-body text-text-muted">
              <li className="flex gap-2"><span className="text-amber">›</span> Consulta a documentação em segundos</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Redução de tempo em resolução de incidentes</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Inferência local: dados não saem da infra</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Interface acessível a não-engenheiros</li>
            </ul>
          </Panel>
        </div>
      </div>
    </>
  );
}
