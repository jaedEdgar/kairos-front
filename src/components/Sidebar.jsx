import React, { useState, useContext, useEffect } from "react";
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
  const { globalState, globalDispatch } = useContext(Context);
  const [showAddNotebook, setShowAddNotebook] = useState(false);
  const [nameNewNotebook, setNameNewNotebook] = useState("");
  const { notebooks, notebook } = globalState;

  const handleSaveNameNotebook = (e) => {
    e.preventDefault();
    nameNewNotebook.length >= 3 && addNotebook(globalDispatch, nameNewNotebook);
    setShowAddNotebook(false);
    setNameNewNotebook("");
  };

  const handleChangeNotebook = (id) => {
    selectNotebook(globalDispatch, id);
  };

  useEffect(() => {
    console.log(notebook);
  }, [notebook]);
  return (
    <Sider theme="light">
      <Logo>KAIROS</Logo>
      <Menu>
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
