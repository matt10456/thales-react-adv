export default function Hello() {
  console.log('Où serai-je affiché ? Côté serveur ou côté client ?')
  return (
    <>
      <h1>Bonjour, je suis un composant inutile<br /> qui affiche 3 titres:</h1>
      { [1,2,3].map(n => (<h2 key={n}>Titre {n}</h2>)) }
    </>
  )
}