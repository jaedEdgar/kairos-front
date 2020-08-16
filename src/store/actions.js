import {
  LIST_NOTEBOOKS,
  LIST_TASKS,
  SELECT_NOTEBOOK,
  ADD_NEW_NOTEBOOK,
  ADD_NEW_TASK,
  TOGLE_TASK,
  ADD_NEW_DAILY_TASK,
  GET_DAILY_HISTORY,
  LIST_DAILY_TASKS,
  SELECT_TASK,
} from "./types";
import { getNoteBooks, saveNotebook } from "../services/notebook.services";
import {
  getTasks,
  addNewTask,
  toggleCheckTask,
  updateNameTask,
} from "../services/task.services";

import {
  getDailTasks,
  getHistoryTask,
  addHistoryDailyTask,
  addNewDailyTask,
} from "../services/daily.services";

export default function (dispatch) {
  return {
    getListTaskToday: () => {
      getDailTasks().then((tasks) => {
        const mapDailyTasks = new Map(
          tasks.map((task) => {
            return [task.id, { ...task }];
          })
        );
        dispatch({
          type: LIST_DAILY_TASKS,
          payload: mapDailyTasks,
        });
      });
    },
    getListNotebooks: () => {
      getNoteBooks().then((notebooks) => {
        const mapNotebooks = new Map(
          notebooks.map((notebook) => {
            return [notebook.id, { ...notebook }];
          })
        );
        dispatch({ type: LIST_NOTEBOOKS, payload: mapNotebooks });
        /*    dispatch({
          type: SELECT_NOTEBOOK,
          payload: mapNotebooks.entries().next().value[1].id,
        }); */
      });
    },

    getListTasks: (id) => {
      getTasks(id).then((tasks) => {
        const mapTasks = new Map(
          tasks.map((task) => {
            return [task.id, { ...task }];
          })
        );
        dispatch({ type: LIST_TASKS, payload: mapTasks });
      });
    },

    addNotebook: (nameNotebook) => {
      saveNotebook(nameNotebook)
        .then((newNotebook) => {
          dispatch({
            type: ADD_NEW_NOTEBOOK,
            payload: newNotebook,
          });
        })
        .catch((err) => console.log(err));
    },

    selectNotebook: (notebookId) => {
      dispatch({
        type: SELECT_NOTEBOOK,
        payload: notebookId,
      });
    },

    addTask: (notebookId, nameTask) => {
      addNewTask(notebookId, nameTask).then((newTask) => {
        dispatch({
          type: ADD_NEW_TASK,
          payload: newTask,
        });
      });
    },

    updateTask: (task) => {
      updateNameTask(task);
    },

    toggleTask: (taskId, status) => {
      console.log(taskId, status);
      toggleCheckTask(taskId, status).then((task) => {
        console.log(task);
        dispatch({ type: TOGLE_TASK, payload: task });
      });
    },
  };
}
