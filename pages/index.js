import React, { useState } from "react";
import {
  Flex,
  VStack,
  Heading,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import Card from "../components/Card";

export default function Home() {
  const [todoInput, setTodoInput] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleTodoInputChange = (event) => {
    setTodoInput(event.target.value);
  };
  const addTodoHandler = () => {
    if (todoInput.trim() != "") {
      const newToDos = [...toDos, todoInput];
      setToDos(newToDos);
      setTodoInput("");
    }
  };
  const deleteTodo = (indexToDelete) => {
    const newList = toDos.filter((todo, currentIndex) => {
      return currentIndex !== indexToDelete;
    });

    setToDos(newList);
  };

  return (
    <Flex justifyContent="center">
      <VStack width="80rem" alignSelf="center">
        <Heading as="h1" color="white" fontSize="xxl" margin="5rem">
          🍅 To-Do 🍅
        </Heading>
        <FormControl>
          <InputGroup>
            <Input
              id="todoInput"
              borderColor="tomato"
              p="2rem 4.5rem 2rem 3rem"
              placeholder="New to-do"
              fontSize="m"
              marginBottom="3rem"
              onChange={handleTodoInputChange}
              value={todoInput}
            />
            <InputRightElement width="6.5rem">
              <Button
                bgColor="tomato"
                fontSize="m"
                p="2rem 3rem"
                mb="-1.6rem"
                onClick={addTodoHandler}
              >
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <VStack width="80rem" spacing={8} align="stretch">
          {toDos.map((todo, index) => {
            return (
              <Card
                title={todo}
                key={index}
                onRemove={() => {
                  deleteTodo(index);
                }}
              />
            );
          })}
        </VStack>
      </VStack>
    </Flex>
  );
}
