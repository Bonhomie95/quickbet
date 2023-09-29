import {Header} from '../../components';
import Leftsidebar from './Leftsidebar';
import Main from './MainBody';
import Rightsidebar from './Rightsidebar';

const index = () => {
  return (
    <div>
      <Header />
      <div className="flex md:items-start items-center justify-between gap-4 p-2">
        <Leftsidebar />
        <Main />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default index;
