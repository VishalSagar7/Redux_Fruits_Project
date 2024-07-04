import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import { bananaReducer } from './BananaReducer';
import { appleReducer } from './AppleReducer';
import { pizzaReducer } from './PizzaReducer';
import { burgerReducer } from './BurgerReducer';

const rootReducer = combineReducers({
  bananaCount : bananaReducer,
  appleCount : appleReducer,
  pizzaCount : pizzaReducer,
  burgerCount : burgerReducer,
})

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
