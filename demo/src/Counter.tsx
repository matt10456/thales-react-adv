import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState<number>(0)

  const handleCounter = (operation = 'add') => {

    if (operation === 'add') {
      return setCounter(counter + 1)
    }

    setCounter(counter - 1)

  }

  return (
    <p>
      Compteur: {counter}<br />
      <button onClick={ () => handleCounter('add') }>Ajouter +</button>
      <button onClick={ () => handleCounter('sub') }>Soustraire -</button>
    </p>
    
  )
}

export default Counter