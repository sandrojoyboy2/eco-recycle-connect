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
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

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
                  <Tooltip content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border rounded shadow">
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-sm text-gray-600">
                            {`${payload[0].value}% reciclável`}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};