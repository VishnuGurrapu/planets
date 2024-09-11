import './index.css'

const PlanetItem = ({planetDetails}) => {
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h2 className="planet-name">{name}</h2>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
