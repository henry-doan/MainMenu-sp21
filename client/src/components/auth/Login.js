import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";


const Login = ({ handleLogin,  history }) => {
  const [user, setUser] = useState({email: '', password: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        label="Email"
        autoFocus
        required
        name="email"
        value={user.email}
        placeholder='Email'
        onChange={(e) => setUser({...user, email:e.target.value })}

      />
      <input
        label="Password"
        autoFocus
        required
        name="password"
        value={user.password}
        placeholder='Password'
        type='password'
        onChange={(e) => setUser({...user, password:e.target.value })}
        
      />
      <button primary type='submit'>Submit</button>
      
    </form>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedLogin;