import { useState } from "react";
import { Box, Heading, Input, Button, Checkbox, HStack, VStack, IconButton, StackDivider, Spacer } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="8xl" margin="auto" p={5}>
      <Heading mb={4}>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <HStack mt={4}>
          <Input variant="filled" placeholder="Add a new todo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button colorScheme="pink" px={8} type="submit">
            <FaPlus />
          </Button>
        </HStack>
      </form>
      <VStack divider={<StackDivider />} borderColor="gray.100" borderWidth="2px" p={4} borderRadius="lg" w="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }} alignItems="stretch" mt={8}>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
            <Box textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Box>
            <Spacer />
            <IconButton icon={<FaTrash />} isRound="true" onClick={() => removeTodo(index)} />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
