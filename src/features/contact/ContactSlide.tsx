import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { CtaRow } from '@/components/CtaRow';
import { contactInfo } from '@/data/portfolio';

export function ContactSlide() {
  return (
    <>
      <StatusBar part="PARTE 4 · CONTATO" title="PRÓXIMOS PASSOS" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">linkedin · github · localização</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          Infraestrutura que não pode falhar<br />
          <span className="text-teal">precisa de alguém que já operou sob pressão.</span>
        </h2>

        <p className="text-body text-text-muted mt-4 max-w-[60ch] animate-fade-in-up">
          Disponível para posições de Cloud Engineer, SRE ou DevOps — remoto ou São Paulo.
          Se você tem um ambiente que precisa de mais confiabilidade, automação e escala,
          vamos conversar.
        </p>

        <CtaRow items={contactInfo} className="animate-fade-in-up" />

        <div className="mt-7 bg-panel border border-teal border-l-2 border-l-teal p-5 animate-fade-in-up">
          <div className="font-mono text-panel-title text-teal mb-2">DISPONIBILIDADE</div>
          <p className="text-panel-body text-text-muted">
            Aberto a oportunidades CLT e PJ. Prefência por posições que envolvam
            infraestrutura multicloud, automação de plataforma e/ou IA aplicada a operações.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            {['Cloud Engineer', 'SRE', 'DevOps Engineer', 'Platform Engineer'].map((role) => (
              <span
                key={role}
                className="font-mono text-kicker text-teal border border-teal-dim px-3 py-1 bg-panel-2"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
