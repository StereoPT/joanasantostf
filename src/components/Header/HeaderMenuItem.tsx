import React from 'react';

import { Link, NavbarMenuItem } from '@nextui-org/react';
import { NavItemType } from '@/types/header';

type HeaderMenuItemType = {
  item: NavItemType;
};

const HeaderMenuItem = ({ item }: HeaderMenuItemType) => {
  return (
    <NavbarMenuItem>
      <Link className="w-full" color="foreground" href={item.href} size="lg">
        {item.label}
      </Link>
    </NavbarMenuItem>
  );
};

export default HeaderMenuItem;
