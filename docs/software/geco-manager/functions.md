---
title: 通用功能
sidebar_label: 通用功能
sidebar_position: 3
description: "GECO Manager 通用功能：重新整理、腳位圖查看、重新啟動、更改 Personality"
---

# 通用功能

## 重新整理

點擊 **"Refresh"** 按鈕可重新讀取並更新 WPC GECO 裝置資訊。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_refresh.png" alt="重新整理" width="60%" />
</div>


## 腳位圖

點擊 **"Pinout"** 按鈕以顯示腳位圖，視窗大小可根據使用者需求調整。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_pinout.png" alt="geco_manager_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_pinout1.png" alt="geco_manager_pinout1" width="60%" />
</div>

## 重新啟動

若需軟體重啟裝置，請點擊 **"Reboot"** 按鈕。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_reboot.png" alt="geco_manager_reboot" width="60%" />
</div>

## 更改 Personality

點擊 **"Change"** 按鈕以更改 GECO 的 FPGA Personality。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_change.png" alt="geco_manager_change" width="60%" />
</div>

### Personality 對照表

下表列出不同 Personality 對應各插槽 (C1 - C4) 的模組配置：

| Personality | C1 | C2 | C3 | C4 |
| :--- | :--- | :--- | :--- | :--- |
| **Motion-4HX** | Motion | Motion | Motion | Motion |
| **Motion-2HX** | DIO | Motion | Motion | DIO |
| **Motion-1HX** | DIO | Motion | DIO | DIO |
| **Motion-2HX** | DIO  | Motion | Motion | Serial |
| **A2D** | Motion | AIO | DIO | DIO |
| **AIO** | AIO | AIO | AIO | AIO |
| **DIO** | DIO | DIO | DIO | DIO |
| **Switch** | Switch | Switch | Switch | Switch |
| **Thermo** | Thermo | Thermo | Thermo | Thermo |

> **備註**: HX 代表 Motion 軸卡。
