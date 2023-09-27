import Header from '../../components/Header';
import Leftsidebar from './Leftsidebar';
import Main from './MainBody';
import Rightsidebar from './Rightsidebar';

const index = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-between p-4">
        <Leftsidebar />
        <Main />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default index;
