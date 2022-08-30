import { useReducer } from "react";

// useState
// 1. init state: 0
// 2. Actions: Up and Down

// useReducer
// 1. init state: 0
// 2. Actions: Up and Down
// 3. Create Reducer
// 4. Dispatch

// init state
const initState = 0
// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Create Reducer
const reducer = (curState, action) => {
  switch(action) {
    case UP_ACTION:
      return curState + 1
    case DOWN_ACTION:
      return curState - 1
    default:
      throw new Error(`Invalid action!`)
  }
}

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initState)

  const handleDown = () => {
    dispatch(DOWN_ACTION)
  }

  const handleUp = () => {
    dispatch(UP_ACTION)
  }
  
  return (
    <div>
      <h2>{count}</h2>
      <button 
        onClick={handleDown}
      >
        Down
      </button>
      <button 
        onClick={handleUp}
      >
        Up
      </button>
    </div>
  )
}

export default UseReducer;
