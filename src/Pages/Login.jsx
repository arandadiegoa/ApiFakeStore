import { useState } from "react";
import Header from "../components/Common/Header/Header";
import {
  Button,
  Container,
  Input,
  Label,
} from "../components/Common/Login/Login.styled";

const Login = () => {
  const [userName, setUsername] = useState("");

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  console.log(userName);
  return (
    <Container>
      <form>
        <div className="container">
          <Label>Username</Label>
          <Input type="text" name="name" onChange={handleUserName} required />
        </div>
        <div className="container">
          <Label>Password</Label>
          <Input type="password" name="pass" required />
        </div>
        <div className="container">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Container>
  );
};
export default Login;
