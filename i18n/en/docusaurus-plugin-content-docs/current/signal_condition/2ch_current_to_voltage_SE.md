---
title: 2ch Current-to-Voltage Converter (Single-Ended)
sidebar_position: 4
description: Introduction, features, and specifications of the WPC 2ch 4-20mA to 0-5V converter (Single-Ended Output version).
sidebar_label: 2ch Current-to-Voltage (SE)
---

# 2ch Current-to-Voltage Converter (Single-Ended Output Version)

## Introduction

The WPC 8ch Current-to-Voltage Converter is an 8-channel signal processing module that converts industrial-standard 4-20mA current signals into 0-5V voltage signals. This module supports high-precision conversion across multiple channels. This page describes the **Single-Ended** version, designed to meet the requirements of single-point grounded data acquisition (DAQ) and control systems.

### Single-Ended Output
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/2ch_cv_single_ended.png').default} alt="2ch_cv_single_ended" width="60%" />
</div>

---

## Specifications

| Parameter                      | Specification                  |
| :----------------------------- | :----------------------------- |
| Number of Channels             | 2 channels                     |
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
  <img src={require('@site/static/img/signal-condition/2ch_cv_single_ended_pinout.png').default}  alt="2ch_cv_single_ended_pinout" width="60%" />
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

:::info
The Input GND and Output GND are connected.
:::

:::info
Signal GND and 0V are isolated.
:::

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_single_ended_sinking_input.png').default} alt="8ch_cv_single_ended_sinking_input" width="60%" />
</div>

### Sourcing Input Wiring

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_single_ended_sourcing_input.png').default} alt="8ch_cv_single_ended_sourcing_input" width="60%" />
</div>

---

## Single-Ended Output Wiring

In the single-ended output version, all output channels share the analog ground (GND). When connecting to DAQ equipment, the signal ground must be connected to the 0V reference point of the module.

---

## Dimension

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_cv_single_ended_dimension.png').default} alt="8ch_cv_single_ended_dimension" width="60%" />
</div>

*   **Length**: 170.0 mm
*   **Width**: 72.0 mm

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/2ch_cv_single_ended_dinrail.png').default} alt="2ch_cv_differential_dimension" width="60%" /> 
  DIN Rail Module Panel
</div> 