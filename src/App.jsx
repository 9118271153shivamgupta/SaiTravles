import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'

// Saare Pages Imports
import Home from './pages/Home'
// import Booking from './pages/Booking'
import DomesticTour from './pages/DomesticTour'
import InternationalTour from './pages/InternationalTour'
import ReligiousTour from './pages/ReligiousTour'
import HillStationTour from './pages/HillStationTour'
import CabBooking from './pages/CabBooking'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Certificate from './pages/Certificate'
import TourDetailsPage from './pages/TourDetailsPage'

const App = () => {
  return (
    <div className="font-sans antialiased bg-white selection:bg-brand-primary selection:text-white">
      {/* Global Header Layout */}
      <TopBar />
      <Navbar />

      {/* Dynamic Routing Structure */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        
        {/* Main Navbar Links */}
        <Route path="/domestic-tour" element={<DomesticTour />} />
        <Route path="/international-tour" element={<InternationalTour />} />
        <Route path="/religious-tour" element={<ReligiousTour />} />
        <Route path="/hill-station-tour" element={<HillStationTour />} />
        <Route path="/cab-booking" element={<CabBooking />} />
        
        {/* Top Bar Links */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/certificate" element={<Certificate />} />
        {/* <Route path="/domestic" element={<DomesticTour />} /> Naya Component Link Kiya */}
      <Route path="/tour/:tourId" element={<TourDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App