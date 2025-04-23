
import React from "react";

interface BannerSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imgUrl: string;
  ctaText?: string;
  ctaHref?: string;
  colorClass?: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  subtitle,
  imgUrl,
  ctaText,
  ctaHref,
  colorClass = "",
}) => {
  return (
    <section
      className={`relative w-full min-h-[220px] md:min-h-[320px] flex items-center justify-center ${colorClass} shadow-inner overflow-hidden mb-12`}
    >
      <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${imgUrl}')` }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary drop-shadow mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">{subtitle}</p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block px-6 py-2 bg-primary text-white hover:bg-primary/90 font-semibold rounded shadow transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
