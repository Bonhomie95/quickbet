import { Link } from 'react-router-dom';

const Betslip = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-8 shadow-md bg-white">
      <div className="w-full flex items-center justify-center m-0 p-0 text-white capitalize">
        <Link to="/" className="px-10 py-2 bg-[#5D388C] w-1/2 text-center">
          Betslip
        </Link>
        <Link to="/" className="px-6 py-2 bg-[#694498]/[0.8] w-1/2 text-center whitespace-nowrap">
          Open bets
        </Link>
      </div>
      <div className="w-full bg-[#694498]/[0.4] text-[#222222] py-2 px-4 text-[10px]">
        <p className="text-center">
          Win big on real fixtures with virtually simulated result
        </p>
      </div>
      <div>Body</div>
      <div className="flex flex-col justify-center items-stretch gap-4 w-full mb-8 p-4 text-xs font-semibold text-[#222]">
        <div className="flex items-center justify-between w-full text-center">
          <label>Total stake:</label>
          <label className="w-12 border-solid border-[0.4px] border-[#888] rounded-sm px-10 py-1">
            0.00
          </label>
        </div>
        <div className="flex items-center justify-between w-full text-center">
          <label>Odds</label>
          <label>0.00</label>
        </div>
        <div className="flex items-center justify-between w-full text-center">
          <label>Bonus</label>
          <label>0.00</label>
        </div>
        <div className="flex items-center justify-between w-full text-center">
          <label>Winnings:</label>
          <label>0.00</label>
        </div>
      </div>
      <button className="bg-[#5D388C] hover:bg-[#6c40a7] rounded-md w-3/4 text-center text-white py-3 mb-8">
        {' '}
        Place bet
      </button>
    </div>
  );
};

export default Betslip;
