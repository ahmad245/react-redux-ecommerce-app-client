import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import {actionCreators,actionCreatorsCategory,actionCreatorsSubCategory} from '../state';


export const useActions=()=>{
   const dispatch = useDispatch();

  return bindActionCreators(actionCreators,dispatch);
}

export const useActionsCategory=()=>{
  const dispatch = useDispatch();

  return bindActionCreators(actionCreatorsCategory,dispatch);
}

export const useActionsSubCategory=()=>{
  const dispatch = useDispatch();

  return bindActionCreators(actionCreatorsSubCategory,dispatch);
}