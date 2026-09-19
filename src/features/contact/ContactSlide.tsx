import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { CtaRow } from '@/components/CtaRow';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 4 · CONTATO',
    title: 'PRÓXIMOS PASSOS',
    kicker: 'linkedin · github · localização',
    heading: 'Infraestrutura que não pode falhar',
    headingAccent: 'precisa de alguém que já operou sob pressão.',
    description: 'Disponível para posições de Cloud Engineer, SRE ou DevOps — remoto ou São Paulo. Se você tem um ambiente que precisa de mais confiabilidade, automação e escala, vamos conversar.',
    availabilityTitle: 'DISPONIBILIDADE',
    availabilityText: 'Aberto a oportunidades CLT e PJ. Prefência por posições que envolvam infraestrutura multicloud, automação de plataforma e/ou IA aplicada a operações.',
  },
  'en': {
    part: 'PART 4 · CONTACT',
    title: 'NEXT STEPS',
    kicker: 'linkedin · github · location',
    heading: 'Infrastructure that can\'t afford to fail',
    headingAccent: 'needs someone who has operated under pressure.',
    description: 'Available for Cloud Engineer, SRE, or DevOps positions — remote or São Paulo. If you have an environment that needs more reliability, automation, and scale, let\'s talk.',
    availabilityTitle: 'AVAILABILITY',
    availabilityText: 'Open to full-time and contract opportunities. Preference for roles involving multicloud infrastructure, platform automation, and/or AI applied to operations.',
  },
};

export function ContactSlide() {
  const text = useTranslations(t);
  const { contactInfo } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <p className="text-body text-text-muted mt-4 max-w-[60ch] animate-fade-in-up">
          {text.description}
        </p>

        <CtaRow items={contactInfo} className="animate-fade-in-up" />

        <div className="mt-7 bg-panel border border-teal border-l-2 border-l-teal p-5 animate-fade-in-up">
          <div className="font-mono text-panel-title text-teal mb-2">{text.availabilityTitle}</div>
          <p className="text-panel-body text-text-muted">{text.availabilityText}</p>
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
