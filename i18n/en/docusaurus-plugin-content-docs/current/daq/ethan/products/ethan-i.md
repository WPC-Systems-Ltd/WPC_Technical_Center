---
title: Ethan-I
sidebar_position: 5
description: "Ethan-I is specifically designed for 4-20mA industrial current loops, providing 8-channel 24-bit current input (Â±20mA), featuring 2.5kV isolation protection..."
keywords: [EthanI, data acquisition, DAQ card, measurement hardware, WPC DAQ, signal acquisition]
---
Ethan-I is specifically designed for **4-20mA industrial current loops**, providing **8-channel 24-bit current input** (Â±20mA), featuring **2.5kV isolation protection** to ensure stable measurement in industrial environments.

### Product Appearance

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanI.webp').default} alt="Ethan-I Appearance" width="60%" /></div>

### Key Features

---

1. Power input: 24VDC
2. 10/100 Base-T Ethernet interface
3. Current Input: 8-channel multiplexed switching & 24-bit resolution
4. Maximum update rate: 1.2kHz (Single channel)
5. Input range: Â±20mA
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pin Definition

---

<div style={{textAlign: 'center'}}><img src="/img/daq/ethan-daq/EthanIA_pinout.webp" alt="Ethan-I Pinout" width="60%" /></div>

### Ethan-I Detailed Specifications (Current Input)

---

| Parameter             | Test Conditions/Notes | Min | Typical     | Max | Unit    |
| :-------------------- | :-------------------- | :--- | :---------- | :--- | :------ |
| Isolation Voltage     |                       |     | 2.5         | 3   | kV      |
| ADC Resolution        |                       |     | 24          |     | bit     |
| Input Impedance       |                       | 54  | 60          | 75  | Ω       |
| Accuracy              |                       |     | 0.001~0.002 |     | mA      |
| Resolution            |                       |     | 5.9605E-06  |     | mA      |
| Gain Error            |                       |     | ±0.02       |     | % of FS |
| Gain Drift            |                       |     | ±10         |     | ppm/°C  |
| Offset Error          |                       |     | ±2          |     | μA      |
| Offset Drift          |                       |     | ±3          |     | nA/°C   |
| SNR (DC)              |                       |     | 85          |     | dB      |
| SNR (50/60Hz)         |                       |     | 120         |     | dB      |