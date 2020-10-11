import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ChakraProvider, List, ListItem, ListIcon, SimpleGrid, Box} from "@chakra-ui/core"
import {CheckCircleIcon, WarningIcon} from '@chakra-ui/icons'

function App() {
  return (
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
            <SimpleGrid columns={2} spacing={1}>
                <Box bg="tomato">
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="green.500" />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="green.500" />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                    </List>
                </Box>
                <Box bg="tomato">5555</Box>
                <Box bg="tomato">asdasdasd</Box>
                <Box bg="tomato">11111</Box>
                <Box bg="tomato">222222</Box>
            </SimpleGrid>
        </div>
      </ChakraProvider>
  );
}

export default App;
