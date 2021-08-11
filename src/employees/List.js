import React from 'react';
import { Box, Link, Text } from "@chakra-ui/react"
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
          return <Box key={employee.id}>
            <Text>
              - {`${employee.first_name} ${employee.last_name}`}{` `}
              <Link color="blue" href={`/employees/edit/${employee.id}`}>Edit</Link>{` `}
              <Link color="red" href={`/employees/delete/${employee.id}`}>Delete</Link>
            </Text>
          </Box>
        })}
      </Box>
    );
  }
}

export default ListEmployees;
