import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/blog',
    component: ComponentCreator('/zh/blog', '0fc'),
    exact: true
  },
  {
    path: '/zh/blog/archive',
    component: ComponentCreator('/zh/blog/archive', '3be'),
    exact: true
  },
  {
    path: '/zh/blog/authors',
    component: ComponentCreator('/zh/blog/authors', '55d'),
    exact: true
  },
  {
    path: '/zh/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/zh/blog/authors/all-sebastien-lorber-articles', '54f'),
    exact: true
  },
  {
    path: '/zh/blog/authors/yangshun',
    component: ComponentCreator('/zh/blog/authors/yangshun', '4df'),
    exact: true
  },
  {
    path: '/zh/blog/first-blog-post',
    component: ComponentCreator('/zh/blog/first-blog-post', 'ef6'),
    exact: true
  },
  {
    path: '/zh/blog/long-blog-post',
    component: ComponentCreator('/zh/blog/long-blog-post', '99a'),
    exact: true
  },
  {
    path: '/zh/blog/mdx-blog-post',
    component: ComponentCreator('/zh/blog/mdx-blog-post', '0aa'),
    exact: true
  },
  {
    path: '/zh/blog/tags',
    component: ComponentCreator('/zh/blog/tags', 'e48'),
    exact: true
  },
  {
    path: '/zh/blog/tags/docusaurus',
    component: ComponentCreator('/zh/blog/tags/docusaurus', 'fb3'),
    exact: true
  },
  {
    path: '/zh/blog/tags/facebook',
    component: ComponentCreator('/zh/blog/tags/facebook', '0a8'),
    exact: true
  },
  {
    path: '/zh/blog/tags/hello',
    component: ComponentCreator('/zh/blog/tags/hello', '94c'),
    exact: true
  },
  {
    path: '/zh/blog/tags/hola',
    component: ComponentCreator('/zh/blog/tags/hola', 'b09'),
    exact: true
  },
  {
    path: '/zh/blog/welcome',
    component: ComponentCreator('/zh/blog/welcome', '1e2'),
    exact: true
  },
  {
    path: '/zh/zh/',
    component: ComponentCreator('/zh/zh/', '862'),
    exact: true
  },
  {
    path: '/zh/docs',
    component: ComponentCreator('/zh/docs', 'c3a'),
    routes: [
      {
        path: '/zh/docs',
        component: ComponentCreator('/zh/docs', 'e9e'),
        routes: [
          {
            path: '/zh/docs',
            component: ComponentCreator('/zh/docs', '3e1'),
            routes: [
              {
                path: '/zh/docs/articles/publicsell',
                component: ComponentCreator('/zh/docs/articles/publicsell', 'eb0'),
                exact: true
              },
              {
                path: '/zh/docs/articles/tokenairdrop',
                component: ComponentCreator('/zh/docs/articles/tokenairdrop', 'fd4'),
                exact: true
              },
              {
                path: '/zh/docs/community/builder',
                component: ComponentCreator('/zh/docs/community/builder', '2ee'),
                exact: true
              },
              {
                path: '/zh/docs/community/gate',
                component: ComponentCreator('/zh/docs/community/gate', '659'),
                exact: true
              },
              {
                path: '/zh/docs/community/introduce',
                component: ComponentCreator('/zh/docs/community/introduce', '9c1'),
                exact: true
              },
              {
                path: '/zh/docs/community/investor',
                component: ComponentCreator('/zh/docs/community/investor', '653'),
                exact: true
              },
              {
                path: '/zh/docs/community/liquidityprovider',
                component: ComponentCreator('/zh/docs/community/liquidityprovider', '445'),
                exact: true
              },
              {
                path: '/zh/docs/community/recommander',
                component: ComponentCreator('/zh/docs/community/recommander', 'cd4'),
                exact: true
              },
              {
                path: '/zh/docs/community/tokenoperator',
                component: ComponentCreator('/zh/docs/community/tokenoperator', '820'),
                exact: true
              },
              {
                path: '/zh/docs/knowledge/tokeneconomic',
                component: ComponentCreator('/zh/docs/knowledge/tokeneconomic', '47b'),
                exact: true
              },
              {
                path: '/zh/docs/knowledge/userdoc/',
                component: ComponentCreator('/zh/docs/knowledge/userdoc/', '471'),
                exact: true
              },
              {
                path: '/zh/docs/knowledge/whitepaper/',
                component: ComponentCreator('/zh/docs/knowledge/whitepaper/', '46b'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', 'a79'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
