import React from 'react'
import { Container, Text } from "@chakra-ui/react"
import Menu from './Menu'
import NewEmployee from './employees/New'
import ListEmployees from './employees/List'
import UpdateEmployee from './employees/Update'
import DeleteEmployee from './employees/Delete'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Container centerContent>
        <Router>
          <Menu />
          <Text fontSize="2xl">React Practice</Text>
          <Switch>
            <Route path="/employees/new">
              <NewEmployee />
            </Route>
            <Route path="/employees/edit/:id">
              <UpdateEmployee />
            </Route>
            <Route path="/employees/delete/:id">
              <DeleteEmployee />
            </Route>
            <Route path="/employees">
              <ListEmployees />
            </Route>
            <Route path="/">
              Welcome to this practice. Navigate using the menu on the top.
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
