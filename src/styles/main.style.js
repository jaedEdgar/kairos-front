import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const MainStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
    ${reset}
    html,
    body {
        font-family: 'Raleway', sans-serif;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
`;

export const Layout = styled.div`
  min-height: 100vh;
  padding: 20px;
  position: relative;
`;

export const Contain = styled.div`
  width: ${(props) => (props.width ? props.width : "calc(100% - 250px)")};
  background-color: #fdfdfd;
  border: 15px #eef4f8 solid;
  min-height: calc(100vh - 40px);
  padding: 45px;
  margin-left: 250px;
`;

export default MainStyle;
