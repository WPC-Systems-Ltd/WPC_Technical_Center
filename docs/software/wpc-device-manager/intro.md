---
title: 簡介與安裝
sidebar_label: 簡介與安裝
sidebar_position: 1
description: "軟體簡介與安裝下載指南"
---

## 簡介

WPC Device Manager (WDM) 是一款專為 WPC 產品設計的綜合管理工具，旨在協助使用者高效地操作、配置與維護各項裝置。透過直觀的操作介面，使用者無需具備程式設計背景，即可輕鬆完成裝置管理任務。

WDM 的核心功能包括：

*   **裝置搜尋**：自動掃描並辨識區域網路內可用的 WPC 裝置。
*   **裝置配置**：提供完整的網路參數設定與網路時間協定 (SNTP) 校時功能。
*   **腳位狀態**：即時監控並顯示裝置的數位 I/O 與數位腳位狀態。
*   **測試面板**：內建互動式測試面板，方便使用者進行功能驗證與控制。
*   **韌體更新**：提供快速且安全的韌體更新機制，確保裝置維持最新版本。

---

## 下載與安裝

### 步驟 1: 下載 WPC Device Manager

請前往 WPC 官方網站下載最新版本的 WPC Device Manager。

> [下載 WPC Device Manager (WDM)](https://www.wpc.com.tw/wpc-device-manager.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/WDM_download_page.png" alt="WDM_download_page" width="60%" />
</div>

:::caution
執行此軟體前，必須先安裝 **LabVIEW Run-Time Engine 19.0** 環境。
:::

### 步驟 2: 下載並安裝 LabVIEW Run-time Engine 2019

> [下載 LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/runtime2019_download_page.png" alt="runtime2019_download_page" width="60%" />
</div>

## 開啟 WPC Device Manager

1.  解壓縮下載的 WPC Device Manager 檔案。
2.  開啟 `WPC Device Manager.exe`。

### Windows 安全性警告處理

若 Windows 顯示「Windows 已保護您的電腦」或「無法辨識的應用程式」警告：

1.  請點擊 **「其他資訊」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_protect.png" alt="windows_protect" width="60%" />
    </div>

2.  點擊 **「仍要執行」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_protect1.png" alt="windows_protect" width="60%" />
    </div>

### 防火牆設定

首次開啟時，Windows 防火牆可能會封鎖部分功能。

1.  請勾選 **「私人網路」** 與 **「公用網路」**。
2.  點擊 **「允許存取」**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_firework.png" alt="windows_firework" width="60%" />
</div>

開啟後，WPC Device Manager 將會自動搜尋 WPC 裝置。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/WDM_search.png" alt="WDM_search" width="60%" />
</div>
