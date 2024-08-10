import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
const Nav = () => {
  return (
    <ListboxWrapper>
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="new">About Me</ListboxItem>
        <ListboxItem key="copy">Projects</ListboxItem>
        <ListboxItem key="edit">Contact Me</ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
};

export default Nav;
