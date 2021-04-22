import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Form, Image, Button } from "react-bootstrap";
import { Container, Btn, IMG, LoginImgCont } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";



const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>
      <Container>
        <LoginImgCont>
          <IMG src={Logo} alt="MainMenu Logo" fluid />
        </LoginImgCont>
        <h3 class="text-center">REGISTER</h3>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          {/* <Form.Label>Name</Form.Label>
          <Form.Control
            label="Name"
            size="sm"
            autoFocus
            required
            name="name"
            value={user.name}
            placeholder="Name"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></Form.Control>
          <br></br> */}
            <Form.Label>Email</Form.Label>
            <Form.Control
              label="Email"
              size="sm"
              required
              autoFocus
              name="email"
              value={user.email}
              placeholder="test@test.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></Form.Control>
            <br></br>
            <Form.Label>Password</Form.Label>
            <Form.Control
              label="Password"
              size="sm"
              required
              name="password"
              value={user.password}
              placeholder="*********"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></Form.Control>
            <br></br>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              label="Password Confirmation"
              size="sm"
              required
              name="passwordConfirmation"
              value={user.passwordConfirmation}
              placeholder="*********"
              type="password"
              onChange={(e) =>
                setUser({ ...user, passwordConfirmation: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Btn type="submit" size="lg" block>
            Submit
          </Btn>
        </Form>
      </Container>
    </>
  );
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;