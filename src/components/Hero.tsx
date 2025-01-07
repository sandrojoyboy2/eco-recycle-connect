import { ArrowRight, Calendar, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Agendamento realizado",
      description: "Em breve entraremos em contato para confirmar sua coleta.",
    });
    setOpen(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Recycle className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-gray-900">
            Recicle Hoje para um{" "}
            <span className="text-primary">Amanhã Sustentável</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl">
            Transforme seu lixo eletrônico em um impacto positivo para o planeta.
            Faça parte da revolução da reciclagem responsável.
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Agende sua Coleta Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Agendar Coleta
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Endereço completo</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Rua, número, bairro, cidade"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Data para coleta</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Agendar Coleta
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};