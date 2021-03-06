import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './app/store';
import formStore from './app/formStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import SimpleForm from './SimpleForm'

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <PersistGate persistor={persistor}>
  //       <App />
  //     </PersistGate>
  //   </Provider>
  // </React.StrictMode>,
  <React.StrictMode>
    <Provider store={formStore}>
      <SimpleForm />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
