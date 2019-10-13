import React, { useState, useMemo } from 'react'

import api from '../../services/api'

import './styles.css'

import camera from '../../assets/camera.svg'

function NewSpot({ history }) {

  const [thumbnail, setThumbnail] = useState(null)
  const [company, setCompany] = useState('')
  const [price, setPrice] = useState('')
  const [techs, setTechs] = useState('')

  // useMemo funciona parecido com useEffect
  const preview = useMemo(
    () => (thumbnail) ? URL.createObjectURL(thumbnail) : null,
    [thumbnail]
  )

  async function handleSubmit(event) {
    event.preventDefault()

    const user_id = localStorage.getItem('user')
    const data = new FormData()

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('price', price)
    data.append('techs', techs)

    await api.post('/spots',
      data,
      {
        headers: { user_id: user_id },
      }
    )

    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>

      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={(thumbnail) ? 'has-thumbnail' : ''}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Selecione a Imagem" />
      </label>


      <label htmlFor="company">EMPRESA*</label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="price">VALOR DA DIÁRIA <span>(em branco para GRÁTIS)</span></label>
      <input
        type="number"
        id="price"
        placeholder="Cobrado por dia"
        step="0.01"
        min="0.00"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
      <label htmlFor="techs">TECNOLOGIAS* <span>(Separado por vírgula e espaço)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
}

export default NewSpot
