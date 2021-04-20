import Home from './components/shared/Dashboard';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navigator from './components/shared/Navigator';
import React, { useState } from 'react';
import Restaurants from './components/restaurants/Restaurants';
import Restaurant from "./components/restaurants/Restaurant";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LightTheme from './themes/Light';
import DarkTheme from './themes/Dark';
import ThemeNav from './components/shared/ThemeNav';
import Menus from './components/menus/Menus';
import Dashboard from './components/shared/Dashboard';
import RestaurantShow from './components/restaurants/RestaurantShow';

import RestaurantForm from './components/restaurants/RestaurantForm';


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
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((color) => (color.id === 'light' ? DarkTheme : LightTheme))
        },
      }}
    >
      <GlobalStyle />
      <Navigator theme={theme} />
      <ThemeNav
        theme={theme}
        changeDark={changeDark}
        changeLight={changeLight}
      />
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route exact path='/restaurants/:id' component={RestaurantShow} />
          <Route exact path='/menus' component={Menus} />
          <Route exact path='/restaurant-form' component={RestaurantForm} />
        </Switch>
      </FetchUser>
    </ThemeProvider>
  )
}

export default App;


