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
      question: "Quanto tempo leva para um celular se decompor no ambiente?",
      options: [
        "100 anos",
        "500 anos",
        "1000 anos",
        "Não se decompõe naturalmente",
      ],
      correct: "Não se decompõe naturalmente",
    },
    {
      question: "Quais materiais podem ser reciclados em eletrônicos?",
      options: [
        "Apenas plástico",
        "Apenas metais",
        "Plástico e metais",
        "Plástico, metais e componentes eletrônicos",
      ],
      correct: "Plástico, metais e componentes eletrônicos",
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
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Parabéns!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Você completou o quiz sobre reciclagem de eletrônicos!
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
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>
          Questão {currentQuestion + 1} de {questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{questions[currentQuestion].question}</p>
        <RadioGroup
          value={selectedAnswer}
          onValueChange={setSelectedAnswer}
          className="space-y-4"
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button
          onClick={handleNext}
          className="w-full mt-6"
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
        </Button>
      </CardContent>
    </Card>
  );
};