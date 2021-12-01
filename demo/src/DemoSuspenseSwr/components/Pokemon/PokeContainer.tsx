import { Suspense } from "react"
import Pokedex from "./Pokedex"

const PokeContainer = () => {

  return (
    <Suspense fallback={<h2>Chargement du Pokedex...</h2>}>
      <Pokedex />
    </Suspense>
  )

}

export default PokeContainer