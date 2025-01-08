import { Hero } from "@/components/Hero";
import { ImpactCounter } from "@/components/ImpactCounter";
import { Mission } from "@/components/Mission";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <ImpactCounter />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default Index;