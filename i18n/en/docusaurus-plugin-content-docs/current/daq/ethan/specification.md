---
title: Product Specification
sidebar_position: 2
---

## Power Requirements

| Parameter                     | Conditions/Notes | Min | Typ | Max | Unit |
| :---------------------------- | :--------------- | :-- | :-- | :-- | :--- |
| Supply Voltage                |                  |     | 24  |     | V    |
| Current Consumption (-D Only) | Stand-By Mode    | 9   | 24  | 30  | mA   |
| Current Consumption (-A Only) | Stand-By Mode    |     |     |     | mA   |
| Current Consumption (-L Only) | Stand-By Mode    |     |     |     | mA   |
| Current Consumption (-O Only) | Stand-By Mode    |     |     |     | mA   |
| Current Consumption (-T Only) | Stand-By Mode    |     |     |     | mA   |

---

## Analog Input Specifications

| Model        | Channels                | Resolution | Max Sampling/Update Rate | Input Range                    | Remarks                            |
| :----------- | :---------------------- | :--------- | :----------------------- | :----------------------------- | :--------------------------------- |
| **Ethan-A**  | 8                       | 16-bit     | 20kHz                    | ±10V                           | Single-Ended Input                 |
| **Ethan-A2** | 8                       | 24-bit     | 10kHz                    | ±13.75V                        | Single-Ended Input                 |
| **Ethan-I**  | 8                       | 24-bit     | 1.2kHz (Single Channel)  | ±20mA                          | Current Input                      |
| **Ethan-IA** | 8 (Volt) <br/> 8 (Curr) | 24-bit     | 600Hz (Single Channel)   | Volt: ±10V <br/> Curr: ±20mA   | Multiplexed Switching              |
| **Ethan-T**  | 7                       | -          | Settling Time 160ms      | -                              | Supports Thermocouple: K, J, N, R, S, T, E, B |

### Ethan-A Detailed Specs

| Parameter                 | Conditions/Notes     | Min | Typ | Max | Unit |
| :------------------------ | :------------------- | :-- | :-- | :-- | :--- |
| Channels                  |                      |     | 8   |     | ch   |
| Input High Voltage        |                      | 9.7 | 10  | 10.3| V    |
| Input Low Voltage         |                      | -9.7| -10 | -10.3| V   |
| Resolution                |                      |     | 16  |     | bit  |
| Sampling Rate             | 8-ch Continuous Mode |     |     | 20k | Hz   |
| Input Impedance           |                      |     | 1M  |     | Ω    |
| Bandwidth                 |                      |     | 100k|     | Hz   |
| Signal-to-Noise Ratio (SNR)|                     |     | 95.5|     | dB   |
| Third Harmonic Distortion (THD)|                 |     | -107|     | dB   |
| Integral Nonlinearity (INL)|                     |     | ±0.5|     | LSB  |
| Differential Nonlinearity (DNL)|                 |     | ±0.5|     | LSB  |

### Ethan-I Detailed Specs (Current Input)

| Parameter                 | Conditions/Notes | Min | Typ         | Max | Unit    |
| :------------------------ | :--------------- | :-- | :---------- | :-- | :------ |
| Isolation Voltage         |                  |     | 2.5         | 3   | kV      |
| ADC Resolution            |                  |     | 24          |     | bit     |
| Input Impedance           |                  | 54  | 60          | 75  | Ω       |
| Accuracy                  |                  |     | 0.001~0.002 |     | mA      |
| Resolution                |                  |     | 5.9605E-06  |     | mA      |
| Gain Error                |                  |     | ±0.02       |     | % of FS |
| Gain Drift                |                  |     | ±10         |     | ppm/°C  |
| Offset Error              |                  |     | ±2          |     | μA      |
| Offset Drift              |                  |     | ±3          |     | nA/°C   |
| SNR (DC)                  |                  |     | 85          |     | dB      |
| SNR (50/60Hz)             |                  |     | 120         |     | dB      |

### Ethan-T Detailed Specs (Thermocouple)

| Parameter                 | Conditions/Notes               | Min  | Typ      | Max  | Unit |
| :------------------------ | :----------------------------- | :--- | :------- | :--- | :--- |
| ADC Resolution            |                                |      | 19       |      | bit  |
| ADC Conversion Time       | Depends on Conversion Mode     | 90   |          | 185  | ms   |
| Temperature Range         | Depends on Thermocouple Type   | -210 |          | 1800 | °C   |
| Nominal Temp Resolution   |                                |      | 0.0078125|      | °C   |
| Full Scale & Linearity Error|                              |      | ±0.15    |      | %    |
| Cold-Junction Accuracy    |                                |      | ±0.7     |      | °C   |
| Input Voltage Protection  |                                |      | ±45      |      | V    |
| Noise Rejection Filtering | Configurable                   | 50   |          | 60   | Hz   |
| Common-Mode Rejection     |                                |      | 70       |      | dB   |
| 50/60Hz Rejection         | Fund. & Harmonics              |      | 91       |      | dB   |

