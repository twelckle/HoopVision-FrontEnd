import './App.css';
import Explanation from './components/Explanation';
import LandingPage from './components/LandingPage';
import ResourcesLinks from './components/ResourcesLinks';

function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <LandingPage />
      <div style={{ height: "100dvh" }}></div>
      <Explanation />
      <ResourcesLinks />
    </div>
  );
}

export default App;