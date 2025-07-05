import './App.css'
import Explanation from './components/Explanation';
import LandingPage from './components/LandingPage';
import ResourcesLinks from './components/ResourcesLinks';

function App() {

  return (
    <>
      <LandingPage />
      <div style={{ height: "100vh" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Explanation />
      </div>
      {/* <div style={{ height: "100vh" }} /> */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <ResourcesLinks />
      </div>
    </>
  )
}

export default App
