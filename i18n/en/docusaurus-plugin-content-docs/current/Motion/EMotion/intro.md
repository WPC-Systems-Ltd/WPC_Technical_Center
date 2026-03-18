---
sidebar_position: 1
sidebar_label: 'Product Description'
description: Product description, specifications, and wiring for EMotion four-axis motion control card
---

# EMotion

## Product Introduction

EMotion is a high-performance 4-axis pulse-command type axis card that combines the advantages of the classic NI 7390 and NI 7354 axis cards. It provides high-speed pulse output up to 8MHz per axis, suitable for high-precision platform positioning control, especially in semiconductor equipment.

The 10MHz encoder reading speed prevents step loss during high-speed movement. All input/output front-end circuits feature channel-to-ground isolation to protect the controller from lightning and static electricity in industrial environments. It supports S-curve and Jerk setting functions to reduce vibration during transfer, and provides linear, circular, and helical interpolation functions for various machine tools and processing equipment.

WPC's LabVIEW version continues the design philosophy of NI Motion, making it an ideal alternative for NI axis cards. Since 2021, the addition of Motion Express VIs allows users to quickly get started and develop motor control programs in a short time.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EMotion.png').default} alt="EMotion" width="60%" />
</div>

---

## Main Specifications

| Item                 | Description                                   |
| :------------------- | :-------------------------------------------- |
| Power Input          | 24VDC                                         |
| Network Interface    | 10/100 T-based Ethernet                       |
| Axes                 | 4 axes                                        |
| Pulse Output Mode    | Pulse/Direction or CW/CCW                     |
| Max Pulse Rate       | 8MHz                                          |
| Encoder Input        | ABZ Differential (up to 10MHz)                |
| Limit Switch Input   | Home / FWD / REV, 3 per axis, 12 total        |
| Supported SDKs       | Python, C#, LabVIEW                           |

---

## Appearance

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/Emotion_IO.png').default} alt="EMotion I/O" width="60%" />
</div>

Interfaces are described as follows:

1. **24VDC Power Input**: Powered via an ATX-2P connector.
2. **Ethernet RJ-45 Connector**: Connects to a computer via an Ethernet cable.
3. **FUNC Button**:
   - Long press (~3s): Resets IP to factory default `192.168.1.110`.
   - Short press: Switches display pages on the OLED panel.
4. **RESET Button**:
   - Press alone: Restarts the device.
   - Press with FUNC: Restarts and enters Bootloader mode.
5. **OLED Panel**: Displays network info, firmware version, serial number, etc.
6. **DIN41612 48P Connector**: Connects to the breakout board for axes 1 and 2.
7. **DIN41612 48P Connector**: Connects to the breakout board for axes 3 and 4.

### Dimensions

EMotion's dimensions are 254.2 × 147.4 (mm) in length × width; the height without breakout boards is 26.7 (mm).

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EMotion_size.png').default} alt="EMotion Dimensions" width="60%" />
</div>

---

### System Installation

EMotion can be installed directly on a DIN rail; note that the DIN rail clip will lift the body by approximately 12.9 (mm). A clearance of 50 (mm) above the breakout boards is recommended for SCSI cable bending.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EMotion_install.png').default} alt="EMotion Installation" width="60%" />
</div>


### System Wiring

EMotion requires an external 24VDC power supply; please use the original WPC ATX-2P power module. Only an RJ-45 Ethernet cable is needed between the controller and the computer; servo drivers and limit switches are interfaced via breakout boards.

If using a [specific breakout board](../../daq/stem/modules/motion/breakout/specific_board.md), you can connect directly to the driver using a dedicated SCSI cable, greatly simplifying wiring. If using a [general breakout board](../../daq/stem/modules/motion/breakout/general_board.md), wire according to the signal definitions.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EMotion_wiring.png').default} alt="EMotion Wiring" width="60%" />
</div>


:::info
Breakout boards feature a 24VDC power output function, which can directly power **limit switches**, eliminating the need for extra wiring and simplifying system complexity.
:::

---

## Detailed Specifications

### Pulse Command Output

| Item                 | Description                             |
| :------------------- | :-------------------------------------- |
| Axes                 | 4 axes                                  |
| Control Type         | Open-loop or position command           |
| Control Mode         | Absolute, relative, velocity mode       |
| Signal Type          | RS-422 or Line-driver differential output|
| Output Mode          | Step/Direction or CW/CCW                |
| Max Pulse Rate       | 8MHz                                    |
| Voltage Range        | 0~5V, opto-isolated                     |
| Active Level         | Programmable, active-high or active-low |
| Trajectory Functions | S-curve, position control, velocity blending, position blending |
| Contour Functions    | 2D, 3D contour control                  |
| Interpolation        | Linear, circular, helical interpolation  |

---

### Encoder Input

| Item                 | Description                       |
| :------------------- | :-------------------------------- |
| Axes                 | 4 axes                            |
| Sensor Type          | Quadrature encoder (A, B, Z phase)|
| Signal Type          | Differential (RS-422 compatible)  |
| Max Count Rate       | 10MHz                             |
| Voltage Range        | 0~5V, opto-isolated               |

---

### Limit Switch Input

| Item           | Description                                          |
| :------------- | :--------------------------------------------------- |
| Sensor Type    | Forward (FWD), Reverse (REV), Home                   |
| Input Count    | 12 (3 per axis)                                      |
| Signal Type    | Sinking or Sourcing (set by 0R resistor on breakout) |
| Voltage Level  | 24V                                                  |
| Active Level   | Programmable, active-high or active-low              |

---

### Servo On

| Item           | Description                                          |
| :------------- | :--------------------------------------------------- |
| Output Type    | Open-collector output, NPN or PNP                    |
| Output Count   | 4 (1 per axis)                                       |
| Signal Type    | Sinking or Sourcing (set by 0R resistor on breakout) |
| Voltage Level  | 24V                                                  |
| Max Current    | 400mA                                                |
| Active Level   | Programmable, active-high or active-low              |

---

### Alarm Clear

| Item           | Description                                          |
| :------------- | :--------------------------------------------------- |
| Output Type    | Open-collector output, NPN or PNP                    |
| Output Count   | 4 (1 per axis)                                       |
| Signal Type    | Sinking or Sourcing (set by 0R resistor on breakout) |
| Voltage Level  | 24V                                                  |
| Max Current    | 400mA                                                |
| Active Level   | Programmable, active-high or active-low              |

---

### Break-point

| Item                 | Description       |
| :------------------- | :---------------- |
| Signal Type          | TTL Output        |
| Output Count         | 4 (1 per axis)    |
| Output Mode          | Single-ended      |
| Max Rate             | 1MHz              |
| Voltage Range        | 0~5V, opto-isolated|

---

### Capture

| Item                 | Description       |
| :------------------- | :---------------- |
| Signal Type          | TTL Input         |
| Input Count          | 4 (1 per axis)    |
| Input Mode           | Single-ended      |
| Max Rate             | 1MHz              |
| Voltage Range        | 0~5V, opto-isolated|


## General and Specific Breakout Boards

EMotion axis cards can be equipped with general or specific breakout boards to connect different brands of motor drivers. For detailed breakout board specifications, pinouts, and wiring for various brands, please refer to the following documents:

- [General Breakout Board](../../daq/stem/modules/motion/breakout/general_board.md): Features European-style terminals for flexible connection to various stepper and servo drivers.
- [Specific Breakout Board](../../daq/stem/modules/motion/breakout/specific_board.md): Directly connects via SCSI-50P, supporting major brands such as Delta, Yaskawa, Mitsubishi, and Panasonic.
