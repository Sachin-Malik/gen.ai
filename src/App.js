import './App.css';
import Catalog from './components/Catalog/Catalog';
import HeroBanner from './components/HeroBanner/HeroBanner';
function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: 'rebeccapurple', paddingBottom: '40px' }}>
        <div style={{ height: '100px' }}>
        </div>
        <HeroBanner />
      </div>
      <Catalog />
    </div>
  );
}

export default App;
