import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import { Home } from './containers'
import MyRoutes from './routes/routes'
import GlobalStyle from './styles/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />

    <Home />
  </React.StrictMode>
)
