import React, { useState, useEffect } from "react";
import { InputText, Checkbox } from "./Form";
import { WrappItem, TaskTitle } from "../styles/Task.styles";

const Task = ({
  defaultValue,
  idTask,
  isChecked,
  onCheck,
  autoFocus,
  placeholder,
  onUpdateTask,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(defaultValue);
  }, []);

  return (
    <WrappItem>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEdit(false);
          onUpdateTask({ id: idTask, name: value });
        }}
      >
        {onCheck && (
          <Checkbox
            id={idTask}
            value={idTask}
            isChecked={isChecked}
            onCheck={(id, isChecked) => onCheck(id, isChecked)}
          />
        )}
        {!isEdit ? (
          <TaskTitle
            lineThrough={isChecked}
            onDoubleClick={() => setIsEdit(true)}
          >
            {value}
          </TaskTitle>
        ) : (
          <InputText
            lineThrough={isChecked}
            autoFocus={autoFocus}
            placeholder={placeholder}
            onBlur={() => {
              setIsEdit(false);
              onUpdateTask({ id: idTask, name: value });
            }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        )}
      </form>
    </WrappItem>
  );
};

export default Task;
