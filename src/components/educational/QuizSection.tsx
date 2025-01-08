import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Award, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

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
    {
      question: "Qual é a melhor forma de descartar baterias usadas?",
      options: [
        "No lixo comum",
        "Em pontos de coleta específicos",
        "Enterrar no solo",
        "Queimar",
      ],
      correct: "Em pontos de coleta específicos",
    },
    {
      question: "Por que é importante reciclar eletrônicos?",
      options: [
        "Apenas para economizar dinheiro",
        "Para reduzir a poluição e recuperar materiais valiosos",
        "Porque é obrigatório por lei",
        "Não é importante reciclar eletrônicos",
      ],
      correct: "Para reduzir a poluição e recuperar materiais valiosos",
    },
    {
      question: "O que deve ser feito antes de descartar um smartphone?",
      options: [
        "Nada, pode descartar direto",
        "Apenas remover o chip",
        "Fazer backup e resetar para configurações de fábrica",
        "Quebrar a tela para inutilizar",
      ],
      correct: "Fazer backup e resetar para configurações de fábrica",
    }
  ];

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const score = (correctAnswers / questions.length) * 100;
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="h-6 w-6 text-primary" />
            Resultado Final
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="py-8">
            <div className="text-5xl font-bold text-primary mb-2">{score}%</div>
            <p className="text-gray-600">
              Você acertou {correctAnswers} de {questions.length} questões
            </p>
          </div>
          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswer("");
              setShowResult(false);
              setCorrectAnswers(0);
            }}
            className="w-full max-w-xs"
          >
            Tentar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">
            Questão {currentQuestion + 1} de {questions.length}
          </CardTitle>
          <Award className="h-5 w-5 text-primary" />
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-medium">{questions[currentQuestion].question}</p>
        <RadioGroup
          value={selectedAnswer}
          onValueChange={setSelectedAnswer}
          className="space-y-4"
        >
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
            >
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <Button
          onClick={handleAnswer}
          className="w-full"
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1 ? "Finalizar Quiz" : "Próxima Questão"}
        </Button>
      </CardContent>
    </Card>
  );
};