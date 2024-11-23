import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hello } from './hello'

import 'antd/dist/reset.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
)
