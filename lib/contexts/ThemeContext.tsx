"use client";
import { createContext } from 'react';
import { Theme } from '../definitions';


type ThemeContextType = {
    theme: Theme;
    toggle: () => void;
};

const defaultState: ThemeContextType = {
    theme: 'light',
    toggle: () => {
        throw new Error("toggle function must be overridden by ThemeContextProvider");
    },
};

export const ThemeContext = createContext<ThemeContextType>(defaultState);
