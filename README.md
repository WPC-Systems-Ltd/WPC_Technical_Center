# 刪除 .docusaurus 資料夾
rmdir /s /q .docusaurus

# 清除 Docusaurus 快取
npm run clear

# 重新啟動開發伺服器
npm run start


npm install notion-to-md @notionhq/client

node convert.js

cd D:\Synology\github\WPC_Technical_Center



1. 請你生成的內容, 要遵守 .agent/rules/instructions.md, .agent/rules/documentation-style.md,.agent/rules/language-preference.md



##
我理解了！您想在開發時也能即時切換中英文。

問題是： Docusaurus 的開發模式 (npm run start) 是技術限制，一次只能運行一個語系。這是官方設計，無法繞過。

解決方案：使用 Production 模式進行測試

執行以下指令來建置並啟動支援所有語系的伺服器：

powershell
npm run build
npm run serve
這樣您就可以：

使用語言切換器自由切換中英文
中文：http://localhost:3001/docs/...
英文：http://localhost:3001/en/docs/...
開發建議：

日常開發：使用 npm run start (預設中文) 快速預覽修改
測試多語系：定期執行 npm run build && npm run serve 驗證語言切換
上線前：執行完整的 production build 測試
注意： Production build 會比較慢（首次約 30 秒到 1 分鐘），但之後的修改可以用 npm run start 快速預覽中文版，需要時再 build 檢查英文版。

現在請執行：

powershell
npm run build
npm run serve
建置完成後就能正常切換語言了！