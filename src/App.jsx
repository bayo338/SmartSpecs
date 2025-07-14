// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToHashElement from './components/ScrollToHashElement';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Product from './pages/Product';
import FAQ from './pages/Faq';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';
import SubmitReview from './pages/SubmitReview';
import OrderSuccess from './pages/OrderSuccess';
import Payment from './pages/Payment';
import Footer from './components/Footer';
import { CartProvider } from "./context/CartContext";
import { useLocation } from 'react-router-dom';

function App() {
  return (
      <CartProvider>
      <Router basename="/SmartSpecs">
        <Navbar />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/submit-review" element={<SubmitReview />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
       <Footer />
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
