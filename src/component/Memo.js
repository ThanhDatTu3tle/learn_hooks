import { useState, memo } from "react";
import ContentMemo from "./ContentMemo";

// 1. memo() => Higher Order Component (HOC)
// 2. useCallback()

function Memo() {

  const [count, setCount] = useState(0)


  return (
    <div>
        <ContentMemo /> 
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default Memo;
