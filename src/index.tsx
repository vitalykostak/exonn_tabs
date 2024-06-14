import '@/app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import { StoreProvider } from '@/app/providers/StoreProvider'
import App from '@/app/App'

const domElement = document.getElementById('root')

if (!domElement) {
    throw new Error('Provide dom element')
}

document.body.classList.add('appNormalTheme')

const root = createRoot(domElement)

root.render(
    // <StoreProvider>
    // no storage yet
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </StoreProvider>
)
