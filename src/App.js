import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { getNoteBooks, saveNotebook } from "./services/notebook.services";
import {
  getTasks,
  addNewTask,
  toggleCheckTask,
  updateNameTask,
} from "./services/task.services";
import MainStyles, { Layout, Contain } from "./main.style";

function App() {
  const [notebook, setNotebook] = useState([]);
  const [tasksList, setTasksList] = useState(new Map([]));
  const [notebookIdSelected, setNotebookIdSelected] = useState(0);

  useEffect(() => {
    getNoteBooks().then((notebooks) => {
      setNotebook(notebooks);
      handleSelectNotebook(notebooks[0].id);
    });
  }, []);

  const handleSelectNotebook = (notebookId) => {
    setNotebookIdSelected(notebookId);
    getTasks(notebookId).then((json) => {
      setTasksList(json);
    });
  };

  const handleAddNotebook = (name) => {
    saveNotebook(name)
      .then((newNotebook) => {
        setNotebook([...notebook, newNotebook]);
        setNotebookIdSelected(newNotebook.id);
        handleSelectNotebook(newNotebook.id);
      })
      .catch((err) => console.log(err));
  };

  const handleToggleCheckTask = (taskId, isChecked) => {
    toggleCheckTask(taskId, isChecked).then((task) => {
      const indexTask = findIndexById(taskId);
      const newTaskList = [...tasksList];
      newTaskList[indexTask] = task;
      setTasksList(newTaskList);
    });
  };

  const handleSavedTask = (nameTask) => {
    addNewTask(notebookIdSelected, nameTask).then((newTask) => {
      setTasksList([...tasksList, newTask]);
    });
  };

  const handleUpdateTask = (task) => {
    const indexTask = findIndexById(task.id);
    if (tasksList[indexTask].name !== task.name) {
      updateNameTask(task);
    }
  };

  const findIndexById = (id) => {
    return tasksList.findIndex((e) => e.id === id);
  };

  return (
    <Layout>
      <MainStyles />
      <Sidebar
        data={notebook}
        notebookSelected={notebookIdSelected}
        onSelect={(idNotebook) => handleSelectNotebook(idNotebook)}
        onAddNewNotebook={(name) => handleAddNotebook(name)}
      />
      <Contain>
        <List
          tasksList={tasksList}
          onCheck={(taskId, isChecked) =>
            handleToggleCheckTask(taskId, isChecked)
          }
          onUpdateTask={(task) => handleUpdateTask(task)}
          onSaveNewTask={(nameTask) => handleSavedTask(nameTask)}
        />
      </Contain>
    </Layout>
  );
}

export default App;
