import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import faker from "faker"
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
    type: ProjectConstants.FETCHED,
    payload: [
      {
        id: "3456789",
        title: "Arrolla",
        image: faker.image.avatar(),
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
        title: "Lazlo",
        image: faker.image.avatar(),
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
        title: "Gigamesh",
        image: faker.image.avatar(),
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
    payload: {
      id: '17345678567',
      nickname: 'Joccy',
      name: 'Jocelyn',
      surname: 'Barrie'
    }
  }
);

setTimeout(()=>{

  store.dispatch(
    { 
      type: ProjectConstants.CREATED, 
      payload: {
        id: "4567567883",
        title: "Fire Waltz",
        image: faker.image.avatar(),
        ownerid: '1734568887567',
        status: "public",
        notifications: "" 
      }
    }
  );
  
}, 10000);

  


