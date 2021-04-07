import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";


const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  
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
      <header as='h1' textAlign='center'>Register</header>
      <form onSubmit={this.handleSubmit}>
        <input
          label="Email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e, { value }) => setUser({ ...user, email: value })}
        />
        <input
          label="Password"
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, password: value })}
        />
        <input
          label="Password Confirmation"
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, passwordConfirmation: value })}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;