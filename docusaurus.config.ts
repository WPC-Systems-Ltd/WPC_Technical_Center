import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WPC Technical Center',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: ["zh", "en"],
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexPages: false,
      }
    ]
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Set the production url of your site here
  url: 'https://WPC-Systems-Ltd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/WPC_Technical_Center/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WPC-Systems-Ltd', // Usually your GitHub org/user name.
  projectName: 'WPC_Technical_Center', // Usually your repo name.

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
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'WPC Technical Center',
      logo: {
        alt: 'WPC Logo',
        src: 'img/WPC_Logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'droneSidebar',
          position: 'left',
          label: '無人機',
        },
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
          type: 'docSidebar',
          sidebarId: 'embeddedSidebar',
          position: 'left',
          label: '嵌入式系統',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `
        <div style="display: flex; justify-content: space-between; align-items: center; max-width: var(--ifm-container-width); margin: 0 auto; width: 100%; padding: 0 1rem; color: var(--ifm-color-content-secondary); font-size: 0.9rem;">
          <div>Copyright © 2022-${new Date().getFullYear()} WPC Systems Ltd.</div>
          <div class="footer-social-icons" style="display: flex; gap: 1.5rem; align-items: center;">
            <a href="https://github.com/WPC-Systems-Ltd" target="_blank" rel="noopener noreferrer" style="color: inherit; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span style="font-weight: 500;">GitHub</span>
            </a>
            <a href="https://www.wpc.com.tw" target="_blank" rel="noopener noreferrer" style="color: inherit; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <span style="font-weight: 500;">Website</span>
            </a>
            <a href="mailto:sales@wpc.com.tw" style="color: inherit; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span style="font-weight: 500;">Contact</span>
            </a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
