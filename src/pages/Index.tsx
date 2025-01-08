import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { Partners } from "@/components/Partners";
import { AboutUs } from "@/components/AboutUs";
import { EducationalPreview } from "@/components/EducationalPreview";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <EducationalPreview />
        <Partners />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;