import React from 'react'

import './App.css'

import logo from './assets/logo.svg'

const App = () => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo AirCnC" />
        <div className="content">
          <p>
            Ofereça <strong>spots</strong> para programadores
            e encontre <strong>talentos</strong> para sua empresa
          </p>
          <form method="POST" action="">
            <label htmlFor="email">EMAIL *</label>
            <input
              type="email"
              id="email"
              placeholder="Seu melhor Email"
            />
            <button className="btn" type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
