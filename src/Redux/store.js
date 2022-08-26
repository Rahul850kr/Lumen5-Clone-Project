import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";

import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {reducer as SignupReducer} from "./SignupReducer/reducer"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({AppReducer,AuthReducer,SignupReducer});

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));