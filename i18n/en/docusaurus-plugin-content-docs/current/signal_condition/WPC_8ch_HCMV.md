---
title: 8ch High Common Mode Voltage (HCMV) Amplifier
sidebar_position: 6
description: Introduction, features, and specifications of the WPC 8ch High Common Mode Voltage (HCMV) Amplifier.
---

# 8ch High Common Mode Voltage (HCMV) Amplifier

The WPC HCMV Amplifier (including HCMV Amplifier-200 and HCMV Amplifier-275) is an amplifier module specifically designed for processing high common-mode voltage signals. This product features 8 ground-referenced channels and an isolated power supply design, making it particularly suitable for measurement applications in **battery packs** and **fuel batteries**.

### Key Features
*   **Extreme High Common-Mode Voltage Support**: Provides high common-mode voltage ranges of up to 200V or 275V, meeting the needs for high-voltage measurement.
*   **High-Safety Isolation Protection**: Features 500V input protection and utilizes power isolation design to safeguard back-end equipment.
*   **Excellent Noise Suppression**: Common-Mode Rejection Ratio (CMRR) is at least 90dB, effectively filtering out noise in high-voltage environments.
*   **Built-in Low-Pass Filter**: Includes an integrated 100kHz low-pass filter to provide stable signal quality.
*   **Standardized Power Supply and Gain**: Powered by 24VDC with a fixed gain (Gain) of 1, facilitating easy system integration.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_HCMV.png').default} alt="8ch_HCMV" width="60%" />
</div>

---

## Product Specifications and Features

The WPC 8ch HCMV Amplifier is designed for high-stability and high-safety measurements. Its main specifications are as follows:

*   **Power Input**: 24 VDC
*   **High Common-Mode Voltage Range**: 200 V or 275 V
*   **Number of Channels**: 8 channels
*   **Gain**: 1
*   **Input/Output Range**: ±10 V
*   **Common-Mode Rejection Ratio (CMRR)**: ≥ 90 dB
*   **Input Protection**: 500 V
*   **Bandwidth**: 100 kHz (Built-in low-pass filter)

| Parameter                        | Symbol | Condition          | Min.  | Typ. | Max. | Unit | Description                    |
| :------------------------------- | :----- | :----------------- | :---: | :--: | :--: | :--- | :----------------------------- |
| Voltage Input Range              | Vin    | Vcs=12V            | 0     |      | 5    | V    | -                              |
| Voltage Input Threshold          | Vth    | -                  | 20    | 40   | 50   | mV   | -                              |
| Current Output Range             | Iout   | Vcs=12V            | 0     |      | 200  | mA   | -                              |
| Current Source Power Input       | Vcs    | -                  | 5     | 9    | 12   | V    | -                              |
| Amplifier Power Input            | Vcc    | -                  | 7     | 12   | 15   | V    | Must be at least 2V higher than Vcs |
| Vsens Output Range               | Vsens  | Vcc = ±15V          |       | 10   | 12   | V    | Must be less than Vcc-2V        |
| Isens Output Range               | Isens  | Vcc = ±15V          |       | 10   | 12   | V    | -                              |
| Current Output Precision          | -      | -                  | 5     |      | 10   | µA   | -                              |

---

## Pinout and Hardware Interface

Below is the interface configuration description for the WPC 8ch HCMV Amplifier:

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_HCMV_pinout.png').default} alt="8ch_HCMV_pinout" width="60%" />
</div>

:::caution
When performing high-voltage measurements, ensure that all ground connections are correct and secure to avoid equipment damage or personal injury.
:::

| Name             | Function Description                   |
| :--------------- | :------------------------------------- |
| **Power In**     | 24VDC Power Input terminal             |
| **Signal Input** | 8-channel high-voltage signal interface|
| **Signal Output**| 8-channel signal output interface (Gain = 1) |

---

## System Connection and Applications

The figure below displays the connection method for the 8ch HCMV Amplifier in a typical battery pack measurement system:

### Connection Diagram
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_HCMV_connection_diagram.png').default} alt="8ch_HCMV_connection_diagram" width="60%" />
</div>

### Application Note
The WPC 8ch HCMV is primarily used for battery pack measurement. Since there is extreme series voltage within a battery pack, ordinary sensors have difficulty handling the high common-mode level relative to ground directly. This module safely converts the voltage difference signal in a high common-mode environment into a standard voltage signal relative to ground.

---

## Advanced Features

### Power & References

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_HCMV_power_ref.png').default} alt="8ch_HCMV_power_ref" width="60%" />
</div>

### High Voltage Expansion
This series of modules supports high-voltage expansion applications. You can choose the corresponding model (HCMV-200 or HCMV-275) based on the total series voltage of the measurement point and use multiple modules together to expand the measurement channels.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/signal-condition/8ch_HCMV_high_voltage_expansion.png').default} alt="8ch_HCMV_high_voltage_expansion" width="60%" />
</div>
