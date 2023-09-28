import { AllWinners } from '../constants';
import WinnersLogo from '/winnersbet.png';

const Winners = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full bg-[#694498] flex items-center justify-center py-2 rounded-md">
        <img src={WinnersLogo} alt="Winners" />
        <label className="text-white">Prize Winners</label>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {AllWinners.map((all, index) => (
          <div key={index} className="bg-white shadow-md py-4 px-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <label className="text-[#222] text-sm"> {all.type} </label>
              <span className="text-[#8E8E8E] text-xs"> {all.time} </span>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-[#222] text-sm"> {all.user} </label>
              <span className="text-[#2CB216] text-md font-medium">
                {' '}
                {all.amount}{' '}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winners;
