import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

import { Link, withRouter } from 'react-router-dom';

const Navbar = ({user, handleLogout, location, history }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        <li position='right'>
          <Link
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </li>
      )
    } else {
      return (
        <ul position='right'>
          <Link to='/login'>
            <li
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <li
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </ul>
      )
    }
  }
  
 
  return (
    <div>
      <menu pointing secondary>
        <Link to='/'>
          <li
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
          { rightNavItems() }
      </menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } { ...auth } />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);