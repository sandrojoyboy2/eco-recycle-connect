import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const StatisticsSection = () => {
  const data = [
    { name: "Smartphones", value: 75 },
    { name: "Laptops", value: 85 },
    { name: "Tablets", value: 65 },
    { name: "Monitores", value: 90 },
  ];

  return (
    <div className="grid gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Taxa de Reciclagem por Dispositivo</CardTitle>
          <CardDescription>
            Porcentagem de materiais que podem ser reciclados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                bar: {
                  theme: {
                    light: "#34D399",
                    dark: "#34D399",
                  },
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" fill="var(--color-bar)" />
                  <ChartTooltip>
                    <ChartTooltipContent />
                  </ChartTooltip>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};