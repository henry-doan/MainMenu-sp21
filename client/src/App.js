import Home from './components/shared/Home';
// import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {Switch, Route} from 'react-router-dom';

const App = () => (
<>
<Navbar />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />

</Switch>

</>
)
 
export default App;
