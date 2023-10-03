import { LiveMatches } from '../constants';

const Matches = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 text-xs md:text-sm lg:text-md">
      {LiveMatches.map((livematch, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="hidden lg:flex items-center justify-center gap-2">
            <span className="text-[#28CC0E]"> {`${livematch.time}`}' </span>
            <img src={livematch.logo1} alt="Logo 1" />
            <span className="uppercase"> {`${livematch.team1}`} </span>
            <span> {livematch.score} </span>
            <img src={livematch.logo2} alt="Logo 1" />
            <span className="uppercase"> {`${livematch.team2}`} </span>
          </div>
          <div className="flex flex-col lg:hidden items-center justify-between gap-2">
            <div className="flex items-center justify-between">
              <span></span>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="flex items-center justify-between gap-1 md:gap-3 lg:gap-4">
            <span className="bg-[#F5F5F5] px-3 py-2 rounded-md cursor-pointer hover:text-gray-600">
              {' '}
              {livematch.win1}{' '}
            </span>
            <span className="bg-[#F5F5F5] px-3 py-2 rounded-md cursor-pointer hover:text-gray-600">
              {' '}
              {livematch.draw}{' '}
            </span>
            <span className="bg-[#F5F5F5] px-3 py-2 rounded-md cursor-pointer hover:text-gray-600">
              {' '}
              {livematch.win2}{' '}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matches;
