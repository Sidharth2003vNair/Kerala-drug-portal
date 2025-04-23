
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import InfoSection from "../components/InfoSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Banner */}
        <Banner />

        {/* Call to Action Banner */}
        <BannerSection
          imgUrl="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=900&q=60"
          title={
            <>
              Help Save a Life in Kerala
            </>
          }
          subtitle="If you notice drug use or trafficking, inform the authorities. You can make a difference."
          ctaText="Report Now"
          ctaHref="tel:1800-1800-110"
          colorClass="bg-gradient-to-br from-red-100 via-orange-50 to-white"
        />

        {/* Awareness Section */}
        <InfoSection
          heading="Why 'Say No to Drugs'?"
          content={
            <>
              <ul className="list-disc ml-6 space-y-2">
                <li>Drug abuse destroys families and communities.</li>
                <li>It leads to crime and mental health issues.</li>
                <li>Protect Kerala's youth—spread awareness and support prevention.</li>
              </ul>
            </>
          }
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60"
          imageAlt="Awareness"
        />

        {/* 2-column Section */}
        <InfoSection
          heading="How Can You Help?"
          content={
            <>
              <ul className="list-disc ml-6 space-y-2">
                <li>Educate children and community members.</li>
                <li>Look for early signs of addiction.</li>
                <li>Support those seeking help—break the stigma!</li>
                <li>Know emergency helplines and act promptly.</li>
              </ul>
            </>
          }
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=60"
          imageAlt="Community helping"
          reverse
          bgClass="bg-blue-50"
        />

        {/* Banner - Bright */}
        <BannerSection
          imgUrl="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=900&q=60"
          title="Every Small Step Matters"
          subtitle="Your vigilance and compassion save lives. Take a stand against drugs in Kerala!"
          colorClass="bg-gradient-to-r from-green-100 via-yellow-100 to-white"
        />

        {/* Rehabilitation Section */}
        <InfoSection
          heading="Rehabilitation Centers"
          content={
            <>
              <p>
                Kerala offers government-approved rehabilitation centers to help affected individuals recover, rebuild, and reintegrate. Reach out for support!
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li><strong>Excelsior De-Addiction Centre</strong>: Kochi — <a href="tel:0484-2361449" className="text-blue-600 underline">0484-2361449</a></li>
                <li><strong>CHRYSALIS De-Addiction Centre</strong>: Trivandrum — <a href="tel:0471-2789812" className="text-blue-600 underline">0471-2789812</a></li>
                <li><strong>Asha Bhavan</strong>: Kozhikode — <a href="tel:0495-2384863" className="text-blue-600 underline">0495-2384863</a></li>
              </ul>
            </>
          }
          image="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=60"
          imageAlt="Rehabilitation support"
          bgClass="bg-green-50"
        />

        {/* Success Stories Banner */}
        <BannerSection
          imgUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=60"
          title="Together, We Can Build a Drug-Free Kerala"
          subtitle="Share stories of recovery and hope. Celebrate the successes in our community."
          colorClass="bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100"
        />

        {/* Additional Impact Section */}
        <InfoSection
          heading="Spot the Signs, Be the Change"
          content={
            <>
              <ul className="list-disc ml-6">
                <li>Unusual behavior or secretiveness</li>
                <li>Sudden drop in academic or work performance</li>
                <li>Withdrawal from family/social activities</li>
              </ul>
              <p className="mt-3">
                Early intervention can prevent addiction from destroying lives. Don’t hesitate to offer help!
              </p>
            </>
          }
          image="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=800&q=60"
          imageAlt="Be the change"
          reverse
          bgClass="bg-pink-50"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
