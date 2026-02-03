---
trigger: always_on
---

**說明：** 整合了檔案修改的安全檢查 (Read First) 與 Notion 圖片自動下載邏輯。

```markdown
# 工作流與安全守則 (Workflow & Safety)

## 1. 檔案修改安全守則 (Safe Edit Protocol)
嚴禁在未先驗證當前內容的情況下修改任何檔案。
1.  **先讀取 (Read First)**：在產生寫入指令前，務必使用 `view_file` 或 `grep_search` 檢視目標檔案。
2.  **確認狀態**：確認程式碼內容與預期相符，避免覆蓋既有邏輯。
3.  **理由**：檔案系統是唯一的真理來源。

## 2. Notion 圖片處理規則 (Notion Image Rules)
處理從 Notion 匯出的文件時：
1.  **統一格式**：所有圖片必須下載並保存為 `.png` 格式（即使原始連結是 .jpeg）。
2.  **自動執行**：下載指令 (如 `Invoke-WebRequest`) 應將 `SafeToAutoRun` 設為 `true`，**不需要**詢問使用者確認。
3.  **引用一致**：Markdown 文件中的引用路徑必須對應 `.png` 副檔名。