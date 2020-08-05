import styled from "styled-components";

export const AddNewTaskInput = styled.button.attrs((props) => ({
  type: "button",
}))`
  color: #b9b9b9;
  font-size: 16px;
  &,
  &:focus {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
  }
`;
