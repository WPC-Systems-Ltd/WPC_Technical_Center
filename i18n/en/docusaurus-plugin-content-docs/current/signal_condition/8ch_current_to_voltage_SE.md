---
title: 8ch Current-to-Voltage Converter (Single-Ended)
sidebar_position: 4
description: Introduction, features, and specifications of the WPC 8ch 4-20mA to 0-5V converter (Single-Ended Output version).
sidebar_label: 8ch Current-to-Voltage (SE)
---

# 8ch Current-to-Voltage Converter (Single-Ended Output Version)

## Introduction

The WPC 8ch Current-to-Voltage Converter is an 8-channel signal processing module that converts industrial-standard 4-20mA current signals into 0-5V voltage signals. This module supports high-precision conversion across multiple channels. This page describes the **Single-Ended** version, designed to meet the requirements of single-point grounded data acquisition (DAQ) and control systems.

### Single-Ended Output
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended.png" alt="8ch_cv_single_ended" width="60%" />
</div>

---

## Specifications

| Parameter                      | Specification                  |
| :----------------------------- | :----------------------------- |
| Number of Channels             | 8 channels                     |
| Input Signal (Input)           | 4-20 mA                        |
| Output Signal (Output)         | 0-5 V (Single-Ended Output)    |
| Overall Accuracy               | 0.1%                           |
| Common-Mode Rejection (CMR)    | 86 dB                          |
| Power Supply                   | 24 VDC                         |
| Isolation Design               | Channel-to-power isolation     |

---

## Hardware Interface and Pinout

### Power Configuration

The top of the module provides standard power terminals to ensure stable system operation.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_pinout.png" alt="8ch_cv_single_ended_pinout" width="60%" />
</div>


| Pin Label | Description    |
| :-------- | :------------- |
| 24V       | Positive Power |
| GND       | System Ground  |
| Input     | 4-20mA        |
| Output    | 0-5V          |

:::info
The Input GND and Output GND are connected.
:::

:::info
Signal GND and 0V are isolated.
:::


---
## Module Sensor Wiring

The input terminal supports both **Sourcing input** and **Sinking input** type sensors. Please refer to the corresponding wiring diagrams below based on the type of sensor you are using:

| Type     | Input Port Role   | Current Direction | External Sensor Type |
| :------- | :---------------- | :---------------- | :------------------- |
| Sinking  | Provides GND      | Flows into port   | Requires PNP sensor  |
| Sourcing | Provides VCC      | Flows out of port  | Requires NPN sensor  |

### Sinking Input Wiring

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_sinking_input.png" alt="8ch_cv_single_ended_sinking_input" width="60%" />
</div>

### Sourcing Input Wiring

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_sourcing_input.png" alt="8ch_cv_single_ended_sourcing_input" width="60%" />
</div>

---

## Output Wiring (Single-Ended Output)

In the single-ended output version, all output channels share a common analog ground (GND). When connecting to a DAQ device, the signal ground must be connected to the module's 0V reference point.

---

## Dimensions

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/8ch_cv_single_ended_dimension.png" alt="8ch_cv_single_ended_single_ended_dimension" width="60%" />
</div>

*   **Length**: 170.0 mm
*   **Width**: 72.0 mm
