import React from 'react';

import { Image, NavbarBrand } from '@nextui-org/react';

// TODO: Logo Image needs to be replaced with SVG
const HeaderLogo = () => {
  return (
    <NavbarBrand>
      <Image width={54} alt="CT Logo" src="logo.jpg" />
      <p className="font-bold text-inherit">CT</p>
    </NavbarBrand>
  );
};

export default HeaderLogo;
