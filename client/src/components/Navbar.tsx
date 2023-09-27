import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { navLinks } from '../constants';
import logo from '/logo.png';

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const addActive = (index: string) => {
    setActive(index);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center bg-[#5D388C] text-white p-4">
        <Link to="/" className="flex justify-center items-center gap-2">
          <div className="w-[50px] h-[40px]">
            <img src={logo} className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold md:flex hidden"> QUICKBET </span>
        </Link>
        <div className="md:flex hidden items-center justify-center lg:gap-5 md:gap-2 rounded-3xl bg-[#694498] ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`list-none py-[12px] lg:px-[45px] md:px-[25px] rounded-full cursor-pointer
              ${active=== null && nav.id==='/' ? 'bg-[#7853A7]' : ''}
              ${
                nav.id === active ? 'bg-[#7853A7]' : 'bg-[#694498]'
              }`}
              onClick={() => addActive(nav.id)}
            >
              <Link to={nav.id}> {nav.title} </Link>
            </li>
          ))}
        </div>
        <div className="md:flex hidden items-center justify-between gap-1">
          <Link to="/login">
            <div className="bg-[#7853A7] hover:bg-transparent px-6 py-2 rounded-md mr-1">
              {' '}
              lOGIN{' '}
            </div>{' '}
          </Link>
          <span className="w-[1px] h-[32px] bg-white opacity-70"></span>
          <Link to="/register">
            {' '}
            <div className="p-1 hover:bg-[#7853A7] px-6 py-2 rounded-md mr-1">
              {' '}
              REGISTER{' '}
            </div>
          </Link>
        </div>
        <div
          className="md:hidden block cursor-pointer"
          onClick={() => setDrop((prev) => !prev)}
        >
          <FaBars
            className={`text-white font-semibold text-3xl  ${
              drop ? 'hidden' : 'block'
            }`}
          />
          <FaTimes
            className={`text-white font-semibold text-3xl  ${
              drop ? 'block' : ' rotate-180 hidden'
            }`}
          />
        </div>
      </div>
      <div className="md:hidden block">
        <div
          className={`${
            drop ? 'flex' : 'hidden'
          } p-2 w-[30%] absolute bg-[#694498] h-[20rem] top-[71px] right-0`}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
