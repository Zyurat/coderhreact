import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar 
        titulo={'CoderHouse!'} 
        menu1={'Menú 1'} 
        menu2={'Menú 2'} 
        menu3={'Menú 3'}/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Hola vite"/> }/>
        <Route path='/detail/:productId' element={ <ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
