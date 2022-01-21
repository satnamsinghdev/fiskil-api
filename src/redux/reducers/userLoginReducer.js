const userLoginInitialState = {user:JSON.parse(localStorage.getItem("token")) || {}, isLoading : false, error: null}
export function userLoginReducer (state=userLoginInitialState, action) {
    
    switch(action.type){
        case "USER_LOGIN_REQUEST" : {
            return {...state, isLoading: true}
        }
        case "USER_LOGIN_SUCCESS" : {
            const userDetail = localStorage.getItem("token");
            return {user: action.payload, error: null, isLoading: false}
        }
        case "USER_LOGIN_FAILURE" : {
            return {user:{}, isLoading: false, error: action.payload}
        }
        case "USER_LOGOUT_ACTION" : {
            localStorage.removeItem("token");
            return {user:{}, isLoading: false, error: null}
        }
        default : return state;
    }
}