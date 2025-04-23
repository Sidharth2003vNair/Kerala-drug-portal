
import { BellRing } from "lucide-react";

const Banner = () => (
  <section className="relative w-full min-h-[250px] md:min-h-[330px] flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-white shadow-inner overflow-hidden mb-8">
    <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center" />
    <div className="relative z-10 flex flex-col items-center text-center py-10 px-5">
      <BellRing className="h-10 w-10 text-red-500 mb-2 animate-bounce" />
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary drop-shadow mb-3">
        Say <span className="text-red-600">NO</span> to Drugs<br />for a Safer Kerala
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
        Join hands for a healthier, brighter future. Stay alert, stay safe, say no to drugs!
      </p>
      <a
        href="tel:1800-1800-110"
        className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded shadow transition focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Report Drug Abuse &rarr;
      </a>
    </div>
  </section>
);

export default Banner;
