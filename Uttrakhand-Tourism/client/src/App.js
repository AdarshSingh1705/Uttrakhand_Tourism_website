import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Breadcrumb from './components/common/Breadcrumb';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import AllDestinations from './pages/AllDestinations';
import Auli from './pages/destinations/Auli';
import Badrinath from './pages/destinations/Badrinath';
import Bhimtal from './pages/destinations/Bhimtal';
import Chakrata from './pages/destinations/Chakrata';
import Dehradun from './pages/destinations/Dehradun';
import Dhanaulti from './pages/destinations/Dhanaulti';
import Gangotri from './pages/destinations/Gangotri';
import Haridwar from './pages/destinations/Haridwar';
import JimCorbett from './pages/destinations/JimCorbett';
import Kedarnath from './pages/destinations/Kedarnath';
import Mussoorie from './pages/destinations/Mussoorie';
import Nainital from './pages/destinations/Nainital';
import RajajiNationalPark from './pages/destinations/RajajiNationalPark';
import Rishikesh from './pages/destinations/Rishikesh';
import Sattal from './pages/destinations/Sattal';
import ValleyOfFlowers from './pages/destinations/ValleyOfFlowers';
import TehriDam from './pages/destinations/TehriDam';
import Yamunotri from './pages/destinations/Yamunotri';
import Chatbot from './components/Chatbot';
import './styles/styles.css';
import './styles/D-styles.css';
import './styles/dark-mode.css';
import './styles/responsive.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
        <Layout>
          <Breadcrumb />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/destinations" element={<AllDestinations />} />
          <Route path="/destinations/auli" element={<Auli />} />
          <Route path="/destinations/badrinath" element={<Badrinath />} />
          <Route path="/destinations/bhimtal" element={<Bhimtal />} />
          <Route path="/destinations/chakrata" element={<Chakrata />} />
          <Route path="/destinations/dehradun" element={<Dehradun />} />
          <Route path="/destinations/dhanaulti" element={<Dhanaulti />} />
          <Route path="/destinations/gangotri" element={<Gangotri />} />
          <Route path="/destinations/haridwar" element={<Haridwar />} />
          <Route path="/destinations/jim-corbett" element={<JimCorbett />} />
          <Route path="/destinations/kedarnath" element={<Kedarnath />} />
          <Route path="/destinations/mussoorie" element={<Mussoorie />} />
          <Route path="/destinations/nainital" element={<Nainital />} />
          <Route path="/destinations/rajaji-national-park" element={<RajajiNationalPark />} />
          <Route path="/destinations/rishikesh" element={<Rishikesh />} />
          <Route path="/destinations/sattal" element={<Sattal />} />
          <Route path="/destinations/tehri-dam" element={<TehriDam />} />
          <Route path="/destinations/valley-of-flowers" element={<ValleyOfFlowers />} />
          <Route path="/destinations/yamunotri" element={<Yamunotri />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
