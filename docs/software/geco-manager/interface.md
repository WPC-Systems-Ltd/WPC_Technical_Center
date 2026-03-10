---
title: 介面與基本操作
sidebar_label: 介面與基本操作
sidebar_position: 2
description: "GECO Manager 主畫面介紹、裝置搜尋與模擬裝置新增"
---

# 介面與基本操作

## 主畫面介紹

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page8_X101.png" alt="GECO Manager 主畫面" width="60%" />
</div>

主畫面功能依序說明如下：

1. 網路裝置列表: GECO 裝置將會列在網路裝置列表中。
2. 測試程式面板: 測試面板會根據 GECO 模組顯示不同的測試按鈕。
3. 產品資訊: 顯示完整的產品資訊，如序號、IP、MAC、韌體版本等
4. 電腦與裝置的連線狀態: 狀態列顯示連線狀態 (Connected, Disconnected) 或 IP 衝突等資訊。

## 一般功能

### 搜尋與重新整理

Geco Manager 提供自動搜尋功能，可掃描網域內的 GECO 裝置。

- **網路裝置**：將滑鼠游標移至 "**Network**" 區域，按右鍵選擇 "**Refresh Network**"。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page9_X108.png" alt="重新整理網路" width="60%" />
</div>

:::caution
若無法於列表中找到您的網路裝置，請確認電腦主機與裝置的 IP 位址是否位於 **同一子網域**。
:::

### 新增模擬裝置

GECO Manager 支援模擬裝置功能，允許使用者在無實體硬體的情況下，預覽腳位圖 (Pinout) 與測試面板功能。

1.  點擊選單列的 **"View"**。
2.  選擇 **"Add Simulated Device"**。
3.  您可以按住 **Ctrl** 鍵以選取多個裝置，然後點擊 **"OK"** 確認。

這些步驟可協助您新增模擬裝置以檢視詳細資訊，無需實際連接硬體。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page10_X115.png" alt="新增模擬裝置" width="60%" />
</div>
