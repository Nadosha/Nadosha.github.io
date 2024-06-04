import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProviderComponent } from '@Theme/lib/ThemeToggleProvider'
import CssBaseline from '@mui/material/CssBaseline'
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '@Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeProviderComponent>
                <CssBaseline />
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProviderComponent>
        </ErrorBoundary>
    </React.StrictMode>
)

reportWebVitals()
