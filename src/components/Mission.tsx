import { CheckCircle } from "lucide-react";

export const Mission = () => {
  const missions = [
    {
      title: "Compromisso Ambiental",
      description: "Reduzimos o impacto ambiental através da reciclagem responsável de eletrônicos.",
    },
    {
      title: "Tecnologia Avançada",
      description: "Utilizamos processos modernos para garantir a máxima recuperação de materiais.",
    },
    {
      title: "Segurança de Dados",
      description: "Garantimos a destruição segura de dados em todos os dispositivos recebidos.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nossa Missão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="p-6 rounded-lg border border-gray-100 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {mission.title}
              </h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};