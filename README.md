# WPC Technical Center (星協技術中心)

歡迎來到 **WPC Technical Center** 官方文件網站。此專案基於 [Docusaurus](https://docusaurus.io/) 建置，提供 WPC Systems Ltd. 產品的詳細技術手冊與使用指南。

## 🌟 專案特色

- **現代化文件架構**：使用 Docusaurus 3.x 提供快速、響應式的閱讀體驗。
- **多語系支援 (i18n)**：預設繁體中文 (zh-Hant)，並支援英文 (en) 切換。
- **自動化部署**：整合 GitHub Actions，推送到 `main` 分支即自動發佈至 GitHub Pages。
- **全文搜索**：內建搜尋功能，快速查找技術資訊。

## 🚀 快速開始 (Getting Started)

### 1. 安裝 (Installation)

在開始之前，請確保您的環境已安裝 [Node.js](https://nodejs.org/) (建議 v18 或以上)。

```bash
npm install
```

### 2. 啟動本地開發伺服器 (Development)

啟動開發伺服器，即時預覽變更：

```bash
npm start
```

- 網站將於 `http://localhost:3000` 開啟。
- 預設顯示繁體中文版本。

### 3. 建置專案 (Build)

若要產生靜態檔案 (用於部署)：

```bash
npm run build
```

檔案將輸出至 `build/` 目錄。

## 🌐 多語系開發 (i18n)

由於 Docusaurus 開發模式限制，`npm start` 預設僅載入繁體中文。若要預覽英文版：

```bash
# 啟動英文版開發伺服器
npm run start -- --locale en
```

或建置後使用 `serve` 指令預覽完整多語系網站：

```bash
npm run build
npm run serve
```

## 📦 部署 (Deployment)

本專案使用 **GitHub Actions** 進行自動化部署。

- **觸發條件**：推送到 `main` 分支。
- **目標分支**：`gh-pages` (由 Action 自動維護)。
- **線上網址**：[https://WPC-Systems-Ltd.github.io/WPC_Technical_Center/](https://WPC-Systems-Ltd.github.io/WPC_Technical_Center/)

## 📁 專案結構

- `/docs` - 文件原始碼 (Markdown/MDX)。
- `/blog` - 部落格文章 (若有)。
- `/src`  - React 頁面與客製化元件。
- `/i18n` - 翻譯檔案 (英文版文件位於 `i18n/en/docusaurus-plugin-content-docs/current`)。
- `docusaurus.config.ts` - 網站設定檔。

## 🔗 相關連結

- [WPC Systems Ltd. 官方網站](https://www.wpc.com.tw)
- [GitHub 儲存庫](https://github.com/WPC-Systems-Ltd/WPC_Technical_Center)