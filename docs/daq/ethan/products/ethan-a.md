---
title: Ethan-A
sidebar_position: 1
---

Ethan-A 是一款工業級乙太網路數據採集卡，提供 **8 通道同步 16-bit 類比輸入**，最高取樣率達 **20kHz**，適用於高速訊號量測與監控應用。

### 產品外觀

---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/ethan-daq/EthanA.png" alt="Ethan-A 外觀" width="60%" /></div>

### 主要特色

---

1. 電源輸入: 24VDC
2. 10/100 Base-T 乙太網路介面
3. 類比輸入 (AI): 8 通道同步取樣 & 16-bit 單端解析度
4. 最大取樣率: 20kHz
5. 輸入範圍: ±10V
6. 支援 [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), 以及 [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### 腳位定義

---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/ethan-daq/EthanA_pinout.png" alt="Ethan-A 腳位圖" width="60%" /></div>

### Ethan-A 詳細規格

---

| 參數             | 測試條件/備註        | 最小值 | 典型值 | 最大值 | 單位 |
| :--------------- | :------------------- | :----- | :----- | :----- | :--- |
| 通道數           |                      |        | 8      |        | ch   |
| 輸入高電位電壓   |                      | 9.7    | 10     | 10.3   | V    |
| 輸入低電位電壓   |                      | -9.7   | -10    | -10.3  | V    |
| 解析度           |                      |        | 16     |        | bit  |
| 取樣率           | 8 通道連續模式       |        |        | 20k    | Hz   |
| 輸入阻抗         |                      |        | 1M     |        | Ω    |
| 頻寬             |                      |        | 100k   |        | Hz   |
| 訊號雜訊比 (SNR) |                      |        | 95.5   |        | dB   |
| 第三諧波失真 (THD)|                     |        | -107   |        | dB   |
| 積分非線性 (INL) |                      |        | ±0.5   |        | LSB  |
| 微分非線性 (DNL) |                      |        | ±0.5   |        | LSB  |