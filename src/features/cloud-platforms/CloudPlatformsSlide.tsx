import { StatusBar } from '@/components/StatusBar';
import { Kicker } from '@/components/Kicker';
import { cloudPlatforms } from '@/data/portfolio';

export function CloudPlatformsSlide() {
  return (
    <>
      <StatusBar part="PARTE 3 · EXPERTISE & CERTIFICAÇÕES" title="PLATAFORMAS CLOUD" />

      <div className="flex-1 flex flex-col justify-center max-w-[1120px]">
        <Kicker className="animate-fade-in-up">aws · oci · azure · huawei · gcp · multicloud</Kicker>

        <h2 className="text-h2 font-display mt-4 animate-fade-in-up">
          Não sou especialista em uma cloud.<br />
          <span className="text-teal">Sou especialista em escolher a certa.</span>
        </h2>

        <div className="grid grid-cols-3 gap-3 mt-7 animate-stagger">
          {cloudPlatforms.map((platform) => (
            <div
              key={platform.title}
              className="bg-panel border border-line p-5 group hover:border-teal transition-colors duration-300 animate-fade-in-up"
            >
              <div className="font-mono text-panel-title text-teal mb-2.5">
                {platform.title}
              </div>
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
