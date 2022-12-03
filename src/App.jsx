import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar 
      titulo={'CoderHouse!'} 
      menu1={'Menú 1'} 
      menu2={'Menú 2'} 
      menu3={'Menú 3'}/>
      <ItemListContainer greeting="Hola vite" />
    </div>
  );
}

export default App;
