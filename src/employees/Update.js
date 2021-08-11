import React from 'react';
import { withRouter } from "react-router";
import { Box, Button, Text } from "@chakra-ui/react"
import autoBind from 'react-autobind'

class UpdateEmployee extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
    }
    autoBind(this)
  }

  /*
   * TODO
   * - Implement the setStates for the first name and last name
   * - (optional) implement also for the country field
   */

  editEmployee() {
    /*
     * TODO
     * - Implement the method to update the employee here
     * hint: here you won't use `post`, like in the create. You will use `put`
     * check axios docs: https://github.com/axios/axios
     */
  }

  printState() {
    console.log(this.state)
  }

  render() {
    const id = this.props.match.params.id

    return (
      <Box w="100%">
        <Text fontSize="xl">Edit employee (#{id})</Text>
        {/*
          * TODO
          * - Add your input fields here. Make them update the states for first_name and last_name
          * - (optional) there is a country field that can be added also. Use it.
          */}
        <Button onClick={this.editEmployee}>Edit</Button>
        <Text fontSize="xl" color="red">Debug area</Text>
        <Button onClick={this.printState}>Print current state</Button>
      </Box>
    );
  }
}

export default withRouter(UpdateEmployee);
