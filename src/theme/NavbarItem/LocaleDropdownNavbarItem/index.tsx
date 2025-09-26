import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}: Props): ReactNode {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const location = useLocation();

  if (!locales || locales.length < 2) {
    return null;
  }

  const localeItems = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' }
  ];

  const switchLocale = (newLocale: string) => {
    // 获取不带语言前缀的干净路径
    let cleanPath = location.pathname;

    console.log('cleanPath:', cleanPath);
    // 移除所有可能的语言前缀
    locales.forEach(locale => {
      if (locale !== 'en') { // 英文是默认语言，没有前缀
        const localePrefix = `/${locale}`;
        if (cleanPath.startsWith(localePrefix)) {
          cleanPath = cleanPath.substring(localePrefix.length);
        }
      }
    });

    // 确保路径以/开头
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }

    // 处理根路径的特殊情况
    if (cleanPath === '/') {
      if (newLocale === 'en') {
        window.location.assign('/' + location.search + location.hash);
      } else {
        window.location.assign(`/${newLocale}/` + location.search + location.hash);
      }
    } else {
      // 处理其他路径
      if (newLocale === 'en') {
        window.location.assign(cleanPath + location.search + location.hash);
      } else {
        window.location.assign(`/${newLocale}${cleanPath}` + location.search + location.hash);
      }
    }
  };

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? (currentLocale === 'zh' ? '中文' : 'English')
    : (currentLocale === 'zh' ? '中文' : 'English');

  if (mobile) {
    const mobileLocaleItems = localeItems.map((locale) => ({
      label: locale.name,
      to: '#',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        switchLocale(locale.code);
      },
      className: locale.code === currentLocale
        ? 'menu__link--active'
        : '',
    }));

    const items = [...(dropdownItemsBefore || []), ...mobileLocaleItems, ...(dropdownItemsAfter || [])];

    return (
      <DropdownNavbarItem
        {...props}
        mobile={mobile}
        label={
          <>
            <IconLanguage className={styles.iconLanguage} />
            {dropdownLabel}
          </>
        }
        items={items}
      />
    );
  } else {
    const desktopLocaleItems = localeItems.map((locale) => ({
      label: locale.name,
      to: '#',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        switchLocale(locale.code);
      },
      className: locale.code === currentLocale
        ? 'dropdown__link--active'
        : '',
    }));

    const items = [...(dropdownItemsBefore || []), ...desktopLocaleItems, ...(dropdownItemsAfter || [])];

    return (
      <DropdownNavbarItem
        {...props}
        mobile={mobile}
        label={
          <>
            <IconLanguage className={styles.iconLanguage} />
            {dropdownLabel}
          </>
        }
        items={items}
      />
    );
  }
}