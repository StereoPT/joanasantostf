import Header from '@/components/Header/Header';
import { ReactNode } from 'react';

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
