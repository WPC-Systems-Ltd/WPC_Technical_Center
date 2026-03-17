---
title: Product Specification
sidebar_position: 2
description: "Full technical parameters: Power requirements, AI/AO/DI/DO specifications, Thermocouple/RTD, Relay and other detailed electrical characteristics"
---

## Power Requirements

| Parameter                     | Test Conditions/Notes | Min | Typical | Max | Unit |
| :---------------------------- | :-------------------- | :--- | :------ | :--- | :--- |
| Power Voltage                 |                       |     | 24      |     | V    |
| Current Consumption (-D Only) | Standby mode          | 9   | 24      | 30  | mA   |
| Current Consumption (-A Only) | Standby mode          |     |         |     | mA   |
| Current Consumption (-L Only) | Standby mode          |     |         |     | mA   |
| Current Consumption (-O Only) | Standby mode          |     |         |     | mA   |
| Current Consumption (-T Only) | Standby mode          |     |         |     | mA   |

---

## Analog Input Specifications

| Model        | Channels                | Resolution | Max Sampling Rate/Update Rate | Input Range                    | Remarks                             |
| :----------- | :---------------------- | :--------- | :---------------------------- | :----------------------------- | :---------------------------------- |
| **Ethan-A**  | 8                       | 16-bit     | 20kHz                         | ±10V                           | Single-ended input                  |
| **Ethan-A2** | 8                       | 24-bit     | 10kHz                         | ±13.75V                        | Single-ended input                  |
| **Ethan-I**  | 8                       | 24-bit     | 1.2kHz (Single channel)       | ±20mA                          | Current input                       |
| **Ethan-IA** | 8 (Voltage) <br/> 8 (Current) | 24-bit     | 600Hz (Single channel)        | Voltage: ±10V <br/> Current: ±20mA | Multiplexed switching               |
| **Ethan-T**  | 7                       | -          | Settling time 160ms           | -                              | Supports Thermocouple: K, J, N, R, S, T, E, B |

### Ethan-A Detailed Specifications

| Parameter                 | Test Conditions/Notes | Min  | Typical | Max   | Unit |
| :------------------------ | :-------------------- | :--- | :------ | :---- | :--- |
| Channels                  |                       |      | 8       |       | ch   |
| Input High Voltage        |                       | 9.7  | 10      | 10.3  | V    |
| Input Low Voltage         |                       | -9.7 | -10     | -10.3 | V    |
| Resolution                |                       |      | 16      |       | bit  |
| Sampling Rate             | 8-channel continuous  |      |         | 20k   | Hz   |
| Input Impedance           |                       |      | 1M      |       | Ω    |
| Bandwidth                 |                       |      | 100k    |       | Hz   |
| Signal-to-Noise Ratio (SNR)|                      |      | 95.5    |       | dB   |
| THD                       |                       |      | -107    |       | dB   |
| Integral Nonlinearity (INL)|                      |      | ±0.5    |       | LSB  |
| Differential Nonlinearity (DNL)|                  |      | ±0.5    |       | LSB  |

### Ethan-I Detailed Specifications (Current Input)

| Parameter             | Test Conditions/Notes | Min | Typical     | Max | Unit    |
| :-------------------- | :-------------------- | :--- | :---------- | :--- | :------ |
| Isolation Voltage     |                       |     | 2.5         | 3   | kV      |
| ADC Resolution        |                       |     | 24          |     | bit     |
| Input Impedance       |                       | 54  | 60          | 75  | Ω       |
| Accuracy              |                       |     | 0.001~0.002 |     | mA      |
| Resolution            |                       |     | 5.9605E-06  |     | mA      |
| Gain Error            |                       |     | ±0.02       |     | % of FS |
| Gain Drift            |                       |     | ±10         |     | ppm/°C  |
| Offset Error          |                       |     | ±2          |     | μA      |
| Offset Drift          |                       |     | ±3          |     | nA/°C   |
| SNR (DC)              |                       |     | 85          |     | dB      |
| SNR (50/60Hz)         |                       |     | 120         |     | dB      |

### Ethan-T Detailed Specifications (Thermocouple)

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

---

## Analog Output Specifications

| Model       | Channels | Resolution | Max Update Rate | Output Range | Remarks                    |
| :---------- | :------- | :--------- | :-------------- | :----------- | :------------------------- |
| **Ethan-O** | 8        | 16-bit     | 1kHz            | ±10V         | Supports waveform generation |
| **Ethan-P** | 4        | 10-bit     | 500Hz           | 300Ω ~ 50kΩ  | Variable Digital Potentiometer |

### Ethan-O Detailed Specifications

| Parameter             | Test Conditions/Notes | Min  | Typical | Max  | Unit   |
| :-------------------- | :-------------------- | :--- | :------ | :--- | :----- |
| Channels              |                       |      | 8       |      | ch     |
| Output High Voltage   |                       | 9.7  | 5       |      |        |
| Output Low Voltage    |                       | -9.7 | 0       |      |        |
| Resolution            |                       |      | 16      |      | bit    |
| Update Rate           | On-Demand mode        |      |         | 1k   | Hz     |
| Relative Accuracy     |                       |      | ±8      |      | LSB    |
| DNL                   |                       |      |         | ±1   | LSB    |
| Zero Point Error      |                       |      | 6       | 19   | mV     |
| Zero Point Error Drift|                       |      | ±2      |      | μV/°C  |
| Gain Error            |                       |      |         | ±1   | %FSR   |
| Gain Temp Coefficient |                       |      | ±2.5    |      | ppm    |
| DC Crosstalk (Internal Ref)|                  |      | 25      |      | μV     |
| Offset Error          |                       |      | ±6      | ±19  | mV     |
| DC Output Impedance   |                       |      | 0.5     |      | Ω      |
| Short Circuit Current |                       |      | 30      |      | mA     |

---

## Digital I/O Specifications

| Model          | Digital Output (DO) | Digital Input (DI) | PWM Output | Counter Input | Remarks                |
| :------------- | :------------------ | :------------------ | :--------- | :------------ | :--------------------- |
| **Ethan-D**    | 6-ch (NPN, Isolated)| 8-ch (NPN, Isolated)| 2-ch       | -             | DO is Opto-isolated 24V|
| **Ethan-EX-D** | 16-ch (NPN, Isolated)| 16-ch (NPN, Isolated)| 2-ch       | 2-ch          | DO is Opto-isolated 24V|

### Ethan-D Detailed Specifications

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

---

## Relay Specifications - Ethan-L

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
