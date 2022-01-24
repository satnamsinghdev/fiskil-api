import { userLoginHelper, getAccountsHelper, createEndUser, getEndUsers, delEndUser, getInstitutionsHelper, getPermissionsHelper } from "../../apiHelper";
import { decodeToken, getAccessToken } from "../../utils/accessTokenUtil";

const userLoginAction = (data) => {
    return async (dispatch) => {
      dispatch({type: "USER_LOGIN_REQUEST"});
      try {
        const result = await userLoginHelper(data.email, data.password);
        localStorage.setItem("token", JSON.stringify(result.data.access_token));
        const myToken = decodeToken(result.data.access_token)
       const user = {
        ClientID: myToken.ClientID,
        KeyID: myToken.KeyID,
        TokenUUID: myToken.TokenUUID
       }
        {result.data.access_token ? dispatch({type : "USER_LOGIN_SUCCESS",payload : user}) : dispatch({type: "USER_LOGIN_FAILURE", payload: result.data.error})}
      } catch (e) {
        dispatch({type: "USER_LOGIN_FAILURE", payload: e.message});
      }
    }
  }

const userLogoutAction = () => {
  return { type: 'USER_LOGOUT_ACTION'}
}

const getAccountsAction = (end_user_id) => {
  
  return async (dispatch) => {
    dispatch({type: "GET_ACCOUNTS_REQUEST"});
    try {
      const res = await getAccountsHelper(end_user_id);
      console.log('response',res)
      dispatch({type: 'GET_ACCOUNTS_SUCCESS', payload: res.data});
    } catch (e) {
      dispatch({type: 'GET_ACCOUNTS_FAILURE', payload: e.message});
    }
  }
}

const createEndUserAction = (data) => {
  return async (dispatch) => {
    dispatch({type: "END_USER_ACTION_REQUEST"});
    try {
      const token = getAccessToken();
      const res = await createEndUser(data,token);
      if(res.status_code === 200 || res.status_code === 201){
  
        dispatch({type: 'POST_END_USER_ACTION_SUCCESS', payload: res.message})
        dispatch({type: 'POST_END_USER_SUCCESS', payload:{data:{...res.data,email:data}}});
      }else{
        dispatch({type: 'POST_END_USER_ACTION_FAILURE', payload: 'Email already exists'});
      }
    } catch (e) {
      dispatch({type: 'POST_END_USER_ACTION_FAILURE', payload: e.message});
    }
  }
}

const getEndUserAction = (data) => {
  return async (dispatch) => {
    dispatch({type: "END_USER_REQUEST"});
    try {
      const token = getAccessToken();
      const res = await getEndUsers(data,token);
      dispatch({type: 'GET_END_USER_SUCCESS', payload: res.data});
    } catch (e) {
      dispatch({type: 'GET_END_USER_FAILURE', payload: e.message});
    }
  }
}

const deleteEndUserAction = (data) => {
  return async (dispatch) => {
    dispatch({type: "END_USER_REQUEST"});
    try {
      const token = getAccessToken();
      const res = await delEndUser(data,token);
      if(res.status_code === 200) {
        dispatch({type: 'DEL_END_USER_SUCCESS', payload: data});
      }
    } catch (e) {
      dispatch({type: 'DEL_END_USER_FAILURE', payload: e.message});
    }
  }
}

const getInstitutionsAction = () => {
  return async (dispatch) => {
    dispatch({type: "GET_INSTITUTIONS_REQUEST"});
    try {
      const res = await getInstitutionsHelper();
      console.log("res", res)
      dispatch({type: 'GET_INSTITUTIONS_SUCCESS', payload: res.data});
    } catch (e) {
      dispatch({type: 'GET_INSTITUTIONS_FAILURE', payload: e.message});
    }
  }
}

const getPermissionsAction = () => {
  return async (dispatch) => {
    dispatch({type: "GET_PERMISSIONS_REQUEST"});
    try {
      const res = await getPermissionsHelper();
      console.log("res", res)
      dispatch({type: 'GET_PERMISSIONS_SUCCESS', payload: res.data});
    } catch (e) {
      dispatch({type: 'GET_PERMISSIONS_FAILURE', payload: e.message});
    }
  }
}


  export { userLoginAction,userLogoutAction, getAccountsAction, createEndUserAction, getEndUserAction, deleteEndUserAction, getInstitutionsAction, getPermissionsAction }