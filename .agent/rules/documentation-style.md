---
trigger: always_on
---

# 文檔撰寫與排版規範 (Documentation Style Guide)

## 1. 表格排版 (Table Alignment)
為了確保在純文字編輯器中的可讀性，所有 Markdown 表格**必須**在原始碼中使用空白字元進行對齊。

**✅ 正確範例 (Correct):**
```markdown
| 參數             | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----: | :----: | :----: | :--- |
| 輸入高電位電壓   |   3    |   5    |  5.5   | V    |
| 輸入阻抗         |  50k   |        |        | Ω    |

## 2. 圖片格式 (Image Formatting)
為了保持文件版面整潔，所有圖片必須設定為「水平置中」且「寬度 60%」。由於標準 Markdown 語法無法支援樣式調整，因此有以下強制規定：

1.  **禁止使用 Markdown 語法**：
    - ❌ `![Alt text](./image.png)` (嚴禁使用，因為無法置中)

2.  **必須使用 HTML/JSX 標籤**：
    - 必須使用 `<img>` 標籤來載入圖片。
    - 必須使用 `<div>` 來包裹圖片以實現置中。

3.  **標準寫法範本 (Copy Template)**：
    請嚴格依照此格式生成圖片代碼：
    ```html
    <div style={{textAlign: 'center'}}>
      <img src="圖片路徑" alt="圖片描述" width="60%" />
    </div>
    ```

**✅ 正確範例 (Correct Example):**
> 使用者想插入一張名為 `login-screen.png` 的截圖：
>
> `<div style={{textAlign: 'center'}}><img src="/img/login-screen.png" alt="登入畫面" width="60%" /></div>`

**❌ 錯誤範例 (Incorrect Example):**
> `![登入畫面](/img/login-screen.png)`

3. 禁用 LaTeX (No LaTeX)嚴禁使用 LaTeX 語法（如 $$...$$ 或 $ ... $），因為這會導致 Docusaurus 編譯錯誤。正確：單通道最大取樣率 = 總頻寬 (16kHz) / 啟用通道數錯誤：$Rate = \frac{Bandwidth}{Channels}$


4. 術語翻譯與簡潔性 (Translation)
標題：直接使用繁體中文，不需附加英文翻譯括號。

內文：不保留原始英文備註，除非該術語極度罕見。

✅ 正確：共模抑制比

❌ 錯誤：共模抑制比 (Common-Mode Rejection)