---

## Analog Output Specifications

| Model       | Channels | Resolution | Max Update Rate | Output Range | Remarks              |
| :---------- | :------- | :--------- | :-------------- | :----------- | :------------------- |
| **Ethan-O** | 8        | 16-bit     | 1kHz            | ±10V         | Supports Waveform Gen|
| **Ethan-P** | 4        | 10-bit     | 500Hz           | 300Ω ~ 50kΩ  | Digital Potentiometer|

### Ethan-O Detailed Specs

| Parameter                 | Conditions/Notes | Min  | Typ | Max | Unit   |
| :------------------------ | :--------------- | :--- | :-- | :-- | :----- |
| Channels                  |                  |      | 8   |     | ch     |
| Output High Voltage       |                  | 9.7  | 5   |     |        |
| Output Low Voltage        |                  | -9.7 | 0   |     |        |
| Resolution                |                  |      | 16  |     | bit    |
| Update Rate               | On-Demand Mode   |      |     | 1k  | Hz     |
| Relative Accuracy         |                  |      | ±8  |     | LSB    |
| Differential Nonlinearity |                  |      |     | ±1  | LSB    |
| Zero-Code Error           |                  |      | 6   | 19  | mV     |
| Zero-Code Drift           |                  |      | ±2  |     | μV/°C  |
| Gain Error                |                  |      |     | ±1  | %FSR   |
| Gain Temp Coefficient     |                  |      | ±2.5|     | ppm    |
| DC Crosstalk (Int. Ref)   |                  |      | 25  |     | μV     |
| Offset Error              |                  |      | ±6  | ±19 | mV     |
| DC Output Impedance       |                  |      | 0.5 |     | Ω      |
| Short Circuit Current     |                  |      | 30  |     | mA     |

---

## Digital I/O Specifications

| Model          | Digital Output (DO) | Digital Input (DI) | PWM Out | Counter In | Remarks                |
| :------------- | :------------------ | :----------------- | :------ | :--------- | :--------------------- |
| **Ethan-D**    | 6-ch (NPN, Iso)     | 8-ch (NPN, Iso)    | 2-ch    | -          | DO: Opto-Isolated 24V  |
| **Ethan-EX-D** | 16-ch (NPN, Iso)    | 16-ch (NPN, Iso)   | 2-ch    | 2-ch       | DO: Opto-Isolated 24V  |

### Ethan-D Detailed Specs

#### Industrial Digital Input

| Parameter                 | Conditions/Notes | Min | Typ  | Max | Unit |
| :------------------------ | :--------------- | :-- | :--- | :-- | :--- |
| Input Type                | Sourcing Input   |     |      |     |      |
| Isolation Voltage         |                  |     | 2.5  | 30  | kV   |
| Input High Voltage        |                  |     | 30   |     | V    |
| Input Low Voltage         |                  |     | 12   |     | V    |
| Input Impedance           |                  |     | 6.8k |     | Ω    |

#### Industrial Digital Output

| Parameter                 | Conditions/Notes | Min | Typ  | Max | Unit |
| :------------------------ | :--------------- | :-- | :--- | :-- | :--- |
| Output Type               | Sinking Output   |     |      |     |      |
| Isolation Voltage         |                  |     | 2.5  | 30  | kV   |
| Output High Voltage       |                  |     | 30   |     | V    |
| Output Low Voltage        |                  |     | 12   |     | V    |
| Current Sink (Peak/Inrush)|                  |     | -400 | -500| mA   |
| Current Sink (Continuous) |                  |     | -300 | -350| mA   |

---

## Relay Specifications - Ethan-L

| Parameter                 | Conditions/Notes       | Min         | Typ | Max | Unit |
| :------------------------ | :--------------------- | :---------- | :-- | :-- | :--- |
| Rated Current             |                        |             | 2   |     | A    |
| Limiting Continuous Current|                       |             | 2   |     | A    |
| Max Switching Voltage (AC)|                        |             | 250 |     | VAC  |
| Max Switching Voltage (DC)|                        |             | 220 |     | VDC  |
| Min Switching Voltage     |                        |             | 100 |     | μV   |
| Max Switching Power       |                        |             | 60  |     | W    |
| Initial Contact Resistance| 10mA/30mV              |             |     | 50  | mΩ   |
| Thermal EMF               |                        |             |     | 10  | μV   |
| Mechanical Endurance (0W) |                        | 100,000,000 |     |     | Ops  |
| Electrical Endurance (30W)| Resistive 125VDC/0.24A | 500,000     |     |     | Ops  |
| Electrical Endurance (30W)| Resistive 30VDC/1A     | 500,000     |     |     | Ops  |
| Operate Time              |                        |             | 1   | 3   | ms   |
| Release Time              |                        |             | 1   | 3   | ms   |
| Max Bounce Time           |                        |             | 1   | 5   | ms   |
