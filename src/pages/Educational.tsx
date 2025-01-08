import { BookOpen, Video, ChartBar, Award, Globe, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogSection } from "@/components/educational/BlogSection";
import { VideoSection } from "@/components/educational/VideoSection";
import { StatisticsSection } from "@/components/educational/StatisticsSection";
import { QuizSection } from "@/components/educational/QuizSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Educational = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-green-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Sessão Educativa
          </h1>
          
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="statistics" className="flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              Estatísticas
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <BlogSection />
          </TabsContent>

          <TabsContent value="videos">
            <VideoSection />
          </TabsContent>

          <TabsContent value="statistics">
            <StatisticsSection />
          </TabsContent>

          <TabsContent value="quiz">
            <QuizSection />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Boas Práticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Manutenção preventiva de dispositivos</li>
                <li>• Guia de descarte seguro</li>
                <li>• Alternativas ao descarte</li>
              </ul>
              <Button variant="outline" className="w-full mt-4">
                Saiba mais
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Materiais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Guia Completo de Reciclagem</li>
                <li>• Checklist de Descarte</li>
                <li>• E-books Educativos</li>
              </ul>
              <Button variant="outline" className="w-full mt-4">
                Download
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Workshops e Palestras</li>
                <li>• Campanhas de Coleta</li>
                <li>• Encontros Comunitários</li>
              </ul>
              <Button variant="outline" className="w-full mt-4">
                Ver Agenda
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Educational;
