import styled, { css } from "styled-components";

const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${(props) =>
    props.primary &&
    css`
      background-color: #d1d1d1;
    `}
`;

export default Button;
