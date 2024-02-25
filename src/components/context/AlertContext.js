import { createContext, useReducer } from "react"
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({children}) =>{
    const initialState = null;
    const [state, dispatch] = useReducer(alertReducer, initialState);

    //Set an alert
    const setAlert = (message, alertType) =>{
        dispatch({
            type: "SET_ALERT",
            payload: {
                message,
                alertType
            }
        })

        setTimeout(() => dispatch({type: "CLEAR_ALERT"}), 3000);
    }

    return <AlertContext.Provider value={{
        alert: state,
        setAlert: setAlert
    }}>
        {children}
    </AlertContext.Provider>
}


export default AlertContext;