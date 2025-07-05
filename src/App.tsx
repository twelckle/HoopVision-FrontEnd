import './App.css'
import Explanation from './components/Explanation';
import LandingPage from './components/LandingPage';

function App() {

  return (
    <>
      <LandingPage />
      <div style={{ height: "100vh" }} /> {/* Spacer for scroll */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Explanation />
      </div>
    </>
  )
}

export default App
