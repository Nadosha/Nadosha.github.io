import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "@Utils/router";

function App() {
  return (
      <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
      />
  );
}

export default App;
