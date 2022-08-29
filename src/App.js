// import logo from './logo.svg';
// import './App.css';
// import * as React from 'react';
// import Content from './component/Content';
// import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import { useState } from "react";
import Content from './component/Content';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
