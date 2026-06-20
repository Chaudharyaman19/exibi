const roles = ['Exhibitor', 'Sponsor', 'Speaker', 'Visitor']

function RegisterTabs() {
  return (
    <section className="register-strip" id="register" aria-label="Registration links">
      <div className="register-inner">
        <p>Register with us as:</p>
        <div className="register-links">
          {roles.map((role) => (
            <a href={`#${role.toLowerCase()}`} key={role}>
              {role}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegisterTabs
