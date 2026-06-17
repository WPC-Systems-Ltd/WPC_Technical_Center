---
title: 主程式 main.py 的運行
sidebar_label: 主程式 main.py 的運行
sidebar_position: 2
description: "當 PYCO 開發板通電時，它將首先執行 boot.py，接著執行 main.py。 - boot.py 通常用於系統或環境初始化。 - main.py 包含您的主要應用程式邏輯，並將在 boot.py 之後自動執行。"
keywords: [主程式 main.py 的運行, WPC, 技術文件, 規格說明]
---

當 PYCO 開發板通電時，它將首先執行 `boot.py`，接著執行 `main.py`。

- `boot.py` 通常用於系統或環境初始化。
- `main.py` 包含您的主要應用程式邏輯，並將在 `boot.py` 之後自動執行。

:::note
使用者應該要在 main.py 裡面自行新增反覆執行的迴圈 loop。否則 main.py 執行完畢後，便會結束，PYCO 將會進入 Idle 狀態。
:::
