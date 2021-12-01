import useSWR from "swr"
import Pokemon from './Pokemon'

const Pokedex = () => {

  const { data } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150')

  return (
    <>
      {data.results.map((pokemon: {name: string}, index: number) => (
        <Pokemon key={index} pokemonName={pokemon.name} />
      ))}
    </>
  )

}

export default Pokedex