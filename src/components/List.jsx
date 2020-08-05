import React, { useState, useContext } from "react";
import Task from "./Task";
import { InputText } from "./Form";
import Context from "../store/context";
import { addTask, updateTask, toggleTask } from "../store/actions";

const List = () => {
  const [newTask, setNewTask] = useState("");
  const { globalState, globalDispatch } = useContext(Context);
  const { tasks, notebook } = globalState;

  const handleSavedTask = (e) => {
    e.preventDefault();
    setNewTask("");
    addTask(globalDispatch, notebook.id, newTask);
  };

  const handleUpdateTask = (task) => {
    updateTask(globalDispatch, task);
  };

  const handleCheckElement = (id, status) => {
    console.log(id, status);
    toggleTask(globalDispatch, id, status);
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
                    handleCheckElement(task.id, task.status === 2 ? 1 : 1)
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
