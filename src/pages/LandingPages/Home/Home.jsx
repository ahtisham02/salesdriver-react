import React from 'react'
import Header from '../../../ui-components/LandingPage/Home/Header';
import Slider from '../../../ui-components/LandingPage/Home/Slider';
import Testimonial1 from '../../../ui-components/LandingPage/Home/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/Home/Testimonial2';
import Testimonial3 from '../../../ui-components/LandingPage/Home/Testimonial3';
import Testimonial4 from '../../../ui-components/LandingPage/Home/Testimonial4';
import Card from '../../../ui-components/LandingPage/Home/Card';
import Section from '../../../ui-components/LandingPage/Home/Section';
import Card2 from '../../../ui-components/LandingPage/Home/Card2';
import NewSec from '../../../ui-components/LandingPage/Home/NewSec';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Slider />
         <Testimonial1 />
         <Testimonial2 />
         <Testimonial3 />
         <Testimonial4 />
         <Card />
         <NewSec />
         <Section />
         <Card2 />
       </div>
   );
}
