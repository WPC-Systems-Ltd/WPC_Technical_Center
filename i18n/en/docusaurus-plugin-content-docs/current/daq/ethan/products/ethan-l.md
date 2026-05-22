---
title: Ethan-L
sidebar_position: 7
---

Ethan-L is equipped with **6-channel mechanical relays** (4x Form-A Normally Open contacts + 2x Form-C Changeover contacts), with a rated current of **2A** and a maximum switching voltage of **250VAC / 220VDC**, suitable for high-power load control.

### Product Appearance

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanL.webp').default} alt="Ethan-L Appearance" width="60%" /></div>

### Key Features

---

1. Power input: 24VDC
2. 10/100 Base-T Ethernet interface
3. 6-channel high-quality mechanical relays
4. 4-channel Form-A (Normally Open) + 2-channel Form-C (Normally Open + Normally Closed)
5. Maximum current: 1A
6. Operation time: 2ms (excluding bounce)
7. Release time: 1ms (excluding bounce)
8. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pin Definition

---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/ethan-daq/EthanL_pinout.webp').default} alt="Ethan-L Pinout" width="60%" /></div>

## Relay Specifications - Ethan-L

---

| Parameter               | Test Conditions/Notes   | Min         | Typical | Max | Unit       |
| :---------------------- | :---------------------- | :---------- | :------ | :-- | :--------- |
| Rated Current           |                         |             | 2       |     | A          |
| Continuous Limiting Current|                      |             | 2       |     | A          |
| Max Switching Voltage (AC)|                       |             | 250     |     | VAC        |
| Max Switching Voltage (DC)|                       |             | 220     |     | VDC        |
| Min Switching Voltage   |                         |             | 100     |     | μV         |
| Max Switching Power     |                         |             | 60      |     | W          |
| Initial Contact Resistance| 10mA/30mV             |             |         | 50  | mΩ         |
| Thermal EMF             |                         |             |         | 10  | μV         |
| Mechanical Endurance (0W)|                         | 100,000,000 |         |     | Operations |
| Electrical Endurance (30W)| Resistive 125VDC/0.24A| 500,000     |         |     | Operations |
| Electrical Endurance (30W)| Resistive 30VDC/1A    | 500,000     |         |     | Operations |
| Operation Time          |                         |             | 1       | 3   | ms         |
| Release Time            |                         |             | 1       | 3   | ms         |
| Max Bounce Time         |                         |             | 1       | 5   | ms         |
