export function institutionsReducer(state={institutions: [],isLoading:false,error:''}, action) {
    switch(action.type) {
        case "GET_INSTITUTIONS_REQUEST" :
            return {...state, isLoading: true}
        case "GET_INSTITUTIONS_SUCCESS" : 
            return {institutions: action.payload,isLoading:false,error:''}
        case "GET_INSTITUTIONS_FAILURE" :
            return {institutions: [],isLoading:false,error:action.payload}
        default:
            return state;
    }
}