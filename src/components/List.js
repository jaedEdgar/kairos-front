import React, { useState } from "react";
import Task from "./Task";
import { InputText } from "./Form";

const List = ({ tasksList, onCheck, onSaveNewTask, onUpdateTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSavedTask = (e) => {
    e.preventDefault();
    onSaveNewTask(newTask);
    setNewTask("");
  };

  return (
    <>
      {tasksList.length
        ? tasksList
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
                  onCheck={(id, isChecked) => onCheck(id, isChecked)}
                  onUpdateTask={(task) => onUpdateTask(task)}
                />
              );
            })
        : null}
      <br />
      <form onSubmit={(e) => handleSavedTask(e)}>
        <InputText
          autoFocus
          placeholder="Add Task +"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </>
  );
};

export default List;
