import { Betslip, Winners } from '../../components';
const Rightsidebar = () => {
  return (
    <div className='hidden md:flex flex-col items-center justify-between gap-4 w-2/5'>
      <Betslip />
      <Winners />{' '}
    </div>
  );
};

export default Rightsidebar;
