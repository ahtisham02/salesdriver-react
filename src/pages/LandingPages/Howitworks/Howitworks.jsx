import React from 'react'
import Header from '../../../ui-components/LandingPage/Howitworks/Header';
import Card from '../../../ui-components/LandingPage/Howitworks/Card';
import Testimonial1 from '../../../ui-components/LandingPage/Howitworks/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/Howitworks/Testimonial2';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Testimonial1 />
         <Testimonial2 />
         <Card />
       </div>
   );
}
