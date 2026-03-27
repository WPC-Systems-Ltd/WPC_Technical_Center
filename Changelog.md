WPC Technical Center Changelog
==================================

v0.0.15 Date: 2026/03/27, Developer: Hok
---------------------------------------------------
### Fixed
- Fixed broken links in `daq-intro.mdx` and `embedded_intro.mdx`.
- Fixed hardcoded path prefixes in `daq-intro.mdx`.
- Fixed trailing slash issues in `sitemap.tsx`.
- Fixed broken links in `daq-intro.mdx` and `embedded_intro.mdx`.
- Drones: Updated drone instructional images.
- Drone Guide Update: Significantly updated the drone battery charging guide (battery-charge.md), adding detailed operating steps.
- Instrumentation: Updated the WPC 1ch PGA product page and related display images.
- WPC Drone Driver: Added a WPC Drone Driver product page.
- Updated home sitemap.
- Updated sitemap.
- Updated footer.

v0.0.14 Date: 2026/03/19, Developer: Chunglee_people
---------------------------------------------------
### Added
- Added a new category "Signal Conditioner" for signal conditioning modules.
- Added `signal_condition_intro.mdx` as the introduction page for signal conditioning modules.
- Added 10 signal conditioning module pages with detailed specifications and English translations.

### Changed
- Updated `sidebars.ts` to include the new Signal Conditioner category and its pages.
- Updated `docusaurus.config.ts` to add the Signal Conditioner category to the navigation bar.

v0.0.13 Date: 2026/03/18, Developer: Chunglee_people
---------------------------------------------------
### Fixed
- Fix the deployment issue.

v0.0.12 Date: 2026/03/18, Developer: Chunglee_people
---------------------------------------------------
### Added
- Add all WPC product pages, including signal condition, DAQ, GECO, gstack.


v0.0.11 Date: 2026/03/06, Developer: Hok
---------------------------------------------------
### Added
- Mobile Navbar: Added a mobile-optimized navigation bar with social links and a floating dark mode toggle.
- Mobile Footer: Hid the footer on mobile devices.

### Changed
- Homepage Layout: Redesigned the homepage to a single-screen layout by compressing the Hero section padding and removing the `LatestChanges` component.
- Homepage BentoGrid: Adjusted the desktop grid layout from 3 columns to 4 columns to fit all cards in a single row.
- Background Visuals: Moved the `ParticleNetwork` animation from the Hero section to a full-page wrapper background.
- Navbar: Updated the navbar to hide social links on desktop and show them on mobile.
- Mobile Sidebar: Moved the dark mode toggle to the bottom of the mobile sidebar.
- Getting Started Guides: Updated `embedded_intro.mdx` and `drone_intro.mdx` by filling in missing content for development environments and example execution, fixing broken routing links, and correcting FAQ category links.

v0.0.10 Date: 2026/03/04, Developer: Hok
---------------------------------------------------
### Added
- Custom 404 Page: Created a customized 404 error page with brand styling, helpful navigation links, and a search tip.
- SEO & Crawling: Added a basic `robots.txt` pointing to the sitemap and improved the homepage's `description` meta tag.

### Changed
- Site Configuration: Updated tagline to "Precision, Integration, Performance", removed Facebook template `editUrl`, and applied `WPC_Logo.jpg` as the social card image.
- Sidebar Restructuring: Reorganized intro pages (`daq-intro`, `embedded_intro`, `drone_intro`) as the first items in their respective product sidebars and removed the empty "Motion" category.
- Package Config: Renamed the project `name` in `package.json` to "wpc-technical-center".
- Category Slugs: Explicitly defined english slugs (`drone-faq`, `pyco-faq`, `wdm-faq`) for FAQ categories to prevent auto-generated numeric suffixes.

### Fixed
- LatestChanges Component: Resolved an issue where the `LatestChanges` timeline incorrectly hid all recent updates due to overly aggressive commit message filtering in the `plugin-recent-docs` plugin.
- Broken Links: Removed the dead global "入門指南" link and temporarily replaced the LabVIEW SDK link with an "Upcoming" placeholder.
- Internal Paths: Fixed hardcoded path prefixes (`/WPC_Technical_Center/...`) in `daq-intro.mdx` and trailing slash issues in `sitemap.tsx` to use correct relative site URLs.

### Removed
- Homepage elements: Removed the unused search bar component, gradient divider, and QuickStartBanner from the homepage.
- Unused Assets: Deleted unused Docusaurus boilerplate images (`logo.svg`, `undraw_docusaurus_*.svg`) and cleaned up leftover build log files.

