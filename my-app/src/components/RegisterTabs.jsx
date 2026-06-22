const tabs = ['Exhibitor', 'Sponsor', 'Speaker', 'Visitor']

function RegisterTabs() {
  return (
    <section className="register-strip" id="register">
      <div className="register-inner">
        <p>Register with us as:</p>
        <div className="register-links">
          {tabs.map((tab) => (
            <a href={`#${tab.toLowerCase()}`} key={tab}>{tab}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegisterTabs
