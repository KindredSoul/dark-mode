import {useState} from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (darkMode) => {
    const [value, setValue] = useLocalStorage(darkMode)

    return [value, setValue]
}