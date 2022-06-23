import React from 'react';

// import link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className=' container mx-auto font-semibold flex justify-between items-center'>
        <Link to='/'>
          <h1 className='font-semibold'>Car<span className='text-violet-700'>Hub</span></h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/login'
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;