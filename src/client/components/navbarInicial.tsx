import { useState } from "react";
import { Menu, Home, Settings, LogOut, User, Play } from "lucide-react"; // Ícones
import logo from "../assets/logo_betrivia.png"; // Importe a imagem aqui
import { Link } from "react-router-dom";

const NavbarInicial = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-950 p-3 shadow-lg z-40">
        <div className="flex items-center justify-between">
          {/* Logotipo e botão atrás */}
          <div className="relative flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl focus:outline-none z-10"
            >
              <Menu className="text-yellow-500" />
            </button>
            <div className="flex items-center ml-4 space-x-2"> {/* Margem ajustada */}
              <img src={logo} alt="Logotipo" className="h-12" />
              <h1 className="text-white text-2xl font-bold">Betrivia</h1>
            </div>
          </div>

          {/* Botão de Usuário no lado direito */}
          <Link to="/profilePage">
          <button
            className="p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500  transition duration-300"
          >
            <User className="w-6 h-6 text-yellow-500 hover:text-white" />
          </button>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        {/* Logotipo e nome na sidebar */}
        <div className="flex items-center space-x-2 p-5 border-b border-blue-700">
          <img src={logo} alt="Logotipo" className="h-12" />
          <h1 className="text-white text-2xl font-bold">Betrivia</h1>
        </div>

        {/* Opções da Sidebar */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-70px)]">
          <ul className="space-y-3">
            {/* Botão Home */}
            <li>
              <a
                href="/pagInicial"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-yellow-500 transition group"
              >
                <Home className="w-6 h-6 text-yellow-500 group-hover:text-white transition" />
                <span>Início</span>
              </a>
            </li>

            {/* Botão Jogar */}
            
            <li>
              <a
                href="/jogar"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-yellow-500 transition group"
              >
                <Play className="w-6 h-6 text-yellow-500 group-hover:text-white transition" />
                <span>Jogar</span>
              </a>
            </li>
            

            {/* Botão Configurações */}
            <li>
              <a
                href="/profilePage"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-yellow-500 transition group"
              >
                <Settings className="w-6 h-6 text-yellow-500 group-hover:text-white transition" />
                <span>Configurações</span>
              </a>
            </li>

          </ul>

          {/* Botão Logout no final */}
          <div className="mt-auto">
            <Link to="/">
            <button
              className="flex items-center w-full space-x-3 p-2 mb-6 rounded-md hover:bg-red-600 hover:border-red-600 transition text-white group"
            >
              <LogOut className="w-6 h-6 text-yellow-500 group-hover:text-white transition" />
              <span>Sair</span>
            </button>
            </Link>
          </div>
        </div>

        {/* Botão para fechar a sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-3 right-3 text-white text-2xl focus:outline-none"
        >
          ✕
        </button>
      </div>

      {/* Background overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default NavbarInicial;
