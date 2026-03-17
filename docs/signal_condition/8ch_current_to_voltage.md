---
title: 8ch Current-to-Voltage Converter
sidebar_position: 4
description: WPC 8ch 4-20mA to 0-5V converter 產品簡介、特點與規格說明
---

# 8ch Current-to-Voltage Converter

## 產品簡介

WPC 8ch Current-to-Voltage Converter 是一款將工業標準的 4-20mA 電流訊號轉換為 0-5V 電壓訊號的 8 通道訊號處理模組。本模組設計支援多通道高精度轉換，並提供 **單端輸出 (Single-Ended)** 與 **差分輸出 (Differential)** 兩種版本，以滿足不同資料擷取設備 (DAQ) 與控制系統的需求。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_appearance.png" alt="8ch_cv_appearance" width="60%" />
</div>

---

## 產品規格

| 參數                           | 規格                           |
| :----------------------------- | :----------------------------- |
| 通道數量 (Num of channel)      | 8 通道                         |
| 輸入訊號 (Input)               | 4-20 mA                        |
| 輸出訊號 (Output)              | 0-5 V (提供單端與差分兩種版本) |
| 整體轉換精度 (Overall accuracy)| 0.1%                           |
| 共模抑制比 (CMR)               | 86 dB                          |
| 電源供應 (Power supply)        | 24 VDC                         |
| 隔離設計 (Isolation)           | 通道對電源隔離設計             |

---

## 硬體介面與接腳定義

### 電源配置

模組頂部提供標準的電源端子，確保系統穩定運行。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_power_connection.png" alt="8ch_cv_power_connection" width="40%" />
</div>

| 接腳標示 | 說明     |
| :------- | :------- |
| 24V      | 正極電源 |
| GND      | 系統接地 |

### 訊號輸入 (Input) 與 輸出 (Output)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_terminals.png" alt="8ch_cv_terminals" width="60%" />
</div>

模組左右兩側配有對應的輸入與輸出端子：
*   **左側 (IN-1 ~ IN-8)**：接收來自外部傳感器的 4-20mA 電流訊號輸入。每組輸入通道皆備有對應的 GND 端子。
*   **右側 (OUT-1 ~ OUT-8)**：提供轉換後的 0-5V 電壓訊號輸出至後端 DAQ 系統。

---

## 模組傳感器接線 (Module Sensor Wiring)

輸入端支援 **Sourcing input** 與 **Sinking input** 兩種類型的傳感器。請依據您使用的傳感器類型，參考以下對應的接線圖配置：

### Sourcing Input 傳感器接線

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_sourcing_input.png" alt="8ch_cv_sourcing_input" width="60%" />
</div>

### Sinking Input 傳感器接線

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_sinking_input.png" alt="8ch_cv_sinking_input" width="60%" />
</div>

---

## 輸出端接線差異 (Single-Ended vs Differential)

WPC 8ch Current-to-Voltage Converter 依據輸出接線方式分為兩個版本，請依您持有的設備型號選擇合適的系統連接圖。

### 單端輸出版本 (Single-Ended Output)

單端輸出版本中，所有輸出通道共用類比接地 (GND)。連接 DAQ 設備時，需將訊號地與模組的 0V 參考點共地。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_typical_connection_se.png" alt="8ch_cv_typical_connection_se" width="80%" />
</div>

:::caution
*   請確認 **Input (輸入)、Output (輸出) 與 GND (接地)** 之間的連接順序正確無誤。
*   Signal GND 必須與模組上的 **0V** 端子連接，以確保參考電位一致。
:::

### 差分輸出版本 (Differential Output)

差分輸出版本中，每個輸出通道具備獨立的 `OUT+` (正訊號) 與 `OUT-` (負訊號)。此設計有助於消除傳輸路徑上的共模雜訊，特別適合遠距離傳輸或高雜訊環境。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_typical_connection_diff.png" alt="8ch_cv_typical_connection_diff" width="80%" />
</div>

---

## 外觀尺寸 (Dimension)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_dimension.png" alt="8ch_cv_dimension" width="60%" />
</div>

*   **長度**：170.0 mm
*   **寬度**：72.0 mm
