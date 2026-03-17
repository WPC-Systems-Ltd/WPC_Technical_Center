---
title: 1ch Low Power Current Source
sidebar_position: 3
description: WPC 1ch Low power current source (LPCS) 產品簡介、特點與規格說明
---

# 1ch Low Power Current Source

## 產品簡介

WPC 1ch Low Power Current Source (LPCS) 是一個可將電壓訊號轉換為高精度**微小電流**輸出的訊號處理前端模組。本產品專為需要精密電流驅動與測量的應用場景而設計，具備精巧的體積與高效的電流控制能力。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS.png" alt="1ch_LPCS" width="60%" />
</div>

---

## 產品規格

| 參數                         | 最小值 | 典型值 | 最大值 | 單位 | 條件/說明                      |
| :--------------------------- | :----: | :----: | :----: | :--- | :----------------------------- |
| 電流源供電輸入 (Vcs)         |   5    |   9    |   12   | V    | -                              |
| 放大器供電輸入 (Vcc)         |   7    |   12   |   15   | V    | 須至少比 Vcs 高 2V             |
| 電壓輸入範圍 (Vin)           |   0    |        |   5    | V    | Vcs = 12V                      |
| 電壓輸入閾值 (Vth)           |   20   |   40   |   50   | mV   | -                              |
| 電流輸出範圍 (Iout)          |   0    |        |  200   | mA   | Vcs = 12V                      |
| 電流輸出精度                 |   5    |        |   10   | µA   | -                              |
| Vsens 輸出範圍               |   10   |        |   12   | V    | 須小於 Vcc 2V (Vcc = ±15V)     |
| Isens 輸出範圍               |   10   |        |   12   | V    | Vcc = ±15V                     |

---

## 硬體介面與接腳定義

WPC 1ch LPCS 具備上下兩組端子，分別負責不同訊號與電源的連接：

### 頂部端子 (Pin 1 ~ 10)

主負責電源輸入與控制訊號連接。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_pinout1.png" alt="1ch_LPCS_pinout" width="40%" />
</div>

| 接腳編號 | 描述                         | 功能說明                   |
| :------- | :--------------------------- | :------------------------- |
| 1        | Current source power in+     | 電流源正極電源輸入 (Vcs)   |
| 2        | Current source power in+     | 電流源正極電源輸入 (Vcs)   |
| 3        | Sense amplifier power in+    | 感測放大器正極電源 (Vcc)   |
| 4        | Sense amplifier power in-    | 感測放大器負極電源         |
| 5        | Current Control Voltage in+  | 外部控制電壓輸入 (Vin)     |
| 6        | AGND                         | 類比接地                   |
| 7        | Current sense voltage out+   | 電流感測電壓輸出 (Isens)   |
| 8        | AGND                         | 類比接地                   |
| 9        | Voltage sense voltage out+   | 電壓感測電壓輸出 (Vsens)   |
| 10       | AGND                         | 類比接地                   |

### 底部端子 (Pin 1 ~ 4)

主負責電流輸出與負載端電壓感測。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_pinout2.png" alt="1ch_LPCS_pinout" width="20%" />
</div>

| 接腳編號 | 描述    | 功能說明           |
| :------- | :------ | :----------------- |
| 1        | Vsens-  | 電壓感測 (負端)    |
| 2        | Iout-   | 電流輸出 (負端)    |
| 3        | Iout+   | 電流輸出 (正端)    |
| 4        | Vsens+  | 電壓感測 (正端)    |

---

## 系統連線與應用

### 系統連接範例

透過一般資料擷取設備 (DAQ) 進行控制與量測的連接範例：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_connection_diagram.png" alt="1ch_LPCS_connection_diagram" width="80%" />
</div>

### 應用範例：接觸電阻量測

:::tip
若欲量測接觸電阻，強烈建議使用**四線式感測 (4-wire sensing)** 技術，以消除線材本身阻抗所帶來的誤差，確保量測結果的精確度。
:::

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_CR_measurement.png" alt="1ch_LPCS_CR_measurement" width="60%" />
</div>

### 特性曲線：輸入電壓與輸出電流

下圖展示了控制輸入電壓對應輸出電流的線性關係曲線：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_Vin_vs_Iout.png" alt="1ch_LPCS_Vin_vs_Iout" width="80%" />
</div>

---

## 擴充模組：2ch Power LPCS (專用電源供應器)

WPC 2ch Power LPCS 是一款專為驅動 WPC 1ch LPCS 所設計的高隔離雙通道電源供應器，能有效簡化系統配線並提升訊號穩定度。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_front.png" alt="2ch_Power_LPCS_front" width="50%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_rear.png" alt="2ch_Power_LPCS_rear" width="50%" />
</div>

### 產品規格與特點

*   **支援對象**：可同時支援 2 組 WPC 1ch LPCS 運行
*   **供電輸入 (Power In)**：24 VDC
*   **電源輸出 (Power Out)**：±12 V 高度隔離 (Isolated)
*   **電流輸出控制 (Current Out Control)**：0 ~ 5 V
*   **電壓 / 電流感測 (Voltage / Current Sense)**：0 ~ 5 V

### 前面板介面

前面板具備兩組輸出埠，可直接透過 4-pin 訊號線與 1ch LPCS 的底部端子連接。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_pinout_front.png" alt="2ch_Power_LPCS_pinout_front" width="60%" />
</div>

| 接腳編號 | 描述    |
| :------- | :------ |
| 1        | Vsens-  |
| 2        | Iout-   |
| 3        | Iout+   |
| 4        | Vsens+  |

### 後面板介面

後面板備有兩組 10-pin 牛角座 (IDC-10P) 及連接至 DAQ 的訊號接口，分為 Channel A 與 Channel B 兩組獨立通道。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_pinout_rear.png" alt="2ch_Power_LPCS_pinout_rear" width="60%" />
</div>

| 接腳編號 | 通道 | 描述   | 功能說明                   |
| :------- | :--- | :----- | :------------------------- |
| 1        | A    | Vsens  | 感測電壓 (0 ~ 10V 輸出)    |
| 2        | A    | Isens  | 感測電流 (0 ~ 10V 輸出)    |
| 3        | A    | Ictrl  | 控制電流 (0 ~ 5V 輸入)     |
| 4        | A    | GND    | 通道 A 專用類比接地 (AGND) |
| 5        | B    | Vsens  | 感測電壓 (0 ~ 10V 輸出)    |
| 6        | B    | Isens  | 感測電流 (0 ~ 10V 輸出)    |
| 7        | B    | Ictrl  | 控制電流 (0 ~ 5V 輸入)     |
| 8        | B    | GND    | 通道 B 專用類比接地 (AGND) |
