---
title: Ethan-O
sidebar_position: 8
---

Ethan-O provides **8-channel 16-bit analog output** (Â±10V), with an update rate of up to **1kHz**. It supports **arbitrary waveform generation**, making it suitable for signal simulation and control applications.

### Product Appearance

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanO.webp').default} alt="Ethan-O Appearance" width="60%" /></div>

### Key Features

---

1. Power input: 24VDC
2. 10/100 Base-T Ethernet interface
3. Analog Output (AO): 8-channel synchronous output & 16-bit single-ended resolution
4. Output range: Â±10V
5. Maximum update rate: 1kHz
6. Supports waveform generation
7. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pin Definition

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanO_pinout.webp').default} alt="Ethan-O Pinout" width="60%" /></div>

### Ethan-O Detailed Specifications

---

| Parameter             | Test Conditions/Notes | Min  | Typical | Max  | Unit   |
| :-------------------- | :-------------------- | :--- | :------ | :--- | :----- |
| Channels              |                       |      | 8       |      | ch     |
| Output High Voltage   |                       | 9.7  | 5       |      |        |
| Output Low Voltage    |                       | -9.7 | 0       |      |        |
| Resolution            |                       |      | 16      |      | bit    |
| Update Rate           | On-Demand mode        |      |         | 1k   | Hz     |
| Relative Accuracy     |                       |      | ±8      |      | LSB    |
| DNL                   |                       |      |         | ±1   | LSB    |
| Zero Point Error      |                       |      | 6       | 19   | mV     |
| Zero Point Error Drift|                       |      | ±2      |      | μV/°C  |
| Gain Error            |                       |      |         | ±1   | %FSR   |
| Gain Temp Coefficient |                       |      | ±2.5    |      | ppm    |
| DC Crosstalk (Internal Ref)|                  |      | 25      |      | μV     |
| Offset Error          |                       |      | ±6      | ±19  | mV     |
| DC Output Impedance   |                       |      | 0.5     |      | Ω      |
| Short Circuit Current |                       |      | 30      |      | mA     |