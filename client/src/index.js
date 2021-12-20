import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise";
import rootReducer from "./store/reducers/root";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = composeEnhancer(applyMiddleware(promiseMiddleWare))(
    createStore
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={myStore(rootReducer)}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
