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

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQDSNK_pinout.png" alt="USB-DAQ-D-SNK 腳位圖" width="60%" /></div>

### DAQ 接線說明
---

USB-DAQ-D-SNK 為 sinking output, sourcing input 模組，又稱 NPN type。輸出可以直接 loop-back 到輸入端進行測試。使用時必須於 Pin15, 16 以及 Pin13, 14 分別額外提供 24V 以及 0V。

> 💡 WPC 目前尚未推出 PNP type 的 USB I/O 硬體。

> 下圖為 DO 等效電路圖，DO 輸出時會將 output pin 連接到 0V，負載端則需共陽極 24V。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQDSNK_DO_wiring.png" alt="DO 接線圖" width="60%" /></div>

> 下圖為 DI 等效電路圖，所有 DI 通道內部都直接共陽極 24V，因此若將 DI 輸入 pin 腳連接到 0V 則可以從該 DI 腳位讀取到 TRUE。DI 腳位也可以透過 DO 腳位進行 loop-back 測試。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQDSNK_DI_wiring.png" alt="DI 接線圖" width="60%" /></div>

### 數位輸入 (-D Only)

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸入高電位電壓   |                    |   3    |   5    |  5.5   |  V   |
| 輸入低電位電壓   |                    |  -0.5  |   0    |  0.5   |  V   |
| 輸入阻抗         |                    |  50k   |        |        |  Ω   |

### 數位輸出 (-O Only)

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸出高電位電壓   |                    |  3.1   |  3.3   |  3.5   |  V   |
| 輸出低電位電壓   |                    |  -0.5  |   0    |  0.5   |  V   |
| 輸出電流 (Source)|                    |        |        |   10   |  mA  |
| 輸出電流 (Sink)  |                    |        |        |  -10   |  mA  |

### 工業級數位輸入 (-SNK Only)

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸入類型         | Sourcing Input     |        |        |        |      |
| 隔離電壓         |                    |        |  2.5   |        |  kV  |
| 輸入高電位電壓   |                    |        |   30   |        |  V   |
| 輸入低電位電壓   |                    |        |   12   |        |  V   |
| 輸入電阻         |                    |        |  6.8k  |        |  Ω   |

### 工業級數位輸出 (-SNK Only)

| 參數             | 測試條件/備註      | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :----------------- | :----: | :----: | :----: | :--: |
| 輸出類型         | Sinking Output     |        |        |        |      |
| 隔離電壓         |                    |        |  2.5   |        |  kV  |
| 輸出高電位電壓   |                    |        |   30   |        |  V   |
| 輸出低電位電壓   |                    |        |   12   |        |  V   |
| 輸出電流 Sink (瞬間峰值) |           |        |  -400  |  -500  |  mA  |
| 輸出電流 Sink (連續)     |           |        |  -300  |  -350  |  mA  |
