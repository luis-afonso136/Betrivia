import { useState } from "react";
import { Coins, Trophy, Shield } from "lucide-react"; // Ícones para apostas

const perguntas = [
  {
    texto: "Qual é o maior país do mundo em termos de área?",
    respostas: ["Estados Unidos", "Rússia", "China"],
  },
  {
    texto: "Quem escreveu o livro 'Harry Potter'?",
    respostas: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin"],
  },
  {
    texto: "Qual é o nome do maior oceano do planeta?",
    respostas: ["Atlântico", "Índico", "Pacífico"],
  },
  {
    texto: "Qual é a capital da França?",
    respostas: ["Madri", "Paris", "Roma"],
  },
  {
    texto: "Quem pintou a Mona Lisa?",
    respostas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
  },
  {
    texto: "Qual é o continente mais populoso?",
    respostas: ["África", "Europa", "Ásia"],
  },
];

const Jogar = () => {
  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [perguntaAtual, setPerguntaAtual] = useState(0); // Pergunta atual no quiz

  const handleBetSelection = (amount: number) => {
    setSelectedBet(amount);
    setStartQuiz(true);
  };

  const handleAvancar = () => {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    }
  };

  const handleVoltar = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(perguntaAtual - 1);
    }
  };

  return (
    <div className="bg-blue-950 text-white h-screen pt-10">
      {/* Se o quiz não começou, exibe os cards de aposta */}
      {!startQuiz ? (
        <div className="relative w-ful py-16 px-6">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
            Valores das Apostas
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 - Aposta Baixa */}
            <div className="bg-blue-900 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-yellow-500 mb-4">
                  <Coins size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-2">
                  Aposta Baixa
                </h3>
                <p className="text-center text-gray-300 mb-6">
                  Ideal para quem está começando e quer jogar com segurança.
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-center text-3xl font-bold text-yellow-500 mb-4">
                  €5
                </p>
                <button
                  className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => handleBetSelection(5)}
                >
                  Apostar
                </button>
              </div>
            </div>

            {/* Card 2 - Aposta Média */}
            <div className="bg-blue-900 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-yellow-500 mb-4">
                  <Trophy size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-2">
                  Aposta Média
                </h3>
                <p className="text-center text-gray-300 mb-4">
                  Para quem quer arriscar um pouco mais e aumentar os prêmios.
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-center text-3xl font-bold text-yellow-500 mb-4">
                  €20
                </p>
                <button
                  className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => handleBetSelection(20)}
                >
                  Apostar
                </button>
              </div>
            </div>

            {/* Card 3 - Aposta Alta */}
            <div className="bg-blue-900 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-yellow-500 mb-4">
                  <Shield size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-2">
                  Aposta Alta
                </h3>
                <p className="text-center text-gray-300 mb-4">
                  Para quem quer arriscar e ganhar prêmios incríveis!
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-center text-3xl font-bold text-yellow-500 mb-4">
                  €50
                </p>
                <button
                  className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => handleBetSelection(50)}
                >
                  Apostar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Quando o usuário escolhe a aposta, exibe o quiz
        <div className="flex justify-center items-center h-screen bg-blue-950 text-white">
          <div className="w-full max-w-lg p-6 bg-blue-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Jogo de Perguntas - Aposta: €{selectedBet}
            </h2>

            {/* Pergunta Atual */}
            <div className="text-xl text-center mb-6">
              <p>{perguntas[perguntaAtual].texto}</p>
            </div>

            {/* Respostas */}
            <div className="space-y-4">
              {perguntas[perguntaAtual].respostas.map((resposta, index) => (
                <button
                  key={index}
                  className="w-full py-3 px-6 text-lg rounded-full bg-yellow-500 hover:bg-yellow-400 transition-all duration-300"
                >
                  {resposta}
                </button>
              ))}
            </div>

            {/* Botões de Avançar e Voltar */}
            <div className="flex justify-between mt-6">
              <button
                className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center"
                onClick={handleVoltar}
              >
                &lt;
              </button>
              <button
                className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center"
                onClick={handleAvancar}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jogar;
