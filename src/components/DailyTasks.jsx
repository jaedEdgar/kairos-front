import React, { useState, useContext, useEffect } from "react";
import Task from "./Task";
import Context from "../store/context";
import Button from "../styles/Buttons.styles";
import {
  AddNewTaskInput,
  Header,
  DateText,
  DaysList,
  DayItem,
} from "../styles/DailyTasks.styles";
import Modal, { ModalFooter, ModalBody } from "./Modal";
import { InputText, TextArea, Checkbox } from "./Form";

const ListCheckDays = ["M", "T", "W", "T", "F", "S", "S"];

const DailyTasks = () => {
  const { globalState, globalActions } = useContext(Context);
  const { dailyTasks } = globalState;
  const [showModal, setShowModal] = useState(true);

  const handleUpdateTask = (task) => {};

  const today = () => {
    const date = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat("es", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    });
    return dateTimeFormat.format(date);
  };
  return (
    <>
      <Header>
        <DateText>{today()}</DateText>
        <AddNewTaskInput onClick={() => setShowModal(true)}>
          Add Task
        </AddNewTaskInput>
      </Header>
      <Modal isOpen={showModal}>
        <ModalBody>
          <InputText placeholder="Task Name"></InputText>
          <TextArea placeholder="Description"></TextArea>
          <br />
          <br />
          <DaysList>
            {ListCheckDays.map((day) => (
              <DayItem>
                {day}
                <Checkbox />
              </DayItem>
            ))}
          </DaysList>
        </ModalBody>
        <ModalFooter>
          <Button mr="10" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button primary>Agregar</Button>
        </ModalFooter>
      </Modal>
      {dailyTasks.size
        ? Array.from(dailyTasks.values())
            .sort((a, b) => {
              if (a.status > b.status) return 1;
              if (a.status < b.status) return -1;
            })
            .map((task) => {
              return (
                <Task
                  key={task.id.toString()}
                  defaultValue={task.title}
                  idTask={task.id}
                  onUpdateTask={(task) => handleUpdateTask(task)}
                />
              );
            })
        : null}
    </>
  );
};

export default DailyTasks;
