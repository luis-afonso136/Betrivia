import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white p-7">
      <div className="container mx-auto py-8">
        {/* Navegação */}
        <nav className="flex space-x-4 mt-4">
          <button className="text-white hover:text-yellow-500">Geral</button>
          <button className="text-white hover:text-yellow-500">Faturação</button>
          <button className="text-white hover:text-yellow-500">Segurança</button>
        </nav>

        <div className="flex mt-8 space-x-6">
          {/* Seção de Perfil à Esquerda */}
          <div className="w-1/4 bg-blue-900 rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h2 className="mt-4 text-lg font-bold text-yellow-500">Nome</h2>
          </div>

          {/* Seção de Formulário à Direita */}
          <div className="w-3/4 bg-blue-900 rounded-lg p-6">
            {/* Formulário */}
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium">
                    Nome Completo
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium">
                    Nome de Utilizador
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                    placeholder="Digite seu nome de utilizador"
                  />
                </div>
                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium">
                    Data de Nascimento
                  </label>
                  <input
                    id="birthDate"
                    type="date"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium">
                    Localidade
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                    placeholder="Digite sua localidade"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="bio" className="block text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                  placeholder="Escreva algo sobre você"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium">
                    Palavra-passe
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mt-1 block w-full bg-blue-950 border-none rounded-md p-2 text-white"
                    placeholder="Digite sua palavra-passe"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-yellow text-blue-950 bg-yellow-500 font-bold py-2 px-4 rounded-md hover:bg-yellow-400"
              >
                Salvar Informações
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
