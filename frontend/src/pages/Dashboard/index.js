import React, { useEffect } from 'react'

import api from '../../services/api'

function Dashboard() {

  // 1 HORA DE VIDEO
  //  const [spots, setSpots] = useState(null)

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user')
      const response = await api.get('dashboard', {
        headers: {
          user_id: user_id
        }
      })

      // teste
      console.log(response.data)
    }

    loadSpots()

  }, [])

  return (
    <div >
      <h1>iaekkk</h1>
    </div>
  )
}

export default Dashboard
