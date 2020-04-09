import React from 'react';
import { Header } from '../components/Header';

import Slider from '../components/Slider';
import { HomeCards } from '../components/HomeCards';
import { Footer } from '../components/Footer';
import { Clients } from '../components/Clients';

export const Home = () => {
  return (
    <div>
      <Header />

      <Slider />
      <HomeCards />
      <Clients />
      <Footer />
    </div>
  );
};
