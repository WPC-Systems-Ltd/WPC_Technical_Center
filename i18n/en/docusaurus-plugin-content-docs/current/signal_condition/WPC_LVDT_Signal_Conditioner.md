---
title: 1ch LVDT Signal Conditioner
sidebar_position: 11
description: Introduction, features, and specifications of the WPC 1ch LVDT Signal Conditioner.
---

# 1ch LVDT Signal Conditioner

The WPC LVDT Signal Conditioner is a signal processing front-end module specifically designed for Linear Variable Differential Transformer (LVDT) displacement sensors. It integrates excitation voltage drive, demodulation filtering, and signal amplification functions to accurately convert displacement changes from the sensor into standard analog voltage signals.

### Key Features
*   **High Dynamic Drive Capability**: Provides a 7kHz drive frequency, suitable for most standard LVDT sensors.
*   **Wide Output Range**: Supports standard ±10V analog voltage output with excellent linearity.
*   **Adjustable Gain and Offset**: Equipped with dual potentiometers (VR1 & VR2), allowing users to perform fine tuning for different measurement ranges and zero-point positions.
*   **Low-Noise Stability**: Noise level is controlled below 30mV, ensuring high-resolution displacement measurement.
*   **Industrial Standard Interface**: Powered by 24VDC, easy to integrate into various data acquisition and automation systems.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner.png" alt="LVDT_Signal_Conditioner" width="60%" />
</div>

---

## Product Specifications and Features

The WPC LVDT Signal Conditioner provides stable and precise displacement signal processing. Its main specifications are as follows:

*   **Power Input**: 24 VDC
*   **Output Voltage Range**: ±10 V
*   **Drive Frequency**: 7 kHz
*   **Bandwidth**: 0 ~ 300 Hz
*   **Base Noise**: < 30 mV

---

## Pinout and Hardware Interface

Below are the detailed pinout and tuning resistor descriptions for the WPC LVDT Signal Conditioner:

| No.  | Label / Function | Function Description                                      |
| :--- | :--------------- | :-------------------------------------------------------- |
| VR1  | Gain Tuning      | Gain Adjustment: Clockwise to increase gain; counter-clockwise to decrease gain |
| VR2  | Offset           | Offset Adjustment: ±9.9V to ±9.7V. Clockwise to decrease; counter-clockwise to increase |
| 1    | Vb               | Sensor connection terminal B                             |
| 2    | Va               | Sensor connection terminal A                             |
| 3    | EXC2             | Excitation voltage output 2                              |
| 4    | EXC2             | Excitation voltage output 2                              |
| 5    | GND              | Internal Ground                                          |
| 6    | NC               | Not Connected                                            |
| 7    | GND (SIG)        | Signal output Ground                                     |
| 8    | Vout (SIG)       | Signal output (Vout)                                     |
| 24V  | 24V              | Positive Power Input                                     |
| 0V   | GND              | Negative Power Input (0V)                                |

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_pinout.png" alt="LVDT_Signal_Conditioner_pinout" width="60%" />
</div>

---

## System Connection and Applications

### Connection Diagram
Connect the excitation and signal lines of the LVDT sensor correctly to the corresponding terminals to start displacement measurement.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection.png" alt="LVDT_Signal_Conditioner_connection" width="60%" />
</div>

 <div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection1.png" alt="LVDT_Signal_Conditioner_connection1" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_connection2.png" alt="LVDT_Signal_Conditioner_connection2" width="60%" />
</div>

---

## Characteristics and Specification Reference

### LVDT-813 Series Support
This module can be perfectly paired with the LVDT-813 series displacement sensors. The figure below displays the typical specifications and performance curves of this series.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_813_series.png" alt="LVDT_813_series" width="80%" />
</div>

---

### LVDT-813-1000 Datasheet
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_813-1000.png" alt="LVDT_Signal_Conditioner_813-1000" width="80%" />
</div>

---

## Dimensional Drawing

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_dimension.png" alt="LVDT_Signal_Conditioner_dimension" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/LVDT_Signal_Conditioner_dimension1.png" alt="LVDT_Signal_Conditioner_dimension1" width="60%" />
</div>
