import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { Panel } from '@/components/Panel';
import { StatPanel } from '@/components/StatPanel';

export function ExecutiveSummarySlide() {
  return (
    <>
      <StatusBar part="PARTE 1 · IMPACTO" title="RESUMO EXECUTIVO" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px] animate-stagger">
        <Kicker className="animate-fade-in-up">quem sou · o que entrego</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          12 anos de tecnologia.<br />
          <span className="text-teal">Hoje, entrego infraestrutura</span> como vantagem competitiva.
        </h2>

        <p className="text-body text-text-muted mt-4 max-w-[65ch] animate-fade-in-up">
          Comecei em suporte técnico e telecomunicações. Evolui para SRE &amp; DevOps com foco em
          multicloud, automação de ponta a ponta e observabilidade. Em 2026, acrescentei uma camada
          de IA aplicada — agentes e RAG — para escalar operações sem escalar equipe.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8 animate-fade-in-up">
          <Panel
            title="ESPECIALIDADES"
            titleColor="teal"
            className="border-l-2 border-l-teal"
          >
            <ul className="mt-3 space-y-2 text-panel-body text-text-muted">
              <li className="flex gap-2"><span className="text-teal">›</span> Infraestrutura Multicloud (AWS, OCI, Azure)</li>
              <li className="flex gap-2"><span className="text-teal">›</span> CI/CD &amp; GitOps (GitHub Actions, Argo CD)</li>
              <li className="flex gap-2"><span className="text-teal">›</span> Kubernetes, Docker, EKS, Karpenter</li>
              <li className="flex gap-2"><span className="text-teal">›</span> IaC: Terraform + Ansible</li>
              <li className="flex gap-2"><span className="text-teal">›</span> Observabilidade: Prometheus, Grafana, ELK</li>
              <li className="flex gap-2"><span className="text-teal">›</span> Agentes de IA: LangChain, LangGraph, n8n</li>
            </ul>
          </Panel>

          <Panel
            title="PERFIL PROFISSIONAL"
            titleColor="amber"
            className="border-l-2 border-l-amber"
          >
            <ul className="mt-3 space-y-2 text-panel-body text-text-muted">
              <li className="flex gap-2"><span className="text-amber">›</span> Formação: Bacharelado em Sistemas de Informação</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Pós: Cibersegurança e Proteção Digital (FIA, 2024)</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Certificado OCI AI Foundations Associate (set/2026)</li>
              <li className="flex gap-2"><span className="text-amber">›</span> 620h+ de capacitação técnica aplicada</li>
              <li className="flex gap-2"><span className="text-amber">›</span> Localização: São Paulo, Brasil</li>
            </ul>
          </Panel>
        </div>

        <div className="flex gap-0 mt-6 border-t border-line animate-fade-in-up">
          <StatPanel num="12+" label="anos em tecnologia" className="flex-1 pr-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="5" label="clouds em atuação" className="flex-1 px-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="620h+" label="capacitação técnica" className="flex-1 px-6 pt-5 border-r border-line" numColor="teal" />
          <StatPanel num="2026" label="OCI AI Foundations" className="flex-1 pl-6 pt-5" numColor="amber" />
        </div>
      </div>
    </>
  );
}
