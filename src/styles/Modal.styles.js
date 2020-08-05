import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
    body, #modalsContainer{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;

export const Wrapp = styled.div`
  position: fixed;
  background-color: rgba(21, 21, 21, 0.2);
  height: 100vh;
  width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

export const Contain = styled.div`
  min-width: 360px;
  max-width: 100%;
  background: #fff;
  padding: 15px;
  min-height: 200px;
  margin: 0 auto 100px;
  box-shadow: 0 1px 5px 1px rgba(56, 56, 56, 0.2);
`;
