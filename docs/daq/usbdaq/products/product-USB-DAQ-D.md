---
title: USB-DAQ-D
sidebar_position: 3
---

USB-DAQ-D 專為數位訊號處理設計，提供 **20 通道 3.3V 數位 I/O**（5V 耐壓），支援 **I2C/SPI/UART/PWM/計數器**，適合邏輯控制與感測器介接應用。

# USB-DAQ-D

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 26 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQD_pinout.png" alt="USB-DAQ-D 腳位圖" width="60%" /></div>

### 產品規格

---

#### 數位輸入

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸入高電位電壓   |                    |  3     |   5    |  5.5   |  V   |
| 輸入低電位電壓   |                    |  -0.5  |   0    |  0.5   |  V   |
| 輸入阻抗         |                    |  50k   |        |        |  Ω   |

#### 數位輸出

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸出高電位電壓   |                    |  3.1   |   3.3  |  3.5   |  V   |
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