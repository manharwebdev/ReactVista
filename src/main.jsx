import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store/store'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
          <App />
        </BrowserRouter>
          </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
