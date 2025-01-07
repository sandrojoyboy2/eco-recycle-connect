import { ArrowRight, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Recycle className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-gray-900">
            Reciclagem Inteligente de{" "}
            <span className="text-primary">Eletrônicos</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl">
            Transforme seu lixo eletrônico em um impacto positivo para o planeta.
            Faça parte da revolução da reciclagem responsável.
          </p>
          <Button size="lg" className="group">
            Comece a Reciclar
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};