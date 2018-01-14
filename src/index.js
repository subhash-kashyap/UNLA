import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
/*firebase*/
import * as firebase from 'firebase';
/*router imports*/
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

/*redux imports*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducers} from './redux/reducers';
/*redux imports*/

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

//initialize firebase
var config = {
  apiKey: "AIzaSyDnMKMJ8tlt_CGyYmqZobrKbxUTpCfXOF8",
  authDomain: "unla-sa.firebaseapp.com",
  databaseURL: "https://unla-sa.firebaseio.com",
  projectId: "unla-sa",
  storageBucket: "",
  messagingSenderId: "592855480323"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
