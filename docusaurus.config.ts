import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Home',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hant': {
        label: '繁體中文',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'WPC Logo',
        src: 'img/WPC_Logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'DAQ',
        },
        {
          type: 'docSidebar',
          sidebarId: 'softwareSidebar',
          position: 'left',
          label: '軟體',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/WPC-Systems-Ltd',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '產品手冊',
          items: [
            {
              label: 'Ethernet-DAQ',
              to: '/docs/daq/ethan/intro',
            },
            {
              label: 'USB-DAQ',
              to: '/docs/daq/usbdaq/intro',
            },
            {
              label: 'WIFI-DAQ',
              to: '/docs/daq/wifidaq/product-general',
            },
          ],
        },
        {
          title: '聯絡我們',
          items: [
            {
              label: '星協科技有限公司 (WPC Systems Ltd.)',
              href: 'https://www.wpc.com.tw',
            },
            {
              html: '<span class="footer__link-item">236 新北市土城區青雲路55號</span>',
            },
            {
              html: '<span class="footer__link-item">No. 55, Qingyun Rd., Tucheng Dist., New Taipei City 236, Taiwan (R.O.C.)</span>',
            },
            {
              html: '<span class="footer__link-item">TEL: 02-82624431</span>',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022-${new Date().getFullYear()} 星協科技有限公司 (WPC Systems Ltd.)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
