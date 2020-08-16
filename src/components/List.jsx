import React, { useState, useContext } from "react";
import Task from "./Task";
import { InputText } from "./Form";
import Context from "../store/context";

const List = () => {
  const [newTask, setNewTask] = useState("");
  const { globalState, globalActions } = useContext(Context);
  const { tasks, notebook } = globalState;

  const handleSavedTask = (e) => {
    e.preventDefault();
    setNewTask("");
    globalActions.addTask(notebook.id, newTask);
  };

  const handleUpdateTask = (task) => {
    globalActions.updateTask(task);
  };

  const handleCheckElement = (id, status) => {
    globalActions.toggleTask(id, status);
  };

  return (
    <>
      <form onSubmit={(e) => handleSavedTask(e)}>
        <InputText
          autoFocus
          placeholder="Add Task +"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
      <br />
      {tasks.size
        ? Array.from(tasks.values())
            .sort((a, b) => {
              if (a.status > b.status) return 1;
              if (a.status < b.status) return -1;
            })
            .map((task) => {
              return (
                <Task
                  key={task.id.toString()}
                  defaultValue={task.name}
                  idTask={task.id}
                  isChecked={task.status === 2}
                  onCheck={() =>
                    handleCheckElement(task.id, task.status === 2 ? 1 : 2)
                  }
                  onUpdateTask={(task) => handleUpdateTask(task)}
                />
              );
            })
        : null}
    </>
  );
};

export default List;
