import React from 'react'
import Header from '../../../ui-components/LandingPage/Howitworks/Header';
import MainHeader from '../../../ui-components/LandingPage/Howitworks/MainHeader';
import Card from '../../../ui-components/LandingPage/Home/Card';
import Testimonial1 from '../../../ui-components/LandingPage/Howitworks/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/Howitworks/Testimonial2';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <MainHeader />
         <Header />
         <Testimonial1 />
         <Testimonial2 />
         <Card />
       </div>
   );
}
