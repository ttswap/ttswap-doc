import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import Logo from '@theme/Logo';

export default function NavbarLogo(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const location = useLocation();
  
  // 通过当前路径判断语言
  const currentLocale = location.pathname.startsWith('/zh/') ? 'zh' : 'en';
  
  // 确定Logo的跳转链接
  let logoLink = '/';
  if (currentLocale !== i18n.defaultLocale) {
    logoLink = `/${currentLocale}/`;
  }

  return (
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
      to={logoLink}
    />
  );
}