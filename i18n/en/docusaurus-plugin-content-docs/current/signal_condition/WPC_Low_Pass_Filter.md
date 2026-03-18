---
title: 1ch Low Pass Filter (LPF-150)
sidebar_position: 7
description: Introduction, features, and specifications of the WPC 1ch Low Pass Filter (LPF-150).
---

# 1ch Low Pass Filter (LPF-150)

The WPC Low Pass Filter (LPF-150) is a signal processing front-end module specifically designed to filter out high-frequency noise. This product utilizes an active 4-order MFB (Multiple Feedback) low-pass filtering architecture to effectively clear high-frequency interference from signals, ensuring the accuracy and stability of data measurements.

### Key Features
*   **High-Quality Filtering Operation**: Uses an active 4-order MFB (Multiple Feedback) low-pass filtering architecture.
*   **Precise Cutoff Frequency**: Features a 150Hz cutoff frequency (-3dB), optimized for middle and low-frequency signal measurements.
*   **Diverse Signal Conversion**: Supports single-ended input and converts it into differential signal output.
*   **Standardized Gain**: Fixed gain of 1, ensuring signal strength remains unchanged during the filtering process.
*   **Precision Offset Adjustment**: Equipped with an adjustable resistor (VR), allowing users to manually calibrate the zero-point offset (Offset) according to their needs.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter.png').default} alt="Low_Pass_Filter" width="60%" />
</div>

---

## Product Specifications and Features

The WPC LPF-150 provides precise frequency filtering. Its main specifications are as follows:

*   **Power Input**: 24 VDC
*   **Filter Category**: Active 4-order MFB low-pass filter
*   **Bandwidth (-3dB)**: 150 Hz
*   **Gain**: 1
*   **Input Voltage Range**: ±10 V (Single-ended)
*   **Output Voltage Range**: ±10 V (Differential)
*   **Zero-point Adjustment**: Offset can be adjusted via the built-in VR

---

## Pinout and Hardware Interface

Below are the detailed pinout and power configuration instructions for the WPC LPF-150:

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_pinout.png').default} alt="Low_Pass_Filter_pinout" width="60%" />
</div>

| Pin Number | Function Description            |
| :--------- | :----------------------------- |
| 1          | - (Not Defined)                |
| 2          | - (Not Defined)                |
| 3          | GND (Signal Ground)            |
| 4          | IN- (Signal Input Negative)    |
| 5          | IN+ (Signal Input Positive)    |
| 6          | GND (Signal Ground)            |
| 7          | - (Not Defined)                |
| 8          | Output (Signal Output)         |
| VR         | Offset Tuning (Zero-point offset adjustment) |
| 24V+       | 24V (Positive Power Input)     |
| 24V-       | 0V (Negative Power Input)      |

---

## Advanced Settings and Information

### Offset Tuning
The WPC LPF-150 undergoes manual zero-point calibration at the factory. This module retains the offset tuning function to facilitate fine-tuning for specific application scenarios by customers. For example, you can adjust the VR to shift a signal originally between ±2.5V into a range of 0 to 5V, allowing direct use with data acquisition equipment (DAQ) that supports only a 5V single-supply range.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_offset_tuning.png').default} alt="Low_Pass_Filter_offset_tuning" width="60%" />
</div>

---

## Characteristic Curves

### Frequency Response
The figure below shows the frequency response curve of the LPF-150, with the cutoff point precisely set at 150Hz.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_frequency_response.png').default} alt="Low_Pass_Filter_frequency_response" width="60%" />
</div>

### Gain/Phase Spectrum
This chart details the gain and phase variations of the signal across different frequencies.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_gain_phase.png').default} alt="Low_Pass_Filter_gain_phase" width="60%" />
</div>

---

## Dimensional Drawing

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_dimension.png').default} alt="Low_Pass_Filter_dimension" width="60%" />
</div>
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/Low_Pass_Filter_dimension1.png').default} alt="Low_Pass_Filter_dimension1" width="60%" />
</div>
