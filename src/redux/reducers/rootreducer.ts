import { combineReducers } from "redux";
import { authreducer } from './authreducer';

export const rootreducer=combineReducers({
                auth:authreducer
})
export type State= ReturnType<typeof rootreducer>