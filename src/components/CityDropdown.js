import React, { useState, useContext } from 'react';
// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { CarContext } from './CarContext';

const CityDropdown = () => {
  const { city, setCity, cities } = useContext(CarContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{city}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {cities.map((city, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setCity(city)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {city}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CityDropdown;