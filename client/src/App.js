import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navigator from './components/shared/Navigator';
import React,{useState} from 'react'
import Restaurants from './restaurants/Restaurants';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import LightTheme from './themes/Light';
import DarkTheme from './themes/Dark';
import ThemeNav from './components/shared/ThemeNav';


const GlobalStyle = createGlobalStyle`
    body{
      background: ${p => p.theme.bodyBackgroundColor};
        min-height: 100vh;
        margin: 0;
        color: ${p => p.theme.bodyFontColor};
    }
`

const App = () => {

  const [theme,setTheme]=useState(LightTheme)

  const changeDark = () => setTheme(DarkTheme)
  const changeLight = () => setTheme(LightTheme)

  return (
    <ThemeProvider
      theme={{...theme,setTheme:() =>{
        setTheme(color => color.id === 'light' ? DarkTheme : LightTheme )
      }}}
    >
      <GlobalStyle/>
      <Navigator theme={theme}/>
      <ThemeNav theme={theme} changeDark={changeDark} changeLight={changeLight}/>
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </FetchUser>
    </ThemeProvider>
  )
}

export default App


