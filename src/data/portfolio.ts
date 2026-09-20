import type {
  HeroStat,
  ProblemSolution,
  ProjectStep,
  CloudPlatform,
  DevOpsCategory,
  AIDifferentiatorStat,
  Certification,
  AcademicBackground,
  TimelineItem,
  SocialLink,
  ContactInfo,
} from '@/types';

export const heroStats: HeroStat[] = [
  { num: '12+', label: 'anos de experiência em tecnologia' },
  { num: '5', label: 'provedores de nuvem em atuação prática' },
  { num: '620h+', label: 'capacitação técnica aplicada' },
  { num: '2026', label: 'Oracle OCI AI & OCI Foundations Associate' },
];

export const problemSolutions: ProblemSolution[] = [
  {
    title: 'INFRAESTRUTURA MULTICLOUD SEM PADRÃO',
    arrow: '→ resolvido com',
    solution:
      'Infraestrutura como código (Terraform + Ansible), criando consistência entre AWS, OCI e Azure e eliminando drift de configuração.',
    accentColor: 'amber',
  },
  {
    title: 'DEPLOYS MANUAIS E ARRISCADOS',
    arrow: '→ resolvido com',
    solution:
      'Pipelines CI/CD (GitHub Actions, GitLab CI, Argo CD) com GitOps — mudanças rastreáveis, com rollback seguro.',
    accentColor: 'amber',
  },
  {
    title: 'FALTA DE VISIBILIDADE EM PRODUÇÃO',
    arrow: '→ resolvido com',
    solution:
      'Observabilidade com Prometheus, Grafana, Zabbix e ELK Stack — detecção de anomalias antes do impacto ao usuário.',
    accentColor: 'amber',
  },
  {
    title: 'OPERAÇÃO QUE NÃO ESCALA COM O TIME',
    arrow: '→ resolvido com',
    solution:
      'Automação inteligente com agentes de IA (LangChain/LangGraph) tirando tarefas repetitivas do caminho crítico da engenharia.',
    accentColor: 'amber',
  },
];

export const projectSteps: ProjectStep[] = [
  {
    num: '01',
    title: 'Ingestão',
    description: 'Leitura e processamento de PDF/CSV internos (manual de SRE / resposta a incidentes)',
  },
  {
    num: '02',
    title: 'Indexação',
    description: 'FAISS como vector store, orquestração via LangChain',
  },
  {
    num: '03',
    title: 'Agente de Q&A',
    description: 'LLM NVIDIA Nemotron (via NVIDIA NIM) respondendo perguntas em linguagem natural',
  },
  {
    num: '04',
    title: 'Deploy',
    description: 'Interface web em Streamlit, publicada em instância OCI Compute',
  },
];

export const cloudPlatforms: CloudPlatform[] = [
  {
    title: 'AWS',
    description:
      'EC2, IAM, S3, RDS, Lambda, CloudWatch. Trajetória de 4 formações — de bootcamp introdutório (2022) a trilha completa de compute, rede, segurança e IaC (2026).',
  },
  {
    title: 'Oracle Cloud (OCI)',
    description:
      'Certificações oficiais ',
    highlight: 'OCI AI Foundations Associate & OCI Foundations Associate 2026',
    descriptionAfter: ' (Oracle University, 2026) — deploy de aplicações e IaC na nuvem Oracle.',
  },
  {
    title: 'Azure',
    description:
      'Desafio Azure Assemble (TFTEC Cloud) — compute, rede, storage e identidade em ambiente Azure real.',
  },
  {
    title: 'Huawei Cloud',
    description:
      'Certificação HCIA Cloud Services (MCTI/Softex) — visão prática de uma segunda maior nuvem global, reforçando leitura multicloud.',
  },
  {
    title: 'GCP',
    description:
      'Imersão em desenvolvimento com Google Gemini (Alura + Google) — integração de IA generativa a fluxos de infraestrutura e desenvolvimento.',
  },
  {
    title: 'Leitura multicloud',
    description:
      'Workshops dedicados de MultiCloud DevOps & IA — comparação de arquiteturas e escolha de provedor por caso de uso, não por hábito.',
  },
];

