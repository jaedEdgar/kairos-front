/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import DailyTasks from "./components/DailyTasks";
import Context from "./store/context";
import MainStyles, { Layout, Contain } from "./styles/main.style";

const App = () => {
  const { globalState, globalActions } = useContext(Context);
  const { notebook, tasks, dailyTasks } = globalState;

  useEffect(() => {
    globalActions.getListTaskToday();
    globalActions.getListNotebooks();
  }, []);

  useEffect(() => {
    if (notebook.id !== null) {
      globalActions.getListTasks(notebook.id);
    }
  }, [notebook]);

  const handleUpdateTask = (task) => {
    const indexTask = findIndexById(task.id);
    if (tasks[indexTask].name !== task.name) {
      globalActions.updateTask(task);
    }
  };
  const findIndexById = (id) => {
    return tasks.findIndex((e) => e.id === id);
  };

  return (
    <Layout>
      <MainStyles />
      <Sidebar />

      {dailyTasks && (
        <Contain width={"450px"}>
          <DailyTasks onUpdateTask={(task) => handleUpdateTask(task)} />
        </Contain>
      )}
      {/* <Contain>  {tasks && <List onUpdateTask={(task) => handleUpdateTask(task)} />}</Contain> */}
    </Layout>
  );
};

export default App;
