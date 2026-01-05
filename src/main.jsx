import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/flaticon.css'
import './styles/global.css'
import App from './App.jsx'

// Handle redirects from 404.html
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
    sessionStorage.removeItem('redirectPath');
    window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
