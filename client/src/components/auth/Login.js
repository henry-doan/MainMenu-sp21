import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";


const Login = ({ HandleLogin,  history }) => {
  const [user, setUser] = useState({email: '', password: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleLogin(user,history);
  }

  return (
    <form>
      <input
        label="Email"
        autoFocus
        required
        name="email"
        value="{user.email}"
        placeholder='Email'
        onChange={(e, { value }) => setUser({...user, email:value })}

      />
      <input
        label="Password"
        autoFocus
        required
        name="password"
        value="{user.password}"
        placeholder='Password'
        onChange={(e, { value }) => setUser({...user, password:value })}
        
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