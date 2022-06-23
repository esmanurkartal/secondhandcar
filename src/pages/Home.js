import React from 'react';

// import components
import CarList from '../components/CarList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <CarList />
    </div>
  );
};

export default Home;
