---
title: 簡介與安裝
sidebar_label: 簡介與安裝
sidebar_position: 1
description: "GECO Manager 軟體簡介、下載與安裝指南"
---

# 簡介與安裝

## 簡介

**GECO Manager** 是一套功能強大的公用程式，專門用於管理 **GECO 控制器**及其周邊模組。

透過 GECO Manager，使用者可以：
*   選擇 GECO 控制器的 **FPGA Personality**。
*   開啟各插槽 (C1 - C4) 上 GECO 模組的 **測試面板 (Test Panel)**，以直接操控模組功能並確認其正常運作。
*   查詢各模組的 **腳位圖 (Pinout)**。

## 下載與安裝

### 步驟 1: 下載 GECO Manager

請從 WPC 官方網站下載最新版本的 GECO Manager。

### 步驟 2: 下載並安裝 LabVIEW Run-time Engine 2019

:::caution 重要
要執行此軟體，您必須先安裝 **LabVIEW Run-Time Engine 2019**。
:::

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page2_X50.png" alt="LabVIEW Runtime 下載頁面" width="60%" />
</div>

### 步驟 3: 下載並安裝 NI CompactRIO 15.5

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page3_X64.png" alt="NI CompactRIO 下載頁面" width="60%" />
</div>

## 開啟 GECO Manager

1.  解壓縮下載的 GECO Manager 檔案。
2.  開啟 `GECO Manager.exe`。

### Windows 安全性警告處理

若 Windows 顯示「Windows 已保護您的電腦」或「無法辨識的應用程式」警告：

1.  請點擊 **「其他資訊」 (More info)**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc-geco-manager/geco_manager_page4_X74.png" alt="Windows 保護警告" width="60%" />
    </div>

2.  點擊 **「仍要執行」 (Run anyway)**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc-geco-manager/geco_manager_page4_X75.png" alt="仍要執行" width="60%" />
    </div>

### 防火牆設定

首次開啟時，Windows 防火牆可能會封鎖部分功能。

1.  請勾選 **「私人網路」** 與 **「公用網路」**。
2.  點擊 **「允許存取」 (Allow access)**。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page5_X82.png" alt="防火牆設定" width="60%" />
</div>

開啟後，GECO Manager 將會自動搜尋網路上的裝置。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page6_X88.png" alt="GECO Manager 啟動畫面" width="60%" />
</div>
