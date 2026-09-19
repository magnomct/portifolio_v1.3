import { Deck } from '@/components/Deck';
import { HeroSlide } from '@/features/hero/HeroSlide';
import { ExecutiveSummarySlide } from '@/features/executive-summary/ExecutiveSummarySlide';
import { ProblemsSolutionsSlide } from '@/features/problems-solutions/ProblemsSolutionsSlide';
import { CaseStudySlide } from '@/features/case-study/CaseStudySlide';
import { CloudPlatformsSlide } from '@/features/cloud-platforms/CloudPlatformsSlide';
import { DevOpsStackSlide } from '@/features/devops-stack/DevOpsStackSlide';
import { AIDifferentiatorSlide } from '@/features/ai-differentiator/AIDifferentiatorSlide';
import { CertificationsSlide } from '@/features/certifications/CertificationsSlide';
import { TrajectorySlide } from '@/features/trajectory/TrajectorySlide';
import { SocialProofSlide } from '@/features/social-proof/SocialProofSlide';
import { ContactSlide } from '@/features/contact/ContactSlide';
import type { SlideData } from '@/types';

const slides: SlideData[] = [
  {
    id: 'hero',
    part: 'PARTE 1 · IMPACTO',
    title: 'HERO',
    kicker: 'cloud engineer · infraestrutura de missão crítica',
    content: <HeroSlide />,
  },
  {
    id: 'executive',
    part: 'PARTE 1 · IMPACTO',
    title: 'RESUMO EXECUTIVO',
    kicker: 'quem sou · o que entrego',
    content: <ExecutiveSummarySlide />,
  },
  {
    id: 'problems',
    part: 'PARTE 2 · PROBLEMAS QUE RESOLVO',
    title: 'ONDE EU ENTRO EM AÇÃO',
    kicker: 'dores reais · soluções aplicadas',
    content: <ProblemsSolutionsSlide />,
  },
  {
    id: 'case-study',
    part: 'PARTE 2 · PROBLEMAS QUE RESOLVO',
    title: 'PROVA DE EXECUÇÃO',
    kicker: 'projeto real · rag com ia',
    content: <CaseStudySlide />,
  },
  {
    id: 'cloud',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'PLATAFORMAS CLOUD',
    kicker: 'aws · oci · azure · huawei · gcp',
    content: <CloudPlatformsSlide />,
  },
  {
    id: 'devops',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'STACK DE OPERAÇÃO',
    kicker: 'containers · iac · ci/cd · observabilidade',
    content: <DevOpsStackSlide />,
  },
  {
    id: 'ai',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'DIFERENCIAL IA',
    kicker: 'langchain · langgraph · n8n · nvidia nim',
    content: <AIDifferentiatorSlide />,
  },
  {
    id: 'certs',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'CREDENCIAIS',
    kicker: 'certificações emitidas · em andamento',
    content: <CertificationsSlide />,
  },
  {
    id: 'trajectory',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'TRAJETÓRIA',
    kicker: '2013–2026 · evolução técnica contínua',
    content: <TrajectorySlide />,
  },
  {
    id: 'social',
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'PROVA SOCIAL',
    kicker: 'medium · github · produção pública',
    content: <SocialProofSlide />,
  },
  {
    id: 'contact',
    part: 'PARTE 4 · CONTATO',
    title: 'PRÓXIMOS PASSOS',
    kicker: 'linkedin · github · localização',
    content: <ContactSlide />,
  },
];

export function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg bg-grid">
      <Deck slides={slides} />
    </div>
  );
}
