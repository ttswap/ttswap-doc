import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', '5bc'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f38'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f11'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6d4'),
            routes: [
              {
                path: '/docs/articles/publicsell',
                component: ComponentCreator('/docs/articles/publicsell', '531'),
                exact: true
              },
              {
                path: '/docs/articles/tokenairdrop',
                component: ComponentCreator('/docs/articles/tokenairdrop', 'b04'),
                exact: true
              },
              {
                path: '/docs/community/builder',
                component: ComponentCreator('/docs/community/builder', '9a2'),
                exact: true
              },
              {
                path: '/docs/community/gate',
                component: ComponentCreator('/docs/community/gate', '378'),
                exact: true
              },
              {
                path: '/docs/community/introduce',
                component: ComponentCreator('/docs/community/introduce', '654'),
                exact: true
              },
              {
                path: '/docs/community/investor',
                component: ComponentCreator('/docs/community/investor', '179'),
                exact: true
              },
              {
                path: '/docs/community/liquidityprovider',
                component: ComponentCreator('/docs/community/liquidityprovider', '55c'),
                exact: true
              },
              {
                path: '/docs/community/recommander',
                component: ComponentCreator('/docs/community/recommander', '9b0'),
                exact: true
              },
              {
                path: '/docs/community/tokenoperator',
                component: ComponentCreator('/docs/community/tokenoperator', '331'),
                exact: true
              },
              {
                path: '/docs/knowledge/tokeneconomic',
                component: ComponentCreator('/docs/knowledge/tokeneconomic', '9f1'),
                exact: true
              },
              {
                path: '/docs/knowledge/userdoc/',
                component: ComponentCreator('/docs/knowledge/userdoc/', '9e3'),
                exact: true
              },
              {
                path: '/docs/knowledge/whitepaper/',
                component: ComponentCreator('/docs/knowledge/whitepaper/', '0db'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
