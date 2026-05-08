---
title: Ethan-T
sidebar_position: 7
---

Ethan-T is specifically designed for temperature measurement, providing **7-channel thermocouple input**, supporting eight types of thermocouples: **K, J, N, R, S, T, E, and B**. It has a measurement range of **-210Â°C ~ 1800Â°C** and built-in cold-junction compensation.

### Product Appearance

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanT.png').default} alt="Ethan-T Appearance" width="60%" /></div>

### Key Features

---

1. Power input: 24VDC
2. 10/100 Base-T Ethernet interface
3. 7-channel thermocouple input
4. Support sensor types: K, J, N, R, S, T, E, & B types
5. Settling time: 160ms (Single channel)
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pin Definition

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanT_pinout.png').default} alt="Ethan-T Pinout" width="60%" /></div>

### Ethan-T Detailed Specifications (Thermocouple)

---

| Parameter                  | Test Conditions/Notes         | Min  | Typical   | Max  | Unit |
| :------------------------- | :---------------------------- | :--- | :-------- | :--- | :--- |
| ADC Resolution             |                               |      | 19        |      | bit  |
| ADC Conversion Time        | Depends on conversion mode    | 90   |           | 185  | ms   |
| Temperature Range          | Depends on thermocouple type  | -210 |           | 1800 | °C   |
| Nominal Temp Resolution    |                               |      | 0.0078125 |      | °C   |
| Thermocouple FSR & Linearity Error |                       |      | ±0.15     |      | %    |
| Cold-Junction Accuracy     |                               |      | ±0.7      |      | °C   |
| Input Voltage Protection   |                               |      | ±45       |      | V    |
| Noise Rejection Filter     | Configurable                  | 50   |           | 60   | Hz   |
| CMRR                       |                               |      | 70        |      | dB   |
| 50/60Hz Noise Rejection    | Fundamental and harmonics     |      | 91        |      | dB   |