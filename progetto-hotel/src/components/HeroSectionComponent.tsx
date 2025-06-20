type TextSection = {
  titleSection: string;
  secondTtitle: string;
  descSection: string;
  imgSection: string;
};

const HeroSectionComponent: React.FC<TextSection> = ({
  titleSection,
  secondTtitle,
  descSection,
  imgSection,
}) => {
  return (
    <div className="flex-1">
      <div
        className="relative flex items-center text-white bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]"
        style={{ backgroundImage: `url('${imgSection}')` }}
      >
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Contenuto */}
        <div className="relative z-10 px-6 sm:px-10 lg:pl-[137px] flex flex-col gap-4">
          <div className="text-2xl sm:text-3xl lg:text-[34px] leading-snug">
            {titleSection}
          </div>
          <div className="text-3xl sm:text-5xl lg:text-[56px] font-medium mb-2">
            {secondTtitle}
          </div>
          <p className="max-w-md mb-6 text-sm sm:text-base">{descSection}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md px-6 py-3 bg-white text-black font-medium">
                Prenota Ora !
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
