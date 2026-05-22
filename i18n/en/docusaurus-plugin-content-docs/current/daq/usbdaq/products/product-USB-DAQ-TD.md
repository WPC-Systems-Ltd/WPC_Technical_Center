---
title: USB-DAQ-TD
sidebar_position: 5
---

USB-DAQ-TD is specifically designed for temperature measurement, providing **2-channel thermocouple input**, supporting eight types: **K, J, N, R, S, T, E, B**. It has a measurement range of **-210Â°C ~ 1800Â°C**, with built-in cold-junction compensation and 50/60Hz noise filtering.

# USB-DAQ-TD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 21-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. 2-channel thermocouple input
5. Supports sensor types: K, J, N, R, S, T, E, & B
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)s

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQTD_pinout.webp').default} alt="USB-DAQ-TD Pinout" width="60%" /></div>

### Thermocouple Wiring Instructions
---

The USB-DAQ-TD uses standard-specification thermocouple connectors; simply plug in the connector for use. If you purchase thermocouple wire separately and connect it to a standard connector, reverse polarity may occur. If the positive and negative poles of the thermocouple are reversed, the DAQ temperature reading will show a decrease when heating and an increase when cooling. In such cases, swapping the positive and negative wires will resolve the issue.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQTD_thermocouple.webp').default} alt="Thermocouple Wiring" width="60%" /></div>

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

#### Thermocouple Input

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| ADC Resolution   |                     |       | 19      |       | bit  |
| Conversion Time  | Var. by mode        | 90    |         | 185   | ms   |
| Temperature Range| Var. by TC type     | -210  |         | 1800  | °C   |
| Rated Temp Res.  |                     |       |0.0078125|       | °C   |
| FS & Linearity Err|                    |       | ±0.15   |       | %    |
| Cold Junction Acc.|                    |       | ±0.7    |       | °C   |
| Voltage Protection|                    |       | ±45     |       | V    |
| Noise Rejection  | Configurable        | 50    |         | 60    | Hz   |
| CMRR             |                     |       | 70      |       | dB   |
| 50/60Hz Rejection| Base & Harmonics    |       | 91      |       | dB   |

#### Communication Interfaces

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| UART Baud Rate   |                     |       |         | 460.8k| bps  |
| SPI-1 Trans. Rate|                     |       |         | 36M   | Hz   |
| SPI-2 Trans. Rate|                     |       |         | 18M   | Hz   |
| I2C Trans. Rate  |                     |       |         | 400k  | Hz   |