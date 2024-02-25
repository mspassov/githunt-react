import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) =>{
    const initialState = {
        usersList: [],
        isLoading: false
    };

    //Create the initial useReducer
    const [state, dispatch] = useReducer(userReducer, initialState);

    //TESTING function for getting users. Replaced by search
    const getUsers = async () => {
        dispatch({
            type: "SET_LOADING",
        })

        const response = await fetch("https://api.github.com/users", {
        method: "GET",
        headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`,
        },
        });
        const data = await response.json();
        
        dispatch({
            type: "GET_USERS",
            payload: data
        })
    };

    //GET search users based on query provided
    const searchUsers = async (query) =>{
        dispatch({
            type: 'SET_LOADING'
        })

        const response = await fetch(`https://api.github.com/search/users?q=${query}`, {
            method: "GET",
            headers: {
                Authorization: `token ${process.env.REACT_APP_TOKEN}`,
            }
        });
        const data = await response.json();

        dispatch({
            type: "SEARCH_USERS",
            payload: data.items
        });
    }

    //Clear Users from search
    const clearUsers = () =>{
        dispatch({
            type: "CLEAR_USERS"
        })
    }

    return <GithubContext.Provider value={{
        usersList: state.usersList,
        isLoading: state.isLoading,
        searchUsers: searchUsers,
        clearUsers: clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}


export default GithubContext;