import { ReactNode } from 'react';
import Header from '@/components/Header/Header';

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
