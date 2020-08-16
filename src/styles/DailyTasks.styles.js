import styled from "styled-components";

export const AddNewTaskInput = styled.button.attrs((props) => ({
  type: "button",
}))`
  background-color: #dfdfdf;
  color: #212121;
  font-size: 16px;
  padding: 5px 15px;
  &,
  &:focus {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1d1;
  padding: 10px 5px;
  margin-bottom: 25px;
  align-items: center;
`;

export const DateText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const DaysList = styled.ul`
  display: flex;
  width: 170px;
  justify-content: space-between;
  margin-right: 50px;
`;

export const DayItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
  font-weight: 700;
`;
