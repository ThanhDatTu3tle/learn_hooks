import { Button, Input, inputAdornmentClasses } from '@mui/material';
import { handleBreakpoints } from '@mui/system';
import { useReducer, useRef, useEffect } from "react";

// useReducer
// 1. Init state
const initState = {
  task: '',
  tasks: JSON.parse(localStorage.getItem('tasks')) ?? []
}
// 2. Actions
const SET_TASK = 'set_task'
const ADD_TASK = 'add_task'
const DELETE_TASK = 'delete_task'

const setTask = payload => {
  return {
    type: SET_TASK,
    payload
  }
}

const addTask = payload => {
  return {
    type: ADD_TASK,
    payload
  }
}

const deleteTask = payload => {
  return {
    type: DELETE_TASK,
    payload
  }
}

// 3. Reducer
const reducer = (state, action) => {
  let newState

  switch(action.type) {
    case SET_TASK:
      newState = {
        ...state,
        task: action.payload,
      }
      break
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
      localStorage.setItem('tasks', JSON.stringify(newState.tasks))
      break
    case DELETE_TASK:
      const newTasks = [...state.tasks]
      newTasks.splice(action.payload, 1)

      newState = {
        ...state,
        tasks: newTasks,
      }
      localStorage.setItem('tasks', JSON.stringify(newState.tasks))
      break
    default:
      throw new Error(`Invalid action!`)
  }

  return newState
}

// 4. Dispatch


function AdvancedTodolist() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { task, tasks } = state

  const buttonRef = useRef()
  const inputRef = useRef()

  const handleSubmit = () => {
    if(task)
      dispatch(addTask(task))
      dispatch(setTask(''))
      
      inputRef.current.focus()
  }

  useEffect(() => {
    const handleBtnAdd = (e) => {
      // console.log(e)
      e.code === 'Enter' && buttonRef.current.click()
    }
    window.addEventListener('keydown', handleBtnAdd)

    return () => {
      window.removeEventListener('keydown', handleBtnAdd)
    }
  }, [])

  return (
    <div>
      <h2>Todos</h2>
      <Input 
        ref={inputRef}
        value={task}
        placeholder="Enter task..."
        onChange={e => {
          dispatch(setTask(e.target.value))
        }}
      />
      <Button 
       ref={buttonRef}
        style={{ margin: 3, fontSize: 10 }} 
        onClick={handleSubmit} 
        variant="contained"
      >
        Add
      </Button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <span onClick={() => dispatch(deleteTask(index))}>
              &times; 
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdvancedTodolist;
