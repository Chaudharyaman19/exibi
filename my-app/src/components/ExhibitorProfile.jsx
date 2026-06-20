import audioIcon from '../assets/pdf-icons/audio.png'
import autoAccessoriesIcon from '../assets/pdf-icons/auto-accessories.png'
import benefitConnectIcon from '../assets/pdf-icons/benefit-connect.png'
import benefitGrowIcon from '../assets/pdf-icons/benefit-grow.png'
import benefitShowcaseIcon from '../assets/pdf-icons/benefit-showcase.png'
import benefitStartupIcon from '../assets/pdf-icons/benefit-startup.png'
import bikeGearIcon from '../assets/pdf-icons/bike-gear.png'
import customizationIcon from '../assets/pdf-icons/customization.png'
import detailingIcon from '../assets/pdf-icons/detailing.png'
import evIcon from '../assets/pdf-icons/ev.png'
import garageIcon from '../assets/pdf-icons/garage.png'
import lubricantsIcon from '../assets/pdf-icons/lubricants.png'
import offRoadIcon from '../assets/pdf-icons/off-road.png'
import performanceIcon from '../assets/pdf-icons/performance.png'
import startupIcon from '../assets/pdf-icons/startup.png'
import wheelsIcon from '../assets/pdf-icons/wheels.png'

const exhibitorCategories = [
  [autoAccessoriesIcon, 'Auto Accessories & Styling'],
  [offRoadIcon, 'Off-Road & Adventure Products'],
  [detailingIcon, 'Detailing & Surface Protection'],
  [performanceIcon, 'Performance & Tuning'],
  [customizationIcon, 'Car & Bike Customization'],
  [wheelsIcon, 'Wheels, Tyres & Suspension'],
  [audioIcon, 'Car Audio, Electronics & Connectivity'],
  [bikeGearIcon, 'Bike Accessories & Riding Gear'],
  [garageIcon, 'Garage Equipment & Workshop Solutions'],
  [lubricantsIcon, 'Lubricants, Oils & Maintenance Products'],
  [evIcon, 'EV Accessories & Smart Mobility'],
  [startupIcon, 'Startup & Innovation Zone'],
]

const benefits = [
  [benefitConnectIcon, 'Connect', 'Build valuable business connections'],
  [benefitShowcaseIcon, 'Showcase', 'Showcase your innovations & product range'],
  [benefitGrowIcon, 'Grow', 'Expand your reach & grow your business'],
  [benefitStartupIcon, 'Inartupe', 'Be part of the future of auto motive enhancement'],
]

function ExhibitorProfile() {
  return (
    <section className="exhibitor-section page-band" id="exhibitor-profile">
      <h2>Exhibitor Profile</h2>
      <div className="category-grid">
        {exhibitorCategories.map(([icon, category]) => (
          <a href="#contact-us" className="category-card" key={category}>
            <img className="category-icon" src={icon} alt="" />
            <span>{category}</span>
          </a>
        ))}
      </div>
      <div className="benefit-row">
        {benefits.map(([icon, title, copy]) => (
          <article key={title}>
            <img className="benefit-icon" src={icon} alt="" />
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExhibitorProfile
