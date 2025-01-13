import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import logo from "../assets/logo_betrivia.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen bg-blue-950 text-white">
      {/* Seção da esquerda com a imagem */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700">
        <div className="text-center">
          <Link to="/">
          <img
            src={logo}
            alt="Logo Betrivia"
            className="w-48 h-48 mx-auto mb-8 animate-bounce-slow"
            
          />
          </Link>
          <h1 className="text-4xl font-bold text-blue-950 drop-shadow-lg">
            Junte-se ao Betrivia
          </h1>
          <p className="mt-4 text-lg text-blue-950">
            Crie sua conta e comece a explorar os desafios agora mesmo!
          </p>
        </div>
      </div>

      {/* Seção da direita com o formulário */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Criar Conta
        </h2>

        {/* Formulário */}
        <form className="space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Nome
            </label>
            <div className="flex items-center">
              <MdPerson className="absolute left-3 text-gray-400" size={20} />
              <input
                type="text"
                id="name"
                placeholder="Introduza o seu nome"
                className="pl-10 py-2 bg-gray-800 text-white rounded-md w-full focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              E-mail
            </label>
            <div className="flex items-center">
              <MdEmail className="absolute left-3 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                placeholder="Introduza o seu e-mail"
                className="pl-10 py-2 bg-gray-800 text-white rounded-md w-full focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Palavra-passe
            </label>
            <div className="flex items-center">
              <MdLock className="absolute left-3 text-gray-400" size={20} />
              <input
                type="password"
                id="password"
                placeholder="Introduza a sua palavra-passe"
                className="pl-10 py-2 bg-gray-800 text-white rounded-md w-full focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              Concordo com os Termos de Utilização e Política de Privacidade
            </label>
          </div>
          <Link to="/pagInicial">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
          >
            Criar conta
          </button>
          </Link>
        </form>

        {/* Separador */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-300">ou</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Botões de Registro com Redes Sociais */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md space-x-2">
            <FaGoogle size={20} />
            <span>Registrar-se com Google</span>
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md space-x-2">
            <FaFacebook size={20} />
            <span>Registrar-se com Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 bg-gray-900 hover:bg-gray-700 text-white rounded-md space-x-2">
            <FaApple size={20} />
            <span>Registrar-se com Apple</span>
          </button>
        </div>

        {/* Link para login */}
        <div className="text-center mt-4">
          <a href="/login" className="text-red-400 hover:underline">
            Já tem uma conta? Iniciar Sessão
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
