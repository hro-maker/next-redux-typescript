import {createStore, AnyAction, Store, applyMiddleware} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { rootreducer, State } from './reducers/rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const reducer = (state:any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        default:
            return rootreducer(state,action) ;
    }
};
const makeStore = (context: Context) => createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    );
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});