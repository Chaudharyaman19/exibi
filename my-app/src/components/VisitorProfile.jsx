const visitors = [
  'Business Owners & Executives',
  'Automotive Enthusiasts',
  'Retailers & Dealers',
  'Service & Repair Workshops',
  'Smart Mobility Solutions',
  'Investors & Stakeholders',
  'Industry Associations',
  'Content Creators & Influencers',
  'Trade Professionals',
]

function VisitorProfile() {
  return (
    <section className="visitor-section" id="visitor-profile">
      <h2>Visitor Profile</h2>
      <div className="visitor-grid">
        {visitors.map((visitor) => (
          <a href="#register" key={visitor}>
            {visitor}
          </a>
        ))}
      </div>
    </section>
  )
}

export default VisitorProfile
