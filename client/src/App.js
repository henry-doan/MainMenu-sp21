import NoMatch from "./components/shared/NoMatch";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navigator from "./components/shared/Navigator";
import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "./themes/Light";
import DarkTheme from "./themes/Dark";
import ThemeNav from "./components/shared/ThemeNav";
import Menus from "./components/menus/Menus";
import Qr from "./components/items/Qr";
import Items from "./components/items/Items";
import Dashboard from "./components/shared/Dashboard";


const GlobalStyle = createGlobalStyle`
    body{
      background: ${(p) => p.theme.bodyBackgroundColor};
        min-height: 100vh;
        margin: 0;
        color: ${(p) => p.theme.bodyFontColor};
    }
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  const changeDark = () => setTheme(DarkTheme);
  const changeLight = () => setTheme(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((color) => (color.id === "light" ? DarkTheme : LightTheme));
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
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/restaurants" component={Restaurants} /> */}
          <ProtectedRoute exact path="/restaurants/:id/menus" component={Menus} />
          <Route exact path="/menus/:id" component={Qr} />
          <ProtectedRoute exact path="/menus/:menu_id/items" component={Items} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </ThemeProvider>
  );
};

export default App;
