import React from 'react'

import Route from './routes'

import './App.css'

import logo from './assets/logo.svg'

function App() {


  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo AirCnC" />
        <div className="content">
          <Route />
        </div>
      </div>
    </div>
  )
}

export default App
