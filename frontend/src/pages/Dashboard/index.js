import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

function Dashboard() {

  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user')
      const response = await api.get('dashboard', {
        headers: {
          user_id: user_id
        }
      })

      setSpots([...response.data])
    }

    loadSpots()

  }, [])

  // VIDEO INTERFACE WEB 1:10

  return (
    <>
      <ul className="spot-list">
        {(spots) && (spots.map((value) => (
          <li key={value._id}>
            <header style={{ backgroundImage: `url(${value.thumbnail_url})` }} />
            <strong>{value.company}</strong>
            <span>{(value.price) ? `R$ ${value.price}/dia` : 'FREE'}</span>
          </li>
        )))}
      </ul>

      <Link to="/newspot">
        <button className="btn">
          Cadastrar Novo Spot
        </button>
      </Link>
    </>
  )
}

export default Dashboard
