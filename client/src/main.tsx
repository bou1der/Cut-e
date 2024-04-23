import React from 'react'
import ReactDOM from 'react-dom/client'
import PrivateRouter from "./PrivateRouter.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivateRouter/>
  </React.StrictMode>,
)
