---
title: 如何防止或停止 main.py 執行
sidebar_label: 防止 main.py 執行
sidebar_position: 3
---

# 如何防止或停止 main.py 執行

如果您的 `main.py` 腳本進入無窮迴圈，或者您希望在啟動時防止其執行，您有兩種選擇：

*   **軟體方法:** 使用指令 `Sys_disableMain` 來停用啟動時自動執行 `main.py`。
*   **硬體方法:** 在 PYCO 開發板上，通電前將 `Save` 腳位短路。這將防止 `main.py` 在啟動時被執行。

這些方法可以幫助您在程式卡住或想要上傳新程式碼到開發板時重新取得控制權。
