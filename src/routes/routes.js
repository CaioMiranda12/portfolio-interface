import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import { AboutMe, Home, Projetos } from '../containers'

function MyRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutMe />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
