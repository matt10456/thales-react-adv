import { Suspense } from "react"
import useSWR from "swr"
import Pokemon from './Pokemon'
import { StyledGrid } from './Pokemon.styled'
import LoadingSkeleton from "./LoadingSkeleton"

const Pokedex = () => {

  const { data } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150')

  return (
    <>
      {data.results.map((pokemon: {name: string}, index: number) => (
        <Suspense key={index} fallback={<StyledGrid><LoadingSkeleton /></StyledGrid>}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </>
  )

}

export default Pokedex