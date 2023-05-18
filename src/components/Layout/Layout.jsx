import { BgCircle } from 'components/BgCircle/BgCircle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBar from './../Header/Header';

const Layout = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <div className="container">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <BgCircle />
    </>
  );
};

export default Layout;
