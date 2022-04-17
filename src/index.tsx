import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store/store'
import { GlobalStyle } from './utils/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>
)
