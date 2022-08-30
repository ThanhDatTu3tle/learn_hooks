import { useState, useCallback } from "react";
import ContentUseCallback from "./ContentUseCallback";

// 1. memo() => Higher Order Component (HOC)
// 2. useCallback()

function UseCallback() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <ContentUseCallback onIncrease={handleIncrease} /> 
    </div>
  )
}

export default UseCallback;
