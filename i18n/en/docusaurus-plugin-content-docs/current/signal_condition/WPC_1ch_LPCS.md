---
title: 1ch Low Power Current Source
sidebar_position: 3
description: Introduction, features, and specifications of the WPC 1ch Low power current source (LPCS).
---

# 1ch Low Power Current Source

## Introduction

The WPC 1ch Low Power Current Source (LPCS) is a signal processing front-end module that converts voltage signals into high-precision, **minute current** outputs. This product is designed for applications requiring precise current drive and measurement, featuring a compact size and efficient current control capabilities.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS.png" alt="1ch_LPCS" width="60%" />
</div>

---

## Specifications

| Parameter                          | Min.  | Typ. | Max. | Unit | Condition/Description          |
| :--------------------------------- | :---: | :--: | :--: | :--- | :----------------------------- |
| Current Source Power Input (Vcs)   | 5     | 9    | 12   | V    | -                              |
| Amplifier Power Input (Vcc)        | 7     | 12   | 15   | V    | Must be at least 2V higher than Vcs |
| Voltage Input Range (Vin)          | 0     |      | 5    | V    | Vcs = 12V                      |
| Voltage Input Threshold (Vth)      | 20    | 40   | 50   | mV   | -                              |
| Current Output Range (Iout)       | 0     |      | 200  | mA   | Vcs = 12V                      |
| Current Output Precision           | 5     |      | 10   | µA   | -                              |
| Vsens Output Range                 | 10    |      | 12   | V    | Must be less than Vcc-2V (Vcc=±15V) |
| Isens Output Range                 | 10    |      | 12   | V    | Vcc = ±15V                     |

---

## Hardware Interface and Pinout

The WPC 1ch LPCS features two sets of terminals (top and bottom), responsible for connecting different signals and power supplies:

### Top Terminals (Pin 1 ~ 10)

Mainly responsible for power input and control signal connections.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_pinout1.png" alt="1ch_LPCS_pinout" width="40%" />
</div>

| Pin Number | Description                   | Function Description                  |
| :--------- | :---------------------------- | :------------------------------------ |
| 1          | Current source power in+      | Current source positive power input (Vcs) |
| 2          | Current source power in+      | Current source positive power input (Vcs) |
| 3          | Sense amplifier power in+     | Sense amplifier positive power (Vcc) |
| 4          | Sense amplifier power in-     | Sense amplifier negative power        |
| 5          | Current Control Voltage in+   | External control voltage input (Vin) |
| 6          | AGND                          | Analog Ground                         |
| 7          | Current sense voltage out+    | Current sense voltage output (Isens) |
| 8          | AGND                          | Analog Ground                         |
| 9          | Voltage sense voltage out+    | Voltage sense voltage output (Vsens) |
| 10         | AGND                          | Analog Ground                         |

### Bottom Terminals (Pin 1 ~ 4)

Mainly responsible for current output and load-end voltage sensing.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_pinout2.png" alt="1ch_LPCS_pinout" width="20%" />
</div>

| Pin Number | Description | Function Description |
| :--------- | :---------- | :------------------- |
| 1          | Vsens-      | Voltage sense (Neg.) |
| 2          | Iout-       | Current output (Neg.)|
| 3          | Iout+       | Current output (Pos.)|
| 4          | Vsens+      | Voltage sense (Pos.) |

---

## System Connection and Applications

### System Connection Example

Example of connection for control and measurement using a general data acquisition device (DAQ):

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_connection_diagram.png" alt="1ch_LPCS_connection_diagram" width="80%" />
</div>

### Application Example: Contact Resistance Measurement

:::tip
To measure contact resistance, it is strongly recommended to use **4-wire sensing** technology to eliminate errors caused by the impedance of the wires themselves, ensuring the precision of the measurement results.
:::

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_CR_measurement.png" alt="1ch_LPCS_CR_measurement" width="60%" />
</div>

### Characteristic Curve: Input Voltage vs. Output Current

The figure below shows the linear relationship curve between the control input voltage and the corresponding output current:

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/1ch_LPCS_Vin_vs_Iout.png" alt="1ch_LPCS_Vin_vs_Iout" width="80%" />
</div>

---

## Extension Module: 2ch Power LPCS (Dedicated Power Supply)

The WPC 2ch Power LPCS is a high-isolation dual-channel power supply specifically designed to drive the WPC 1ch LPCS, effectively simplifying system wiring and enhancing signal stability.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_front.png" alt="2ch_Power_LPCS_front" width="50%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_rear.png" alt="2ch_Power_LPCS_rear" width="50%" />
</div>

### Product Specifications and Features

*   **Supported Devices**: Can simultaneously support 2 sets of WPC 1ch LPCS
*   **Power Input (Power In)**: 24 VDC
*   **Power Output (Power Out)**: ±12 V Highly Isolated
*   **Current Output Control (Current Out Control)**: 0 ~ 5 V
*   **Voltage / Current Sense**: 0 ~ 5 V

### Front Panel Interface

The front panel features two sets of output ports, which can be connected directly via 4-pin signal cables to the bottom terminals of the 1ch LPCS.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_pinout_front.png" alt="2ch_Power_LPCS_pinout_front" width="60%" />
</div>

| Pin Number | Description |
| :--------- | :---------- |
| 1          | Vsens-      |
| 2          | Iout-       |
| 3          | Iout+       |
| 4          | Vsens+      |

### Rear Panel Interface

The rear panel features two sets of 10-pin box headers (IDC-10P) and signal interfaces for connecting to the DAQ, divided into two independent channels, Channel A and Channel B.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/2ch_Power_LPCS_pinout_rear.png" alt="2ch_Power_LPCS_pinout_rear" width="60%" />
</div>

| Pin Number | Channel | Description | Function Description                  |
| :--------- | :------ | :---------- | :------------------------------------ |
| 1          | A       | Vsens       | Voltage sense (0 ~ 10V output)        |
| 2          | A       | Isens       | Current sense (0 ~ 10V output)        |
| 3          | A       | Ictrl       | Current control (0 ~ 5V input)        |
| 4          | A       | GND         | Channel A dedicated Analog Ground (AGND) |
| 5          | B       | Vsens       | Voltage sense (0 ~ 10V output)        |
| 6          | B       | Isens       | Current sense (0 ~ 10V output)        |
| 7          | B       | Ictrl       | Current control (0 ~ 5V input)        |
| 8          | B       | GND         | Channel B dedicated Analog Ground (AGND) |
