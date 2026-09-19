import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { Timeline } from '@/components/Timeline';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const milestones = {
  'pt-BR': [
    { year: '2013', event: 'Bacharelado em Sistemas de Informação — Faculdade Impacta' },
    { year: '2019', event: 'Transição para Telecomunicações — suporte e operações de infraestrutura' },
    { year: '2022', event: 'Entrada em Cloud: bootcamp AWS, início da jornada DevOps' },
    { year: '2023', event: 'Kubernetes, Docker, Terraform, CI/CD — stack de operação completo' },
    { year: '2024', event: 'Pós-graduação Cibersegurança (FIA) · Ansible, ELK, Grafana em produção' },
    { year: '2025', event: 'Multicloud DevOps & IA — Azure, GCP, LangChain, primeiros agentes' },
    { year: '2026', event: 'OCI AI Foundations Certified · RAG, LangGraph, n8n, EKS + Karpenter + ArgoCD' },
  ],
  'en': [
    { year: '2013', event: 'Bachelor\'s in Information Systems — Faculdade Impacta' },
    { year: '2019', event: 'Transition to Telecom — infrastructure support & operations' },
    { year: '2022', event: 'Entered Cloud: AWS bootcamp, start of DevOps journey' },
    { year: '2023', event: 'Kubernetes, Docker, Terraform, CI/CD — full operations stack' },
    { year: '2024', event: 'Postgrad Cybersecurity (FIA) · Ansible, ELK, Grafana in production' },
    { year: '2025', event: 'Multicloud DevOps & AI — Azure, GCP, LangChain, first agents' },
    { year: '2026', event: 'OCI AI Foundations Certified · RAG, LangGraph, n8n, EKS + Karpenter + ArgoCD' },
  ],
};

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'TRAJETÓRIA',
    kicker: '2013–2026 · evolução técnica contínua',
    heading: 'Uma progressão deliberada —',
    headingAccent: 'não um salto de carreira.',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'TRAJECTORY',
    kicker: '2013–2026 · continuous technical evolution',
    heading: 'A deliberate progression —',
    headingAccent: 'not a career leap.',
  },
};

export function TrajectorySlide() {
  const text = useTranslations(t);
  const ms = useTranslations(milestones);
  const { timelineItems } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <div className="mt-7 animate-fade-in-up">
          <Timeline items={timelineItems} />
        </div>

        <div className="hidden md:grid grid-cols-7 gap-0 mt-0 animate-stagger">
          {ms.map((m) => (
            <div key={m.year} className="flex-1 pt-3 pr-2 animate-fade-in-up">
              <div className={`font-mono text-[10px] mb-1 ${m.year === '2026' ? 'text-amber' : 'text-text-dim'}`}>
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
