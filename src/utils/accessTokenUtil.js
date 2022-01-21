
export function decodeToken(token) {
    try {
      var myToken = JSON.parse(atob(token.split(".")[1]));
      return myToken;
    } catch (e) {
      return null;
    }
  }

  
export function getAccessToken() {
    try {
      var myToken = JSON.parse(localStorage.getItem("token"));
      return myToken;
    } catch (e) {
      return null;
    }
  }