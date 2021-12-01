import { FC } from 'react'
import useSWR from 'swr'

type Props = {
  pokemonName: string
}

const Pokemon: FC<Props> = ({ pokemonName }) => {

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  if (error || data.error ) {
    return <div />
  }

  if (!data) {
    return <div>Loading...</div>
  }

  const { id, name, sprites, types } = data
  const pokemonTypes = types.map((pokemonType: any) => pokemonType.type.name)

  return (
    <>
      <div>
        <h2>{name}</h2>
        <div>#{id}</div>
      </div>

      <img alt={name} src={sprites.front_default} />

      {pokemonTypes.map((pokemonType: string) => <p>{pokemonType}</p>)}
    </>

  )

}

export default Pokemon