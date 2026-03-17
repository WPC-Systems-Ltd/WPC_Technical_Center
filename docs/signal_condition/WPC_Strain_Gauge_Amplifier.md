---
title: 1ch Strain Gauge Amplifier
sidebar_position: 10
description: WPC 1ch Strain Gauge Amplifier (SGA) 產品簡介、特點與規格說明
---

# 1ch Strain Gauge Amplifier

WPC Strain Gauge Amplifier (SGA) 是一款專為應變計量測設計的高頻寬訊號放大前端模組。它能將應變計產生的微小電壓變化訊號精確放大為標準電壓輸出，讓使用者能夠透過一般的類比輸入通道輕鬆進行高頻應變與結構應力分析。

### 核心特色
*   **高倍率精確放大**：提供固定 1000 倍增益 (Gain)，將極微小的應變訊號提升至量測範圍。
*   **高頻寬量測能力**：具備高達 300KHz 的頻寬，適用於高速動態應變與衝擊波觀測。
*   **專用激勵電壓**：內建穩定 2V 激勵電壓 (Excitation voltage)，優化 1/4 橋感測器性能。
*   **高度電氣隔離**：電源與訊號採內部隔離設計，確保量測精度並降低接地迴圈干擾。
*   **1/4 橋支援**：專為 120 ohms 的 1/4 橋應變計架構所設計。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier.png" alt="Strain_Gauge_Amplifier" width="60%" />
</div>

---

## 產品規格與特點

WPC SGA 針對高頻率應变量測應用提供卓越的性能表現，其主要規格如下：

*   **供電輸入**：24 VDC
*   **增益 (Gain)**：1000
*   **激勵電壓 (Excitation Voltage)**：2 V
*   **輸出電壓範圍**：±2 V
*   **頻寬 (Bandwidth)**：300 KHz
*   **基本噪訊 (Noise)**：約 50 mV (全頻寬下)
*   **感測器類型**：1/4 橋 (1/4 bridge), 120 ohms
*   **隔離設計**：電源與訊號內部隔離 (0V 不與 AGND 相連)

---

## 接腳定義與硬體介面

以下為 WPC SGA 的詳細接腳配置說明：

| 接腳編號 | 標籤    | 功能說明                           |
| :------- | :------ | :--------------------------------- |
| 1        | Sensor- | 連接至應變計 (負荷端 -)             |
| 2        | Sensor+ | 連接至應變計 (負荷端 +)             |
| 3        | AGND    | 訊號地線                           |
| 4        | Vout    | 輸出訊號                           |
| 5        | Vtune   | 偏移調整參考 (可用於外部補償)       |
| 6        | 24V     | 電源輸入 正極 (24Vin)              |
| 7        | 0V      | 電源地線                           |
| VR       | Offset  | 偏移調整電阻 (順時針旋轉可增加偏移) |

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_pinout.png" alt="Strain_Gauge_Amplifier_pinout" width="60%" />
</div>

---

## 系統連線與應用

### 連線範例 (Connection Diagram)
將應變計正確連接至 Sensor+ 與 Sensor-，即可啟動量測。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_connection.png" alt="Strain_Gauge_Amplifier_connection" width="60%" />
</div>

### 搭配 NI 資料擷取設備應用
本模組可與常見的 DAQ 設備 (如 NI-6009 或 NI-6363) 快速整合。透過 Vtune 接腳，使用者可以精確觀察或調整零點偏移。

#### V-tune 與 Offset 的線性關係 (V-tune vs. Offset)
下表展示了透過調校 Vtune 來達成偏移補償的典型對應關係：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_use_NI6009.png" alt="Strain_Gauge_Amplifier_use_NI6009" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_use_NI6363.png" alt="Strain_Gauge_Amplifier_use_NI6363" width="60%" />
</div>

| Vtune 調整值 | 產生之 Offset 位準 |
| :----------- | :----------------- |
| ±10 mV       | ±190 mV            |

---

## 進階測試與性能

### 噪訊評估 (Noise Evaluation)
在 300kHz 的全頻寬狀態下，SGA 的噪訊位準約為 60mV。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_noise.png" alt="Strain_Gauge_Amplifier_noise" width="60%" />
</div>

---

## 尺寸圖 (Dimensional Drawing)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_dimension.png" alt="Strain_Gauge_Amplifier_dimension" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Strain_Gauge_Amplifier_dimension1.png" alt="Strain_Gauge_Amplifier_dimension1" width="60%" />
</div>
