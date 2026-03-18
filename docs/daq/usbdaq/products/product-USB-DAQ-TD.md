---
title: USB-DAQ-TD
sidebar_position: 5
---

USB-DAQ-TD 專為溫度量測設計，提供 **4 通道熱電偶輸入**，支援 **K, J, N, R, S, T, E, B** 八種型號，量測範圍 **-210°C ~ 1800°C**，內建冷接點補償與50/60Hz雜訊濾波。

# USB-DAQ-TD

### 產品特色
---

1. USB 2.0 全速匯流排供電
2. 21 通道 3.3V 數位 I/O (可承受 5V 輸入)
3. 支援 I2C/SPI/UART/PWM/計數器
4. 2 通道熱電偶輸入
5. 支援感測器類型: K, J, N, R, S, T, E, & B
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](https://www.wpc.com.tw)

### 腳位圖
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQTD_pinout.png" alt="USB-DAQ-TD 腳位圖" width="60%" /></div>

### 熱電偶接線說明
---

USB-DAQ-TD 使用符合標準規格的熱電偶（Thermocouple）連接器，使用時只需直接接上連接器即可。如果自行購買熱電偶感測線再連接到標準連接器時，有可能會發生正負極接反的情況。如果熱電偶的正負極接反，則 DAQ 的溫度讀值會出現以下情況：加溫時顯示溫度下降、降溫時顯示溫度上升。此時只需將正負極對調即可解決問題。

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQTD_thermocouple.png" alt="熱電偶接線圖" width="60%" /></div>
