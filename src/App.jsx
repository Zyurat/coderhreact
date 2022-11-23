import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola soy una app con vite" />
    </div>
  );
}

export default App;
