---
sidebar_position: 2
sidebar_label: 'General Breakout Board'
description: General breakout board suitable for various stepper and servo motors
---

# General Breakout Board

## 1. Product Overview

This general breakout board is designed for motion control modules and adopts standard Euro terminal block interface. Its design purpose is to provide extremely high wiring flexibility, pulling out all control signals so that developers can freely connect most stepper motor and servo motor drivers on the market.

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_15_img_X169.png" alt="General Breakout Board" width="80%" />
</div>

## 2. Hardware and Application

### 2.1 Applicable Scenarios
*   **Multi-brand Driver Integration**: When the system needs to mix drivers from different brands.
*   **Customized Wiring**: Need to connect motor drivers with special specifications or non-standard pins.
*   **Prototype Development**: When wiring definitions need to be adjusted frequently during the verification phase.

### 2.2 Terminal Configuration Description
The breakout board is equipped with four sets of main Euro terminal blocks, partitioned according to signal characteristics:

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_16_img_X179.png" alt="General Breakout Board" width="60%" />
</div>

*   **T1 / T3 Terminal Block (High Speed Signal Area)**:
    *   Responsible for handling **Pulse Output** and **Encoder Input** of the motor.
    *   **T1** corresponds to **Axis 1**; **T3** corresponds to **Axis 2**.
*   **T2 / T4 Terminal Block (I/O Control Area)**:
    *   Responsible for handling I/O signals such as **Servo Management (Servo On/Alarm)** and **Limit Sensing (Limit/Home)**.
    *   **T2** corresponds to **Axis 3**; **T4** corresponds to **Axis 4**.

## 3. Pin Definition and Signal Description

### 3.1 T1/T3 Terminal Block (High Speed Signal)

This block provides the high-speed differential signals required for motor control.

*   **Differential Output**: Transmit STEP/DIR or CW/CCW pulse commands to the driver.
*   **Differential Input**: Receive A/B/Z quadrature encoder signals from the motor.
    *   *Note: If Z phase homing function (Find INDEX) is not used, ENC_Z can be left unconnected.*

#### T1/T3 Signal Description Table

| Pin# | Name | Level | Type | Dir | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Step | 5V | Differential | Out | Step/Pulse/CW output signal |
| **2** | Step | 5V | Differential | Out | Step/Pulse/CW output signal |
| **3** | Dir+ | 5V | Differential | Out | Direction/CCW output signal |
| **4** | Dir- | 5V | Differential | Out | Direction/CCW output signal |
| **5** | Enc_A+ | 5V | Differential | In | Encoder Phase A+ |
| **6** | Enc_A- | 5V | Differential | In | Encoder Phase A- |
| **7** | Enc_B+ | 5V | Differential | In | Encoder Phase B+ |
| **8** | Enc_B- | 5V | Differential | In | Encoder Phase B- |
| **9** | Enc_Z+ | 5V | Differential | In | Encoder Phase Z+ |
| **10** | Enc_Z- | 5V | Differential | In | Encoder Phase Z- |

---

### 3.2 T2/T4 Terminal Block (I/O Control)

This block integrates various switch and trigger signals required for motion control.

*   **Open Collector Output**: Servo On and Alarm Clear, suitable for controlling driver status.
*   **Opto-coupler Input**: Forward (Positive Limit), Reverse (Negative Limit), Home (Origin), this block supports **24V** voltage, convenient for interfacing with industrial sensors.
*   **TTL Signal (5V)**:
    *   **Break-point (BP)**: Position Compare Output (Trigger Out).
    *   **Capture (CAP)**: Position Capture Input (Trigger In).

:::warning Note
**BP** (Breakpoint) and **CAP** (Capture) are **5V TTL** signals, strictly prohibited to connect to 24V voltage.
If strictly connected to 24V signals (such as accidentally connected to the 24V loop of the Limit Switch), the axis card circuit will be damaged immediately.
:::

#### T2/T4 Signal Description Table

| Pin# | Name | Level | Type | Dir | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Servo on | 24V | Open-collector | Out | Serve on output signal / inhibit out |
| **2** | ALM | 24V | Open-collector | Out | Alarm clear output signal |
| **3** | FWD | 24V | Optocoupler | In | Forward limit switch input signal |
| **4** | REV | 24V | Optocoupler | In | Reverse limit switch input signal |
| **5** | HOME | 24V | Optocoupler | In | Home limit switch input signal |
| **6** | 24V | 24V | Power | Out | Power output for limit switch |
| **7** | 24V | 24V | Power | Out | Power output for limit switch |
| **8** | GND | | Power | Out/Ref | Power output for limit switch /Signal reference |
| **9** | GND | | Power | Out/Ref | Power output for limit switch /Signal reference |
| **10** | BP | 5V | Single-ended | Out | Break-point output signal |
| **11** | CAP | 5V | Single-ended | In | Capture input signal |
| **12** | GND | | Power | Out/Ref | Signal reference for BP / CAP |
