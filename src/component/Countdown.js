import { useRef, useState, useEffect } from "react";

// lưu các giá trị qua một tham chiếu bên ngoài
// function component

function Countdown() {
    const [count, setCount] = useState(60)

    const timerId = useRef() // luôn return về 1 Object có 1 Prop là current
    const prevState = useRef('Chưa có cc gì cả thì lấy del gì log ra!!!')
    const h1Ref = useRef() // lưu element DOM

    useEffect(() => { // quan sát giá trị của state trước và sau khi renderUI
        prevState.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current);
    })

    console.log('---------------------------------')
    console.log(count, 'Giá trị state hiện tại')
    console.log(prevState.current, 'Giá trị state trước')

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Countdown;
