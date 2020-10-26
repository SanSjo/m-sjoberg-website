import React from 'react';

import { MainPage } from 'components/MainPage';
import MultiSelects from 'components/MultiSelects';

export const Home = () => {
  return (
    <div>
      {/* <Sidenav pageWrapId="page-wrap" /> */}
      <MainPage />
      <MultiSelects />
    </div>
  );
};
