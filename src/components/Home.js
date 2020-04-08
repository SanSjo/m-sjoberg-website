import React from 'react';
import { Header } from './Header';
import NavMeny from './NavMenu';
import Slider from './Slider';
import HomeCards from './HomeCards';

export const Home = () => {
  return (
    <div>
      <Header />
      <NavMeny />
      <Slider />
      <HomeCards />
    </div>
  );
};
