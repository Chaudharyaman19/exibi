import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import RegisterTabs from './components/RegisterTabs';
import Vision from './components/Vision';
import ExhibitorProfile from './components/ExhibitorProfile';
import VisitorProfile from './components/VisitorProfile';
import Footer from './components/Footer';

import heroBg from './assets/new/background.png';

function App() {
  return (
    <main
      className="landing-page"
      style={{
        background: `url(${heroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <Hero />
      {/* <RegisterTabs /> */}
      <Vision />
      <ExhibitorProfile />
      <VisitorProfile />
      <Footer />
    </main>
  );
}

export default App;
