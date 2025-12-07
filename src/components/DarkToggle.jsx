import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function DarkToggle(){
  const {theme, toggle} = useTheme()
  return (
    <button onClick={toggle} className="p-2 rounded border">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
