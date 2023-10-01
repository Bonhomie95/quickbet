import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import { headerLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  const addActive = (index: string) => {
    setActive(index);
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-white shadow-sm hidden md:flex items-center justify-between p-4">
        <div className="flex list-none items-center justify-center lg:gap-4 md:gap-2">
          {headerLinks.map((header) => (
            <Link
              key={header.id}
              to={`/${header.id}`}
              onClick={() => addActive(header.id)}
            >
              {' '}
              <li
                key={header.id}
                className={`text-[#222] font-medium px-4 py-2 
              ${
                active === null && header.id === 'highlights'
                  ? 'bg-[#B99DDD] text-white'
                  : ''
              }
              ${header.id === active ? 'bg-[#B99DDD] text-white' : ''}`}
              >
                {' '}
                {header.title}{' '}
              </li>{' '}
            </Link>
          ))}
        </div>
        <Link to="/deposit">
          <div className="text-white bg-[#694498B2] hover:bg-[#5e3e88b2] rounded-2xl px-7 py-2">
            Deposit
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
