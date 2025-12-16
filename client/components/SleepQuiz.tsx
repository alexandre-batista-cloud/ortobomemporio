import { useState } from "react";
import { MessageCircle } from "lucide-react";

const questions = [
  {
    id: "sleep-position",
    question: "Como você dorme?",
    options: [
      { text: "De lado", value: "side" },
      { text: "De barriga", value: "stomach" },
      { text: "De costas", value: "back" },
      { text: "Viro muito", value: "mixed" },
    ],
  },
  {
    id: "pain",
    question: "Sente alguma dor ao acordar?",
    options: [
      { text: "Coluna", value: "spine" },
      { text: "Ombro", value: "shoulder" },
      { text: "Quadril", value: "hip" },
      { text: "Não", value: "none" },
    ],
  },
  {
    id: "firmness",
    question: "Prefere colchão:",
    options: [
      { text: "Macio", value: "soft" },
      { text: "Equilibrado", value: "medium" },
      { text: "Firme", value: "firm" },
    ],
  },
  {
    id: "thermal",
    question: "Sensação térmica:",
    options: [
      { text: "Sinto calor", value: "hot" },
      { text: "Normal", value: "normal" },
      { text: "Sinto frio", value: "cold" },
    ],
  },
];

const recommendations: Record<string, { title: string; benefit: string; model: string }> = {
  side: { title: "Alívio de Pressão", benefit: "Perfeito para dormir de lado", model: "Colchão Ouro Spring" },
  stomach: { title: "Suporte Firme", benefit: "Estabilidade para a coluna", model: "Colchão Pro Saúde" },
  back: { title: "Equilíbrio Perfeito", benefit: "Alinhamento correto da coluna", model: "Colchão Only" },
  mixed: { title: "Versatilidade", benefit: "Funciona em todas as posições", model: "Colchão Liberty" },
  spine: { title: "Suporte Especializado", benefit: "Reduz dor na coluna", model: "Colchão Pro Saúde Visco" },
  soft: { title: "Máximo Conforto", benefit: "Sensação acolhedora", model: "Colchão Ouro Spring" },
  firm: { title: "Máxima Estabilidade", benefit: "Suporte correto", model: "Colchão Pro Saúde" },
};

export function SleepQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const mainAnswer = answers["sleep-position"] || answers["pain"] || answers["firmness"] || "side";
    return recommendations[mainAnswer] || recommendations["side"];
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-2">
          Descubra Seu Colchão Ideal
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Apenas {currentQuestion + 1} de {questions.length} perguntas
        </p>

        {!showResult ? (
          <div className="bg-brand-beige rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 text-left bg-white border-2 border-brand-gray-light rounded-lg hover:border-brand-blue hover:bg-blue-50 transition-all font-semibold text-brand-navy"
                >
                  {option.text}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-2">
              <div
                className="bg-brand-blue h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-brand-blue to-brand-navy rounded-lg p-6 md:p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">✓ Seu Colchão Ideal:</h3>
            <p className="text-lg font-semibold mb-2">{recommendation.title}</p>
            <p className="text-brand-gray-light mb-6">{recommendation.benefit}</p>
            <p className="bg-white/20 rounded p-3 mb-6 font-bold">
              Modelo indicado: {recommendation.model}
            </p>

            <div className="flex flex-col md:flex-row gap-3">
              <a
                href="https://wa.me/556233260765?text=Recebi%20recomenda%C3%A7%C3%A3o%20de%20colch%C3%A3o%20ideal!%20%F0%9F%91%87"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar recomendação
              </a>
              <button
                onClick={resetQuiz}
                className="flex-1 bg-white text-brand-blue font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Refazer teste
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
