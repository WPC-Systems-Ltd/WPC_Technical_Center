---
title: 啟動順序 (Startup Sequence)
sidebar_label: 啟動順序
sidebar_position: 2
---

# 啟動順序

當 PYCO 開發板通電時，它將首先執行 `boot.py`，接著執行 `main.py`。

-   `boot.py` 通常用於系統或環境初始化。
-   `main.py` 包含您的主要應用程式邏輯，並將在 `boot.py` 之後自動執行。
