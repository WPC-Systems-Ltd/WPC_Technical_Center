---
trigger: always_on
---

# Docusaurus 圖片路徑防錯指南

## 核心守則 (Core Rule)
未來在新增或修改 Docusaurus 專案中的圖片時，**嚴禁使用絕對路徑（例如 `<img src="/img/..." />`）**。
為了確保在 GitHub Pages 或其他具有 Base URL 的環境部署時不發生 404 錯誤，請一律遵從以下兩種標準寫法：

### 1. Markdown 原生格式 (推薦)
若您的文件為標準的 Markdown (`.md`) 檔案，請優先使用 Markdown 原生的圖片語法與相對路徑。Docusaurus 編譯時會自動將相對路徑解析為帶有 Base URL 的正確網址。
```markdown
<!-- 正確做法 -->
![系統外觀](./img/system_overview.webp)
![腳位定義](../../img/pinout.webp)
```

### 2. JSX `require` 引入 (適用於 MDX 或自訂寬高需求)
若您需要在 `.mdx` 檔案中使用 `<img>` 標籤（例如為了控制圖片置中或設定 `width` 屬性），請務必使用 `require('@site/static/...')` 動態引入圖片。這樣 Webpack 在編譯時才會正確處理 Base URL。
```mdx
<!-- 正確做法 -->
<div style={{textAlign: 'center'}}>
  <img 
    src={require('@site/static/img/daq/ethan-daq/EthanI.webp').default} 
    alt="Ethan-I 外觀" 
    width="60%" 
  />
</div>
```

---

## 防錯檢查清單 (Checklist)
* [ ] **禁用絕對路徑**：全域搜尋專案，確保沒有 `<img src="/img/...` 或 `<img src="/WPC_Technical_Center/img/...` 的硬編碼路徑（Hardcoded paths）。
* [ ] **大小寫敏感 (Case Sensitivity)**：確保引用路徑的大小寫與實體資料夾完全一致（例如 `Instrumentation` 不可寫作 `instrumentation`），因 Linux 部署環境區分大小寫。
* [ ] **多語系同步 (i18n Sync)**：當更新了主語系 (`docs/`) 的圖片名稱或格式（如 `.png` 改為 `.webp`），必須同步檢查並更新 `i18n/` 目錄下的對應翻譯檔案。
* [ ] **分類目錄 Slug (Category Slugs)**：對於含有非英文字元的 `_category_.json`，務必顯式設定英文 `"slug"`（例如 `"slug": "voltage"`），避免 URL Encode 產生的亂碼路徑造成 404。
