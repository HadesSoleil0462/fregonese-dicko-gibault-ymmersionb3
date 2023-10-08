import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Contact from './components/Contact';
import Layout from './layout/Layout';
import Cart from './components/Cart';
import Error from './pages/Error';
import Filter from './components/Filter';
import About from './pages/About';
import LoginPage from './components/Connection';
import FlowerDetail from './components/Flower';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';
import Inscription from './pages/Inscription';
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
          <Route path='/flowers-store/contact' element={<Contact />} />
          <Route path='/flowers-store/cart' element={<Cart />} />
          <Route path='/flowers-store/about' element={<About />} />
          <Route path='/flowers-store/store' element={<Filter />} />
          <Route path='/flowers-store/store/:id' element={<FlowerDetail />} />
          <Route path='/flowers-store/*' element={<Error />} />
          <Route path='/flowers-store/inscription' element={<Inscription />} />
          <Route path='/flowers-store/connexion' element={<ClientPage />} />
          <Route path='/admin' element={<LoginPage />} />
          <Route path='/admin/page' element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
