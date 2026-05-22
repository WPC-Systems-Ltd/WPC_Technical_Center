---
title: Ethan-D
sidebar_position: 3
description: "Ethan-D integrates 8-channel digital input (DI) and 6-channel relay output (NPN drive), while providing 2-channel PWM output, suitable for industrial automat..."
keywords: [EthanD, data acquisition, DAQ card, measurement hardware, WPC DAQ, signal acquisition]
---
Ethan-D integrates **8-channel digital input** (DI) and **6-channel relay output** (NPN drive), while providing **2-channel PWM output**, suitable for industrial automation control and digital signal processing.

### Product Appearance

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanD.webp').default} alt="Ethan-D Appearance" width="60%" /></div>

### Key Features

---

1. Power input: 24VDC
2. 10/100 Base-T Ethernet interface
3. Digital Output (DO): 6-channel NPN, 24V opto-isolated
4. Digital Input (DI): 8-channel NPN, 24V opto-isolated
5. 2-channel PWM output
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pin Definition

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanD_pinout.webp').default} alt="Ethan-D Pinout" width="60%" /></div>

### Ethan-D Detailed Specifications

---

#### Industrial Digital Input

| Parameter          | Test Conditions/Notes | Min | Typical | Max | Unit |
| :----------------- | :-------------------- | :--- | :------ | :--- | :--- |
| Input Type         | Sourcing input        |     |         |     |      |
| Isolation Voltage  |                       |     | 2.5     | 30  | kV   |
| Input High Voltage |                       |     | 30      |     | V    |
| Input Low Voltage  |                       |     | 12      |     | V    |
| Input Impedance    |                       |     | 6.8k    |     | Ω    |

#### Industrial Digital Output

| Parameter                     | Test Conditions/Notes | Min | Typical | Max  | Unit |
| :---------------------------- | :-------------------- | :--- | :------ | :--- | :--- |
| Output Type                   | Sinking output        |     |         |      |      |
| Isolation Voltage             |                       |     | 2.5     | 30   | kV   |
| Output High Voltage           |                       |     | 30      |      | V    |
| Output Low Voltage            |                       |     | 12      |      | V    |
| Output Sink Current (Peak Surge)|                     |     | -400    | -500 | mA   |
| Output Sink Current (Continuous)|                     |     | -300    | -350 | mA   |
