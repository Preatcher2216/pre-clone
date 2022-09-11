import {Outlet} from 'react-router';

import styles from './Base.module.scss';
import {Footer} from './Footer';
import {Header} from './Header';


export const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
