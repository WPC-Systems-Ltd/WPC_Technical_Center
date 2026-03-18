---
title: Product Specifications
sidebar_position: 4
description: "Full technical parameters: Power requirements, DI/DO characteristics, AI/AO precision, Thermocouple/RTD specs, communication interface rates"
---

### Power Requirements

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Power Voltage    |                     | 4.3   | 5       | 5.5   | V    |
| Current Consumption| Standby (-D only)   |       | 40      |       | mA   |
| Current Consumption| Standby (-AOD only) |       | 60      |       | mA   |
| Current Consumption| Standby (-CD only)  |       | 180     |       | mA   |
| Current Consumption| Standby (-RD only)  |       | 60      |       | mA   |
| Current Consumption| Standby (-TD only)  |       | 50      |       | mA   |

### Digital Input (DI/UART/SPI/I2C/Counter)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input High Voltage|                     | 3     | 5       | 5.5   | V    |
| Input Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Input Impedance   |                     | 50k   |         |       | Ω    |

### Digital Output (DO/UART/SPI/I2C/PWM)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output High Voltage|                     | 3.1   | 3.3     | 3.5   | V    |
| Output Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Output Current (Source)|                 |       |         | 10    | mA   |
| Output Current (Sink)|                   |       |         | -10   | mA   |

### Industrial Digital Input (-SNK Only)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input Type       | Sourcing Input      |       |         |       |      |
| Isolation Voltage|                     |       | 2.5     |       | kV   |
| Input High Voltage|                     |       | 30      |       | V    |
| Input Low Voltage |                     |       | 12      |       | V    |
| Input Resistance |                     |       | 6.8k    |       | Ω    |

### Industrial Digital Output (-SNK Only)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output Type      | Sinking Output      |       |         |       |      |
| Isolation Voltage|                     |       | 2.5     |       | kV   |
| Output High Voltage|                     |       | 30      |       | V    |
| Output Low Voltage |                     |       | 12      |       | V    |
| Output Current Sink (Peak)|              |       | -400    | -500  | mA   |
| Output Current Sink (Cont.)|             |       | -300    | -350  | mA   |

### Communication Interfaces

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| UART Baud Rate   |                     |       |         | 460.8k| bps  |
| SPI-1 Trans. Rate|                     |       |         | 36M   | Hz   |
| SPI-2 Trans. Rate|                     |       |         | 18M   | Hz   |
| I2C Trans. Rate  |                     |       |         | 400k  | Hz   |
| CAN Trans. Rate (-C Only)|               |       |         | 1M    | bps  |

### Analog Input (-A Only)

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

### Analog Output (-O Only)

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

### Thermocouple Input (-T Only)

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

### RTD Input (-R Only)

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| ADC Resolution   |                     |       | 15      |       | bit  |
| ADC FS Error     |                     |       | ±1      |       | LSB  |
| ADC INL          |                     |       | ±1      |       | LSB  |
| ADC Offset Error |                     | -3    |         | 3     | LSB  |
| Rated Temp Res.  | Var. by nonlinearity|       |0.03125  |       | °C   |
| Total Acc. (FS)  |                     |       | 0.05%   |       | %    |
| Conversion Time  | Var. by mode        |       | 20      | 66    | ms   |
| Voltage Protection|                    |       | ±45     |       | V    |
| Bias Output Current|                   | 0.2   |         | 5.75  | mA   |
| CMRR             |                     |       | 90      |       | dB   |
| 50/60Hz Rejection| Base & Harmonics    |       | 82      |       | dB   |
