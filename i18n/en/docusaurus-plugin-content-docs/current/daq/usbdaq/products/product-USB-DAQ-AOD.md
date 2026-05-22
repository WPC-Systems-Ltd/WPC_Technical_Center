---
title: USB-DAQ-AOD
sidebar_position: 2
---

USB-DAQ-AOD integrates **8-channel 16-bit analog input** (16kHz) and **8-channel 16-bit analog output** (1kHz), supporting synchronous AI/AO operations, suitable for closed-loop control and signal generation applications.

# USB-DAQ-AOD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 16-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. Analog Input (AI): 8-channel synchronous sampling & 16-bit single-ended resolution
5. Maximum sampling rate: 16kHz (single channel)
6. Input range: +/-10V
7. Analog Output (AO): 8-channel synchronous output & 16-bit single-ended resolution
8. Output range: 0-5V
9. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQAOD_pinout.webp').default} alt="USB-DAQ-AOD Pinout" width="60%" /></div>

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

#### Analog Input

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Channels         |                     |       | 8       |       | ch   |
| Input High Voltage|                     | 9.7   | 10      | 10.3  | V    |
| Input Low Voltage |                     | -9.7  | -10     | -10.3 | V    |
| Resolution       |                     |       | 16      |       | bit  |
| Sampling Rate    | Single Ch Cont.     |       |         | 16k   | Hz   |
| Input Impedance   |                     |       | 1M      |       | Ω    |
| Bandwidth        |                     |       | 100k    |       | Hz   |
| SNR              |                     |       | 95.5    |       | dB   |
| THD              |                     |       | -107    |       | dB   |
| INL              |                     |       | ±0.5    |       | LSB  |
| DNL              |                     |       | ±0.5    |       | LSB  |

#### Analog Output

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Channels         |                     |       | 8       |       | ch   |
| Output High Voltage|                     |       | 5       |       | V    |
| Output Low Voltage |                     |       | 0       |       | V    |
| Resolution       |                     |       | 16      |       | bit  |
| Update Rate      | On-Demand Mode      |       |         | 1k    | Hz   |
| Relative Accuracy|                     |       | ±8      |       | LSB  |
| DNL              |                     |       |         | ±1    | LSB  |
| Zero-scale Error |                     |       | 6       | 19    | mV   |
| Zero Drift       |                     |       | ±2      |       | μV/°C|
| Gain Error       |                     |       |         | ±1    | %FSR |
| Gain Tempco      |                     |       | ±2.5    |       | ppm  |
| DC Crosstalk     | Internal Ref        |       | 25      |       | μV   |
| Offset Error     |                     |       | ±6      | ±19   | mV   |
| Output Impedance |                     |       | 0.5     |       | Ω    |
| Short Circuit Current|                  |       | 30      |       | mA   |

### Communication Interfaces

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| UART Baud Rate   |                     |       |         | 460.8k| bps  |
| SPI-1 Trans. Rate|                     |       |         | 36M   | Hz   |
| SPI-2 Trans. Rate|                     |       |         | 18M   | Hz   |
| I2C Trans. Rate  |                     |       |         | 400k  | Hz   |