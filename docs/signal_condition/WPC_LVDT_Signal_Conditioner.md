---
title: 1ch LVDT Signal Conditioner
sidebar_position: 11
description: WPC 1ch LVDT Signal Conditioner 產品簡介、特點與規格說明
---

# 1ch LVDT Signal Conditioner

WPC LVDT Signal Conditioner 是一款專為線性差動變壓器 (LVDT) 位移感測器設計的訊號處理前端模組。它集成了激勵電壓驅動、解調濾波與訊號放大功能，能將感測器的位移變化精確轉換為標準的類比電壓訊號。

### 核心特色
*   **高動態驅動能力**：提供 7kHz 的驅動頻率 (Drive Frequency)，適用於大多數標準 LVDT 感測器。
*   **寬廣輸出範圍**：支援 ±10V 的類比電壓輸出，具備優異的線性度。
*   **可調式增益與偏移**：配備雙電阻 (VR1 & VR2)，使用者可針對不同量程與零點位置進行細膩調校。
*   **低雜訊穩定性**：噪訊位準控制在 30mV 以下，確保高解析度的位移量測。
*   **工業標準介面**：採用 24VDC 供電，易於整合至各式資料擷取與自動化系統。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner.png" alt="LVDT_Signal_Conditioner" width="60%" />
</div>

---

## 產品規格與特點

WPC LVDT Signal Conditioner 提供穩定且精確的位移訊號處理能力，其主要規格如下：

*   **供電輸入**：24 VDC
*   **輸出電壓範圍**：±10 V
*   **驅動頻率 (Drive Frequency)**：7 kHz
*   **頻寬 (Bandwidth)**：0 ~ 300 Hz
*   **基本噪訊 (Noise)**：< 30 mV

---

## 接腳定義與硬體介面

以下為 WPC LVDT Signal Conditioner 的詳細接腳與調校電阻說明：

| 編號 | 標籤 / 功能 | 功能說明                                       |
| :--- | :---------- | :--------------------------------------------- |
| VR1  | Gain Tuning | 增益調整：順時針旋轉增加增益；逆時針旋轉減少增益 |
| VR2  | Offset      | 偏移調整：±9.9V 至 ±9.7V。順時針旋轉減少；逆時針旋轉增加 |
| 1    | Vb          | 感測器連接端 B                                |
| 2    | Va          | 感測器連接端 A                                |
| 3    | EXC2        | 激勵電壓輸出 2                                |
| 4    | EXC2        | 激勵電壓輸出 2                                |
| 5    | GND         | 內部接地                                      |
| 6    | NC          | 未連接                                        |
| 7    | GND (SIG)   | 訊號輸出 接地                                 |
| 8    | Vout (SIG)  | 訊號輸出 (Vout)                               |
| 24V  | 24V         | 電源輸入 正極                                 |
| 0V   | GND         | 電源輸入 負極 (0V)                            |

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_pinout.png" alt="LVDT_Signal_Conditioner_pinout" width="60%" />
</div>

---

## 系統連線與應用

### 連線範例 (Connection Diagram)
將 LVDT 感測器的激勵與訊號線正確連接至對應端子，即可啟動位移量測。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection.png" alt="LVDT_Signal_Conditioner_connection" width="60%" />
</div>

 <div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection1.png" alt="LVDT_Signal_Conditioner_connection1" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection2.png" alt="LVDT_Signal_Conditioner_connection2" width="60%" />
</div>

---

## 特性與規格參考

### LVDT-813 系列支援
本模組可完美搭配 LVDT-813 系列位移感測器使用，下圖展示了該系列的典型規格與性能曲線。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_813_series.png" alt="LVDT_813_series" width="80%" />
</div>

---

### LVDT-813-1000 datasheet
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_813-1000.png" alt="LVDT_Signal_Conditioner_813" width="80%" />
</div>

---
## 尺寸圖 (Dimensional Drawing)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_dimension.png" alt="LVDT_Signal_Conditioner_dimension" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_dimension1.png" alt="LVDT_Signal_Conditioner_dimension1" width="60%" />
</div>

