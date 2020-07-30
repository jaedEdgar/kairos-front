import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  background: transparent;
  color: ${(props) => (props.lineThrough ? "#DFDFDF" : "#292929")};
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 5px;
  vertical-align: middle;
  width: calc(90% - 30px);
  max-width: 600px;
  text-decoration: ${(props) => (props.lineThrough ? "line-through" : "none")};
  &,
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid transparent;
  }
  &:focus {
    border-bottom: ${(props) =>
      props.lineThrough ? "none" : " 1px solid rgba(51, 51, 51, 0.2)"};
  }
  &::placeholder {
    color: rgba(51, 51, 51, 0.2);
  }
`;

export const CheckHiden = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  display: none;
  &:checked + div {
    &::after {
      width: 10px;
      height: 10px;
      top: calc(50% - 5px);
      left: calc(50% - 5px);
      background-color: #dfdfdf;
    }
  }
`;

export const Check = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid #292929;
  border-color: ${(props) => (props.isChecked ? "#DFDFDF" : "#292929")};
  border-radius: 3px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &::after {
    width: 1px;
    height: 1px;
    top: calc(50% - 1px);
    left: calc(50% - 1px);
    background: #fff;
    position: absolute;
    content: "";
    transition: all 150ms ease;
  }
`;
