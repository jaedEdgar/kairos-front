/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import Context from "./store/context";
import { getListNotebooks, getListTasks, updateTask } from "./store/actions";
import MainStyles, { Layout, Contain } from "./styles/main.style";

const App = () => {
  const { globalState, globalDispatch } = useContext(Context);
  const { notebook, tasks } = globalState;

  useEffect(() => {
    getListNotebooks(globalDispatch);
  }, []);

  useEffect(() => {
    if (notebook.id !== null) {
      getListTasks(globalDispatch, notebook.id);
    }
  }, [notebook]);

  const handleUpdateTask = (task) => {
    const indexTask = findIndexById(task.id);
    if (tasks[indexTask].name !== task.name) {
      updateTask(globalDispatch, task);
    }
  };

  const findIndexById = (id) => {
    return tasks.findIndex((e) => e.id === id);
  };

  return (
    <Layout>
      <MainStyles />
      <Sidebar />
      <Contain>
        {tasks && <List onUpdateTask={(task) => handleUpdateTask(task)} />}
      </Contain>
    </Layout>
  );
};

export default App;
