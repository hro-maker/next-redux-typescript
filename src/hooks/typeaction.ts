
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from './../redux/actions/index';

export const bindactions=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(actioncreators,dispatch)
}