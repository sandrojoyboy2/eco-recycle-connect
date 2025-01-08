import { BookOpen, Video, Award, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const EducationalPreview = () => {
  const sections = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Blog Educativo",
      description: "Artigos e guias sobre reciclagem e sustentabilidade",
      color: "from-green-50 to-emerald-100"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Vídeos Interativos",
      description: "Tutoriais e conteúdo educativo em formato visual",
      color: "from-blue-50 to-sky-100"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quiz Sustentável",
      description: "Teste seus conhecimentos sobre reciclagem e ganhe pontos",
      color: "from-purple-50 to-violet-100"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Eventos Verdes",
      description: "Workshops e palestras sobre sustentabilidade",
      color: "from-orange-50 to-amber-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Aprenda sobre <span className="text-primary">Sustentabilidade</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore nosso conteúdo educacional interativo e aprenda mais sobre reciclagem 
            e práticas sustentáveis para um futuro melhor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full rounded-2xl bg-gradient-to-br ${section.color} p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className="flex flex-col h-full space-y-4">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl w-fit">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="text-gray-600 flex-grow">{section.description}</p>
                  <Button 
                    variant="ghost" 
                    className="group w-full justify-between hover:bg-white/50"
                  >
                    Explorar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="/educativo" className="flex items-center gap-3">
              Acessar área educativa
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};