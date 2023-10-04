import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Contact from './components/Contact';
import Layout from './layout/Layout';
import Cart from './components/Cart';
import Error from './pages/Error';
import Filter from './components/Filter';
import FlowerList from './components/Flower-list';
import About from './pages/About';
import FlowerDetail from './components/Flower';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<FlowerList />} />
          <Route path='/store/:id' element={<FlowerDetail />} />
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
