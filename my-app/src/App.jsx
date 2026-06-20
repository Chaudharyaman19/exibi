import ExhibitorProfile from './components/ExhibitorProfile'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import RegisterTabs from './components/RegisterTabs'
import Vision from './components/Vision'
import VisitorProfile from './components/VisitorProfile'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <Header />
      <Hero />
      <RegisterTabs />
      <Vision />
      <ExhibitorProfile />
      <VisitorProfile />
      <Footer />
    </main>
  )
}

export default App
