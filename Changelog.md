WPC Technical Center Changelog
==================================

### Added
### Changed
### Fixed
### Removed


v0.0.4 Date: 2026/02/13, Developer: Hok
---------------------------------------------------
### Added
- **全新首頁 (Design System):** 導入 Bento Grid (網格) 佈局與現代化 Hero 區塊，採用漸層文字與動態光暈效果。
- **深色模式優化 (Dark Mode Pro Max):** 以品牌藍 (#1A255C) 為基底的深色主題，搭配電光藍 (#3B82F6) 強調色。
- **內容體驗升級:**
  - 新增 Glassmorphism 風格表格 (Table)。
  - 新增 Linear 風格提示框 (Admonitions)。
  - 新增清單與引用區塊的現代化樣式。

### Changed
- **全域樣式 (Global CSS):**
  - 將預設字體更新為 Inter 與 Noto Sans TC。
  - 調整版面間距 (Padding & Margins)，移除多餘邊框，增加呼吸感。
  - 優化側邊欄與導航列樣式，使其更輕量化。
- **淺色模式適配 (Light Mode):**
  - 修正淺色模式下的高對比度文字顏色與漸層標題。
  - 移除淺色模式下的圖片陰影，呈現乾淨平面風格。

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
