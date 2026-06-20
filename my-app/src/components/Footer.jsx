import logo from '../assets/aeae-footer-logo.png'

const socialLinks = [
  ['facebook', 'Facebook', 'f'],
  ['instagram', 'Instagram', '◎'],
  ['linkedin', 'LinkedIn', 'in'],
  ['whatsapp', 'WhatsApp', '☎'],
  ['youtube', 'YouTube', '▶'],
]

const eventDetails = [
  ['calendar', '23 - 25 April 2027'],
  ['pin', 'Bharat Mandapam (Pragati Maidan)'],
  ['pin', 'New Delhi, India'],
]

const contactDetails = [
  ['phone', '+91 69508 28204', 'tel:+916950828204'],
  ['mail', 'sales@autoenhance.com', 'mailto:sales@autoenhance.com'],
  ['web', 'www.autoenhance.com', 'https://www.autoenhance.com'],
  ['pin', 'SF 237, Gaur City Center, Greater Noida'],
]

function Footer() {
  return (
    <footer className="site-footer" id="contact-us">
      <h2>Be Seen. Be Remembered. Be Part of Auto Enhance Asia Expo.</h2>
      <div className="footer-content">
        <div className="footer-event">
          <img src={logo} alt="Auto Enhance Asia Expo" />
          <address className="footer-list">
            {eventDetails.map(([icon, text], index) => (
              <span className="footer-line" key={`${icon}-${text}`}>
                <span className={`footer-icon footer-icon--${index === 0 ? 'calendar' : 'pin'}`} aria-hidden="true" />
                {index === 0 ? <strong>{text}</strong> : text}
              </span>
            ))}
          </address>
        </div>

        <div className="footer-contact footer-list">
          {contactDetails.map(([icon, text, href]) => (
            <span className="footer-line footer-line--right" key={`${icon}-${text}`}>
              {href ? <a href={href}>{text}</a> : text}
              <span className={`footer-icon footer-icon--${icon}`} aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      <div className="social-row" aria-label="Social links">
        <span>Follow Us:</span>
        {socialLinks.map(([name, label, mark]) => (
          <a href="#contact-us" className={`social-link social-link--${name}`} key={label} aria-label={label}>
            {mark}
          </a>
        ))}
      </div>

      <div className="copyright">
        <img src={logo} alt="Auto Enhance Asia Expo" className="copyright-logo" />
        <span>2026-27 Rights Reserved</span>
        <a href="#privacy">Privacy Policy | Terms &amp; Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