export const devopsStack: DevOpsCategory[] = [
  {
    title: 'Containers & orquestração',
    tags: ['Kubernetes', 'Docker', 'Karpenter', 'EKS'],
  },
  {
    title: 'Infraestrutura como código',
    tags: ['Terraform', 'Ansible'],
  },
  {
    title: 'CI/CD & GitOps',
    tags: ['GitHub Actions', 'GitLab CI', 'Argo CD', 'Kustomize'],
  },
  {
    title: 'Observabilidade',
    tags: ['Prometheus', 'Grafana', 'Zabbix', 'ELK Stack'],
  },
];

export const aiDifferentiatorStats: AIDifferentiatorStat[] = [
  { num: '269h', label: 'trilhas ONE AI FOR TECH (Alura + Oracle), 2026' },
  { num: 'RAG', label: 'Inteligência de Dados e RAG Avançado — LangChain' },
  { num: 'Agentes', label: 'Engenharia de Agentes e Automação com IA — LangGraph, n8n' },
  { num: 'Claude Code', label: 'Workshop DevOps na Nuvem com IA — agentes de IA, EKS, ArgoCD' },
];

export const certifications: Certification[] = [
  {
    status: 'issued',
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    issuer: 'Oracle University',
    details: 'emitida 07/set/2026 · válida até set/2028',
  },
  {
    status: 'issued',
    title: 'Oracle Cloud Infrastructure Foundations Associate 2026',
    issuer: 'Oracle University',
    details: 'emitida 19/set/2026 · válida até 2028',
  },
  {
    status: 'preparing',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: '',
    details: 'Consolidando trilha AWS: EC2, IAM, S3, RDS, Lambda, arquitetura completa',
  },
];

export const academicBackground: AcademicBackground[] = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Faculdade Impacta de Tecnologia',
    year: 2013,
  },
  {
    degree: 'Pós-graduação em Cibersegurança e Proteção Digital de Negócios',
    institution: 'FIA',
    year: 2024,
  },
];

export const timelineItems: TimelineItem[] = [
  { count: 1, height: '14%', year: '2013' },
  { count: 1, height: '14%', year: '2019' },
  { count: 4, height: '57%', year: '2022' },
  { count: 4, height: '57%', year: '2023' },
  { count: 4, height: '57%', year: '2024' },
  { count: 3, height: '43%', year: '2025' },
  { count: 7, height: '100%', year: '2026', highlight: true },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'MEDIUM · @carlosmagnocloud',
    handle: '',
    description:
      'Artigos documentando projetos reais em AWS: migrações lift-and-shift, automação de IAM, deploys em Elastic Beanstalk e infraestrutura com Terraform + Ansible.',
  },
  {
    platform: 'GITHUB · magnomct',
    handle: '',
    description:
      'Projetos em Java, Python, Kubernetes, Terraform e Ansible — o mesmo stack aplicado no dia a dia como SRE & DevOps.',
  },
];

export const contactInfo: ContactInfo[] = [
  { label: 'LINKEDIN', value: 'linkedin.com/in/carlosmagnogcs' },
  { label: 'GITHUB', value: 'github.com/magnomct' },
  { label: 'MEDIUM', value: '@carlosmagnocloud' },
  { label: 'LOCALIZAÇÃO', value: 'São Paulo, Brasil' },
];

export const slideParts = [
  { id: 'hero', part: 'PARTE 1 · IMPACTO', title: 'HERO' },
  { id: 'executive', part: 'PARTE 1 · IMPACTO', title: 'RESUMO EXECUTIVO' },
  { id: 'problems', part: 'PARTE 2 · PROBLEMAS QUE RESOLVO', title: 'ONDE EU ENTRO EM AÇÃO' },
  { id: 'case-study', part: 'PARTE 2 · PROBLEMAS QUE RESOLVO', title: 'PROVA DE EXECUÇÃO' },
  { id: 'cloud', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'PLATAFORMAS CLOUD' },
  { id: 'devops', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'STACK DE OPERAÇÃO' },
  { id: 'ai', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'DIFERENCIAL' },
  { id: 'certs', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'CREDENCIAIS' },
  { id: 'trajectory', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'TRAJETÓRIA' },
  { id: 'social', part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES', title: 'PROVA SOCIAL' },
  { id: 'contact', part: 'PARTE 4 · CONTATO', title: 'PRÓXIMOS PASSOS' },
];