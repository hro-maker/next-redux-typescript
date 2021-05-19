import { combineReducers } from "redux";
import { authreducer } from './authreducer';
import { categoryreducer } from './categoryreducer';

export const rootreducer=combineReducers({
                auth:authreducer,
                category:categoryreducer
})
export type State= ReturnType<typeof rootreducer>