import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ListReducer from '../redux/List/List-reducers';

const persistConfig={
    key:'root',
    storage,
    whitelist:['List']
}
export const rootReducer=combineReducers({
    
    List:ListReducer,
    
})

export default persistReducer(persistConfig,rootReducer);

