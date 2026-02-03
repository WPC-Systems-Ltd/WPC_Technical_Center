---
title: USB-DAQ-CD
sidebar_position: 3
---
# USB-DAQ-CD

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 20 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. CAN V2.0B 傳輸速率可達 1Mb/sec
5. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/usb-daq-cd-pinout.png" alt="USB-DAQ-CD 腳位圖" width="60%" /></div>

### CAN Bus 接線說明
---

CAN bus 的接線非常簡單，只需將 CAN_H 和 CAN_L 訊號並接到 CAN 網路即可。USB-DAQ-CD 的 Pin35, 36 提供了 120 歐姆的內部終端電阻（Termination resistor）功能。如果需要使用終端電阻，只需將 Pin35, 36 兩個接點短路即可。

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/can-bus-wiring.png" alt="CAN Bus 接線圖" width="60%" /></div>
