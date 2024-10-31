import { createContext } from "react";

let customer = {
    cusNumber: 100,
    name: "Lakshitha Fernando",
    username: "lakshitha",
    location: "Colombo",
    email: "lakshithaf20@gmail.com",
    password: "lakshitha",
    phone: 758955639,
    role: "ROLE_CUSTOMER",
    cid: 1
}

export const AppContext = createContext(customer);

const ContextProvider = (props:any) => {
   
    return (
        <AppContext.Provider value={customer}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider