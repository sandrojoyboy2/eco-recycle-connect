import { Users, HandshakeIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos <span className="text-primary">Parceiros</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
              <HandshakeIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">TechRecycle Solutions</h3>
              <p className="text-gray-600 mb-6">
                Orgulhosamente trabalhando ao lado da TechRecycle Solutions para promover práticas sustentáveis de gestão de resíduos eletrônicos.
              </p>
              <Button variant="outline">Saiba Mais Sobre a Parceria</Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Junte-se a nós!</h3>
              <p className="text-gray-600 mb-6">
                Estamos sempre em busca de novos parceiros que compartilhem nosso compromisso com o meio ambiente.
              </p>
              <Button variant="outline">Torne-se um Parceiro</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};