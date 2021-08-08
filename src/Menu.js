import React from 'react';
import { Box, Container, Link } from "@chakra-ui/react"


class Menu extends React.Component {

  render() {
    return (
      <Container w="100%" bg="gray" centerContent>
        <Box>
          <Link href="/employees">List of employees</Link>
          {` - `}
          <Link href="/employees/new">New employee</Link>
        </Box>
      </Container>
    );
  }
}

export default Menu;
