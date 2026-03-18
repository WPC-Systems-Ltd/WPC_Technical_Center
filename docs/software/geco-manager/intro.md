---
title: 簡介與安裝
sidebar_label: 簡介與安裝
sidebar_position: 1
description: "GECO Manager 軟體簡介、下載與安裝指南"
---

# 簡介與安裝

## 簡介

GECO Manager 是一套功能強大的公用程式，專門用於管理 GECO 控制器及其周邊模組。

透過 GECO Manager，使用者可以：
*   選擇 GECO 控制器的 **FPGA Personality**。
*   開啟各插槽 (C1 - C4) 上 GECO 模組的**測試面板 (Test Panel)**，以直接操控模組功能並確認其正常運作。
*   查詢各模組的**腳位圖 (Pinout)**。

## 下載與安裝

### 步驟 1: 下載 GECO Manager

請前往 WPC 官方網站下載最新版本的 GECO Manager。

> [下載 GECO Manager](https://www.wpc.com.tw/geco-manager.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_download_page.png" alt="geco_manager_download_page" width="60%" />
</div>

:::caution 重要
要執行此軟體，您必須先安裝 **LabVIEW Run-Time Engine 2019**。
:::

### 步驟 2: 下載並安裝 LabVIEW Run-time Engine 2019

> [下載 LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/runtime2019_download_page.png" alt="runtime2019_download_page" width="60%" />
</div>

### 步驟 3: 下載並安裝 NI CompactRIO 15.5

> [下載 NI CompactRIO 15.5](https://www.wpc.com.tw/ni-compactrio-155.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/compactRIO_15_5_download_page.png" alt="compactRIO_15_5_download_page" width="60%" />
</div>

## 開啟 GECO Manager

1.  解壓縮下載的 GECO Manager 檔案。
2.  開啟 `GECO Manager.exe`。

### Windows 安全性警告處理

若 Windows 顯示「Windows 已保護您的電腦」或「無法辨識的應用程式」警告：

1.  請點擊 **「其他資訊」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_protect.png" alt="windows_protect" width="60%" />
    </div>

2.  點擊 **「仍要執行」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_protect1.png" alt="windows_protect1" width="60%" />
    </div>

### 防火牆設定

首次開啟時，Windows 防火牆可能會封鎖部分功能。

1.  請勾選 **「私人網路」** 與 **「公用網路」**。
2.  點擊 **「允許存取」**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_firework.png" alt="windows_firework" width="60%" />
</div>

開啟後，GECO Manager 將會自動搜尋 WPC GECO 控制器。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_search.png" alt="geco_manager_search" width="60%" />
</div>
