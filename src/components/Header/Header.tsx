import React from 'react';

import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';

import HeaderLogo from './HeaderLogo';
import HeaderLink from './HeaderItem';
import HeaderMenuItem from './HeaderMenuItem';

import { NAV_ITEMS } from '@/constants';

const Header = () => {
  return (
    <Navbar>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <HeaderLogo />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex sm:flex-1 gap-4"
        justify="center">
        <HeaderLogo />
        {NAV_ITEMS.map((item) => (
          <HeaderLink key={item.id} item={item} />
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end" />

      <NavbarMenu>
        {NAV_ITEMS.map((item) => (
          <HeaderMenuItem key={item.id} item={item} />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
