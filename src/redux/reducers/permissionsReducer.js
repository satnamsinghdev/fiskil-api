export function permissionsReducer(state={permissions: [],isLoading:false,error:''}, action) {
    switch(action.type) {
        case "GET_PERMISSIONS_REQUEST" :
            return {...state, isLoading: true}
        case "GET_PERMISSIONS_SUCCESS" : 
            return {permissions: action.payload,isLoading:false,error:''}
        case "GET_PERMISSIONS_FAILURE" :
            return {permissions: [],isLoading:false,error:action.payload}
        default:
            return state;
    }
}