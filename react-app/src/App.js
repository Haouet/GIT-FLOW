
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Header from './components/pages/elements/Header';



function App() {
  return (
  <>
  <Header/>
      <Routes>
                <Route exact path="/" element={<Home/>} />                
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
     </Routes>
     </>
  
  );
}

export default App;
