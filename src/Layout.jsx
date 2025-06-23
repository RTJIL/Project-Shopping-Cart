import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const Layout = () => {
  return (
    <>
      <main style={{ flex: '1' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
