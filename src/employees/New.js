import React from 'react';
import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react"
import { backendURL } from '../config'
import autoBind from 'react-autobind'
import axios from 'axios'

class ListEmployees extends React.Component {

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
   * - Add the methods to setStates (for firstName, lastName)
   * - Add the method to create the employee (similar to the hard-coded one, but now using states)
   * - (optional) setState for country, and add this field to the create employee method
   */

  async createHardcodedUser() {
    // Random names from: https://www.w3.org/2001/sw/rdb2rdf/wiki/Lists_of_generic_names_for_use_in_examples
    const firstNames = [
      "Mufasa", "Sarabi", "Simba", "Nala", "Kiara", "Kovu", "Timon", "Pumbaa", "Rafiki", "Shenzi",
    ]
    const lastNames = [
      "Adams", "Baker", "Clark", "Davis", "Evans", "Frank", "Ghosh", "Hills", "Irwin", "Jones", "Klein",
      "Lopez", "Mason", "Nalty", "Ochoa", "Patel", "Quinn", "Reily", "Smith", "Trott", "Usman", "Valdo",
      "White", "Xiang", "Yakub", "Zafar"
    ]
    // Got method from: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-arrayrandomName
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Real method to create employee
    await axios.post(`${backendURL}employees/`, {
      first_name: firstName,
      last_name: lastName,
    })

    // Feedback notification
    alert("User created successfully.")
  }

  printState() {
    console.log(this.state)
  }

  render() {
    return (
      <Box w="100%">
        <Text fontSize="xl">Add new employee</Text>
        {/*
          * TODO
          * - Add your input fields here. Make them update the states for first_name and last_name
          * - Create a button to create the employee
          * - (optional) there is a country field that can be added also. Use it.
          */}
        <Text fontSize="xl" color="red">Debug area</Text>
        <Button onClick={this.printState}>Print current state</Button>
        <Button onClick={this.createHardcodedUser}>Create hardcoded data employee</Button>
      </Box>
    );
  }
}

export default ListEmployees;
