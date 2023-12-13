"use client";
import React, { useState, useContext, useEffect, type ReactNode } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Theme } from '../definitions';

type ThemeContextProviderProps = {
    children: ReactNode;
};

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme') as Theme;
    return storedTheme ?? (prefersDarkMode ? 'dark' : 'light');
    }
}
const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme()!);

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider;