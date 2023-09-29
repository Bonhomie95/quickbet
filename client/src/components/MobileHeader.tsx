import { Link } from 'react-router-dom';

import { headerLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  const addActive = (index: string) => {
    setActive(index);
  };
  return (
        <div className="bg-white shadow-sm md:hidden flex list-none items-center justify-start lg:gap-4 gap-4 w-full">
          {headerLinks.map((header) => (
            <Link key={header.id} to={`/${header.id}`} onClick={() => addActive(header.id)}>
              {' '}
              <li
                key={header.id}
                className={`text-[#222] text-[7px] font-medium px-2 py-2 whitespace-nowrap
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
  );
};

export default Header;
