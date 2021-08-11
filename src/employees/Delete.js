import React from 'react';
import { withRouter } from "react-router";
import { Box, Button, Text } from "@chakra-ui/react"
import autoBind from 'react-autobind';


class DeleteEmployee extends React.Component {

  constructor() {
    super()
    autoBind(this)
  }

  deleteEmployee() {
    /*
     * TODO
     * Implement the delete method. This will be the most simple
     * (hint) here you will use the delete method
     */
  }

  render() {
    const id = 1
    /*
     * TODO
     * remove the hard-coded ID, similar to Update
     */

    return (
      <Box w="100%">
        <Text fontSize="xl">Delete employee</Text>
        <Text>{`Are you sure you want to remove this employee? (employee ID #${id})`}</Text>
        <Button onClick={this.deleteEmployee} colorScheme="red">Remove employee</Button>
      </Box>
    );
  }
}

export default withRouter(DeleteEmployee);
