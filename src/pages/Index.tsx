import { Hero } from "@/components/Hero";
import { ImpactCounter } from "@/components/ImpactCounter";
import { Mission } from "@/components/Mission";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactCounter />
      <Mission />
    </div>
  );
};

export default Index;