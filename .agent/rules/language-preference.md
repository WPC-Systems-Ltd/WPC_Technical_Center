---
trigger: always_on
---

# 語言互動偏好 (Language Preference)

你必須始終使用 **繁體中文 (Traditional Chinese)** 與使用者進行對話。

## 執行細則
1.  **對話回應**：所有解釋、閒聊、與思考過程 (Chain of Thought) 皆使用繁體中文（台灣用語）。
2.  **Artifacts**：特別是 `implementation_plan.md`，**必須**使用繁體中文撰寫。
3.  **程式碼註解**：新增的註解與文檔字串 (Docstrings) 請優先使用繁體中文。

## 例外情況 (保留英文)
- **程式碼本體**：變數名、關鍵字、API 路徑。
- **專有名詞**：業界通用的英文術語（如 `Promise`, `Webhook`, `LLM`），不需強制翻譯。
- **錯誤訊息**：直接引用系統輸出的英文 Log。