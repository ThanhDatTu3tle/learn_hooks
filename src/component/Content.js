// import '../App.css';
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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

// ----------------------------------
// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup function nếu deps thay đổi
// 5.  Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content() {

  const [title, setTitle] = useState('')
  const [types, setTypes] = useState('posts')
  const [contents, setContents] = useState([])
  const [showGoToTop, setShowGoToTop] = useState(false)

  const context = useContext(ThemeContext)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then(res => res.json())
      .then(contents => {
        setContents(contents)
      })
  }, [types])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={context.theme}>
      {tabs.map(tab => (
        <button 
          key={tab}
          onClick={() => setTypes(tab)}
          style={types === tab ? { 
            color: 'white', 
            backgroundColor: 'gray' } : {}}
        >
          {tab}
        </button>
      ))}
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {contents.map(content => (
          <li key={content.id}>
            {content.title || content.name}
          </li>
        ))}
      </ul>
      {showGoToTop && (
        <button
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20
        }}>
          Go to top
        </button>
      )}
    </div>
  )
}

export default Content
