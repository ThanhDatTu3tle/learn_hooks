// import logo from './logo.svg';
// import './App.css';
// import * as React from 'react';
// import Content from './component/Content';
// import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import { useState } from "react";
import Content from "./component/Content";
import Timer from "./component/Timer";
import PreviewAvatar from "./component/PreviewAvatar";

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showPreviewAvatar, setShowPreviewAvatar] = useState(false)

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShowContent(!showContent)}>Toggle Content</button>
      {showContent && <Content/>}
      <span> </span>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      {showTimer && <Timer/>}
      <span> </span>
      <button onClick={() => setShowPreviewAvatar(!showPreviewAvatar)}>Toggle PreviewAvatar</button>
      {showPreviewAvatar && <PreviewAvatar/>}
    </div>
  );
}

export default App;
