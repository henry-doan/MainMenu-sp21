import Home from './components/shared/Home';
// import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => (
<>
    <Navbar />
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </FetchUser>

</>
)
 
export default App;
