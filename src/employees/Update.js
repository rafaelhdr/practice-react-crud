import React from 'react';
import { Box, Text } from "@chakra-ui/react"
import { backendURL } from '../config'

class ListEmployees extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
    }
    autoBind(this)
  }

  printState() {
    console.log(this.state)
  }

  render() {
    return (
      <Box w="100%">
        <Text fontSize="xl">Edit employee</Text>
        <Button onClick={editEmployee}>Edit</Button>
        <Text fontSize="xl" color="red">Debug area</Text>
        <Button onClick={this.printState}>Print current state</Button>
      </Box>
    );
  }
}

export default ListEmployees;
