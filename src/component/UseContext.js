import { useContext } from "react";
import Paragraph from "./Paragraph"
import { ThemeProvider, ThemeContext } from './ThemeContext';

// Context
// CompA => CompB => CompC

// 1. Create Context
// export const ThemeContext = createContext()

// 2. Provider
// 3. Consumer

// Theme: Dark/Light 

function UseContext() {
    const context = useContext(ThemeContext)

    return (
        <ThemeProvider>
            <div>
                <button onclick={context.toggleTheme}>Toggle Theme</button>
                <Paragraph />
            </div>
        </ThemeProvider>
    )
}

export default UseContext
