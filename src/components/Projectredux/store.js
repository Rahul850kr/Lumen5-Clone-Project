import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { projectreducer } from "./projectreducer"
let rootreducer=combineReducers({projectreducer})
export let store=legacy_createStore(rootreducer,applyMiddleware(thunk))