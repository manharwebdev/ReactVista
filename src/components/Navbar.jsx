import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import DarkToggle from './DarkToggle'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

const active = ({ isActive }) =>
  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  return (
    <motion.header initial={{ y:-20 }} animate={{ y:0 }} className="bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to='/' className="text-xl font-bold">MyReactFull</Link>
        <nav className="space-x-4 hidden md:flex items-center">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
          <NavLink to="/api" className={active}>API</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <DarkToggle />
          {user ? (
            <>
              <span className="hidden sm:inline">Hello, {user.name}</span>
              <button onClick={()=>{ logout(); navigate('/') }} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1 bg-blue-600 text-white rounded">Login</Link>
          )}
        </div>
      </div>
    </motion.header>
  )
}
