import {
  LIST_NOTEBOOKS,
  LIST_TASKS,
  SELECT_NOTEBOOK,
  ADD_NEW_NOTEBOOK,
  ADD_NEW_TASK,
  TOGLE_TASK,
} from "./types";
import { getNoteBooks, saveNotebook } from "../services/notebook.services";
import {
  getTasks,
  addNewTask,
  toggleCheckTask,
  updateNameTask,
} from "../services/task.services";

const getListNotebooks = (dispatch) => {
  getNoteBooks().then((notebooks) => {
    const mapNotebooks = new Map(
      notebooks.map((notebook) => {
        return [notebook.id, { ...notebook }];
      })
    );
    dispatch({ type: LIST_NOTEBOOKS, payload: mapNotebooks });
    dispatch({
      type: SELECT_NOTEBOOK,
      payload: mapNotebooks.entries().next().value[1].id,
    });
  });
};

const addNotebook = (dispatch, nameNotebook) => {
  saveNotebook(nameNotebook)
    .then((newNotebook) => {
      dispatch({
        type: ADD_NEW_NOTEBOOK,
        payload: newNotebook,
      });
    })
    .catch((err) => console.log(err));
};

const selectNotebook = (dispatch, notebookId) => {
  dispatch({
    type: SELECT_NOTEBOOK,
    payload: notebookId,
  });
};

const getListTasks = (dispatch, id) => {
  getTasks(id).then((tasks) => {
    const mapTasks = new Map(
      tasks.map((task) => {
        return [task.id, { ...task }];
      })
    );
    dispatch({ type: LIST_TASKS, payload: mapTasks });
  });
};

const addTask = (dispatch, notebookId, nameTask) => {
  addNewTask(notebookId, nameTask).then((newTask) => {
    dispatch({
      type: ADD_NEW_TASK,
      payload: newTask,
    });
  });
};

const updateTask = (dispatch, task) => {
  updateNameTask(task);
};

const toggleTask = (dispatch, taskId, status) => {
  console.log(taskId, status);
  toggleCheckTask(taskId, status).then((task) => {
    console.log(task);
    dispatch({ type: TOGLE_TASK, payload: task });
  });
};

export {
  getListNotebooks,
  getListTasks,
  addTask,
  addNotebook,
  updateTask,
  toggleTask,
  selectNotebook,
};
