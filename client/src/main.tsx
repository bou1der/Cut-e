import React from 'react'
import ReactDOM from 'react-dom/client'
import PrivateRouter from "./PrivateRouter.tsx";
import "tailwindcss/tailwind.css"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivateRouter/>
  </React.StrictMode>,
)
