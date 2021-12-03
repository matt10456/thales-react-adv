import Link from 'next/link'

export default function Cities() {
  return (
    <div>
      <h1>Villes à visiter</h1>
      <ul>
        <li><Link href="/cities/paris"><a>Paris</a></Link></li>
        <li><Link href="/cities/riga"><a>Riga</a></Link></li>
        <li><Link href="/cities/turin"><a>Turin</a></Link></li>
      </ul>
    </div>
  )
}