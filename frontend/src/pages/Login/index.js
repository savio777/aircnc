import React, { useState } from 'react'

import api from '../../services/api'

function Login({ history }) {

  const [email, setEmail] = useState('')

  async function handleLogin(event) {
    event.preventDefault()

    const user = await api.post('sessions', { email: email })

    const { _id } = user.data

    localStorage.setItem('user', _id)

    history.push('/dashboard')
  }


  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores
            e encontre <strong>talentos</strong> para sua empresa
          </p>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          onChange={event => setEmail(event.target.value)}
          placeholder="Seu melhor Email"
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}

export default Login
