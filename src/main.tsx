import { StrictMode } from 'react'
import {Container, createRoot} from 'react-dom/client'

import React from "react"
import App from "./App";

import './index.css'
import './globals.css'

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
