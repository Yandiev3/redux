
const defaultState = {
    customers:[]
  }

const Add_Many_Customers = "Add_Many_Customers"
const Add_Customer = "Add_Customer"
const Remove_Customer = "Remove_Customer"
export const customReducer = (state=defaultState, action)=>{  // логика для работы с store(хранилище)
    switch (action.type) {
      case Add_Many_Customers:
        return {...state, customers: [...state.customers, ...action.payload]}
      case Add_Customer:
        return {...state, customers: [...state.customers, action.payload]}
      case Remove_Customer:
        return{...state,customers: state.customers.filter(customer => customer.id !== action.payload)}    
      default: 
      return state
    }
  }


export const addCustomerAction = (payload)=> ({type: Add_Customer, payload})
export const removeCustomerAction = (payload)=> ({type: Remove_Customer, payload})
export const addManyCustomersAction = (payload)=> ({type: Add_Many_Customers, payload})