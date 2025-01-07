import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const videos = [
    {
      title: "Como Identificar Eletrônicos Recicláveis",
      duration: "5:30",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Preparando Dispositivos para Descarte",
      duration: "7:15",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "A Jornada dos Resíduos Eletrônicos",
      duration: "4:45",
      thumbnail: "/placeholder.svg",
    },
  ];

  return (
    <div className="grid gap-6 mt-6">
      {videos.map((video, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-xl">{video.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Play className="h-6 w-6" />
              </Button>
              <span className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};