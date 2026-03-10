---
title: 簡介與安裝
sidebar_label: 簡介與安裝
sidebar_position: 1
description: "gStack-RIO Manager 軟體簡介、下載與安裝指南"
---

# 簡介與安裝

## 簡介

**gStack-RIO Manager** 是一套功能強大的公用程式，專門用於管理 gStack-RIO 控制器及其周邊模組。

透過 gStack-RIO Manager，使用者可以做到以下功能：
*   設定 gStack-RIO 機箱內的卡片功能。
*   查詢 gStack-RIO 模組卡片的腳位圖。
*   開啟 gStack-RIO 模組卡片的**測試面板 (Test Panel)**。
*   新增或移除虛擬模組卡片的功能。

## 下載與安裝

### 步驟 1: 下載 gStack-RIO Manager

請從 WPC 官方網站下載最新版本的 gStack-RIO Manager。

> [下載 gStack-RIO Manager Manager](https://www.wpc.com.tw/gstackrio-manager.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/download_labview.png" alt="LabVIEW Runtime 下載頁面" width="60%" />
</div>

:::caution 重要
要執行此軟體，您必須先安裝 **LabVIEW Run-Time Engine 2019**。
:::

### 步驟 2: 下載並安裝 LabVIEW Run-time Engine 2019

> [下載 LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/download_runtime.png" alt="LabVIEW Runtime 下載頁面" width="60%" />
</div>

### 步驟 3: 下載並安裝 NI VISA Runtime 15.5

> [下載 NI CompactRIO 15.5](https://www.wpc.com.tw/ni-compactrio-155.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/download_visa.png" alt="NI VISA Runtime 下載頁面" width="60%" />
</div>

## 開啟 gStack-RIO Manager

1.  解壓縮下載的 gStack-RIO Manager 檔案。
2.  開啟 `gStack-RIO Manager.exe`。

### Windows 安全性警告處理

若 Windows 顯示「Windows 已保護您的電腦」或「無法辨識的應用程式」警告：

1.  請點擊 **「其他資訊」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/windows_protection_1.png" alt="Windows 保護警告" width="60%" />
    </div>

2.  點擊 **「仍要執行」**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/windows_protection_2.png" alt="仍要執行" width="60%" />
    </div>

### 防火牆設定

首次開啟時，Windows 防火牆可能會封鎖部分功能。

1.  請同時勾選 **「私人網路」** 與 **「公用網路」**。
2.  點擊 **「允許存取」**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/windows_firewall.png" alt="防火牆設定" width="60%" />
</div>

開啟後，gStack-RIO Manager 將會自動搜尋 gStackRIO 控制器。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/search_network_devices.png" alt="搜尋網路裝置" width="60%" />
</div>
