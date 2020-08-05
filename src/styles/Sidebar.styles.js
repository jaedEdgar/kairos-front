import styled from "styled-components";

export const Sider = styled.aside`
  background-color: #fff;
  margin-bottom: -20px;
  margin-left: -20px;
  margin-top: -20px;
  min-height: calc(100vh);
  padding: 60px 0 15px 60px;
  width: 250px;
  position: absolute;
`;

export const Logo = styled.h1`
  font-weight: 700;
`;

export const Menu = styled.ul`
  margin-top: 75px;
  display: block;
`;

export const Item = styled.li`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "700" : "600")};
  min-height: 36px;
  padding: 10px 0;
  cursor: pointer;
  color: ${(props) => (props.active ? "#292929" : "#7e7e7e")};
  transition: all 300ms ease;
  user-select: none;
`;

export const FooterBtn = styled.button`
  background: none;
  border: none;
  color: #b9b9b9;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  padding: 10px 0;
  margin-top: 15px;
`;

export const InputAddNotebook = styled.input.attrs((props) => ({
  type: "text",
}))`
  padding: 5px 10px;
  width: 165px;
  margin-left: -10px;
  margin-right: 5px;
  border-radius: 3px;
  vertical-align: middle;
  &,
  &:focus {
    border: 1px solid rgba(56, 56, 56, 0.21);
    outline: none;
  }
  &::placeholder {
    color: rgba(56, 56, 56, 0.4);
  }
`;
