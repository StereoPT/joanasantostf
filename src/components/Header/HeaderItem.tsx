import React from 'react';

import { Link, NavbarItem } from '@nextui-org/react';
import { NavItemType } from '@/types/header';

type HeaderItemType = {
  item: NavItemType;
};

const HeaderItem = ({ item }: HeaderItemType) => {
  return (
    <NavbarItem>
      <Link color="foreground" href={item.href}>
        {item.label}
      </Link>
    </NavbarItem>
  );
};

export default HeaderItem;
