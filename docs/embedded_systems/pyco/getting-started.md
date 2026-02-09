---
title: 快速入門
sidebar_position: 2
---

# 快速入門 (Getting Started)

## 歡迎使用！

感謝您選擇 PYCO。本指南將協助您快速建立開發環境，並在 PYCO 開發板上執行您的第一個程式。

## 準備事項

**硬體:**

1.  PYCO 開發板
2.  USB A 連接線
3.  24V DC 電源供應器 (僅適用於 PYCO WIFI 與 PYCO ETH)
4.  電腦 (Windows, Linux, or macOS)

**軟體:**

1.  WPC Stand-Alone Python Editor (推薦) 或任何 Python IDE

## 步驟 1: 安裝軟體

1.  下載 [WPC Stand-Alone Python Editor](https://www.wpc.com.tw/stand-alone-python-editor.html)。
2.  將下載的檔案解壓縮至您選擇的資料夾。
3.  雙擊執行檔以開啟編輯器。

## 步驟 2: 連接硬體

1.  將 24V DC 電源供應器連接至您的 PYCO 開發板。(僅適用於 PYCO WIFI 與 PYCO ETH)
2.  使用 USB A 連接線將 PYCO 開發板連接至您的電腦。
3.  等待電腦辨識裝置 (驅動程式應會自動安裝)。

## 步驟 3: 執行您的第一個範例

1.  開啟 WPC Stand-Alone Python Editor (或您偏好的 IDE)。
2.  從 [官方範例頁面](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples/PYCO_WIFI/System/get_system_info.html) 下載範例程式碼。
3.  在編輯器中開啟範例檔案。
4.  確保您的 PYCO 開發板已選取為目標裝置 (檢查編輯器的裝置選單)。
5.  點擊 "Run" 按鈕以在開發板上執行程式碼。

## 恭喜！

您已成功建立開發環境並在 PYCO 開發板上執行了第一個程式。探索更多範例並開始建立您自己的專案吧！

## 極簡 AI 數據讀取範例：`AI on demand once`

---

```python
"""
AI - AI_on_demand_once.py.
This example demonstrates how to read AI data in on demand mode.
"""
# 1. Import the pywpc library
import pywpc

## Read data acquisition
# 2. Call AI_readOnDemand() to get the raw AI data instantly!
ai_data = pywpc.AI_readOnDemand()

# 3. Print the data
print(ai_data)
```

此範例旨在展示使用 **pywpc** 函式庫讀取 **類比輸入 (AI)** 數據的 **極致簡單性**。

**您不需要複雜的配置或通道設定。** 只需呼叫一個簡單的函式，即可立即取得數據。

:::tip 更多範例
👉 查看更多範例程式碼 [PYCO 系列範例程式碼](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples_PYCO_WIFI_MINI_AO.html)
:::
