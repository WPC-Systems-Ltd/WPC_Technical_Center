---
title: USB-DAQ-CD
sidebar_position: 7
---

USB-DAQ-CD provides a **CAN 2.0A/B communication interface**, supporting transmission rates up to **1Mbps**, and integrates **20-channel digital I/O**, suitable for vehicle networks, industrial automation, and inter-device communication applications.

# USB-DAQ-CD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 20-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. CAN V2.0B transmission rate up to 1Mb/sec
5. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQCD_pinout.png').default} alt="USB-DAQ-CD Pinout" width="60%" /></div>

### CAN Bus Wiring Instructions
---

CAN bus wiring is simple; just connect the CAN_H and CAN_L signals in parallel to the CAN network. Pins 35 and 36 of the USB-DAQ-CD provide an internal 120-ohm termination resistor function. If a termination resistor is required, simply short Pins 35 and 36 together.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQCD_CANbud_wiring.png').default} alt="CAN Bus Wiring" width="60%" /></div>

### Product Specifications

---

#### Power Requirements

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Power Voltage    |                     | 4.3   | 5       | 5.5   | V    |
| Current Consumption| Standby (-CD only)  |       | 180     |       | mA   |

#### Digital Input (DI/UART/SPI/I2C/Counter)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input High Voltage|                     | 3     | 5       | 5.5   | V    |
| Input Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Input Impedance   |                     | 50k   |         |       | Ω    |

#### Digital Output (DO/UART/SPI/I2C/PWM)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output High Voltage|                     | 3.1   | 3.3     | 3.5   | V    |
| Output Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Output Current (Source)|                 |       |         | 10    | mA   |
| Output Current (Sink)|                   |       |         | -10   | mA   |

### Communication Interfaces

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| UART Baud Rate   |                     |       |         | 460.8k| bps  |
| SPI-1 Trans. Rate|                     |       |         | 36M   | Hz   |
| SPI-2 Trans. Rate|                     |       |         | 18M   | Hz   |
| I2C Trans. Rate  |                     |       |         | 400k  | Hz   |
| CAN Trans. Rate (-C Only)|               |       |         | 1M    | bps  |