---
title: 介面與基本操作
sidebar_label: 介面與基本操作
sidebar_position: 2
description: "GECO Manager 主畫面介紹、裝置搜尋與模擬裝置新增"
---

# 介面與基本操作

## 主畫面介紹

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page7_X94.png" alt="GECO Manager 主畫面" width="60%" />
</div>

1.  **Network Devices**: GECO 裝置將會列在網路裝置列表中。
2.  **Test Panel**: 測試面板會根據 GECO 模組顯示不同的測試按鈕。
3.  **Product Information**: 顯示完整的產品資訊，如序號 (Serial Number)、IP 位址、MAC 位址、韌體版本等。使用者也可點擊藍色按鈕進行設定或查看腳位圖。
4.  **Device Specifications & Status**: 描述裝置規格與效能，狀態列會顯示連線狀態 (Connected, Disconnected) 或 IP 衝突 (IP Conflict) 等資訊。

## 一般功能

### 搜尋與重新整理

將游標移至 "Network"，點擊右鍵並選擇 **"Refresh Network"** 以搜尋 GECO 裝置。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page8_X101.png" alt="重新整理網路" width="60%" />
</div>

:::tip 故障排除
如果在 GECO Manager 中找不到網路裝置，請先檢查您的主機電腦 IP 位址與網域設定是否與裝置的 IP 位址在同一個網域內。
:::

### 新增模擬裝置

若要新增模擬裝置以查看其腳位圖 (Pinmap) 與支援的測試面板，請依下列步驟操作：

1.  點擊選單列的 **"View"**。
2.  選擇 **"Add SimulatedDevice"**。
3.  您可以按住 **Ctrl** 鍵以選取多個裝置，然後點擊 **"OK"** 確認。

這些步驟可協助您新增模擬裝置以檢視詳細資訊，無需實際連接硬體。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page9_X108.png" alt="新增模擬裝置" width="60%" />
</div>
