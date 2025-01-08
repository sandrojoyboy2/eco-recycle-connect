import { Heart, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Eco Connect
            </h3>
            <p className="text-gray-600">
              Juntos, transformando pequenas ações em grandes mudanças para nosso planeta.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Contato</h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (11) 9999-9999
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@ecoconnect.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                São Paulo, SP
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Links Rápidos</h4>
            <div className="space-y-2">
              <p><a href="/servicos" className="text-gray-600 hover:text-primary">Serviços</a></p>
              <p><a href="/educativo" className="text-gray-600 hover:text-primary">Sessão Educativa</a></p>
              <p><a href="/sobre" className="text-gray-600 hover:text-primary">Sobre Nós</a></p>
            </div>
          </div>

          <div className="space-y-4 bg-primary/5 p-6 rounded-lg">
            <h4 className="font-medium text-lg">Newsletter</h4>
            <p className="text-gray-600">
              Receba dicas e novidades sobre reciclagem
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full">
                Assinar Newsletter
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="h-4 w-4 text-red-500" /> para um futuro mais sustentável
          </p>
        </div>
      </div>
    </footer>
  );
};