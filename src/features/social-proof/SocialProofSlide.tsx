import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'PROVA SOCIAL',
    kicker: 'medium · github · produção pública',
    heading: 'O trabalho está documentado.',
    headingAccent: 'Publicamente.',
    description: 'Não só código — documentação de decisões técnicas, aprendizados de projetos reais e contribuições abertas. Visibilidade é responsabilidade técnica.',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'SOCIAL PROOF',
    kicker: 'medium · github · public production',
    heading: 'The work is documented.',
    headingAccent: 'Publicly.',
    description: 'Not just code — documentation of technical decisions, lessons from real projects, and open contributions. Visibility is technical responsibility.',
  },
};

export function SocialProofSlide() {
  const text = useTranslations(t);
  const { socialLinks } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <p className="text-body text-text-muted mt-3 max-w-[60ch] animate-fade-in-up">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 animate-stagger">
          {socialLinks.map((link) => (
            <div
              key={link.platform}
              className="bg-panel border border-line p-6 group hover:border-teal transition-colors duration-300 animate-fade-in-up"
            >
              <div className="font-mono text-panel-title text-teal mb-3">{link.platform}</div>
              <p className="text-panel-body text-text-muted group-hover:text-text transition-colors duration-300">
                {link.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up">
          <div className="bg-panel-2 border border-line-soft p-4">
            <div className="font-mono text-panel-title text-text-dim mb-1">MEDIUM</div>
            <div className="text-panel-body text-teal">@carlosmagnocloud</div>
          </div>
          <div className="bg-panel-2 border border-line-soft p-4">
            <div className="font-mono text-panel-title text-text-dim mb-1">GITHUB</div>
            <div className="text-panel-body text-teal">github.com/magnomct</div>
          </div>
          <div className="bg-panel-2 border border-line-soft p-4">
            <div className="font-mono text-panel-title text-text-dim mb-1">LINKEDIN</div>
            <div className="text-panel-body text-teal">linkedin.com/in/carlosmagnogcs</div>
          </div>
        </div>
      </div>
    </>
  );
}
