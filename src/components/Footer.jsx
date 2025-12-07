import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} MyReactFull. All rights reserved.</p>
      </div>
    </footer>
  )
}
