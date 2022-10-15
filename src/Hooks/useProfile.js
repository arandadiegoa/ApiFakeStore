import { useState } from "react";
import { useNavigate } from "react-router-dom";
import parseJwt from "../Helpers/jwt.helpers";
import config from "../services/config.svc";

const useProfile = () => {
  const [token, setToken] = useState(localStorage.getItem(config.jwtKey));
  const navigate = useNavigate();

  //Agregamos la logica para que react se entere que se elimina el token
  const handleLogout = () => {
    setToken(undefined);
    localStorage.removeItem(config.jwtKey);
    navigate("/");
  };

  if (token) {
    const result = parseJwt(token);
    const { sub, user } = result;
    return { id: sub, user, isLogged: true, handleLogout };
  } else {
    return { isLogged: false };
  }
};

export default useProfile;
