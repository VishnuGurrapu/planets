import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = ({planetsList}) => {
  return (
    <div className="planets-slider-container" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024, // For tablets
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600, // For mobile devices
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {planetsList.map(planetDetails => (
          <PlanetItem key={planetDetails.id} planetDetails={planetDetails} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
