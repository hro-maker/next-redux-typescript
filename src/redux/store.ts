import {createStore, AnyAction, Store, applyMiddleware} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { rootreducer, State } from './reducers/rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
const reducer = (state:any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        default:
            return rootreducer(state,action) ;
    }
};
export const makeStore = (context: Context) => createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    );
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
export type NextThunkDispatch = ThunkDispatch<State, void, AnyAction>