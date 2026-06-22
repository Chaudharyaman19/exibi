import audioIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_06_15 PM.png'
import autoAccessoriesIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 12_49_58 PM.png'
import benefitConnectIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_30_20 PM.png'
import benefitGrowIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_35_11 PM.png'
import benefitShowcaseIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_33_17 PM.png'
import benefitStartupIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_38_22 PM.png'
import bikeGearIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_08_00 PM.png'
import customizationIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_00_13 PM.png'
import detailingIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 12_55_20 PM.png'
import evIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_23_44 PM.png'
import garageIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_10_08 PM.png'
import lubricantsIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_23_41 PM.png'
import offRoadIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 12_51_18 PM.png'
import performanceIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 12_58_11 PM.png'
import startupIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_26_02 PM.png'
import wheelsIcon from '../assets/New folder (2)/ChatGPT Image Jun 22, 2026, 01_03_44 PM.png'

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
