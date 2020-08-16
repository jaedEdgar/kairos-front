import {
  LIST_NOTEBOOKS,
  LIST_TASKS,
  SELECT_NOTEBOOK,
  SELECT_TASK,
  ADD_NEW_NOTEBOOK,
  ADD_NEW_TASK,
  TOGLE_TASK,
  ADD_NEW_DAILY_TASK,
  GET_DAILY_HISTORY,
  LIST_DAILY_TASKS,
} from "./types";

export const initialState = {
  dailyTasks: new Map(),
  notebooks: new Map(),
  taks: new Map(),
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
    case LIST_DAILY_TASKS:
      console.log(action);
      return {
        ...state,
        dailyTasks: action.payload,
      };
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

export default reducer;
