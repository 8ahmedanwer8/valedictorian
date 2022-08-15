import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {
  MenuButton,
  Button,
  MenuItem,
  Box,
  InputRightAddon,
  Input,
  InputGroup,
  MenuList,
  Menu,
} from "@chakra-ui/react";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Box alignItems="center" py="10" px="20">
      <InputGroup>
        <Input
          fontFamily="Inter"
          fontSize="20px"
          bgColor="#FFF7F4"
          borderRadius="100px"
          size="md"
          w="full"
          placeholder="Search programs from institutions across Ontario"
          _placeholder={{ color: "black", opacity: "100%" }}
        />
        <InputRightAddon
          p="0"
          bgColor="#FFF7F4"
          children={<AiOutlineSearch bgColor="black" />}
          as={Button}
        ></InputRightAddon>
      </InputGroup>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          {data.map((value, key) => {
            return (
              // <a href={value.link}>
              //   <p>{value.title}</p>
              // </a>
              <MenuItem>{value.title}</MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SearchBar;
