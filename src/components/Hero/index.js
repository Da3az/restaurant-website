import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH11,
  HeroH12,
  HeroH13,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [section,setSection] = useState(0)
  const titles = [
    'GREATEST PIZZA EVER',
    'OOOH , THAT BURGER',
    'IS IT TIME FOR SWEETS? ?'
  ]

  const sections = [
    <HeroH11 section= {0}>{titles[section]}</HeroH11>,
    <HeroH12 section={1}>{titles[section]}</HeroH12>,
    <HeroH13 section={2}>{titles[section]}</HeroH13>
  ]

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const timer = setInterval(() => section>1 ? setSection(0) : setSection(section + 1), 9000);               // clearing interval
    return () => clearInterval(timer);
  });

  
  return (
    <HeroContainer section={section}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems section={section}>
          {sections[section]}
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
