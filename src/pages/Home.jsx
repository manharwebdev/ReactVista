import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

export default function Home(){
  const count = useSelector((s)=>s.counter.value)
  return (
    <section>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-3xl font-bold mb-4">Welcome to My React Full Starter</motion.h1>
      <p className="mb-4">This template includes Tailwind, Router, Redux Toolkit, Context API, and more.</p>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <p>Redux counter (example): {count}</p>
      </div>
    </section>
  )
}
