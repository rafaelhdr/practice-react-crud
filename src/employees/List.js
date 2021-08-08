import React from 'react';
import { Box, Text } from "@chakra-ui/react"
import { backendURL } from '../config'
import autoBind from 'react-autobind'
import axios from 'axios'

class ListEmployees extends React.Component {

  constructor() {
    super()
    this.state = {
      employees: [],
    }
    autoBind(this)
  }

  componentDidMount() {
    this.listEmployees()
  }

  async listEmployees() {
    const response = await axios.get(`${backendURL}employees/`)
    const employees = response.data
    this.setState({employees})
  }

  render() {
    const { employees } = this.state
    return (
      <Box w="100%">
        <Text>List of employees</Text>
        {employees.map(employee => {
          return <Text key={employee.id}>- {`${employee.first_name} ${employee.last_name}`}</Text>
        })}
      </Box>
    );
  }
}

export default ListEmployees;
