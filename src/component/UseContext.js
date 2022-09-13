import { useContext } from "react";
import Paragraph from "./Paragraph";
import { ThemeContext } from './ThemeContext';

// Context
// CompA => CompB => CompC

// 3 steps to use useContext:
// 1. Create Context
// export const ThemeContext = createContext()

// 2. Provider
// 3. Consumer

// Theme: Dark/Light 

function UseContext() {
    const context = useContext(ThemeContext)

    return (
        // <ThemeProvider>
            <div>
                <button onClick={context.toggleTheme}>Toggle Theme</button>
                <Paragraph />
            </div>
        // </ThemeProvider>
    )
}   

export default UseContext
