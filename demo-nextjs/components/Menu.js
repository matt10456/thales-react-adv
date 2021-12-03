const CITIES = ['Paris', 'Riga', 'Turin']
const style = {display: 'inline', padding: 10, color: 'purple'}

export default () => (
  <ul>
    <li style={{ ...style, paddingRight: 40, fontSize: 20, color: 'black' }}>
      <a href="/cities">Liste</a>
    </li>
    {CITIES.map(city => (
      <li key={city} style={style}>
        <a href={city.toLowerCase()}>{city}</a>
      </li>
    ))}
  </ul>
)