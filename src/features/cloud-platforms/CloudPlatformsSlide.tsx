import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { usePortfolioData, useTranslations } from '@/hooks/usePortfolioData';

const t = {
  'pt-BR': {
    part: 'PARTE 3 · EXPERTISE & CERTIFICAÇÕES',
    title: 'PLATAFORMAS CLOUD',
    kicker: 'aws · oci · azure · huawei · gcp · multicloud',
    heading: 'Não sou especialista em uma cloud.',
    headingAccent: 'Sou especialista em escolher a certa.',
  },
  'en': {
    part: 'PART 3 · EXPERTISE & CERTIFICATIONS',
    title: 'CLOUD PLATFORMS',
    kicker: 'aws · oci · azure · huawei · gcp · multicloud',
    heading: 'I\'m not a specialist in one cloud.',
    headingAccent: 'I\'m a specialist in choosing the right one.',
  },
};

export function CloudPlatformsSlide() {
  const text = useTranslations(t);
  const { cloudPlatforms } = usePortfolioData();

  return (
    <>
      <StatusBar part={text.part} title={text.title} />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">{text.kicker}</Kicker>

        <h2 className="text-h2 md:text-h2 text-h2-mobile font-display mt-4 animate-fade-in-up">
          {text.heading}<br />
          <span className="text-teal">{text.headingAccent}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-7 animate-stagger">
          {cloudPlatforms.map((platform) => (
            <div
              key={platform.title}
              className="bg-panel border border-line p-5 group hover:border-teal transition-colors duration-300 animate-fade-in-up"
            >
              <div className="font-mono text-panel-title text-teal mb-2.5">{platform.title}</div>
              <p className="text-panel-body text-text-muted group-hover:text-text transition-colors duration-300">
                {platform.description}
                {platform.highlight && (
                  <span className="text-amber font-semibold">{platform.highlight}</span>
                )}
                {platform.descriptionAfter}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
