import { Leaf, Target, Lightbulb, Scale } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quem <span className="text-primary">Somos?</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Facilitar a gestão responsável de resíduos eletrônicos, promovendo um futuro mais sustentável e conscientizando a sociedade sobre a importância da reciclagem.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a principal referência em reciclagem de eletrônicos, reduzindo o impacto ambiental e criando oportunidades para um mundo mais limpo.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Sustentabilidade</h4>
              <p className="text-sm text-gray-600">Compromisso com o meio ambiente</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Inovação</h4>
              <p className="text-sm text-gray-600">Tecnologia a favor da planeta</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Transparência</h4>
              <p className="text-sm text-gray-600">Clareza em nossas ações</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Responsabilidade</h4>
              <p className="text-sm text-gray-600">Compromisso social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};