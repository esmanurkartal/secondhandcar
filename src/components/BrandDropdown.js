import React, { useState, useContext } from 'react';
// import icons
import { RiCalendar2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { CarContext } from './CarContext';

const BrandDropdown = () => {
  const { brand, setBrand, brands } = useContext(CarContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiCalendar2Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {brand}
          </div>
          <div className='text-[13px]'>Select brand</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {brands.map((brand, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setBrand(brand)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {brand}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BrandDropdown;