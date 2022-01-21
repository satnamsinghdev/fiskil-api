const initialState = { accounts: [], isLoading: false, error: null}
export function getAllAccountsReducer(state=initialState, action) {
    switch(action.type) {
        case "GET_ACCOUNTS_REQUEST" :
            return {...state, isLoading: true}
        case "GET_ACCOUNTS_SUCCESS" : 
            return {isLoading: false, accounts: action.payload, error: null}
        case "GET_ACCOUNTS_FAILURE" :
            return {isLoading: false, accounts: [], error: action.payload}
        default:
            return state;
    }
}

const endUserState = {users:[{email:'jake@fiskil.coom.au',end_user_id:"6e9e0b32-8bb0-451e-b9ec-ef276ac3ded8"}], isLoading: false, error: null,success:''}
export function endUserReducer(state=endUserState, action) {
    switch(action.type) {
        case "END_USER_REQUEST" :
            return {...state, isLoading: true,success:''}
        case "POST_END_USER_SUCCESS" : 
            return {isLoading: false, users:[...state.users,action.payload.data], error: null}
        case "GET_END_USER_SUCCESS" : 
            return {isLoading: false, users: state.users, error: null}
        case "GET_END_USER_FAILURE" :
            return {isLoading: false, users: [], error: action.payload}
        case "DEL_END_USER_SUCCESS" :
            let deletedUser = state.users.filter(item => item.end_user_id !== action.payload);
            return {isLoading: false, users: deletedUser, error: null,success:action.payload.successMsg}
        case "DEL_END_USER_FAILURE" :
            return {isLoading: false, users: state.users, error: action.payload}
        default:
            return state;
    }
}

export function endUserActionReducer(state={isLoading:false,success:'',error:''}, action) {
    switch(action.type) {
        case "END_USER_ACTION_REQUEST" :
            return {...state, isLoading: true,success:'',error:''}
        case "POST_END_USER_ACTION_SUCCESS" : 
            return {isLoading: false,error: '',success:action.payload}
        case "POST_END_USER_ACTION_FAILURE" :
            return {isLoading: false, error: action.payload}
        default:
            return state;
    }
}




