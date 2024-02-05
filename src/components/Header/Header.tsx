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

const Header = () => {
  const menuItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Me', href: '#' },
    { id: 'services', label: 'Services', href: '#' },
    { id: 'team', label: 'Team', href: '#' },
    { id: 'contact', label: 'Contact', href: '#' },
  ];

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
        {menuItems.map((item) => (
          <HeaderLink key={item.id} item={item} />
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end" />

      <NavbarMenu>
        {menuItems.map((item) => (
          <HeaderMenuItem key={item.id} item={item} />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
