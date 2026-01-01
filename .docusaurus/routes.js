import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '206'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2d6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '52b'),
            routes: [
              {
                path: '/docs/api/authentication',
                component: ComponentCreator('/docs/api/authentication', '733'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/overview',
                component: ComponentCreator('/docs/api/overview', '211'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/posts',
                component: ComponentCreator('/docs/api/posts', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/social-accounts',
                component: ComponentCreator('/docs/api/social-accounts', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/backend',
                component: ComponentCreator('/docs/architecture/backend', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/frontend',
                component: ComponentCreator('/docs/architecture/frontend', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/overview',
                component: ComponentCreator('/docs/architecture/overview', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/code-structure',
                component: ComponentCreator('/docs/development/code-structure', '2d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/setup',
                component: ComponentCreator('/docs/development/setup', '375'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/workflow',
                component: ComponentCreator('/docs/development/workflow', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/creating-posts',
                component: ComponentCreator('/docs/features/creating-posts', 'c6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/post-editor',
                component: ComponentCreator('/docs/features/post-editor', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/scheduling',
                component: ComponentCreator('/docs/features/scheduling', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/social-accounts',
                component: ComponentCreator('/docs/features/social-accounts', '0cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/account-setup',
                component: ComponentCreator('/docs/getting-started/account-setup', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/connecting-accounts',
                component: ComponentCreator('/docs/getting-started/connecting-accounts', 'ef6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/dashboard-overview',
                component: ComponentCreator('/docs/getting-started/dashboard-overview', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/overview',
                component: ComponentCreator('/docs/getting-started/overview', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/backend-integration',
                component: ComponentCreator('/docs/strapi/backend-integration', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/data-structure',
                component: ComponentCreator('/docs/strapi/data-structure', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/frontend-integration',
                component: ComponentCreator('/docs/strapi/frontend-integration', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/overview',
                component: ComponentCreator('/docs/strapi/overview', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/usage-examples',
                component: ComponentCreator('/docs/strapi/usage-examples', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strapi/webhook-configuration',
                component: ComponentCreator('/docs/strapi/webhook-configuration', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/account-management',
                component: ComponentCreator('/docs/user/account-management', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/authentication',
                component: ComponentCreator('/docs/user/authentication', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/overview',
                component: ComponentCreator('/docs/user/overview', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/roles-permissions',
                component: ComponentCreator('/docs/user/roles-permissions', '877'),
                exact: true,
                sidebar: "tutorialSidebar"
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
