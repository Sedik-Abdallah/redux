// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import stgreducer from './Redux-app/reducer/StgReducer';
// import App from './Redux-app/App';

// const store = legacy_createStore(stgreducer)
// function Display(){
//   return(
//     <Provider store={store}>
//        <App  />
//     </Provider>
//   )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Display/>);


// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import userReducer from './utilisateurs/Reducer';
// import App from './utilisateurs/App';
// const store = legacy_createStore(userReducer)
// function Display(){
//   return(
//     <Provider store={store}>
//        <App  />
//     </Provider>
//   )
// }


//* Voitures
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import Reducer from './Voitures/Reducer';
// import App from './Voitures/App';
// const store = legacy_createStore(Reducer)
// function Display(){
//   return(
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   )
// }


// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import Reducer from './Stgclass/Reducer';
// import App from './Stgclass/App';
// const store = legacy_createStore(Reducer)
// function Display(){
//   return(
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   )
// }


// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import AddStg from './store/AddStg';
// import Home from './store/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// function Display(){
//   return(
//     <Provider store={store}>
//       <BrowserRouter>
//          <Routes >
//             <Route path='/' element={<Home/>} />    
//             <Route path='/add' element={<AddStg/>} />    
//          </Routes>
//        </BrowserRouter>
      
//     </Provider>
//   )
// }



// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './shopping/store/store';
// import Cart from './shopping/store/Cart';
// import Home from './shopping/store/Home';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// function Display(){
//   return(
//     <Provider store={store}>
//       <BrowserRouter>
//          <Routes >
//             <Route path='/' element={<Home/>} />  
//             <Route path='/cart' element={<Cart/>} />        
//          </Routes>
//        </BrowserRouter>
      
//     </Provider>
//   )
// }



// import ReactDOM from 'react-dom/client';
// import App from './Tic Tac Toe/src/App'
// function Display(){
//   return(
//    <>
//       <App/>
//    </>
//   )
// }



import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './toolkit-tp/store';
import App from './toolkit-tp/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Display(){
  return(
    <Provider store={store}>
      <App/>
      
    </Provider>
  )
}



// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import reducer from './EFM_V1/Reducer';
// import Menu from './EFM_V1/Menu';
// const store = legacy_createStore(reducer)
// function Display(){
//   return(
//     <Provider store={store}>
//       <Menu/>
//     </Provider>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display/>);