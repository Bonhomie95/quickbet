import { Betslip, Winners } from '../../components';
const Rightsidebar = () => {
  return (
    <div className='hidden md:flex flex-col items-center justify-between'>
      <Betslip />
      <Winners />{' '}
    </div>
  );
};

export default Rightsidebar;
