import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import { useLocation } from '@docusaurus/router';
import { englishNavbarItems, chineseNavbarItems } from '../../../navbarItems.config';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function getLocalizedNavbarItems(locale: string): NavbarItemConfig[] {
  switch (locale) {
    case 'zh':
      return chineseNavbarItems;
    case 'en':
    default:
      return englishNavbarItems;
  }
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?

  const location = useLocation();
  
  const locale = location.pathname.startsWith('/zh/') ? 'zh' : 'en';
  // const items = useNavbarItems();
  const items = getLocalizedNavbarItems(locale);

  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}
