import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WPC Technical Center',
  tagline: 'Precision, Integration, Performance',
  favicon: 'img/favicon.ico',

  plugins: [
    // require.resolve('./src/plugins/plugin-recent-docs/index.ts'),
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [
    require.resolve('./src/plugins/plugin-nprogress.ts'),
  ],

  themeConfig: {
    image: 'img/WPC_Logo.jpg',
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
          to: '/',
          label: '首頁',
          position: 'left',
          activeBaseRegex: '^/WPC_Technical_Center/$',
        },
        {
          type: 'doc',
          docId: 'drone_intro',
          position: 'left',
          label: '無人機',
        },
        {
          type: 'doc',
          docId: 'daq-intro',
          position: 'left',
          label: 'DAQ',
        },
        {
          type: 'doc',
          docId: 'embedded_intro',
          position: 'left',
          label: '嵌入式系統',
        },
        {
          type: 'doc',
          docId: 'software/intro',
          position: 'left',
          label: '軟體',
        },
        {
          type: 'doc',
          docId: 'driver/driver_intro',
          position: 'left',
          label: '驅動程式',
        },
        {
          to: '/sitemap',
          label: '網站導覽',
          position: 'left',
        },

        {
          type: 'html',
          value: '<hr class="mobile-menu-divider" />',
          position: 'right',
          className: 'mobile-only-item',
        },
        {
          type: 'html',
          value: `
            <div class="mobile-social-links">
              <a href="https://github.com/WPC-Systems-Ltd" aria-label="GitHub" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.wpc.com.tw" aria-label="WPC Website" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </a>
            </div>
          `,
          position: 'right',
          className: 'mobile-only-item',
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
          <div>
            <div style="margin-bottom: 0.2rem;">Copyright © 2022-${new Date().getFullYear()} WPC Systems Ltd.</div>
            <div style="font-size: 0.8rem; letter-spacing: 0.05em; font-weight: 500; opacity: 0.8;">Precision, Integration, Performance</div>
          </div>
          <div class="footer-social-icons" style="display: flex; gap: 1.5rem; align-items: center;">
            <a href="https://github.com/WPC-Systems-Ltd" target="_blank" rel="noopener noreferrer" style="color: inherit; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span style="font-weight: 500;">GitHub</span>
            </a>
            <a href="/WPC_Technical_Center/sitemap" style="color: inherit; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
              <span style="font-weight: 500;">Sitemap</span>
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
