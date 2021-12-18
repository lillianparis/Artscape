import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/createStore";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { ChakraProvider } from "@chakra-ui/react";
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
        {/* <ChakraProvider> */}
        <StyledEngineProvider injectFirst>
          <App />
          </StyledEngineProvider>,
          {/* </ChakraProvider> */}
        </PersistGate>{" "}
      </BrowserRouter>{" "}
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
