import React, { useState } from "react";
import {
  Sider,
  Menu,
  Item,
  Logo,
  FooterBtn,
  InputAddNotebook,
} from "./Sidebar.styles";

function Sidebar({ data, onSelect, onAddNewNotebook, notebookSelected }) {
  const [showAddNotebook, setShowAddNotebook] = useState(false);
  const [nameNewNotebook, setNameNewNotebook] = useState("");
  const handleSaveNameNotebook = (e) => {
    e.preventDefault();
    nameNewNotebook.length >= 3 && onAddNewNotebook(nameNewNotebook);
    setShowAddNotebook(false);
    setNameNewNotebook("");
  };
  return (
    <Sider theme="light">
      <Logo>KAIROS</Logo>
      <Menu defaultSelectedKeys={["0"]} mode="inline">
        {data.map((el, index) => {
          return (
            <Item
              key={index.toString()}
              onClick={() => onSelect(el.id)}
              active={el.id === notebookSelected}
            >
              {el.name}
            </Item>
          );
        })}
        {showAddNotebook && (
          <form onSubmit={(e) => handleSaveNameNotebook(e)}>
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
