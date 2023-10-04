import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Contact from './components/Contact';
import Layout from './layout/Layout';
import Cart from './components/Cart';
import Error from './pages/Error';
import Filter from './components/Filter';
import FlowerList from './components/Flower-list';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/boutique' element={<FlowerList />} />
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
