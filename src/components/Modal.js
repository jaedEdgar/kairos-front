import React from "react";
import ReactDOM from "react-dom";
import { Global, Wrapp, Contain } from "./Modal.styles";
const modalContainer = document.getElementById("modalsContainer");

const ContentAddNotebook = () => {
  return (
    <>
      <input type="Text" placeholder="Untitled" autoFocus />

      <button>Cancelar</button>
      <button>Aceptar</button>
    </>
  );
};

const Modal = ({ isOpen, children }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <Wrapp>
          <Global />
          <Contain>
            <ContentAddNotebook /> {children}
          </Contain>
        </Wrapp>,
        modalContainer
      )
    : null;
};

export default Modal;
