import { useDispatch, useSelector } from "react-redux"; // импорт диспетч и селектор для того чтобы редакс и компонет работал совместно
import { fetchCustomers } from "./store/customers";

function App() {
  const dispatch = useDispatch(); // покдключаем диспетч для отправления экшенов
  const cash = useSelector(state => state.cash.cash); // Взяли данные которые передали в провайдер
  const customers = useSelector(state => state.customers.customers);
  console.log(cash);
  
  const addCash = (params)=>{
      dispatch({type: "Add_Cash", payload: params})
  }

  
  const getCash = (params)=>{
    dispatch({type: "Get_Cash", payload: params})
  }

    
   const addCustomer = (name)=>{    
     const customer = {
      id: Date.now(),
      name: name,  
     }
     dispatch({
      type: "Add_Customer", 
      payload: customer
    })
   }

   const removeCustomer = (customer)=>{
    dispatch({
      type: "Remove_Customer",
      payload: customer
    })
  }

  const getCustomersUsers = () =>{
    dispatch(fetchCustomers())
  }

  return (
    <div className="App">
      <div style={{fontSize:"3rem"}}>Баланс:{cash}</div>
        <div style={{display:"flex"}}>
          <button onClick={()=> addCash(Number(prompt()))}>
            Пополнить
          </button>
          <button onClick={()=> getCash(Number(prompt()))}>
            Снять со счета
          </button>
          <button onClick={()=> addCustomer((prompt()))}>
            Добавить клиента
          </button>
          <button onClick={()=> getCustomersUsers()}>
            Получить клиентов
          </button>
          
        </div>
        {customers.length > 0 ? 
        (<div>
          {customers.map((customer)=>(
            <div onClick={()=> removeCustomer(customer.id)}  style={{border: "1px solid black", width:"100px", margin: "5px 0px 5px 0px"}}>

              {customer.name} 😜
             
            </div>

          ))}
        </div>)
        :
        <div>
          Клиенты осутствуют!
        </div>}
    </div>
  );
}

export default App;
