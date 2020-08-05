import { useReducer } from "react";
import {
  LIST_NOTEBOOKS,
  LIST_TASKS,
  SELECT_NOTEBOOK,
  SELECT_TASK,
  ADD_NEW_NOTEBOOK,
  ADD_NEW_TASK,
  TOGLE_TASK,
} from "./types";

const initialState = {
  notebooks: [],
  taks: [],
  notebook: {
    id: null,
    name: "",
  },
  task: {
    notebook: null,
    id: null,
    name: "",
    description: "",
    status: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case LIST_NOTEBOOKS:
      return {
        ...state,
        notebooks: action.payload,
      };

    case LIST_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SELECT_NOTEBOOK:
      console.log();
      return {
        ...state,
        notebook: state.notebooks.get(action.payload),
      };
    case SELECT_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case ADD_NEW_NOTEBOOK:
      return {
        ...state,
        notebooks: [...state.notebooks, action.payload],
      };
    case ADD_NEW_TASK:
      console.log(action.payload);
      console.log(state.tasks);
      state.tasks.set(action.payload.id, action.payload);
      return {
        ...state,
        tasks: state.tasks,
      };
    case TOGLE_TASK:
      state.tasks.get(action.payload.id).status = action.payload.status;
      return {
        ...state,
      };
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  return { globalState, globalDispatch };
};

export default useGlobalState;
