import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
    mode: 'light' | 'dark'
}

const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('theme')
        if (stored === 'dark' || stored === 'light') return stored
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
    }
    return 'light'
}

const initialState: ThemeState = {
    mode: getInitialTheme(),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', state.mode)
            }
        },
        setMode(state, action: PayloadAction<'light' | 'dark'>) {
            state.mode = action.payload
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload)
            }
        },
    },
})

export const { toggleMode, setMode } = themeSlice.actions
export default themeSlice.reducer
