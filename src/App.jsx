import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCollective from './components/layout/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingCollective />
            </div>
        </Router>
    );
}

export default App;
