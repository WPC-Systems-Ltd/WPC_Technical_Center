---
title: USB-DAQ-D-SNK
sidebar_position: 4
---

USB-DAQ-D-SNK 提供工業級 **24V 隔離數位 I/O**（8 DI + 8 DO），具備 **2.5kV 光電隔離**保護，輸出額定電流達 **300mA**（NPN汲入式），專為嚴苛工業環境設計。

# USB-DAQ-D-SNK

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 數位輸出 (DO): 12 通道 NPN, 光耦合隔離 24V
3. 數位輸入 (DI): 14 通道 NPN, 光耦合隔離 24V
4. PWM/計數器
5. 需外接 24V 直流電源
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](https://www.wpc.com.tw)

> ⚠️ 需使用外部 24V 電源。

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/usb-daq-d-snk-pinout.png" alt="USB-DAQ-D-SNK 腳位圖" width="60%" /></div>

### DAQ 接線說明
---

USB-DAQ-D-SNK 為 sinking output, sourcing input 模組，又稱 NPN type。輸出可以直接 loop-back 到輸入端進行測試。使用時必須於 Pin15, 16 以及 Pin13, 14 分別額外提供 24V 以及 0V。

> 💡 WPC 目前尚未推出 PNP type 的 USB I/O 硬體。

> 下圖為 DO 等效電路圖，DO 輸出時會將 output pin 連接到 0V，負載端則需共陽極 24V。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/d-snk-do-wiring.png" alt="DO 接線圖" width="60%" /></div>

> 下圖為 DI 等效電路圖，所有 DI 通道內部都直接共陽極 24V，因此若將 DI 輸入 pin 腳連接到 0V 則可以從該 DI 腳位讀取到 TRUE。DI 腳位也可以透過 DO 腳位進行 loop-back 測試。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/d-snk-di-wiring.png" alt="DI 接線圖" width="60%" /></div>
