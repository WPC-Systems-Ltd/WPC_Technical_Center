---
title: USB-DAQ-RD
sidebar_position: 6
---

USB-DAQ-RD 支援 **4 通道 PT-100/PT-1000 RTD 溫度感測器**，提供 **15-bit** 解析度，溫度解析度達 **0.03125°C**，總準確度 **0.05%**，適用於高精度溫度監控。

# USB-DAQ-RD

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 21 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. 2 通道 RTD 輸入
5. 支援 PT-100 或 PT-1000
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](https://www.wpc.com.tw)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/usb-daq-rd-pinout.png" alt="USB-DAQ-RD 腳位圖" width="60%" /></div>

### RTD 感測器接線說明
---

下圖為 USB-DAQ-RD 電阻式溫度感測器（RTD）輸入等效電路圖。量測原理為使用一個約 1~4 mA 的精密電流源（Excitation Current），透過 EX+ 和 EX- 腳位將電流送入電阻式溫度感測器。當電流流經電阻式溫度感測器時，會產生一個跨壓，並透過 RTD+ 和 RTD- 腳位的內部放大器及 ADC 進行訊號量測。因此，在量測溫度時，EX+、EX-、RTD+ 和 RTD- 這四個針腳都一定會用到，不會有浮接（No Connection）的情況。

市售三種電阻式溫度感測器的接線說明如下：

- 在距離很短（3 公尺以內）的情況下，這三種溫度感測器之間的量測誤差可以忽略不計。
- 如果溫度感測器與 USB-DAQ-RD 的距離很長，甚至超過 5 公尺，則建議選用四線式（4-Wire）電阻式溫度感測器。
- 使用四線式（4-wire）溫度感測器時，直接參考下圖 4-wire 連接方式。
- 使用三線式（3-wire）溫度感測器時，需使用一條外部連接線，將單邊的 RTD- 與 EX- 短路（或單邊的 RTD+ 與 EX+短路）。
- 使用兩線式（2-wire）溫度感測器時，須分別將 RTD+與 EX+ 短路以及 RTD- 與 EX- 短路。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/rtd-wiring.png" alt="RTD 接線圖" width="60%" /></div>

### 四線式接法

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/usb-daq-rd-4wire.png" alt="RTD 四線式接法" width="30%" /></div>

---
