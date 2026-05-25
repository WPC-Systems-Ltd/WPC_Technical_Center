---
title: Ethan-D
sidebar_position: 3
description: "Ethan-D 整合 8 通道數位輸入 (DI) 與 6 通道繼電器輸出 (NPN驅動)，並提供 2 通道 PWM 輸出，適合工業自動化控制與數位訊號處理。 --- --- 1. 電源輸入: 24VDC 2. 10/100 Base-T 乙太網路介面 3. 數位輸出 (DO): 6 通道 NP..."
keywords: [EthanD, 資料擷取, DAQ卡, 量測硬體, WPC DAQ, 資料擷取系統]
---
Ethan-D 整合 **8 通道數位輸入** (DI) 與 **6 通道繼電器輸出** (NPN驅動)，並提供 **2 通道 PWM 輸出**，適合工業自動化控制與數位訊號處理。

### 產品外觀

---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/ethan-daq/EthanD.webp" alt="Ethan-D 外觀" width="60%" /></div>

### 主要特色

---

1. 電源輸入: 24VDC
2. 10/100 Base-T 乙太網路介面
3. 數位輸出 (DO): 6 通道 NPN, 24V 光耦合隔離
4. 數位輸入 (DI): 8 通道 NPN, 24V 光耦合隔離
5. 2 通道 PWM 輸出
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位定義

---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/ethan-daq/EthanD_pinout.webp" alt="Ethan-D 腳位圖" width="60%" /></div>


### Ethan-D 詳細規格

---

#### 工業級數位輸入

| 參數             | 測試條件/備註 | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :------------ | :----- | :----- | :----- | :--- |
| 輸入類型         | 源型輸入      |        |        |        |      |
| 隔離電壓         |               |        | 2.5    | 30     | kV   |
| 輸入高電位電壓   |               |        | 30     |        | V    |
| 輸入低電位電壓   |               |        | 12     |        | V    |
| 輸入阻抗         |               |        | 6.8k   |        | Ω    |

#### 工業級數位輸出

| 參數                         | 測試條件/備註 | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------------------- | :------------ | :----- | :----- | :----- | :--- |
| 輸出類型                     | 汲入式輸出    |        |        |        |      |
| 隔離電壓                     |               |        | 2.5    | 30     | kV   |
| 輸出高電位電壓               |               |        | 30     |        | V    |
| 輸出低電位電壓               |               |        | 12     |        | V    |
| 輸出汲入電流 (峰值湧浪)      |               |        | -400   | -500   | mA   |
| 輸出汲入電流 (連續)          |               |        | -300   | -350   | mA   |