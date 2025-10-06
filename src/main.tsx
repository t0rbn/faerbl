import { StrictMode } from 'react'
import {Container, createRoot} from 'react-dom/client'

import React from "react"
import Game from "./routes/game/Game";

import './index.css'
import './globals.css'
import {AppComponent} from "./App";

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
)
