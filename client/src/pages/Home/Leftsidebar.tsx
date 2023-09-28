import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sports } from '../../constants';
import image100 from '/100.png';
import logo from '/logo.png';

const Leftsidebar = () => {
  const [active, setActive] = useState<string | null>(null);

  const addActive = (index: string) => {
    setActive(index);
  };
  return (
    <div className="hidden md:flex flex-col items-left justify-left gap-2 w-2/5">
      <div className="w-full lg:h-52 md:h-48 rounded-md">
        <img src={image100} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center bg-white shadow-md">
        <div className="flex items-center justify-center bg-[#694498] gap-4 text-center px-16 py-2 rounded-md">
          {' '}
          <div className="w-8 h-8 ">
            <img src={logo} className="object-contain w-full h-full" />
          </div>{' '}
          <h3 className="text-white font-semibold cursor-default">
            SPORTS A-Z
          </h3>{' '}
        </div>
        <ul className="flex flex-col gap-3 items-start justify-center text-left w-full py-4">
          {sports.map((sport) => (
            <li
              key={sport.id}
              className={`px-12 text-[#222]
              ${active === null && sport.id === 'football' ? 'opacity-100' :
              sport.id === active ? 'opacity-100': 'opacity-40'}`}
            >
              <Link
                key={sport.id}
                to={sport.id}
                onClick={() => addActive(sport.id)}
              >
                {' '}
                {sport.title}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftsidebar;
