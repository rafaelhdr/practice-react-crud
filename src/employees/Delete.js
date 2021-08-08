import React from 'react';
import { Box, Button, Text } from "@chakra-ui/react"
import autoBind from 'react-autobind';


class DeleteEmployee extends React.Component {

  constructor() {
    super()
    autoBind(this)
  }

  deleteEmployee() {
    console.log("TODO: implement deleteEmployee")
  }

  render() {
    const id = 1  // TODO: remove hard-coded ID

    return (
      <Box w="100%">
        <Text fontSize="xl">Delete employee</Text>
        <Text>{`Are you sure you want to remove this employee? (employee ID #${id})`}</Text>
        <Button onClick={this.deleteEmployee} colorScheme="red">Remove employee</Button>
      </Box>
    );
  }
}

export default DeleteEmployee;
