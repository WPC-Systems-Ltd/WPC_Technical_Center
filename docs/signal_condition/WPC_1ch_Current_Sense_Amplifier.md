---
title: 1ch Current Sense Amplifier
sidebar_position: 2
description: WPC 1ch Current Sense Amplifier 產品簡介、特點與規格說明
---

# 1ch Current Sense Amplifier

WPC 1ch Current Sense Amplifier 是一個專為將電流訊號轉換為**電壓訊號**的前端模組。確保測量系統在各種應用場景中皆能取得高解析度的數據

### 核心特色
*   **高精度電流測量**：提供高達 20µA 的精確度，確保微小電流變化的準確捕捉。
*   **高安全性隔離保護**：具備通道對地的隔離設計 (Channel-to-ground isolation)，並提供相對類比接地高達 ±100V 的輸入耐受電壓，有效保護後端設備。
*   **寬廣測量範圍**：支援 ±1A 的大範圍電流輸入，轉換為標準的 ±10V 輸出訊號。
*   **標準化供電**：採用工業標準 24VDC 供電，易於整合至現有控制系統中。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier.png" alt="1ch_Current_Sense_Amplifier" width="60%" />
</div>

---

## 產品規格與特點

WPC 1ch Current Sense Amplifier 提供精巧、高效的電流測量功能，其主要規格如下：

*   **供電輸入**：24 VDC
*   **輸入範圍**：±1 A
*   **輸出範圍**：±10 V
*   **測量精度**：20 µA
*   **隔離設計**：通道對地隔離 (Channel-to-ground)
*   **輸入耐壓 (相對於類比 AGND)**：±100 V
*   **輸出位準 (Output level)**：約 0.02 V

---

## 接腳定義與硬體介面

以下為 WPC 1ch Current Sense Amplifier 的詳細接腳與電源配置說明：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier_pinout.png" alt="1ch_Current_Sense_Amplifier_pinout" width="60%" />
</div>

### 電流對電壓映射表 (Current-to-Voltage Mapping Table)

| 電流 (A/mA) | 電壓 (V) |
| :---------- | :------- |
| 1A          | 10V      |
| 100mA       | 1V       |
| -100mA      | -1V      |
| -1A         | -10V     |

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier_current_to_voltage.png" alt="1ch_Current_Sense_Amplifier_current_to_voltage" width="60%" />
</div>

---

## 進階設定與技術規格

### 隔離規範 (Isolation Specification)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier_isolation.png" alt="1ch_Current_Sense_Amplifier_isolation" width="60%" />
</div>

### 輸入對輸出曲線 (範圍：±1A)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier_1A.png" alt="1ch_Current_Sense_Amplifier_1A" width="60%" />
</div>

### 輸入對輸出曲線 (範圍：±1mA)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_Current_Sense_Amplifier_1mA.png" alt="1ch_Current_Sense_Amplifier_1mA" width="60%" />
</div>
