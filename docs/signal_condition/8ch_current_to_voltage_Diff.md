---
title: 8ch Current-to-Voltage Converter (差分)
sidebar_position: 4
description: WPC 8ch 4-20mA to 0-5V converter (差分輸出版) 產品簡介、特點與規格說明
sidebar_label: 8ch Current-to-Voltage (差分)
---

# 8ch Current-to-Voltage Converter (差分輸出版本)

## 產品簡介

WPC 8ch Current-to-Voltage Converter 是一款將工業標準的 4-20mA 電流訊號轉換為 0-5V 電壓訊號的 8 通道訊號處理模組。本模組設計支援多通道高精度轉換，此為 **差分輸出 (Differential)** 版本，此設計有助於消除傳輸路徑上的共模雜訊，特別適合遠距離傳輸或高雜訊環境的資料擷取設備 (DAQ) 與控制系統的需求。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_differential.png" alt="8ch_cv_differential" width="60%" />
</div>

---

## 產品規格

| 參數                           | 規格                           |
| :----------------------------- | :----------------------------- |
| 通道數量 (Num of channel)      | 8 通道                         |
| 輸入訊號 (Input)               | 4-20 mA                        |
| 輸出訊號 (Output)              | 0-5 V (差分輸出版)             |
| 整體轉換精度 (Overall accuracy)| 0.1%                           |
| 共模抑制比 (CMR)               | 86 dB                          |
| 電源供應 (Power supply)        | 24 VDC                         |
| 隔離設計 (Isolation)           | 通道對電源隔離設計             |

---

## 接腳定義

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_differential_pinout.png" alt="8ch_cv_differential_pinout" width="60%" />
</div>


| 接腳標示 | 說明     |
| :------- | :------- |
| 24V      | 正極電源 |
| GND      | 系統接地 |
| Input    | 4-20mA  |
| Output   | 0-5V  |


---

## 模組傳感器接線

輸入端支援 **Sourcing input** 與 **Sinking input** 兩種類型的傳感器。請依據您使用的傳感器類型，參考以下對應的接線圖配置：

| 類型 | Input 端口的角色 | 電流方向 | 外部感測器類型 |
| :--- | :--- | :--- | :--- |
| Sinking | 提供 GND (接地) | 流入端口 | 需要 PNP 型感測器 |
| Sourcing | 提供 VCC (電源) | 流出端口 | 需要 NPN 型感測器 |

### Sinking Input 接線方式

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_differential_sinking_input.png" alt="8ch_cv_differential_sinking_input" width="60%" />
</div>

### Sourcing Input 接線方式

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_differential_sourcing_input.png" alt="8ch_cv_differential_sourcing_input" width="60%" />
</div>


---

## 輸出端接線 (Differential Output)

差分輸出版本中，每個輸出通道具備獨立的 `OUT+` (正訊號) 與 `OUT-` (負訊號)。此設計有助於消除傳輸路徑上的共模雜訊，特別適合遠距離傳輸或高雜訊環境。

---

## 外觀尺寸 (Dimension)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_differential_dimension.png" alt="8ch_cv_differential_dimension" width="60%" />
</div>

*   **長度**：170.0 mm
*   **寬度**：72.0 mm
