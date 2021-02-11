import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import {actionCreators,actionCreatorsCategory} from '../state';


export const useActions=()=>{
   const dispatch = useDispatch();

  return bindActionCreators(actionCreators,dispatch);
}

export const useActionsCategory=()=>{
  const dispatch = useDispatch();

  return bindActionCreators(actionCreatorsCategory,dispatch);
}