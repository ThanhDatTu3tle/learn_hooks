import { useState, useLayoutEffect } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback một lần sau khi component mounted

// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ----------------------------------
// Lý thuyết chung
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

function Timer() {

  const [count, setCount] = useState(1)

  useLayoutEffect(() => {
    if (count > 3) 
      setCount(0)

    // return () => {
    //   console.log(`Cleanup`)
    // }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default Timer;
