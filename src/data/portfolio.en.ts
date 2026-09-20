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
  { num: '12+', label: 'years of experience in technology' },
  { num: '5', label: 'cloud providers with hands-on experience' },
  { num: '620h+', label: 'of applied technical training' },
  { num: '2026', label: 'Oracle OCI AI & OCI Foundations Associate' },
];

export const problemSolutions: ProblemSolution[] = [
  {
    title: 'MULTICLOUD INFRASTRUCTURE WITHOUT STANDARDS',
    arrow: '→ solved with',
    solution:
      'Infrastructure as Code (Terraform + Ansible), creating consistency across AWS, OCI, and Azure while eliminating configuration drift.',
    accentColor: 'amber',
  },
  {
    title: 'MANUAL AND RISKY DEPLOYMENTS',
    arrow: '→ solved with',
    solution:
      'CI/CD pipelines (GitHub Actions, GitLab CI, Argo CD) with GitOps — traceable changes with safe rollback.',
    accentColor: 'amber',
  },
  {
    title: 'LACK OF PRODUCTION VISIBILITY',
    arrow: '→ solved with',
    solution:
      'Observability with Prometheus, Grafana, Zabbix, and ELK Stack — anomaly detection before user impact.',
    accentColor: 'amber',
  },
  {
    title: 'OPERATIONS THAT DON\'T SCALE WITH THE TEAM',
    arrow: '→ solved with',
    solution:
      'Intelligent automation with AI agents (LangChain/LangGraph) removing repetitive tasks from the engineering critical path.',
    accentColor: 'amber',
  },
];

export const projectSteps: ProjectStep[] = [
  {
    num: '01',
    title: 'Ingestion',
    description: 'Reading and processing internal PDFs/CSVs (SRE manual / incident response)',
  },
  {
    num: '02',
    title: 'Indexing',
    description: 'FAISS as vector store, orchestrated via LangChain',
  },
  {
    num: '03',
    title: 'Q&A Agent',
    description: 'NVIDIA Nemotron LLM (via NVIDIA NIM) answering questions in natural language',
  },
  {
    num: '04',
    title: 'Deploy',
    description: 'Streamlit web interface, deployed on OCI Compute instance',
  },
];

export const cloudPlatforms: CloudPlatform[] = [
  {
    title: 'AWS',
    description:
      'EC2, IAM, S3, RDS, Lambda, CloudWatch. 4 training tracks — from introductory bootcamp (2022) to full compute, networking, security, and IaC track (2026).',
  },
  {
    title: 'Oracle Cloud (OCI)',
    description:
      'Official certifications ',
    highlight: 'OCI AI Foundations Associate & OCI Foundations Associate 2026',
    descriptionAfter: ' (Oracle University, 2026) — application deployment and IaC on Oracle Cloud.',
  },
  {
    title: 'Azure',
    description:
      'Azure Assemble Challenge (TFTEC Cloud) — compute, networking, storage, and identity in a real Azure environment.',
  },
  {
    title: 'Huawei Cloud',
    description:
      'HCIA Cloud Services certification (MCTI/Softex) — hands-on experience with the second largest global cloud, reinforcing multicloud fluency.',
  },
  {
    title: 'GCP',
    description:
      'AI development immersion with Google Gemini (Alura + Google) — integrating generative AI into infrastructure and development workflows.',
  },
  {
    title: 'Multicloud Fluency',
    description:
      'Dedicated MultiCloud DevOps & AI workshops — comparing architectures and choosing providers by use case, not by habit.',
  },
];

export const devopsStack: DevOpsCategory[] = [
  {
    title: 'Containers & Orchestration',
    tags: ['Kubernetes', 'Docker', 'Karpenter', 'EKS'],
  },
  {
    title: 'Infrastructure as Code',
    tags: ['Terraform', 'Ansible'],
  },
  {
    title: 'CI/CD & GitOps',
    tags: ['GitHub Actions', 'GitLab CI', 'Argo CD', 'Kustomize'],
  },
  {
    title: 'Observability',
    tags: ['Prometheus', 'Grafana', 'Zabbix', 'ELK Stack'],
  },
];

export const aiDifferentiatorStats: AIDifferentiatorStat[] = [
  { num: '269h', label: 'ONE AI FOR TECH tracks (Alura + Oracle), 2026' },
  { num: 'RAG', label: 'Data Intelligence & Advanced RAG — LangChain' },
  { num: 'Agents', label: 'Agent Engineering & AI Automation — LangGraph, n8n' },
  { num: 'Claude Code', label: 'DevOps on Cloud with AI Workshop — AI agents, EKS, ArgoCD' },
];

export const certifications: Certification[] = [
  {
    status: 'issued',
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    issuer: 'Oracle University',
    details: 'issued Sep 7, 2026 · valid until Sep/2028',
  },
  {
    status: 'issued',
    title: 'Oracle Cloud Infrastructure Foundations Associate 2026',
    issuer: 'Oracle University',
    details: 'issued 2026 · valid until 2028',
  },
  {
    status: 'preparing',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: '',
    details: 'Consolidating AWS track: EC2, IAM, S3, RDS, Lambda, full architecture',
  },
];

export const academicBackground: AcademicBackground[] = [
  {
    degree: 'Bachelor\'s in Information Systems',
    institution: 'Faculdade Impacta de Tecnologia',
    year: 2013,
  },
  {
    degree: 'Postgraduate in Cybersecurity & Digital Business Protection',
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
      'Articles documenting real AWS projects: lift-and-shift migrations, IAM automation, Elastic Beanstalk deployments, and infrastructure with Terraform + Ansible.',
  },
  {
    platform: 'GITHUB · magnomct',
    handle: '',
    description:
      'Projects in Java, Python, Kubernetes, Terraform, and Ansible — the same stack used daily as an SRE & DevOps engineer.',
  },
];

export const contactInfo: ContactInfo[] = [
  { label: 'LINKEDIN', value: 'linkedin.com/in/carlosmagnogcs' },
  { label: 'GITHUB', value: 'github.com/magnomct' },
  { label: 'MEDIUM', value: '@carlosmagnocloud' },
  { label: 'LOCATION', value: 'São Paulo, Brazil' },
];

export const slideParts = [
  { id: 'hero', part: 'PART 1 · IMPACT', title: 'HERO' },
  { id: 'executive', part: 'PART 1 · IMPACT', title: 'EXECUTIVE SUMMARY' },
  { id: 'problems', part: 'PART 2 · PROBLEMS I SOLVE', title: 'WHERE I COME IN' },
  { id: 'case-study', part: 'PART 2 · PROBLEMS I SOLVE', title: 'PROOF OF EXECUTION' },
  { id: 'cloud', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'CLOUD PLATFORMS' },
  { id: 'devops', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'OPERATIONS STACK' },
  { id: 'ai', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'AI DIFFERENTIATOR' },
  { id: 'certs', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'CREDENTIALS' },
  { id: 'trajectory', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'TRAJECTORY' },
  { id: 'social', part: 'PART 3 · EXPERTISE & CERTIFICATIONS', title: 'SOCIAL PROOF' },
  { id: 'contact', part: 'PART 4 · CONTACT', title: 'NEXT STEPS' },
];
