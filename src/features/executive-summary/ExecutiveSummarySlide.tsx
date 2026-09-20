import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { Panel } from '@/components/Panel';
import { StatPanel } from '@/components/StatPanel';
import { useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 1 · IMPACTO',
    title: 'RESUMO EXECUTIVO',
    kicker: 'quem sou · o que entrego',
    heading: '12 anos de tecnologia.',
    headingAccent: 'Hoje, entrego infraestrutura como vantagem competitiva.',
    description: 'Comecei em suporte técnico e telecomunicações. Evolui para SRE & DevOps com foco em multicloud, automação de ponta a ponta e observabilidade. Em 2026, acrescentei uma camada de IA aplicada — agentes e RAG — para escalar operações sem escalar equipe.',
    specialtiesTitle: 'ESPECIALIDADES',
    specialties: [
      'Infraestrutura Multicloud (AWS, OCI, Azure)',
      'CI/CD & GitOps (GitHub Actions, Argo CD)',
      'Kubernetes, Docker, EKS, Karpenter',
      'IaC: Terraform + Ansible',
      'Observabilidade: Prometheus, Grafana, ELK',
      'Agentes de IA: LangChain, LangGraph, n8n',
    ],
    profileTitle: 'PERFIL PROFISSIONAL',
    profile: [
      'Formação: Bacharelado em Sistemas de Informação',
      'Pós: Cibersegurança e Proteção Digital (FIA, 2024)',
      'Certificado OCI AI Foundations & OCI Foundations Associate 2026',
      '620h+ de capacitação técnica aplicada',
      'Localização: São Paulo, Brasil',
    ],
    statLabels: ['anos em tecnologia', 'clouds em atuação', 'capacitação técnica', 'OCI Certifications 2026'],
  },
  'en': {
    part: 'PART 1 · IMPACT',
    title: 'EXECUTIVE SUMMARY',
    kicker: 'who i am · what i deliver',
    heading: '12 years in technology.',
    headingAccent: 'Today, I deliver infrastructure as a competitive advantage.',
    description: 'I started in technical support and telecom. Evolved into SRE & DevOps with a focus on multicloud, end-to-end automation, and observability. In 2026, I added an applied AI layer — agents and RAG — to scale operations without scaling the team.',
    specialtiesTitle: 'SPECIALTIES',
    specialties: [
      'Multicloud Infrastructure (AWS, OCI, Azure)',
      'CI/CD & GitOps (GitHub Actions, Argo CD)',
      'Kubernetes, Docker, EKS, Karpenter',
      'IaC: Terraform + Ansible',
      'Observability: Prometheus, Grafana, ELK',
      'AI Agents: LangChain, LangGraph, n8n',
    ],
    profileTitle: 'PROFESSIONAL PROFILE',
    profile: [
      'Degree: Bachelor\'s in Information Systems',
      'Postgrad: Cybersecurity & Digital Protection (FIA, 2024)',
      'Certified OCI AI Foundations & OCI Foundations Associate 2026',
      '620h+ of applied technical training',
      'Location: São Paulo, Brazil',
    ],
    statLabels: ['years in technology', 'clouds in action', 'technical training', 'OCI AI Foundations'],
  },
};

export function ExecutiveSummarySlide() {
  const text = useTranslations(t);

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px] animate-stagger">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <p className="text-body text-text-muted mt-4 max-w-[65ch] animate-fade-in-up">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-fade-in-up">
          <Panel title={text.specialtiesTitle} titleColor="teal" className="border-l-2 border-l-teal">
            <ul className="mt-3 space-y-2 text-panel-body text-text-muted">
              {text.specialties.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-teal">›</span> {item}</li>
              ))}
            </ul>
          </Panel>

          <Panel title={text.profileTitle} titleColor="amber" className="border-l-2 border-l-amber">
            <ul className="mt-3 space-y-2 text-panel-body text-text-muted">
              {text.profile.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-amber">›</span> {item}</li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="flex flex-col md:flex-row gap-0 mt-6 border-t border-line animate-fade-in-up">
          <StatPanel num="12+" label={text.statLabels[0]} className="flex-1 pr-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="5" label={text.statLabels[1]} className="flex-1 px-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="620h+" label={text.statLabels[2]} className="flex-1 px-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="2026" label={text.statLabels[3]} className="flex-1 pl-6 pt-5" numColor="amber" />
        </div>
      </div>
    </>
  );
}
