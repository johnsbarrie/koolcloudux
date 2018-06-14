import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import ProjectConstants from "./constant/ProjectConstants"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store"

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({
  type: ProjectConstants.FETCH
});
  

store.dispatch(
  { 
    type: "USERS.SETUP", 
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
          name: 'Luc',
          surname: 'Camilli'
        }, 
        {
          id: '17345678',
          nickname: 'Nico',
          name: 'Nicolas',
          surname: 'LeMee'
        }
    ] 
  }
);

store.dispatch(
  { 
    type: ProjectConstants.FETCHED,
    payload: [
      {
        id: "3456789",
        name: "Arrolla",
        ownerid: '345678',
        members: [
          {
            userid: '12345678',
            role: 'producer'
          },
          {
            userid: '12345678',
            role: 'qa'
          },
          {
            userid: '12345678',
            role: 'animator'
          }
        ],
        status: "private",
        notifications: "permisssion_request" 
      },
      {
        id: "456783",
        name: "Lazlo",
        ownerid: '17345678',
        members: [
          {
            userid: '12345678',
            role: 'producer'
          },
          {
            userid: '12345678',
            role: 'qa'
          },
          {
            userid: '12345678',
            role: 'animator'
          }
        ],
        status: "private",
        notifications: "permisssion_request" 
      },
      {
        id: "4567567883",
        name: "Gigamesh",
        ownerid: '1734567567898',
        status: "Public",
        notifications: "" 
      }
    ]
  }
);

store.dispatch(
  { 
    type: "USER.ADD", 
    payload: { nickname: 'madeupshite' }
  }
);

setTimeout(()=>{

  store.dispatch(
    { 
      type: ProjectConstants.CREATED, 
      payload: {
        id: "45675sss67883",
        name: "Fire Waltz",
        ownerid: '1734567678567898',
        status: "Public",
        notifications: "" 
      }
    }
  );
  

  console.log("setTimeout");
}, 3000);

  


