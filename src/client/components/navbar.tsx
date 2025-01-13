import { Link } from "react-router-dom";
import logo from "../assets/logo_betrivia.png"; // Importe a imagem aqui

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 p-3 shadow-lg z-40">
      <div className="flex items-center justify-between">
        {/* Logotipo - Ajustado para ser mais compacto */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logotipo" className="h-12" /> {/* Altura reduzida */}
          <h1 className="text-white text-2xl font-bold">Betrivia</h1>
        </div>

        {/* Botões de Login e Register */}
        <div className="space-x-4">
          <Link to="/login">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600  transition duration-300">
            Login
          </button>
          </Link>
          <Link to="/register">
          <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
            Register
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
