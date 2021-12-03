import { useRouter } from 'next/router'
import Head from 'next/head'
import Menu from '../../components/Menu'

export default function City({ city }) {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>Visiter {city.name}</title>
      </Head>
      <Menu />
      <h1>{city.name}</h1>
      <img alt={id} src={city.image} width={600} />
    </>
  ) 
}

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json()
  return { props: { city: data } }
}

export async function getStaticPaths() {
  const req = await fetch('http://localhost:3000/cities.json')
  const data = await req.json()
  const paths = data.map(cityName => {
    return { params: { id: cityName} }
  })
  return { paths, fallback: false }
}