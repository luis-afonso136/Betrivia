import { Coins, Shield, Star, Trophy, User } from "lucide-react";
import headerImage from "../assets/betrivia.webp";
import { Link } from "react-router-dom";

const PagInicial = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white pb-10 pt-16">
      {/* Imagem de cabeçalho */}
      <div className="w-full">
        <img
          src={headerImage}
          alt="Betrivia Header"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Seção de Título */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-4 mt-10">
          Bem-vindo ao Betrivia
        </h1>
        <p className="text-xl text-white mb-6">
          O jogo de cassino que desafia o seu conhecimento!
        </p>
        <Link to="/jogar">
          <button className="px-8 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Comece a Jogar
          </button>
        </Link>
      </div>

      {/* Seção de Como Jogar */}
      <div className="relative w-full max-w-4xl p-6 bg-blue-900 text-white rounded-lg shadow-xl mb-10 mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 text-center mb-4">
          Como Jogar
        </h2>
        <p className="text-lg text-gray-300 text-center mb-4">
          Responda perguntas de conhecimento geral para ganhar prêmios. O jogo é
          rápido, divertido e desafiante! Cada rodada consiste em uma série de
          perguntas de múltipla escolha, onde você deve selecionar a resposta
          correta. Quanto mais perguntas você acertar, maiores serão suas
          chances de ganhar prêmios incríveis. Prepare-se para testar seus
          conhecimentos e competir com outros jogadores em um ambiente
          emocionante e cheio de adrenalina!
        </p>
      </div>

      {/* Seção de Apostas */}
      <div className="relative w-full bg-blue-900 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
          Valores das Apostas
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 - Aposta Baixa */}
          <div className="bg-blue-800 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
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
              <button className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                Apostar
              </button>
            </div>
          </div>

          {/* Card 2 - Aposta Média */}
          <div className="bg-blue-800 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
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
              <button className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                Apostar
              </button>
            </div>
          </div>

          {/* Card 3 - Aposta Alta */}
          <div className="bg-blue-800 rounded-lg shadow-xl p-6 w-72 flex flex-col justify-between">
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
              <button className="w-full px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                Apostar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Rankings */}
      <div className="relative w-full max-w-4xl p-6 bg-blue-900 text-white rounded-lg shadow-xl mt-10 mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-500 text-center mb-4">
          Rankings
        </h2>
        <p className="text-lg text-gray-300 text-center mb-4">
          Confira os melhores jogadores e suas pontuações!
        </p>
        <table className="w-full text-gray-300">
          <thead>
            <tr>
              <th className="border-b border-gray-600 p-2">
                <div className="flex items-center justify-center">
                  <Trophy className="text-yellow-500" size={20} />
                  <span className="ml-2">Posição</span>
                </div>
              </th>
              <th className="border-b border-gray-600 p-2">
                <div className="flex items-center justify-center">
                  <User className="text-yellow-500" size={20} />
                  <span className="ml-2">Jogador</span>
                </div>
              </th>
              <th className="border-b border-gray-600 p-2">
                <div className="flex items-center justify-center">
                  <Star className="text-yellow-500" size={20} />
                  <span className="ml-2">Pontuação</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-600 p-2 text-center">1</td>
              <td className="border-b border-gray-600 p-2 text-center">
                Jogador A
              </td>
              <td className="border-b border-gray-600 p-2 text-center">1500</td>
            </tr>
            <tr>
              <td className="border-b border-gray-600 p-2 text-center">2</td>
              <td className="border-b border-gray-600 p-2 text-center">
                Jogador B
              </td>
              <td className="border-b border-gray-600 p-2 text-center">1400</td>
            </tr>
            <tr>
              <td className="border-b border-gray-600 p-2 text-center">3</td>
              <td className="border-b border-gray-600 p-2 text-center">
                Jogador C
              </td>
              <td className="border-b border-gray-600 p-2 text-center">1300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagInicial;
