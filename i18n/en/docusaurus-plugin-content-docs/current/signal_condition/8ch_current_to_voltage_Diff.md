---
title: 8ch Current-to-Voltage Converter (Differential)
sidebar_position: 4
description: Introduction, features, and specifications of the WPC 8ch 4-20mA to 0-5V converter (Differential Output version).
sidebar_label: 8ch Current-to-Voltage (Diff)
---

# 8ch Current-to-Voltage Converter (Differential Output Version)

## Introduction

The WPC 8ch Current-to-Voltage Converter is an 8-channel signal processing module that converts industrial-standard 4-20mA current signals into 0-5V voltage signals. This module supports high-precision conversion across multiple channels. This is the **Differential Output** version, a design that helps eliminate common-mode noise on the transmission path, making it particularly suitable for data acquisition (DAQ) and control systems in long-distance transmissions or high-noise environments.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_differential.png').default} alt="8ch_cv_differential" width="60%" />
</div>

---

## Specifications

| Parameter                      | Specification                  |
| :----------------------------- | :----------------------------- |
| Number of Channels             | 8 channels                     |
| Input Signal (Input)           | 4-20 mA                        |
| Output Signal (Output)         | 0-5 V (Differential Output)    |
| Overall Accuracy               | 0.1%                           |
| Common-Mode Rejection (CMR)    | 86 dB                          |
| Power Supply                   | 24 VDC                         |
| Isolation Design               | Channel-to-power isolation     |

---

## Pinout

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_differential_pinout.png').default} alt="8ch_cv_differential_pinout" width="60%" />
</div>


| Pin Label | Description    |
| :-------- | :------------- |
| 24V       | Positive Power |
| GND       | System Ground  |
| Input     | 4-20mA        |
| Output    | 0-5V          |


---

## Module Sensor Wiring

The input terminal supports both **Sourcing input** and **Sinking input** type sensors. Please refer to the corresponding wiring diagrams below based on the type of sensor you are using:

| Type     | Input Port Role   | Current Direction | External Sensor Type |
| :------- | :---------------- | :---------------- | :------------------- |
| Sinking  | Provides GND      | Flows into port   | Requires PNP sensor  |
| Sourcing | Provides VCC      | Flows out of port  | Requires NPN sensor  |

### Sinking Input Wiring

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_differential_sinking_input.png').default} alt="8ch_cv_differential_sinking_input" width="60%" />
</div>

### Sourcing Input Wiring

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_differential_sourcing_input.png').default} alt="8ch_cv_differential_sourcing_input" width="60%" />
</div>


---

## Output Wiring (Differential Output)

In the differential output version, each output channel features independent `OUT+` (positive signal) and `OUT-` (negative signal). This design helps eliminate common-mode noise on the transmission path, making it particularly suitable for long-distance transmissions or high-noise environments.

---

## Dimensions

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_differential_dimension.png').default} alt="8ch_cv_differential_dimension" width="60%" />
</div>

*   **Length**: 170.0 mm
*   **Width**: 72.0 mm


<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/2ch_cv_single_ended_dinrail.png').default}  alt="2ch_cv_differential_dimension" width="60%" /> 
  DIN Rail Module Panel
</div> 