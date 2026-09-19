import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { Timeline } from '@/components/Timeline';
import { timelineItems } from '@/data/portfolio';

const milestones = [
  { year: '2013', event: 'Bacharelado em Sistemas de Informação — Faculdade Impacta' },
  { year: '2019', event: 'Transição para Telecomunicações — suporte e operações de infraestrutura' },
  { year: '2022', event: 'Entrada em Cloud: bootcamp AWS, início da jornada DevOps' },
  { year: '2023', event: 'Kubernetes, Docker, Terraform, CI/CD — stack de operação completo' },
  { year: '2024', event: 'Pós-graduação Cibersegurança (FIA) · Ansible, ELK, Grafana em produção' },
  { year: '2025', event: 'Multicloud DevOps & IA — Azure, GCP, LangChain, primeiros agentes' },
  { year: '2026', event: 'OCI AI Foundations Certified · RAG, LangGraph, n8n, EKS + Karpenter + ArgoCD' },
];

export function TrajectorySlide() {
  return (
    <>
      <StatusBar part="PARTE 3 · EXPERTISE & CERTIFICAÇÕES" title="TRAJETÓRIA" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">2013–2026 · evolução técnica contínua</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          Uma progressão deliberada —<br />
          <span className="text-teal">não um salto de carreira.</span>
        </h2>

        <div className="mt-7 animate-fade-in-up">
          <Timeline items={timelineItems} />
        </div>

        <div className="grid grid-cols-7 gap-0 mt-0 animate-stagger">
          {milestones.map((m) => (
            <div key={m.year} className="flex-1 pt-3 pr-2 animate-fade-in-up">
              <div
                className={`font-mono text-[10px] mb-1 ${m.year === '2026' ? 'text-amber' : 'text-text-dim'}`}
              >
                {m.year}
              </div>
              <p className="text-[11px] text-text-muted leading-snug">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
