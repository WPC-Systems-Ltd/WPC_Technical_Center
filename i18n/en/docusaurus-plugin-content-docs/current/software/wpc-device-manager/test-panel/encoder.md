---
sidebar_position: 8
sidebar_label: 'Encoder'
---

# Encoder

Encoder panel provides users with the ability to read position and speed information of Quadrature Encoders. Suitable for motor position feedback and speed monitoring.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/encoder.png" alt="Encoder Test Panel" width="60%" />
</div>

## Parameter and Value Display

The interface provides real-time encoder status information:

| Parameter/Display | Description |
| :--- | :--- |
| **Channel** | Select the encoder channel to read (Default is 0). |
| **Position** | Current encoder absolute position (Counter Value). |
| **Speed** | Current speed (RPM or other units, depending on settings). |
| **Speed window** | Speed measurement window time, used for calculating speed sampling interval. |
| **Encoder Direction** | Current rotation direction indicator. |

## Operation Instructions

Operate the buttons below to perform reading and reset functions:

| Button | Function |
| :--- | :--- |
| **Start** | Start real-time reading of encoder values and status. |
| **Stop** | Stop reading. |
| **Reset** | Reset current encoder Position value to zero. |
