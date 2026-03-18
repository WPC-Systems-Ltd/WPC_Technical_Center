---
title: 1ch Programmable Gain Amplifier
sidebar_position: 5
description: WPC 1ch Programmable Gain Amplifier (PGA) 產品簡介、特點與規格說明
---

# 1ch Programmable Gain Amplifier

WPC 1ch Programmable Gain Amplifier (PGA) 是一個具備可程式化增益功能的訊號放大前端模組。本產品專為需要動態調整放大倍率的應用場景而設計，能有效處理不同幅度的輸入訊號，並將其轉換為高品質的差動輸出訊號。

### 核心特色
*   **可程式化增益控制**：支援從 0.125 到 128 的廣泛增益範圍，並透過 4-bit (D3~D0) 數位訊號進行精確切換。
*   **卓越的共模抑制**：具備高達 140dB 的 CMRR，能有效消除環境噪聲干擾。
*   **高安全性隔離設計**：提供通道對地的隔離保護，確保後端量測系統的安全。
*   **內建濾波器**：內建 EMI 濾波器與低通濾波器，頻寬達 9KHz，確保訊號純淨度。
*   **精密偏移調整**：配備可調式電阻 (VR)，方便使用者進行零點偏移 (Offset) 校正。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_PGA.png" alt="1ch_PGA" width="60%" />
</div>

---

## 產品規格與特點

WPC 1ch PGA 提供高精度且靈活的訊號放大功能，其主要規格如下：

*   **供電輸入**：24 VDC
*   **可程式化增益**：0.125 至 128 (透過 D3~D0 控制)
*   **輸入電壓範圍**：±10 V (單端 Single-ended)
*   **輸出電壓範圍**：±10 V (差動 Differential)
*   **頻寬 (Bandwidth)**：9 KHz
*   **共模抑制比 (CMRR)**：> 140 dB
*   **隔離設計**：通道對地隔離 (Channel-to-GND)
*   **零點調整**：可透過內建 VR 調整 Offset

---

## 接腳定義與硬體介面

以下為 WPC 1ch PGA 的詳細接腳與電源配置說明：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_PGA_pinout.png" alt="1ch_PGA_pinout" width="60%" />
</div>

| 接腳編號 | 名稱          | 功能說明                       |
| :------- | :------------ | :----------------------------- |
| 1        | Input+        | 訊號輸入 (正端)                |
| 2        | Input-        | 訊號輸入 (負端)                |
| 3        | D0            | 增益控制位元 0                 |
| 4        | D1            | 增益控制位元 1                 |
| 5        | D2            | 增益控制位元 2                 |
| 6        | D3            | 增益控制位元 3                 |
| 7        | GND           | 數位/訊號接地                  |
| 8        | Output        | 訊號輸出                       |
| VR       | Offset Tuning | 零點偏移調整電阻               |
| 24V+     | 24V           | 電源輸入 正極                  |
| 24V-     | 0V            | 電源輸入 負極                  |

:::note
增益控制輸入 (D3~D0) 支援 3.3V / 5V 邏輯位準。
:::

### 增益設定表 (Gain Control Table)

| D3 D2 D1 D0 | 增益倍率 (Gain) |
| :---------- | :-------------- |
| 0 0 0 0     | 0.125           |
| 0 0 0 1     | 0.25            |
| 0 0 1 0     | 0.5             |
| 0 0 1 1     | 1               |
| 0 1 0 0     | 2               |
| 0 1 0 1     | 4               |
| 0 1 1 0     | 8               |
| 0 1 1 1     | 16              |
| 1 0 0 0     | 32              |
| 1 0 0 1     | 64              |
| 1 0 1 0     | 128             |

---

## 系統連線與應用

下圖展示了 WPC 1ch PGA 在系統中的典型連線範例。

### 連線範例 1
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_PGA_example1.png" alt="1ch_PGA_example1" width="60%" />
</div>

### 連線範例 2
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_PGA_example2.png" alt="1ch_PGA_example2" width="60%" />
</div>

---

## 尺寸圖 (Dimensional Drawing)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_PGA_dimension.png" alt="1ch_PGA_dimension" width="60%" />
</div>
