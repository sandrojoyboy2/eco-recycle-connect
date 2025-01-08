import { BookOpen, Video, Award, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const EducationalPreview = () => {
  const sections = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Blog",
      description: "Artigos sobre reciclagem e sustentabilidade"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Vídeos",
      description: "Tutoriais e conteúdo educativo em vídeo"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quiz",
      description: "Teste seus conhecimentos sobre reciclagem"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Eventos",
      description: "Workshops e palestras sobre sustentabilidade"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Sessão <span className="text-primary">Educativa</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver toda a sessão educativa
          </Button>
        </div>
      </div>
    </section>
  );
};