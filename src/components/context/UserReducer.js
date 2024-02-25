const userReducer = (state, action) =>{
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_USERS":
            return{
                ...state,
                usersList: action.payload,
                isLoading: false
            }
        case "SEARCH_USERS":
            return{
                ...state,
                usersList: action.payload,
                isLoading: false
            }
        case "CLEAR_USERS":
            return {
                ...state,
                usersList: []
            }
        default:
            return state;
    }
};

export default userReducer;