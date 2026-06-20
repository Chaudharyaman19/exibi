import logo from '../assets/aeae-logo.png'

const navItems = ['Home', 'About The Show', 'Exhibitor Profile', 'Visitor Profile', 'Download', 'Contact Us']

function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <a className="brand" href="#home" aria-label="Auto Enhance Asia Expo home">
          <img src={logo} alt="Auto Enhance Asia Expo" />
        </a>

        <div className="topbar__actions" aria-label="Contact and quick actions">
          <div className="contact-lines">
            <a href="tel:+917205759414">+91 720 5759914</a>
            <a href="mailto:sales@autoenhance.com">sales@autoenhance.com</a>
          </div>
          <div className="cta-row">
            <a className="cta-button" href="#register">Want To Exhibit</a>
            <a className="cta-button" href="#visitor-profile">Want To Visit</a>
          </div>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button className="menu-button" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Header
