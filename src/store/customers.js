import { addManyCustomersAction } from "./customReducer"



export const fetchCustomers = ()=>{
    return function (dispatch) {
        fetch("https://671f75cfe7a5792f052e55dd.mockapi.io/items")
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
        .catch(err => console.log(err)
        )
    }
}