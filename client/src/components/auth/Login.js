import { useState } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Form } from "react-bootstrap";
import { Container, Btn, IMG, LoginImgCont } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";


const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  };

  return (
    <Container>
      <LoginImgCont>
        <IMG src={Logo} alt="MainMenu Logo" fluid />
      </LoginImgCont>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            label="Email"
            size="sm"
            autoFocus
            required
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></Form.Control>
          <br></br>
          <Form.Label>Password</Form.Label>
          <Form.Control
            label="Password"
            size="sm"
            autoFocus
            required
            name="password"
            value={user.password}
            placeholder="*********"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Btn primary type="submit" size="lg" block>
          Login
        </Btn>
        <Btn href="/register" block>
          Register
        </Btn>
      </Form>
    </Container>
  );
};

const ConnectedLogin = (props) => (
  <AuthConsumer>{(auth) => <Login {...props} {...auth} />}</AuthConsumer>
);

export default ConnectedLogin;
