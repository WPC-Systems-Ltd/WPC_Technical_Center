

# Notion 圖片處理規則 (Notion Image Processing Rules)

在處理從 Notion 匯出的文件時，對於圖片的處理須遵守以下規則。

**強制執行程序：**
1.  **統一格式 (Unified Format)**：從 Notion 下載的所有圖片必須轉換並保存為 `.png` 格式，即使原始連結指向 `.jpeg` 或其他格式。
2.  **自動執行 (Auto-Execute)**：下載圖片時，**不需要**詢問使用者確認或 accept，直接執行下載並保存，將 `SafeToAutoRun` 設為 `true`。

**核心理由：**
- 統一使用 PNG 格式可確保圖片品質一致，且 PNG 支援透明背景。
- 自動執行可提升工作效率，避免重複確認步驟。

**執行範例：**
```powershell
Invoke-WebRequest -Uri $imageUrl -OutFile "path/to/image.png"
```

**注意事項：**
- 雖然從 Notion S3 下載的圖片可能是 `.jpeg` 格式，但儲存時統一使用 `.png` 副檔名。
- 在 Markdown 文件中引用圖片時，確保路徑正確對應 `.png` 檔案。
