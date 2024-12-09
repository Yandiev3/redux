const defaultState = { // данные для хранилище
    cash: 0,
  }

export const cashReducer = (state=defaultState, action)=>{  // логика для работы с store(хранилище)
    switch (action.type) {
      case "Add_Cash":
        return {...state, cash: state.cash + action.payload}
      case "Get_Cash":
        return{...state, cash: state.cash - action.payload}    
      default: 
      return state
    }
  }
  