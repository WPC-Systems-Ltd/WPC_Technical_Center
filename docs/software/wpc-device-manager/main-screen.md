---
title: 主畫面介紹
sidebar_label: 主畫面介紹
sidebar_position: 2
description: "裝置列表、測試面板與產品資訊介面說明"
---

## 主畫面功能說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/WDM_main_screen.png" alt="WDM_main_screen" width="60%" />
</div>

1.  **裝置列表**
    DAQ 裝置依據連線介面分為 **Network Devices (網路裝置)** 與 **My Computer (本機裝置)** 兩大類。
    *   **Network Devices**：列出 Ethan DAQ、 WIFI DAQ 、STEM 及 EMotion 產品。
    *   **My Computer**：列出 USB 系列產品。

2.  **測試面板**
    系統會根據所選取的裝置型號，動態顯示對應的測試功能按鈕。

3.  **產品資訊**
    顯示裝置的詳細規格資訊，包含序號、IP 位址、MAC 位址及韌體版本等。使用者亦可在此區域進行參數配置或檢視腳位定義圖 (Pinout)。

:::info
- ⚠️ 圖示：表示目前韌體版本較舊。
- ✅ 圖示：表示目前韌體已是最新版本。
:::

4.  **規格與狀態**
    顯示裝置的硬體規格與即時連線狀態。
    *   **Connected**：裝置已連線。
    *   **Disconnected**：裝置未連線。
    *   **IP Conflict**：偵測到 IP 位址衝突。
