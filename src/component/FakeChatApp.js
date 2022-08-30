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

const lessons = [
    {
        id: 1,
        name: 'Ngu 1',
    },
    {
        id: 2,
        name: 'Ngu 2',
    },
    {
        id: 3,
        name: 'Ngu 3',
    }
]

function FakechatApp() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    
    return (
        <div>
            Chat App
            <ul>
                {lessons.map(lesson => (
                    <li     
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FakechatApp;
