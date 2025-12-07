import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function ApiDemo(){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(()=>{
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => setData(res.data))
      .catch(e => setErr(e.message))
      .finally(()=>setLoading(false))
  },[])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">API Demo (Axios)</h2>
      {loading && <p>Loading...</p>}
      {err && <p className="text-red-500">Error: {err}</p>}
      <ul>
        {data && data.map(d=>(
          <li key={d.id} className="mb-3 p-3 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="font-semibold">{d.title}</h3>
            <p className="text-sm">{d.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
