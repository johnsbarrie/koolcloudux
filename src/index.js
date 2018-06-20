import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import UserConstants from "./constant/user"
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store"
import fetchProjects  from './thunk/fetch-project'
import createProjects  from './thunk/create-project'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch(fetchProjects);
store.dispatch(createProjects)

store.dispatch(
  { 
    type: UserConstants.SET_UP,
    payload: [
      {
          id: '345678',
          nickname: 'javanai',
          firstname: 'John',
          surname: 'Barrie'
        },
        {
          id: '12345678',
          nickname: 'LuckyLuke',
          firstname: 'Luc',
          surname: 'Camilli'
        }, 
        {
          id: '17345678',
          nickname: 'Nico',
          firstname: 'Nicolas',
          surname: 'LeMee'
        },
        {
          id: '1734567567898',
          nickname: 'Jo',
          firstname: 'Joanna',
          surname: 'Jojo'
        },
        {
          id: '1734568887567',
          nickname: 'MAAARC',
          firstname: 'Marc',
          surname: 'Menagere'
        }
    ] 
  }
);



store.dispatch(
  { 
    type: UserConstants.ADD, 
    payload: {
      id: '17345678567',
      nickname: 'Joccy',
      name: 'Jocelyn',
      surname: 'Barrie'
    }
  }
);


  


