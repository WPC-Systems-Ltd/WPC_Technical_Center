---
title: Product Specification
sidebar_position: 4
---

### Power Requirements

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Supply Voltage        |                    | 4.3    | 5      | 5.5    | V      |
| Current Consumption   | Standby (-D Only)  |        | 40     |        | mA     |
| Current Consumption   | Standby (-AOD Only)|        | 60     |        | mA     |
| Current Consumption   | Standby (-CD Only) |        | 180    |        | mA     |
| Current Consumption   | Standby (-RD Only) |        | 60     |        | mA     |
| Current Consumption   | Standby (-TD Only) |        | 50     |        | mA     |

### Digital Input (DI/UART/SPI/I2C/Counter)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Input High Voltage    |                    | 3      | 5      | 5.5    | V      |
| Input Low Voltage     |                    | -0.5   | 0      | 0.5    | V      |
| Input Impedance       |                    | 50k    |        |        | Ω      |

### Digital Output (DO/UART/SPI/I2C/PWM)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Output High Voltage   |                    | 3.1    | 3.3    | 3.5    | V      |
| Output Low Voltage    |                    | -0.5   | 0      | 0.5    | V      |
| Output Current (Source)|                   |        |        | 10     | mA     |
| Output Current (Sink) |                    |        |        | -10    | mA     |

### Industrial Digital Input (-SNK Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Input Type            | Sourcing Input     |        |        |        |        |
| Isolation Voltage     |                    |        | 2.5    |        | kV     |
| Input High Voltage    |                    |        | 30     |        | V      |
| Input Low Voltage     |                    |        | 12     |        | V      |
| Input Resistance      |                    |        | 6.8k   |        | Ω      |

### Industrial Digital Output (-SNK Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Output Type           | Sinking Output     |        |        |        |        |
| Isolation Voltage     |                    |        | 2.5    |        | kV     |
| Output High Voltage   |                    |        | 30     |        | V      |
| Output Low Voltage    |                    |        | 12     |        | V      |
| Sink Current (Peak)   |                    |        | -400   | -500   | mA     |
| Sink Current (Cont.)  |                    |        | -300   | -350   | mA     |

### Communication Interface

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| UART Baud Rate        |                    |        |        | 460.8k | bps    |
| SPI-1 Transfer Rate   |                    |        |        | 36M    | Hz     |
| SPI-2 Transfer Rate   |                    |        |        | 18M    | Hz     |
| I2C Transfer Rate     |                    |        |        | 400k   | Hz     |
| CAN Transfer Rate (-C Only)|               |        |        | 1M     | bps    |

### Analog Input (-A Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Channels              |                    |        | 8      |        | ch     |
| Input High Voltage    |                    | 9.7    | 10     | 10.3   | V      |
| Input Low Voltage     |                    | -9.7   | -10    | -10.3  | V      |
| Resolution            |                    |        | 16     |        | bit    |
| Sampling Rate         | Single Ch Cont.    |        |        | 16k    | Hz     |
| Input Impedance       |                    |        | 1M     |        | Ω      |
| Bandwidth             |                    |        | 100k   |        | Hz     |
| SNR                   |                    |        | 95.5   |        | dB     |
| THD                   |                    |        | -107   |        | dB     |
| INL                   |                    |        | ±0.5   |        | LSB    |
| DNL                   |                    |        | ±0.5   |        | LSB    |

### Analog Output (-O Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| Channels              |                    |        | 8      |        | ch     |
| Output High Voltage   |                    |        | 5      |        |        |
| Output Low Voltage    |                    |        | 0      |        |        |
| Resolution            |                    |        | 16     |        | bit    |
| Update Rate           | On-Demand Mode     |        |        | 1k     | Hz     |
| Relative Accuracy     |                    |        | ±8     |        | LSB    |
| DNL                   |                    |        |        | ±1     | LSB    |
| Zero-Code Error       |                    |        | 6      | 19     | mV     |
| Zero-Code Drift       |                    |        | ±2     |        | μV/°C  |
| Gain Error            |                    |        |        | ±1     | %FSR   |
| Gain Temp Coefficient |                    |        | ±2.5   |        | ppm    |
| DC Crosstalk          | Int. Ref Voltage   |        | 25     |        | μV     |
| Offset Error          |                    |        | ±6     | ±19    | mV     |
| DC Output Impedance   |                    |        | 0.5    |        | Ω      |
| Short Circuit Current |                    |        | 30     |        | mA     |

### Thermocouple Input (-T Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| ADC Resolution        |                    |        | 19     |        | bit    |
| ADC Conversion Time   | Depends on Mode    | 90     |        | 185    | ms     |
| Temp Range            | Depends on Type    | -210   |        | 1800   | °C     |
| Nominal Temp Resolution|                   |        |0.0078125|       | °C     |
| Full Scale & Linearity Error|              |        | ±0.15  |        | %      |
| Cold-Junction Accuracy|                    |        | ±0.7   |        | °C     |
| Input Voltage Protection|                  |        | ±45    |        | V      |
| Noise Rejection Filter| Configurable       | 50     |        | 60     | Hz     |
| CMRR                  |                    |        | 70     |        | dB     |
| 50/60Hz Rejection     | Fund. & Harmonics  |        | 91     |        | dB     |

### RTD Input (-R Only)

| Parameter             | Conditions/Notes   | Min    | Typ    | Max    | Unit   |
| :-------------------- | :----------------- | :----: | :----: | :----: | :----: |
| ADC Resolution        |                    |        | 15     |        | bit    |
| ADC FSR Error         |                    |        | ±1     |        | LSB    |
| ADC INL               |                    |        | ±1     |        | LSB    |
| ADC Offset Error      |                    | -3     |        | 3      | LSB    |
| Nominal Temp Resolution| Depends on RTD Non-lin.|   |0.03125 |        | °C     |
| Total Accuracy (FS)   |                    |        | 0.05%  |        | %      |
| ADC Conversion Time   | Depends on Mode    |        | 20     | 66     | ms     |
| Input Voltage Protection|                  |        | ±45    |        | V      |
| Bias Output Current   |                    | 0.2    |        | 5.75   | mA     |
| CMRR                  |                    |        | 90     |        | dB     |
| 50/60Hz Rejection     | Fund. & Harmonics  |        | 82     |        | dB     |
