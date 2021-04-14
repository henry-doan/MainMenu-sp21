import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const Navigator = ({user, handleLogout, location, history }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        
          <Nav.Link>Logout
            <li  position='right'
            name='logout'
            onClick={ () => handleLogout(history) }>
            </li>
          </Nav.Link>
        
      )
    } else {
      return (
        <ul position='right'>
          <Nav.Link href='/login'>Login
            <li
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Nav.Link>
          <Nav.Link href='/register'>Register
            <li
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Nav.Link>
        </ul>
      )
    }
  }
  
 
  return (
    <div>
      <div pointing secondary>
        <Link to='/'>
          <li
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
          { rightNavItems() }
      </div>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navigator { ...props } { ...auth } />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);