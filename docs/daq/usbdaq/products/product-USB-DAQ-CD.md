---
title: USB-DAQ-CD
sidebar_position: 7
description: "USB-DAQ-CD 提供 CAN 2.0A/B 通訊介面，支援最高 1Mbps 傳輸速率，整合 20 通道數位 I/O，適用於車載網路、工業自動化與設備間通訊應用。 --- 1. USB 2.0 全速匯流排供電 2. 20 通道 3.3V 數位 I/O (可承受 5V 輸入) 3. 支援 I..."
keywords: [USBDAQCD, 資料擷取, DAQ卡, 量測硬體, WPC DAQ, 資料擷取系統]
---
USB-DAQ-CD 提供 **CAN 2.0A/B 通訊介面**，支援最高 **1Mbps** 傳輸速率，整合 **20 通道數位 I/O**，適用於車載網路、工業自動化與設備間通訊應用。

# USB-DAQ-CD

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 20 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. CAN V2.0B 傳輸速率可達 1Mb/sec
5. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQCD_pinout.webp" alt="USB-DAQ-CD 腳位圖" width="60%" /></div>

### CAN Bus 接線說明
---

CAN bus 的接線非常簡單，只需將 CAN_H 和 CAN_L 訊號並接到 CAN 網路即可。USB-DAQ-CD 的 Pin35, 36 提供了 120 歐姆的內部終端電阻（Termination resistor）功能。如果需要使用終端電阻，只需將 Pin35, 36 兩個接點短路即可。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQCD_CANbud_wiring.webp" alt="CAN Bus 接線圖" width="60%" /></div>

### 產品規格

---

#### 電源需求

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 電源電壓         |                    |  4.3   |   5    |  5.5   |  V   |
| 電流消耗         | 待機模式           |        |  180   |        |  mA  |

#### 數位輸入

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸入高電位電壓   |                    |   3    |   5    |  5.5   |  V   |
| 輸入低電位電壓   |                    |  -0.5  |   0    |  0.5   |  V   |
| 輸入阻抗         |                    |  50k   |        |        |  Ω   |

#### 數位輸出

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸出高電位電壓   |                    |  3.1   |  3.3   |  3.5   |  V   |
| 輸出低電位電壓   |                    |  -0.5  |   0    |  0.5   |  V   |
| 輸出電流 (Source)|                    |        |        |   10   |  mA  |
| 輸出電流 (Sink)  |                    |        |        |  -10   |  mA  |

#### 通訊介面

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| UART 鮑率 (Baud Rate) |               |        |        | 460.8k | bps  |
| SPI-1 傳輸率     |                    |        |        |  36M   |  Hz  |
| SPI-2 傳輸率     |                    |        |        |  18M   |  Hz  |
| I2C 傳輸率       |                    |        |        |  400k  |  Hz  |
| CAN 傳輸率       |                    |        |        |   1M   | bps  |