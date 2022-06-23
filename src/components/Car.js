import React from 'react';

const Car = ({ car }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={car.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {car.year}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
          {car.city}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{car.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'/>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
         {car.price} TL
      </div>
    </div>
  );
};
export default Car