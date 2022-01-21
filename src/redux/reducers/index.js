import { combineReducers } from "redux";
import { userLoginReducer } from "./userLoginReducer";
import { getAllAccountsReducer, endUserReducer, endUserActionReducer } from './accountsReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
    key: 'userLoginReducer',
    storage: storage,
  }
const endUserConfig = {
  key: 'endUserReducer',
  storage: storage,
}

const rootReducer = combineReducers({
    userState: persistReducer(userPersistConfig, userLoginReducer),
    accountsState: getAllAccountsReducer,
    endUsersState: persistReducer(endUserConfig, endUserReducer),
    endUserActionState: endUserActionReducer,
});

export default rootReducer;