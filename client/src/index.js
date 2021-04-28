import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import RestaurantProvider from "./providers/RestaurantProvider";
// import MenuProvider from "./providers/MenuProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { initMiddleware } from "devise-axios";
// import ItemProvider from "./providers/ItemProvider";
initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RestaurantProvider>
        {/* <MenuProvider>
          <ItemProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
          {/* </ItemProvider>
        </MenuProvider> */}
      </RestaurantProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//registerServiceWorker();
reportWebVitals();
