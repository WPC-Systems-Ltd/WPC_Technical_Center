---
title: Ethan-I
sidebar_position: 5
description: "Ethan-I 專為 4-20mA 工業電流迴路設計，提供 8 通道 24-bit 電流輸入（±20mA），具備 2.5kV 隔離保護，確保工業環境下的穩定量測。 --- --- 1. 電源輸入: 24VDC 2. 10/100 Base-T 乙太網路介面 3. 電流輸入: 8 通道多工切換..."
keywords: [EthanI, 資料擷取, DAQ卡, 量測硬體, WPC DAQ, 資料擷取系統]
---
Ethan-I 專為 **4-20mA 工業電流迴路**設計，提供 **8 通道 24-bit 電流輸入**（±20mA），具備 **2.5kV 隔離保護**，確保工業環境下的穩定量測。

### 產品外觀

---

<div style={{textAlign: 'center'}}><img src="/img/daq/ethan-daq/EthanI.webp" alt="Ethan-I 外觀" width="60%" /></div>

### 主要特色

---

1. 電源輸入: 24VDC
2. 10/100 Base-T 乙太網路介面
3. 電流輸入: 8 通道多工切換 & 24-bit 解析度
4. 最大更新率: 1.2kHz (單通道)
5. 輸入範圍: ±20mA
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位定義

---

<div style={{textAlign: 'center'}}><img src="/img/daq/ethan-daq/EthanIA_pinout.webp" alt="Ethan-I 腳位圖" width="60%" /></div>

### Ethan-I 詳細規格 (電流輸入)

---

| 參數                 | 測試條件/備註 | 最小值 | 典型值      | 最大值 | 單位    |
| :------------------- | :------------ | :----- | :---------- | :----- | :------ |
| 隔離電壓             |               |        | 2.5         | 3      | kV      |
| ADC 解析度           |               |        | 24          |        | bit     |
| 輸入阻抗             |               | 54     | 60          | 75     | Ω       |
| 準確度               |               |        | 0.001~0.002 |        | mA      |
| 解析度               |               |        | 5.9605E-06  |        | mA      |
| 增益誤差             |               |        | ±0.02       |        | % of FS |
| 增益漂移             |               |        | ±10         |        | ppm/°C  |
| 偏移誤差             |               |        | ±2          |        | μA      |
| 偏移漂移             |               |        | ±3          |        | nA/°C   |
| 訊號雜訊比 (DC)      |               |        | 85          |        | dB      |
| 訊號雜訊比 (50/60Hz) |               |        | 120         |        | dB      |