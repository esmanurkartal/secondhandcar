import React, { useContext } from 'react';

// import components
import CityDropdown from './CityDropdown';
import BrandDropdown from './BrandDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { CarContext } from './CarContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(CarContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CityDropdown />
      <BrandDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;