import { Hero } from "@/components/Hero";
import { ImpactCounter } from "@/components/ImpactCounter";
import { Mission } from "@/components/Mission";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <ImpactCounter />
        <Mission />
      </main>
    </div>
  );
};

export default Index;