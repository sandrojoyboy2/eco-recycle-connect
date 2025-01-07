import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export const BlogSection = () => {
  const articles = [
    {
      title: "A Importância da Reciclagem de Eletrônicos",
      excerpt: "Descubra por que reciclar seus dispositivos eletrônicos é crucial para o meio ambiente...",
      category: "Conscientização",
    },
    {
      title: "Como Separar Resíduos Eletrônicos",
      excerpt: "Guia prático para identificar e separar diferentes tipos de resíduos eletrônicos...",
      category: "Guia Prático",
    },
    {
      title: "Impactos Ambientais do Lixo Eletrônico",
      excerpt: "Entenda os efeitos do descarte incorreto de eletrônicos no meio ambiente...",
      category: "Meio Ambiente",
    },
  ];

  return (
    <div className="grid gap-6 mt-6">
      {articles.map((article, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <span className="inline-block px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
              {article.category}
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{article.excerpt}</p>
            <Button variant="link" className="mt-4 p-0">
              Ler mais
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};