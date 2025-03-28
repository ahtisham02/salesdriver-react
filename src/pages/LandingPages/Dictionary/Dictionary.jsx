import React from 'react'
import Header from '../../../ui-components/LandingPage/Dictionary/Header';
import Card2 from '../../../ui-components/LandingPage/Home/Card2';
import SearchSection from '../../../ui-components/LandingPage/Dictionary/SearchSection';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <SearchSection />
         <Card2 />
       </div>
   );
}
