import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import actions from "./actions";

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  const globalActions = actions(globalDispatch);
  return { globalState, globalActions };
};

export default useGlobalState;
