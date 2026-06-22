import heroLogo from '../assets/a.png'

function Hero() {
  return (
    <section className="hero-section page-band" id="home">
      <div className="hero-card">
        <img src={heroLogo} alt="Auto Enhance Asia Expo" className="hero-brand-image" />
        <p>See You Soon At</p>
        <h2>April, 2027</h2>
        <strong>Bharat Mandapam, New Delhi</strong>
      </div>
    </section>
  )
}

export default Hero
