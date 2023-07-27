import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by
      </MenuButton>
      <MenuList>
        <MenuItem>Rel</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release</MenuItem>
        <MenuItem>Pop</MenuItem>
        <MenuItem>Ave</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
