# 文檔撰寫與格式規範 (Documentation Style Guide)

## 1. Markdown 表格排版 (Markdown Table Alignment)
為了確保在純文字編輯器 (Your internal viewing tool) 中的可讀性，所有 Markdown 表格**必須**在原始碼中使用空白字元進行對齊。

**✅ 正確範例 (Correct):**
```markdown
| 參數             | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----: | :----: | :----: | :--- |
| 輸入高電位電壓   |   3    |   5    |  5.5   | V    |
| 輸入阻抗         |  50k   |        |        | Ω    |
```

**❌ 錯誤範例 (Incorrect):**
```markdown
| 參數 | 最小值 | 典型值 | 最大值 | 單位 |
| :--- | :---: | :---: | :---: | :--- |
| 輸入高電位電壓 | 3 | 5 | 5.5 | V |
| 輸入阻抗 | 50k | | | Ω |
```

---

## 2. 術語翻譯與簡潔性 (Translation & Conciseness)
在翻譯技術規格或專有名詞時，**不需要**保留原始英文名稱作為括號備註，除非該術語極度罕見或無標準中文翻譯。

**✅ 正確範例 (Correct):**
- 共模抑制比
- 訊噪比
- 電源電壓

**❌ 錯誤範例 (Incorrect):**
- 共模抑制比 (Common-Mode Rejection)
- 訊噪比 (SNR)  <-- *註：知名縮寫如 SNR, THD 可視情況保留，但不應保留全名*
- 電源電壓 (Supply Voltage)

---

## 3. 語言使用 (Language)
承襲全域規則，所有內容應優先使用 **繁體中文 (Traditional Chinese)**。
- 表格標頭 (Headers) 需翻譯。
- 測試條件與備註 (Conditions/Comments) 需翻譯（如 `Stand-By Mode` -> `待機模式`）。

---

## 4. 禁用 LaTeX (No LaTeX)
嚴禁使用 LaTeX 語法（如 `$$...$$` 或 `$ ... $`）撰寫數學公式，因為這會導致 Docusaurus 編譯錯誤。
請改用 **純文字** 或 **Markdown 格式** 來表達公式。

**✅ 正確範例 (Correct):**
> 單通道最大取樣率 = 總頻寬 (16kHz) / 啟用通道數

**❌ 錯誤範例 (Incorrect):**

---

## 5. 圖片格式 (Image Formatting)
所有產品圖片與截圖必須統一格式，以確保版面整潔與一致性。
- **HTML 標籤**：必須使用 HTML `<img>` 標籤而非 Markdown 圖片語法。
- **寬度限制**：統一設定 `width="60%"`。
- **水平置中**：必須包覆在 `<div style={{textAlign: 'center'}}>` 中。

**✅ 正確範例 (Correct):**
```html
<div style={{textAlign: 'center'}}><img src="/img/path/to/image.png" alt="圖片描述" width="60%" /></div>
```

**❌ 錯誤範例 (Incorrect):**
```markdown
![圖片描述](/img/path/to/image.png)
```

