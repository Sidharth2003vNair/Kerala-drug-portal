
import React from "react";

interface InfoSectionProps {
  heading: string;
  content: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bgClass?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  heading,
  content,
  image,
  imageAlt,
  reverse,
  bgClass = "bg-white",
}) => (
  <section className={`${bgClass} py-10 md:py-16`}>
    <div className={`container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-0 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1 flex flex-col items-start">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{heading}</h3>
        <div className="text-gray-700 text-base md:text-lg">{content}</div>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[320px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default InfoSection;
