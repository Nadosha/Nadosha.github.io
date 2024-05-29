import {createContext, ReactNode, useContext, useState} from "react";
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from "../light";
import darkTheme from "../dark";

type ThemeMode = 'light' | 'dark';

interface ThemeContextI {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextI | undefined>(undefined);

export const useThemeMode = (): ThemeContextI => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};


// Theme Provider component
export const ThemeProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>('light');

    const toggleTheme = () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const value: ThemeContextI = {
        themeMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};