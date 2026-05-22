---
title: USB-DAQ-D
sidebar_position: 3
---

USB-DAQ-D is specifically designed for digital signal processing, providing **20-channel 3.3V digital I/O** (5V tolerant), supporting **I2C/SPI/UART/PWM/Counter**, suitable for logic control and sensor interfacing applications.

# USB-DAQ-D

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 26-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://www.wpc.com.tw)

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQD_pinout.webp').default} alt="USB-DAQ-D Pinout" width="60%" /></div>

### Product Specifications

---

#### Digital Input
---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input High Voltage|                     | 3     | 5       | 5.5   | V    |
| Input Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Input Impedance   |                     | 50k   |         |       | Ω    |

#### Digital Output

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output High Voltage|                     | 3.1   | 3.3     | 3.5   | V    |
| Output Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Output Current (Source)|                 |       |         | 10    | mA   |
| Output Current (Sink)|                   |       |         | -10   | mA   |

### Communication Interfaces

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| UART Baud Rate   |                     |       |         | 460.8k| bps  |
| SPI-1 Trans. Rate|                     |       |         | 36M   | Hz   |
| SPI-2 Trans. Rate|                     |       |         | 18M   | Hz   |
| I2C Trans. Rate  |                     |       |         | 400k  | Hz   |
