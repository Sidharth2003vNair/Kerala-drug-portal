
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center">
        <Banner />
        {/* You can add more content/sections here if needed */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
