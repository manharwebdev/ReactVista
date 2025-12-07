import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const [name, setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    // dummy login (frontend only)
    login({ name: name || 'Guest' })
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login (dummy)</h2>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}
