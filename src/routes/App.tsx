import { Deck } from '@/components/Deck';
import { LanguageProvider } from '@/context/LanguageContext';
import type { Lang } from '@/context/LanguageContext';
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

function buildSlides(lang: Lang): SlideData[] {
  const labels = lang === 'en' ? {
    p1: 'PART 1 · IMPACT',
    p2: 'PART 2 · PROBLEMS I SOLVE',
    p3: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    p4: 'PART 4 · CONTACT',
    hero: 'HERO',
    executive: 'EXECUTIVE SUMMARY',
    problems: 'WHERE I COME IN',
    caseStudy: 'PROOF OF EXECUTION',
    cloud: 'CLOUD PLATFORMS',
    devops: 'OPERATIONS STACK',
    ai: 'AI DIFFERENTIATOR',
    certs: 'CREDENTIALS',
    trajectory: 'TRAJECTORY',
    social: 'SOCIAL PROOF',
    contact: 'NEXT STEPS',
    k1: 'cloud engineer · mission-critical infrastructure',
    k2: 'who i am · what i deliver',
    k3: 'real pain points · applied solutions',
    k4: 'real project · rag with ai',
    k5: 'aws · oci · azure · huawei · gcp',
    k6: 'containers · iac · ci/cd · observability',
    k7: 'langchain · langgraph · n8n · nvidia nim',
    k8: 'certifications · academic background',
    k9: '2013–2026 · continuous technical evolution',
    k10: 'medium · github · public production',
    k11: 'linkedin · github · location',
  } : {
    p1: 'PARTE 1 · IMPACTO',
    p2: 'PARTE 2 · PROBLEMAS QUE RESOLVO',
    p3: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    p4: 'PARTE 4 · CONTATO',
    hero: 'HERO',
    executive: 'RESUMO EXECUTIVO',
    problems: 'ONDE EU ENTRO EM AÇÃO',
    caseStudy: 'PROVA DE EXECUÇÃO',
    cloud: 'PLATAFORMAS CLOUD',
    devops: 'STACK DE OPERAÇÃO',
    ai: 'DIFERENCIAL IA',
    certs: 'CREDENCIAIS',
    trajectory: 'TRAJETÓRIA',
    social: 'PROVA SOCIAL',
    contact: 'PRÓXIMOS PASSOS',
    k1: 'cloud engineer · infraestrutura de missão crítica',
    k2: 'quem sou · o que entrego',
    k3: 'dores reais · soluções aplicadas',
    k4: 'projeto real · rag com ia',
    k5: 'aws · oci · azure · huawei · gcp',
    k6: 'containers · iac · ci/cd · observabilidade',
    k7: 'langchain · langgraph · n8n · nvidia nim',
    k8: 'certificações emitidas · em andamento',
    k9: '2013–2026 · evolução técnica contínua',
    k10: 'medium · github · produção pública',
    k11: 'linkedin · github · localização',
  };

  return [
    { id: 'hero', part: labels.p1, title: labels.hero, kicker: labels.k1, content: <HeroSlide /> },
    { id: 'executive', part: labels.p1, title: labels.executive, kicker: labels.k2, content: <ExecutiveSummarySlide /> },
    { id: 'problems', part: labels.p2, title: labels.problems, kicker: labels.k3, content: <ProblemsSolutionsSlide /> },
    { id: 'case-study', part: labels.p2, title: labels.caseStudy, kicker: labels.k4, content: <CaseStudySlide /> },
    { id: 'cloud', part: labels.p3, title: labels.cloud, kicker: labels.k5, content: <CloudPlatformsSlide /> },
    { id: 'devops', part: labels.p3, title: labels.devops, kicker: labels.k6, content: <DevOpsStackSlide /> },
    { id: 'ai', part: labels.p3, title: labels.ai, kicker: labels.k7, content: <AIDifferentiatorSlide /> },
    { id: 'certs', part: labels.p3, title: labels.certs, kicker: labels.k8, content: <CertificationsSlide /> },
    { id: 'trajectory', part: labels.p3, title: labels.trajectory, kicker: labels.k9, content: <TrajectorySlide /> },
    { id: 'social', part: labels.p3, title: labels.social, kicker: labels.k10, content: <SocialProofSlide /> },
    { id: 'contact', part: labels.p4, title: labels.contact, kicker: labels.k11, content: <ContactSlide /> },
  ];
}

/**
 * Determines language from URL path:
 *   /en or /en/ → 'en'
 *   anything else → 'pt-BR'
 */
function detectLanguage(): Lang {
  const path = window.location.pathname;
  return path.startsWith('/en') ? 'en' : 'pt-BR';
}

export function App() {
  const lang = detectLanguage();
  const slides = buildSlides(lang);

  return (
    <LanguageProvider lang={lang}>
      <div className="relative w-screen h-screen overflow-hidden bg-bg bg-grid">
        <Deck slides={slides} />
      </div>
    </LanguageProvider>
  );
}
