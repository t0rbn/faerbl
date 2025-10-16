import React, {StrictMode} from 'react'
import {Container, createRoot} from 'react-dom/client'

import './index.css'
import './globals.css'
import {AppComponent} from "./App";

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/faerbl/sw.js').then(() => {}));
}

createRoot(document.getElementById('root') as Container).render(
    <StrictMode>
        <AppComponent/>
    </StrictMode>,
)
