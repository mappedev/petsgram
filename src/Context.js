// FORMA 1 USANDO EL USEREDUCER:
// import React, { createContext, useContext, useReducer } from 'react';

// // Creamos el contexto:
// const Context = createContext();

// // Creamos la función reducer que tendrá la lógica de nuestro estado (cuando cambia):
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         isAuth: true,
//       };
//     default:
//       return state;
//   }
// };

// // Estado inicial:
// const initialState = {
//   isAuth: false,
// };

// // Provider es el nuevo componente de Context.Provider pero con el value dinámico a través del useReducer:
// export const Provider = ({ children }) => {
//   return (
//     <Context.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </Context.Provider>
//   );
// };

// // Este vendría siendo nuestro hook de consumer:
// export const useStateValue = () => useContext(Context);

// FORMA 2 USANDO USESTATE:
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    () => window.sessionStorage.getItem('token') || false
  );

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextValue = () => useContext(Context);
