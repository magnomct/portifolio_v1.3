import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { certifications, academicBackground } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const statusConfig = {
  issued: { label: 'EMITIDA', color: 'text-teal', border: 'border-l-teal' },
  'in-progress': { label: 'EM ANDAMENTO', color: 'text-amber', border: 'border-l-amber' },
  preparing: { label: 'PREPARANDO', color: 'text-text-dim', border: 'border-l-line' },
} as const;

export function CertificationsSlide() {
  return (
    <>
      <StatusBar part="PARTE 3 · EXPERTISE & CERTIFICAÇÕES" title="CREDENCIAIS" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">certificações · formação acadêmica</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          Credenciais que validam<br />
          <span className="text-teal">o que está em produção.</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Certifications */}
          <div className="animate-fade-in-up">
            <div className="font-mono text-panel-title text-text-dim mb-4">
              CERTIFICAÇÕES TÉCNICAS
            </div>
            <div className="space-y-3 animate-stagger">
              {certifications.map((cert) => {
                const config = statusConfig[cert.status];
                return (
                  <div
                    key={cert.title}
                    className={cn(
                      'bg-panel border border-line border-l-2 p-4 animate-fade-in-up',
                      config.border
                    )}
                  >
                    <div className={cn('font-mono text-[10px] mb-1.5', config.color)}>
                      {config.label}
                    </div>
                    <div className="text-panel-body font-semibold text-text">
                      {cert.title}
                    </div>
                    {cert.issuer && (
                      <div className="font-mono text-[11px] text-teal mt-1">{cert.issuer}</div>
                    )}
                    <div className="font-mono text-[11px] text-text-dim mt-1">
                      {cert.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic */}
          <div className="animate-fade-in-up">
            <div className="font-mono text-panel-title text-text-dim mb-4">
              FORMAÇÃO ACADÊMICA
            </div>
            <div className="space-y-3 animate-stagger">
              {academicBackground.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-panel border border-line border-l-2 border-l-teal-dim p-4 animate-fade-in-up"
                >
                  <div className="font-mono text-[10px] text-text-dim mb-1.5">
                    {edu.year}
                  </div>
                  <div className="text-panel-body font-semibold text-text">{edu.degree}</div>
                  <div className="font-mono text-[11px] text-teal mt-1">{edu.institution}</div>
                </div>
              ))}

              {/* Additional context */}
              <div className="bg-panel-2 border border-line-soft p-4 mt-2 animate-fade-in-up">
                <p className="font-mono text-kicker text-text-dim">
                  <span className="text-amber">›</span> 620h+ em trilhas técnicas aplicadas (AWS, OCI, IA, DevOps, Kubernetes)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
