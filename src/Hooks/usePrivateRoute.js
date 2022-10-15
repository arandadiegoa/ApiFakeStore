import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../services/config.svc";

const usePrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(config.jwtKey);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
};
export default usePrivateRoute;
