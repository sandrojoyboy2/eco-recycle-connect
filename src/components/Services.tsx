import { Calendar, MapPin, ShoppingCart, FileText, Headphones, Gift } from "lucide-react";
import { Button } from "./ui/button";

export const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Agendamento de Coletas",
      description: "Agende a coleta dos seus resíduos eletrônicos de forma rápida e segura.",
      action: "Agendar Coleta",
      href: "#agendar"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Pontos de Entrega",
      description: "Encontre o ponto de coleta mais próximo de você para entregar seus eletrônicos.",
      action: "Localizar Pontos",
      href: "#pontos"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Loja de Componentes",
      description: "Compre componentes reciclados de qualidade por preços acessíveis.",
      action: "Visitar Loja",
      href: "#loja",
      badge: "Brevemente"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Relatórios de Impacto",
      description: "Acompanhe o impacto ambiental positivo gerado pelas suas ações.",
      action: "Ver Relatórios",
      href: "#relatorios"
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Consultoria Empresarial",
      description: "Soluções personalizadas para empresas gerenciarem seus resíduos eletrônicos.",
      action: "Solicitar Consultoria",
      href: "#consultoria"
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Programa de Doações",
      description: "Doe seus dispositivos em bom estado para projetos sociais parceiros.",
      action: "Fazer Doação",
      href: "#doacoes"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <a href={service.href}>
                    {service.action}
                    {service.badge && (
                      <span className="ml-2 px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};