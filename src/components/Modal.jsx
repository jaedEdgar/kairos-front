import React from "react";
import ReactDOM from "react-dom";
import { Global, Wrapp, Contain, Footer, Body } from "../styles/Modal.styles";
const modalContainer = document.getElementById("modalsContainer");

const Modal = ({ isOpen, children }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <Wrapp>
          <Global />
          <Contain>{children}</Contain>
        </Wrapp>,
        modalContainer
      )
    : null;
};

export const ModalBody = ({ children }) => {
  return <Body>{children}</Body>;
};

export const ModalFooter = ({ children, justify }) => {
  return <Footer justify={justify}>{children}</Footer>;
};
export default Modal;
