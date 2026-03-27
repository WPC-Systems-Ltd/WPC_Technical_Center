---
title: 2ch Current-to-Voltage Converter (單端)
sidebar_position: 4
description: WPC 2ch 4-20mA to 0-5V converter (單端輸出版) 產品簡介、特點與規格說明
sidebar_label: 2ch Current-to-Voltage (單端)
---

# 2ch Current-to-Voltage Converter (單端輸出版本)

## 產品簡介

WPC 2ch Current-to-Voltage Converter 是一款將工業標準的 4-20mA 電流訊號轉換為 0-5V 電壓訊號的 2 通道訊號處理模組。本模組設計支援多通道高精度轉換，本頁面介紹的是 **單端輸出 (Single-Ended)** 版本，以滿足單點接地的資料擷取設備 (DAQ) 與控制系統的需求。

### 單端輸出
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_cv_single_ended.png" alt="2ch_cv_single_ended" width="60%" />
</div>

---

## 產品規格

| 參數                           | 規格                           |
| :----------------------------- | :----------------------------- |
| 通道數量 (Num of channel)      | 2 通道                         |
| 輸入訊號 (Input)               | 4-20 mA                        |
| 輸出訊號 (Output)              | 0-5 V (單端輸出版)             |
| 整體轉換精度 (Overall accuracy)| 0.1%                           |
| 共模抑制比 (CMR)               | 86 dB                          |
| 電源供應 (Power supply)        | 24 VDC                         |
| 隔離設計 (Isolation)           | 通道對電源隔離設計             |

---

## 硬體介面與接腳定義

### 電源配置

模組頂部提供標準的電源端子，確保系統穩定運行。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_cv_single_ended_pinout.png" alt="2ch_cv_single_ended_pinout" width="60%" />
</div>


| 接腳標示 | 說明     |
| :------- | :------- |
| 24V      | 正極電源 |
| GND      | 系統接地 |
| Input    | 4-20mA  |
| Output   | 0-5V  |

:::info
Input 的 GND 與 output 的 GND 是相連的
:::

:::info
Signal GND 與 0V 是隔離的
:::


---
## 模組傳感器接線

輸入端支援 **Sourcing input** 與 **Sinking input** 兩種類型的傳感器。請依據您使用的傳感器類型，參考以下對應的接線圖配置：

| 類型 | Input 端口的角色 | 電流方向 | 外部感測器類型 |
| :--- | :--- | :--- | :--- |
| Sinking | 提供 GND (接地) | 流入端口 | 需要 PNP 型感測器 |
| Sourcing | 提供 VCC (電源) | 流出端口 | 需要 NPN 型感測器 |

### Sinking Input 接線方式

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_sinking_input.png" alt="8ch_cv_single_ended_sinking_input" width="60%" />
</div>

### Sourcing Input 接線方式

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_sourcing_input.png" alt="8ch_cv_single_ended_sourcing_input" width="60%" />
</div>

---

## 輸出端接線 (Single-Ended Output)

單端輸出版本中，所有輸出通道共用類比接地 (GND)。連接 DAQ 設備時，需將訊號地與模組的 0V 參考點共地。

---

## 外觀尺寸 (Dimension)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_dimension.png" alt="8ch_cv_single_ended_dimension" width="60%" />
</div>

*   **長度**：170.0 mm
*   **寬度**：72.0 mm

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_cv_single_ended_dinrail.png" alt="2ch_cv_differential_dimension" width="60%" /> 
  DIN Rail（導軌）模組盤
</div> 