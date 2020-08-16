import React, { useState, useContext } from "react";
import {
  Sider,
  Menu,
  Item,
  Logo,
  FooterBtn,
  InputAddNotebook,
} from "../styles/Sidebar.styles";
import Context from "../store/context";
import { addNotebook, selectNotebook } from "../store/actions";

function Sidebar() {
  const { globalState, globalActions } = useContext(Context);
  const [showAddNotebook, setShowAddNotebook] = useState(false);
  const [nameNewNotebook, setNameNewNotebook] = useState("");
  const { notebooks, notebook } = globalState;

  const handleSaveNameNotebook = (e) => {
    e.preventDefault();
    nameNewNotebook.length >= 3 && globalActions.addNotebook(nameNewNotebook);
    setShowAddNotebook(false);
    setNameNewNotebook("");
  };

  const handleChangeNotebook = (id) => {
    globalActions.selectNotebook(id);
  };

  return (
    <Sider theme="light">
      <Logo>KAIROS</Logo>
      <Menu>
        <Item active>Today</Item>
        <hr />
        {Array.from(notebooks.values()).map((el, index) => {
          return (
            <Item
              key={index.toString()}
              onClick={() => handleChangeNotebook(el.id)}
              active={el.id === notebook.id}
            >
              {el.name}
            </Item>
          );
        })}
        {showAddNotebook && (
          <form onSubmit={(e) => handleChangeNotebook(e)}>
            <InputAddNotebook
              placeholder="Untitle notebook"
              autoFocus
              maxLength="20"
              onChange={(e) => setNameNewNotebook(e.target.value)}
              value={nameNewNotebook}
              onBlur={(e) => handleSaveNameNotebook(e)}
            />
          </form>
        )}
      </Menu>
      {!showAddNotebook && (
        <FooterBtn onClick={() => setShowAddNotebook(true)}>
          Add notebook +
        </FooterBtn>
      )}
    </Sider>
  );
}

export default Sidebar;
