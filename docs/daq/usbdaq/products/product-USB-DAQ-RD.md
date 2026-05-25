---
title: USB-DAQ-RD
sidebar_position: 6
description: "USB-DAQ-RD 支援 2 通道 PT-100/PT-1000 RTD 溫度感測器，提供 15-bit 解析度，溫度解析度達 0.03125°C，總準確度 0.05%，適用於高精度溫度監控。 --- 1. USB 2.0 全速匯流排供電 2. 21 通道 3.3V 數位 I/O (可承受..."
keywords: [USBDAQRD, 資料擷取, DAQ卡, 量測硬體, WPC DAQ, 資料擷取系統]
---
USB-DAQ-RD 支援 **2 通道 PT-100/PT-1000 RTD 溫度感測器**，提供 **15-bit** 解析度，溫度解析度達 **0.03125°C**，總準確度 **0.05%**，適用於高精度溫度監控。

# USB-DAQ-RD

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 21 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. 2 通道 RTD 輸入
5. 支援 PT-100 或 PT-1000
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQRD_pinout.webp" alt="USB-DAQ-RD 腳位圖" width="60%" /></div>

### RTD 感測器接線說明
---

下圖為 USB-DAQ-RD 電阻式溫度感測器（RTD）輸入等效電路圖。量測原理為使用一個約 1~4 mA 的精密電流源（Excitation Current），透過 EX+ 和 EX- 腳位將電流送入電阻式溫度感測器。當電流流經電阻式溫度感測器時，會產生一個跨壓，並透過 RTD+ 和 RTD- 腳位的內部放大器及 ADC 進行訊號量測。因此，在量測溫度時，EX+、EX-、RTD+ 和 RTD- 這四個針腳都一定會用到，不會有浮接（No Connection）的情況。

市售三種電阻式溫度感測器的接線說明如下：

- 在距離很短（3 公尺以內）的情況下，這三種溫度感測器之間的量測誤差可以忽略不計。
- 如果溫度感測器與 USB-DAQ-RD 的距離很長，甚至超過 5 公尺，則建議選用四線式（4-Wire）電阻式溫度感測器。
- 使用四線式（4-wire）溫度感測器時，直接參考下圖 4-wire 連接方式。
- 使用三線式（3-wire）溫度感測器時，需使用一條外部連接線，將單邊的 RTD- 與 EX- 短路（或單邊的 RTD+ 與 EX+短路）。
- 使用兩線式（2-wire）溫度感測器時，須分別將 RTD+與 EX+ 短路以及 RTD- 與 EX- 短路。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQRD_wiring.webp" alt="RTD 接線圖" width="60%" /></div>

### 四線式接法

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQD_4wire.webp" alt="RTD 四線式接法" width="30%" /></div>

---

### 產品規格

---

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

#### RTD 輸入

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| ADC 解析度       |                    |        |   15   |        | bit  |
| ADC 全刻度誤差   |                    |        |   ±1   |        | LSB  |
| ADC 積分非線性   |                    |        |   ±1   |        | LSB  |
| ADC 偏移誤差     |                    |   -3   |        |   3    | LSB  |
| 額定溫度解析度   | 因 RTD 非線性而異  |        |0.03125 |        |  °C  |
| 總準確度 (FS)    |                    |        | 0.05%  |        |  %   |
| ADC 轉換時間     | 視轉換模式而定     |        |   20   |   66   |  ms  |
| 輸入電壓保護     |                    |        |  ±45   |        |  V   |
| 偏壓輸出電流     |                    |  0.2   |        |  5.75  |  mA  |
| 共模抑制比       |                    |        |   90   |        |  dB  |
| 50/60Hz 雜訊抑制 | 基頻與諧波         |        |   82   |        |  dB  |

#### 通訊介面

---

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| UART 鮑率 (Baud Rate) |               |        |        | 460.8k | bps  |
| SPI-1 傳輸率     |                    |        |        |  36M   |  Hz  |
| SPI-2 傳輸率     |                    |        |        |  18M   |  Hz  |
| I2C 傳輸率       |                    |        |        |  400k  |  Hz  |
