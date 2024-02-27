import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) =>{
    const initialState = {
        usersList: [],
        targetUser: {},
        targetRepos: [],
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

    //GET the target user details from the GitHub API
    const getTargetUser = async (login) =>{
        dispatch({
            type: 'SET_LOADING'
        })

        const response = await fetch(`https://api.github.com/users/${login}`, {
            method: "GET",
            headers: {
                Authorization: `token ${process.env.REACT_APP_TOKEN}`,
            }
        });
        const data = await response.json();

        dispatch({
            type: "GET_TARGET_USER",
            payload: data
        })
    }

    //GET the repos for the target person
    const getTargetRepos = async (login) =>{
        dispatch({
            type: 'SET_LOADING'
        })

        const response = await fetch(`https://api.github.com/users/${login}/repos`, {
            method: "GET",
            headers: {
                Authorization: `token ${process.env.REACT_APP_TOKEN}`,
            }
        });
        const data = await response.json();

        dispatch({
            type: "GET_TARGET_REPOS",
            payload: data
        })
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
        targetUser: state.targetUser,
        targetRepos: state.targetRepos,
        searchUsers: searchUsers,
        clearUsers: clearUsers,
        getTargetUser: getTargetUser,
        getTargetRepos: getTargetRepos,
    }}>
        {children}
    </GithubContext.Provider>
}


export default GithubContext;