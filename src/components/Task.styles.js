import styled from "styled-components";

export const WrappItem = styled.div`
  margin-bottom: 5px;
`;

export const TaskTitle = styled.p`
  color: ${(props) => (props.lineThrough ? "#DFDFDF" : "#292929")};
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 5px;
  vertical-align: middle;
  width: calc(90% - 30px);
  max-width: 600px;
  text-decoration: ${(props) => (props.lineThrough ? "line-through" : "none")};
`;
