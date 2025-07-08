// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Product from './pages/Product';
import FAQ from './pages/Faq';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router basename="/SmartSpecs">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <FloatingWhatsApp />
      </Router>
    </CartProvider>
  );
}

export default App;




// import Faq from './pages/Faq';
// import Privacy from './pages/Privacy';
// import Terms from './pages/Terms';


  {/* <Route path="/faq" element={<Faq />} /> */}
          {/* <Route path="/privacy" element={<Privacy />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}  
