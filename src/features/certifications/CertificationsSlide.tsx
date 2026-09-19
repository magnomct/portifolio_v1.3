import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { cn } from '@/lib/utils';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const statusConfig = {
  issued: { border: 'border-l-teal' },
  'in-progress': { border: 'border-l-amber' },
  preparing: { border: 'border-l-line' },
} as const;

const statusLabels = {
  'pt-BR': { issued: 'EMITIDA', 'in-progress': 'EM ANDAMENTO', preparing: 'PREPARANDO' },
  'en': { issued: 'ISSUED', 'in-progress': 'IN PROGRESS', preparing: 'PREPARING' },
};

const statusColors = {
  issued: 'text-teal',
  'in-progress': 'text-amber',
  preparing: 'text-text-dim',
};

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'CREDENCIAIS',
    kicker: 'certificações · formação acadêmica',
    heading: 'Credenciais que validam',
    headingAccent: 'o que está em produção.',
    certsTitle: 'CERTIFICAÇÕES TÉCNICAS',
    academicTitle: 'FORMAÇÃO ACADÊMICA',
    trainingNote: '620h+ em trilhas técnicas aplicadas (AWS, OCI, IA, DevOps, Kubernetes)',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'CREDENTIALS',
    kicker: 'certifications · academic background',
    heading: 'Credentials that validate',
    headingAccent: 'what\'s running in production.',
    certsTitle: 'TECHNICAL CERTIFICATIONS',
    academicTitle: 'ACADEMIC BACKGROUND',
    trainingNote: '620h+ in applied technical tracks (AWS, OCI, AI, DevOps, Kubernetes)',
  },
};

export function CertificationsSlide() {
  const text = useTranslations(t);
  const labels = useTranslations(statusLabels);
  const { certifications, academicBackground } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="animate-fade-in-up">
            <div className="font-mono text-panel-title text-text-dim mb-4">{text.certsTitle}</div>
            <div className="space-y-3 animate-stagger">
              {certifications.map((cert) => {
                const config = statusConfig[cert.status];
                return (
                  <div
                    key={cert.title}
                    className={cn('bg-panel border border-line border-l-2 p-4 animate-fade-in-up', config.border)}
                  >
                    <div className={cn('font-mono text-[10px] mb-1.5', statusColors[cert.status])}>
                      {labels[cert.status]}
                    </div>
                    <div className="text-panel-body font-semibold text-text">{cert.title}</div>
                    {cert.issuer && <div className="font-mono text-[11px] text-teal mt-1">{cert.issuer}</div>}
                    <div className="font-mono text-[11px] text-text-dim mt-1">{cert.details}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="font-mono text-panel-title text-text-dim mb-4">{text.academicTitle}</div>
            <div className="space-y-3 animate-stagger">
              {academicBackground.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-panel border border-line border-l-2 border-l-teal-dim p-4 animate-fade-in-up"
                >
                  <div className="font-mono text-[10px] text-text-dim mb-1.5">{edu.year}</div>
                  <div className="text-panel-body font-semibold text-text">{edu.degree}</div>
                  <div className="font-mono text-[11px] text-teal mt-1">{edu.institution}</div>
                </div>
              ))}
              <div className="bg-panel-2 border border-line-soft p-4 mt-2 animate-fade-in-up">
                <p className="font-mono text-kicker text-text-dim">
                  <span className="text-amber">›</span> {text.trainingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
