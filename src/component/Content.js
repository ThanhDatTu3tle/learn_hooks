import { useState, useEffect } from "react";

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

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content() {

  const [title, setTitle] = useState('')
  const [types, setTypes] = useState('posts')
  const [contents, setContents] = useState([])
  const [showGoToTop, setShowGoToTop] = useState(false)

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
    <div>
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

export default Content;
