import { useEffect, useState } from "react";
import { Globe, Heart, Recycle } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const Counter = ({ end, label, icon, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg animate-counter">
      <div className="mb-4 p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export const ImpactCounter = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nosso Impacto Ambiental
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter
            end={5000}
            label="Dispositivos Reciclados"
            icon={<Recycle className="h-6 w-6 text-primary" />}
          />
          <Counter
            end={2500}
            label="Pessoas Atendidas"
            icon={<Heart className="h-6 w-6 text-primary" />}
          />
          <Counter
            end={10}
            label="Toneladas de CO₂ Evitadas"
            icon={<Globe className="h-6 w-6 text-primary" />}
            suffix="t"
          />
        </div>
      </div>
    </div>
  );
};