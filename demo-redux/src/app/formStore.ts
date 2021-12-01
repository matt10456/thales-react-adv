import { createStore, combineReducers, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers())

export default store;