v0.0.9 Date: 2026/03/02, Developer: Hok
---------------------------------------------------
### Added
- Device Manager Guide: Integrated WPC Device Manager installation step and a new dedicated feature section (with a 4-column card format) into the `daq-intro.mdx` documentation.

### Changed
- Homepage Navigation: Renamed the "入門指南" card to "資料擷取入門指南" and appended supplementary links for Embedded Systems and Drone getting started guides.
- Visual Layouts: Adjusted the DAQ hardware platform presentation from a 3-column row to a 2x2 grid format in `daq-intro.mdx`.
- UI Consistency: Unified hyperlink styling across markdown and Admonition sections to display without underlines by default, aligning with the SDK table style.

v0.0.8 Date: 2026/02/26, Developer: Hok
---------------------------------------------------
### Added
- Sitemap Page: Created a dedicated `/sitemap` page with categorized card-grid layout listing all documentation pages, including detailed sub-sections for specifications, tutorials, product models, and FAQs.
- Footer Sitemap Link: Added a "Sitemap" quick-link with Lucide map icon to the site footer.

### Changed
- Homepage BentoGrid: Replaced the rectangular/square mixed layout with a uniform 3-column card-grid design featuring category icons and direct link lists.
- Link Correction: Updated Getting Started link from `/docs/intro` to `/docs/daq-intro` across Homepage (BentoGrid), Sitemap, and QuickStartBanner.
- Breadcrumbs Styling: Fixed the home icon clipping issue and simplified the separator to a single `>`.

v0.0.7 Date: 2026/02/25, Developer: Hok
---------------------------------------------------
### Added
- Getting Started Guides: Introduced comprehensive guides for Data Acquisition (DAQ), Embedded Systems (GECO & PYCO), and Drone control.
- Homepage Enhancement: Added a QuickStartBanner to guide new users to the Getting Started pages.
- Homepage Timeline: Integrated `LatestChanges` component to display recent document updates.

### Changed
- Icons & Formatting: Replaced emojis with Lucide Icons across documentation and fixed Docusaurus Admonition styling issues (`:::tip`, `:::note`).
- Navigation: Updated navbar and sidebars to integrate the new Getting Started paths.

v0.0.6 Date: 2026/02/24, Developer: Hok
---------------------------------------------------
### Changed
- Sidebar UI: Added sticky scrolling, adjusted menu padding, and implemented a hover-only floating scrollbar.

v0.0.5 Date: 2026/02/23, Developer: Hok
---------------------------------------------------
### Added
- Global Local Search: Integrated `@cmfcmf/docusaurus-search-local` and optimized the search bar UI.
- Lucide Icons System: Adopted `lucide-react` and replaced emojis with icons in the Bento Grid.

### Changed
- Content Styling Adjustments: Optimized table hover effects, updated Navbar Logo style, and redesigned `DocCardList` appearance.

v0.0.4 Date: 2026/02/13, Developer: Hok
---------------------------------------------------
### Added
- New Homepage: Introduced Bento Grid layout and modernized Hero section.
- Dark Mode Optimization: Enhanced dark theme with specific brand colors.
- Content Experience: Added modern styles for tables, admonitions, and typography.

### Changed
- Global Styles: Updated default fonts, layout spacing, and navigation styles.
- Light Mode Adaptation: Fixed text contrast and removed image shadows.

v0.0.3 Date: 2026/02/12, Developer: Chunglee_people
---------------------------------------------------
### Changed
- Fixed broken image paths by including the repository base URL (/WPC_Technical_Center) in all image sources.

v0.0.2 Date: 2026/02/11, Developer: Chunglee_people
---------------------------------------------------
### Changed
- Updated CI to use Node.js 22

v0.0.1 Date: 2026/02/11, Developer: Chunglee_people
---------------------------------------------------
### Added
- Software
  - Added documentation for WPC Device Manager (Device management tool).
  - Added documentation for WPC Stand-alone Python Editor (Python development environment).
  - Added documentation for GECO Manager.
- DAQ (Data Acquisition)
  - Added Ethernet-DAQ (Ethan) series user guides and specifications.
  - Added USB-DAQ series user guides and specifications.
  - Added WIFI-DAQ series setup guides (AP Mode/Station Mode) and specifications.
  - Added STEM series user guides and specifications.
- Embedded Systems
  - Added documentation for GECO and RMC Breakout boards.
- Drone
  - Added flight control and drone-related documentation.
- System
  - Integrated i18n support for Traditional Chinese (zh-Hant) and English (en).
  - Added GitHub Actions workflow for automated deployment to GitHub Pages.

### Changed
- Refactored README.md for standard project documentation.
- Cleaned up repository by removing temporary scripts and unused files.
