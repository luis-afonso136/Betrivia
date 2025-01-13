import { createBrowserRouter } from "react-router-dom";
import Home from "../client/pages/home";  
import Navbar from "../client/components/navbar";
import Login from "../client/pages/login";
import Register from "../client/pages/register";
import PagInicial from "../client/pages/pagInicial";
import NavbarInicial from "../client/components/navbarInicial";
import Jogar from "../client/pages/jogar";
import ProfilePage from "../client/pages/profilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home /> 
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/register",
    element: <Register />, 
  },
  {
    path: "/pagInicial",
    element: (
      <div>
      <NavbarInicial />
      <PagInicial />
    </div> 
    ),
  },
  {
    path: "/jogar",
    element: (
      <div>
      <NavbarInicial />
      <Jogar />
    </div> 
    ),
  },
  {
    path: "/profilePage",
    element: (
      <div>
      <NavbarInicial />
      <ProfilePage />
    </div> 
    ),
  },

  
]);
