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
import FakechatApp from "./component/FakeChatApp";
import Countdown from "./component/Countdown";
import Memo from "./component/Memo";

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showPreviewAvatar, setShowPreviewAvatar] = useState(false)
  const [showFakeChatApp, setShowFakeChatApp] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [showMemo, setShowMemo] = useState(false)

  return (
    <div className="App" style={{ padding: 55 }}>
      <button onClick={() => setShowContent(!showContent)}>Toggle Content</button>
      {showContent && <Content/>}
      <span> </span>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      {showTimer && <Timer/>}
      <span> </span>
      <button onClick={() => setShowPreviewAvatar(!showPreviewAvatar)}>Toggle PreviewAvatar</button>
      {showPreviewAvatar && <PreviewAvatar/>}
      <span> </span>
      <button onClick={() => setShowFakeChatApp(!showFakeChatApp)}>Toggle FakeChatApp</button>
      {showFakeChatApp && <FakechatApp/>}
      <span> </span>
      <button onClick={() => setShowCountdown(!showCountdown)}>Toggle Countdown</button>
      {showCountdown && <Countdown/>}
      <button onClick={() => setShowMemo(!showMemo)}>Toggle Memo</button>
      {showMemo && <Memo/>}
    </div>
  );
}

export default App;
