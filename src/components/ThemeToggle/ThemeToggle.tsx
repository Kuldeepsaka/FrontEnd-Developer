import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from './../../app/stote/themeSlice'
import { RootState } from './../../app/stote/index'
import { Sun, Moon } from 'lucide-react'
import './style.scss'

export default function ThemeToggle() {
    const dispatch = useDispatch()
    const mode = useSelector((state: RootState) => state.theme.mode)

    // Sync mode with root data attribute
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', mode)
    }, [mode])

    return (
        <button
            className="theme-toggle-btn"
            onClick={() => dispatch(toggleMode())}
            aria-label="Toggle theme"
        >
            {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    )
}
