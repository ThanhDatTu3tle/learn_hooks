// import logo from './logo.svg';
// import './App.css';
// import * as React from 'react';
import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import { useState } from "react";
import Content from "./component/Content";
import Timer from "./component/Timer";
import PreviewAvatar from "./component/PreviewAvatar";
import FakeChatApp from "./component/FakeChatApp";
import Countdown from "./component/Countdown";
import Memo from "./component/Memo";
import UseCallback from './component/UseCallback';
import UseMemo from './component/UseMemo';
import UseReducer from './component/UseReducer';
import AdvancedTodolist from './component/AdvancedTodolist';

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showPreviewAvatar, setShowPreviewAvatar] = useState(false)
  const [showFakeChatApp, setShowFakeChatApp] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [showMemo, setShowMemo] = useState(false)
  const [showUseCallback, setShowUseCallback] = useState(false)
  const [showUseMemo, setShowUseMemo] = useState(false)
  const [showUseReducer, setShowUseReducer] = useState(false)
  const [showAdvancedTodolist, setShowAdvancedTodolist] = useState(false)

  return (
    <div className="App" style={{ padding: 33 }}>
      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowContent(!showContent)}>Toggle Content</Button>
      {showContent && <Content/>}
      
      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowTimer(!showTimer)}>Toggle Timer</Button>
      {showTimer && <Timer/>}
      
      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowPreviewAvatar(!showPreviewAvatar)}>Toggle PreviewAvatar</Button>
      {showPreviewAvatar && <PreviewAvatar/>}
      
      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowFakeChatApp(!showFakeChatApp)}>Toggle FakeChatApp</Button>
      {showFakeChatApp && <FakeChatApp/>}
      
      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowCountdown(!showCountdown)}>Toggle Countdown</Button>
      {showCountdown && <Countdown/>}

      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowMemo(!showMemo)}>Toggle Memo</Button>
      {showMemo && <Memo/>}

      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowUseCallback(!showUseCallback)}>Toggle UseCallback</Button>
      {showUseCallback && <UseCallback/>}

      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowUseMemo(!showUseMemo)}>Toggle UseMemo</Button>
      {showUseMemo && <UseMemo/>}

      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowUseReducer(!showUseReducer)}>Toggle UseReducer</Button>
      {showUseReducer && <UseReducer/>}

      <Button style={{ margin: 3, fontSize: 10 }} variant="contained" onClick={() => setShowAdvancedTodolist(!showAdvancedTodolist)}>Toggle AdvancedTodolist</Button>
      {showAdvancedTodolist && <AdvancedTodolist/>}
    </div>
  );
}

export default App;
