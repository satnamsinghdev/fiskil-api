import { getAccessToken } from "../utils/accessTokenUtil";

export default function IsAuthenticated() {
  if (getAccessToken()) {
    return true;
  } else {
    return false;
  }
}

