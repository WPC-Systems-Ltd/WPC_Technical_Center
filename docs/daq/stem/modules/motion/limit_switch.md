---
sidebar_position: 5
sidebar_label: '極限開關接線'
description: 常見的光電式極限開關接線原理與安全建議
---

# 常見極限開關接線

本章節以業界常用的光電開關 (如 OMRON EE-SX67x 系列) 為範例，說明極限開關的接線模式與安全配置建議。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/limit_switch_connection.png" alt="Omron EE-SX67x Series" width="60%" />
</div>

## 1. 接線模式說明

光電開關通常提供兩種動作模式，其切換取決於 **L 端子 (L Terminal)** 的接線方式：

### 1.1 Light-ON 模式 (Active-HIGH)
*   **設定方式**：**L 腳位空接 (Floating)**。
*   **動作邏輯**：
    *   遮光時 (感應到物體)：輸出 OFF (High Impedance / High Logic)。
    *   入光時 (無遮擋)：輸出 ON (Low Logic)。

### 1.2 Dark-ON 模式 (Active-LOW)
*   **設定方式**：**L 腳位與 VCC (棕色線) 短接**。
*   **動作邏輯**：
    *   遮光時 (感應到物體)：輸出 ON (Low Logic)。
    *   入光時 (無遮擋)：輸出 OFF (High Impedance / High Logic)。

## 2. 安全性建議

在工業自動化應用中，**強烈建議採用 Dark-ON 模式** 作為極限開關的配置標準。

### 為什麼選擇 Dark-ON？
此模式構成了一種 **「失效安全 (Fail-Safe)」** 機制。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/suggest_connection.png" alt="Wiring Configuration" width="60%" />
</div>

### 安全配置建議
WPC 建議使用者將極限開關設定為 **Dark-ON 模式** (如上圖右側所示，將 L 與 VCC 短接)。

*   **配置理由**：
    在此模式下，若發生 **線路斷裂 (Broken Wire)** 或 **接觸不良** 等異常狀況，軸卡輸入端將偵測到極限被觸發的訊號狀態。
*   **保護機制**：
    當系統判定極限已觸發時，軸卡將禁止馬達向該極限方向移動。雖然這會導致機台暫時停機，但能有效 **避免因極限開關失效而發生的撞機事故**，確保設備與人員安全。
