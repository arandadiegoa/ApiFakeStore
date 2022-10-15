import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import {
  Button,
  Container,
  Input,
  Label,
} from "../components/Common/Login/Login.styled";
import usePublicRoute from "../Hooks/usePublicRoute";
import { loginUser } from "../services/auth.svc";
import config from "../services/config.svc";

const Login = () => {
  usePublicRoute();
  const [userName, setUsername] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.target.name === "userName") setUsername(e.target.value);

    if (e.target.name === "pass") setUserPass(e.target.value);
  };

  const handleClick = () => {
    loginUser(userName, userPass).then((res) => {
      if (res.data.token !== undefined) {
        localStorage.setItem(config.jwtKey, res.data.token);
        navigate("/");
      } else {
        alert("Error de login");
      }
    });
  };

  //Cuando paso el value, es input controlado
  return (
    <Container>
      <div className="container">
        <Label>Username</Label>
        <Input
          type="text"
          name="userName"
          value={userName}
          onChange={handleInput}
          required
        />
      </div>
      <div className="container">
        <Label>Password</Label>
        <Input
          type="password"
          name="pass"
          value={userPass}
          onChange={handleInput}
          required
        />
      </div>
      <div className="container">
        <Button type="submit" onClick={handleClick}>
          Login
        </Button>
      </div>
    </Container>
  );
};
export default Login;
