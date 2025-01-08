import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Award } from "lucide-react";

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Qual é a melhor prática para preparar eletrônicos antes da reciclagem?",
      options: [
        "Descartar diretamente",
        "Fazer backup e limpar dados pessoais",
        "Remover apenas a bateria",
        "Quebrar para ocupar menos espaço",
      ],
      correct: "Fazer backup e limpar dados pessoais",
    },
    {
      question: "Como identificar se um eletrônico ainda pode ser reutilizado?",
      options: [
        "Pela idade do dispositivo",
        "Pelo preço original",
        "Avaliando funcionalidade e custo de reparo",
        "Pela marca do produto",
      ],
      correct: "Avaliando funcionalidade e custo de reparo",
    },
    {
      question: "Qual a melhor forma de armazenar eletrônicos antes da reciclagem?",
      options: [
        "Em local úmido",
        "Exposto ao sol",
        "Em local seco e protegido",
        "Misturado com outros tipos de lixo",
      ],
      correct: "Em local seco e protegido",
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Card className="mt-6 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Parabéns!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Você completou o quiz sobre boas práticas de reciclagem!
          </p>
          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswer("");
              setShowResult(false);
            }}
          >
            Recomeçar
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Questão {currentQuestion + 1} de {questions.length}</span>
          <span className="text-sm text-primary">Quiz de Boas Práticas</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-lg font-medium">{questions[currentQuestion].question}</p>
        <RadioGroup
          value={selectedAnswer}
          onValueChange={setSelectedAnswer}
          className="space-y-4"
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button
          onClick={handleNext}
          className="w-full mt-8"
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
        </Button>
      </CardContent>
    </Card>
  );
};