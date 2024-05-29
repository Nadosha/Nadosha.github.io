import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleTheme from "./components/UI/ToggleTheme";
import {Box} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleTheme/>
        <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRadius: 1,
              p: 3,
            }}
        >
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
        </Box>
      </header>
    </div>
  );
}

export default App;
