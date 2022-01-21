import axios from "axios";
import { getAccessToken, decodeToken } from "../utils/accessTokenUtil";

const accessToken = getAccessToken();

export const userLoginHelper =async(email, password) => {    
    try{
        const headers = {
            'Accept' : 'application/json; charset=UTF-8',
            'Content-Type' : 'application/json; charset=UTF-8'
          }
        const userResponse = await axios.post("https://sandbox.fiskil.com/v1/token",{client_id:email,client_secret:password}, {header: headers})
        return userResponse.data;
    }catch(e){
        return e;
    }
};

export const createEndUser = async(email,token) => {
    try{
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Accept' : 'application/json; charset=UTF-8',
            'Content-Type' : 'application/json; charset=UTF-8'
          }
        const body= {
            "email": email
            }

        const userResponse = await axios.post("https://sandbox.fiskil.com/v1/end_user",body,{headers: headers})
        return userResponse.data;
    }catch(e){
        return e;
    }
}

export const getEndUsers = async(email,token) => {
    try{
        const headers = {
            'Accept' : 'application/json; charset=UTF-8',
            'Content-Type' : 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
          }

        const userResponse = await axios.get(`https://sandbox.fiskil.com/v1/end_user?email=${email}`,{headers: headers})
        return userResponse.data;
    }catch(e){
        return e;
    }
}

export const delEndUser = async(id,token) => {
    try{
        const headers = {
            'Accept' : 'application/json; charset=UTF-8',
            'Content-Type' : 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
          }

        const userResponse = await axios.delete(`https://sandbox.fiskil.com/v1/end_user/${id}`,{headers: headers})
        return userResponse.data;
    }catch(e){
        return e;
    }
}

export const getAccountsHelper = async(end_user_id) => {
    try{

          let config = {
            headers: {
            'Accept' : 'application/json; charset=UTF-8',
            'Content-Type' : 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
          },
          
            params: { end_user_id:end_user_id}
          }
        const response = await axios.get('https://sandbox.fiskil.com/v1/banking/accounts/',config);
        return response;
    }catch(e){
        return e;
    }

}