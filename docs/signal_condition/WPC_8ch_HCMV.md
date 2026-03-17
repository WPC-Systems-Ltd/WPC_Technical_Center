---
title: 8ch High Common Mode Voltage (HCMV) Amplifier
sidebar_position: 6
description: WPC 8ch High Common Mode Voltage (HCMV) Amplifier 產品簡介、特點與規格說明
---

# 8ch High Common Mode Voltage (HCMV) Amplifier

WPC HCMV Amplifier (包含 HCMV Amplifier-200 與 HCMV Amplifier-275) 是一款專為高共模電壓訊號處理設計的放大器模組。本產品具備 8 個接地參考通道 (Ground-referenced channels) 與隔離式電源供應設計，特別適合用於**電池組 (Battery pack)** 與**燃料電池 (Fuel battery)** 的量測應用。

### 核心特色
*   **極高共模電壓支援**：提供高達 200V 或 275V 的共模電壓範圍，滿足高壓量測需求。
*   **高安全性隔離保護**：具備 500V 的輸入保護能力，並採用電源隔離設計以保障後端設備。
*   **優異的雜訊抑制**：共模抑制比 (CMRR) 最小值達 90dB，能有效過濾高壓環境下的雜訊。
*   **內建低通濾波器**：內建 100kHz 低通濾波器，提供穩定的訊號品質。
*   **標準化供電與增益**：採用 24VDC 供電，具備固定增益 (Gain) 為 1，方便系統整合。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_HCMV.png" alt="8ch_HCMV" width="60%" />
</div>

---

## 產品規格與特點

WPC 8ch HCMV Amplifier 專為高穩定性與高安全性量測而設計，其主要規格如下：

*   **供電輸入**：24 VDC
*   **高共模電壓範圍**：200 V 或 275 V
*   **通道數**：8 通道
*   **增益 (Gain)**：1
*   **輸入/輸出範圍**：±10 V
*   **共模抑制比 (CMRR)**：≥ 90 dB
*   **輸入保護**：500 V
*   **頻寬 (Bandwidth)**：100 kHz (內建低通濾波器)

| 參數                         | 符號  | 條件               | 最小值 | 典型值 | 最大值 | 單位 | 說明                           |
| :--------------------------- | :---- | :----------------- | :----: | :----: | :----: | :--- | :----------------------------- |
| 電壓輸入範圍                 | Vin   | Vcs=12V            |   0    |        |   5    | V    | -                              |
| 電壓輸入閾值                 | Vth   | -                  |   20   |   40   |   50   | mV   | -                              |
| 電流輸出範圍                 | Iout  | Vcs=12V            |   0    |        |  200   | mA   | -                              |
| 電流源供電輸入               | Vcs   | -                  |   5    |   9    |   12   | V    | -                              |
| 放大器供電輸入               | Vcc   | -                  |   7    |   12   |   15   | V    | 須至少比 Vcs 高 2V             |
| Vsens 輸出範圍               | Vsens | Vcc = ±15V          |        |   10   |   12   | V    | 須小於 Vcc 2V                  |
| Isens 輸出範圍               | Isens | Vcc = ±15V          |        |   10   |   12   | V    | -                              |
| 電流輸出精度                 | -     | -                  |   5    |        |   10   | µA   | -                              |

---

## 接腳定義與硬體介面

以下為 WPC 8ch HCMV Amplifier 的接腳與介面配置說明：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_HCMV_pinout.png" alt="8ch_HCMV_pinout" width="60%" />
</div>

:::caution
在進行高電壓量測時，請務必確認所有接地連接均正確且牢固，以避免設備損壞或人員受傷。
:::

| 名稱 | 功能說明 |
| :--- | :--- |
| **Power In** | 24VDC 電源輸入端 |
| **Signal Input** | 8 通道高壓訊號輸入介面 |
| **Signal Output** | 8 通道訊號輸出介面 (Gain = 1) |

---

## 系統連線與應用

下圖展示了 8ch HCMV Amplifier 在典型電池組量測系統中的連線方式：

### 連線範例 (Connection Diagram)
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_HCMV_connection_diagram.png" alt="8ch_HCMV_connection_diagram" width="60%" />
</div>

### 應用說明
WPC 8ch HCMV 主要應用於電池組量測。由於電池組內部存在極高的串聯電壓，普通的感測器難以直接處理其相對於地的共模位準，本模組能將高共模環境下的電壓差訊號安全地轉換為對地的標準電壓訊號。

---

## 進階特性

### Power & References

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_HCMV_power_ref.png" alt="8ch_HCMV_power_ref" width="60%" />
</div>

### 高壓擴充 (High Voltage Expansion)
本系列模組支援高壓擴充應用，可根據量測點的總串聯電壓選擇對應的型號 (HCMV-200 或 HCMV-275)，並可多組並用以擴充量測通道。
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_HCMV_high_voltage_expansion.png" alt="8ch_HCMV_high_voltage_expansion" width="60%" />
</div>

