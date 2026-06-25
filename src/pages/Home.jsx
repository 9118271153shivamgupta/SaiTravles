import React from 'react';
import HomeHero from '../components/HomeHero'; // Naya HomeHero Import Kiya
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import HomeAboutWelcome from '../components/HomeAboutWelcome';
import { useNavigate } from 'react-router-dom';
import TourPlanner from '../components/TourPlanner';
import TaxiBookingSection from '../components/TaxiBookingSection';

const Home = () => {

   const navigate = useNavigate();

  const handleViewCategory = (categoryId) => {
    // ⚠️ Is helper mapping se exact vahi paths banenge jo aapke menu data me hain!
    const pathMapping = {
      domestic: '/domestic-tour',
      international: '/international-tour',
      religious: '/religious-tour',
      hillstation: '/hill-station-tour'
    };

    const targetPath = pathMapping[categoryId] || '/';
    navigate(targetPath);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* 1. Dynamic Auto-Playing Banner Slider */}
      <HomeHero />

     <HomeAboutWelcome showReadMore={true} />

      <TourPlanner 
        showViewMoreButton={true}
        onViewCategory={handleViewCategory} // Ab sahi path mapping pass hogi
        onViewDetails={(tourId) => navigate(`/tour/${tourId}`)}
        onBookNow={(title) => alert(`Booking Form open for: ${title}`)}
      />
      <TaxiBookingSection/> 
      

    </div>
  );
};

export default Home;