---
sidebar_position: 3
sidebar_label: 'Specific Breakout Board'
description: Specific docking board designed for major brand servo drivers
---

# Specific Breakout Board

## 1. Product Overview

This series of breakout boards is tailored for major brand servo drivers, aiming to simplify wiring complexity and improve system reliability. Through dedicated SCSI-50P cables, users can achieve **Pin-to-Pin direct connection**, eliminating the tedious single-wire docking process and significantly reducing the risk of wiring errors. The Euro terminals on the specific breakout board are mainly used to connect limit switches, breakpoint, and capture signals. These signals are independent of the motor driver and therefore need to be connected separately.


The breakout board is suitable for the following mainstream servo motor brands:
*   **Delta**: ASDA-A2 / ASDA-B2
*   **Panasonic**: Minas A4 / A5 / A6
*   **Yaskawa**: SGDV / SGD7
*   **Mitsubishi**: MR-J4 / JE / MR-J2S

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_16_img_X178.png" alt="Specific Breakout Board" width="60%" />
</div>

## 2. Supported Model List

:::warning Customization Service
If your driver model is not listed in the table below, WPC provides paid customized breakout board design services. Please contact us.
:::

| Brand | Model | Board Label | Note |
| :--- | :--- | :--- | :--- |
| Yaskawa | SGDV/SGD7 | S7 | SGDV/SGD7 wiring is the same |
| Mitsubishi | MR-J4/JE | J4 | J4/JE wiring is the same |
| Mitsubishi | MR-J2S | J2S | Old model, different from J4/JE |
| Panasonic | Minas A4/A5/A6 | A5 | A4/A5/A6 wiring is the same |
| Delta | ASDA-B2 | B2 | Different from A2 wiring |
| Delta | ASDA-A2 | A2 | Different from B2 wiring |

## 3. Function Configuration and Wiring

### 3.1 System Architecture
Each motion control card can support two specific breakout boards. A single breakout board can control **2 axes**, and a combination of two breakout boards can achieve complete **4-axis** control.

### 3.2 Signal Connection
*   **Servo Drive Signal (CN1 / CN2)**:
    *   Connect directly to the driver via SCSI-50P cable.
*   **Limit and Trigger Signals (T1 / T2 Terminal Block)**:
    *   **Limit Switch**: Needs to be connected to T1/T2 Euro terminal (provides 24V power supply).
    *   **Position Capture/Breakpoint (Capture/Breakpoint)**: Provides 5V TTL signal interface for synchronization trigger with external devices (such as cameras, DAQ).

---

## 4. Wiring Details for Each Brand

### 4.1 Delta ASDA-B2

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_18_img_X200.png" alt="Delta B2 Board" width="60%" />
</div>

- SCSI-50P connectors of CN1 and CN2 can be connected to Delta ASDA-B2 servo driver via pin-to-pin SCSI-50P.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and the 24V power supply above can supply limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.).

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

#### Jumper Settings

| Function | Setting A (Default) | Setting B |
| :--- | :--- | :--- |
| **Input/Output Polarity** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO Control** | **EMO Disable (Built-in Resistor)**<br/>R1/R2 = OR | **EMO Ext. Control (External)**<br/>R1/R2 = NC |

---

### 4.2 Delta ASDA-A2

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_19_img_X208.png" alt="Delta A2 Board" width="60%" />
</div>

- SCSI-50P connectors of CN1 and CN2 can be connected to Delta ASDA-A2 servo driver via pin-to-pin SCSI-50P.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and provide 24V power supply for limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.). The table below shows the factory defaults.

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

#### Jumper Settings

| Function | Setting A (Default) | Setting B |
| :--- | :--- | :--- |
| **Input/Output Polarity** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO Control** | **EMO Disable (Built-in Resistor)**<br/>R1/R2 = OR | **EMO Ext. Control (External)**<br/>R1/R2 = NC |

---

### 4.3 Yaskawa SGDV / SGD7

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_17_img_X189.png" alt="Yaskawa Board" width="60%" />
</div>

- SCSI-50P connectors of CN1 and CN2 can be connected to Yaskawa SGDV/SGD7 servo driver via pin-to-pin SCSI-50P, the wiring diagrams of the two are compatible.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and provide 24V power supply for limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.). The table below shows the factory defaults.

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

---

### 4.4 Panasonic Minas A4 / A5 / A6

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_21_img_X224.png" alt="Panasonic Board" width="60%" />
</div>

- SCSI-50P connectors of CN1 and CN2 can be connected to Panasonic Minas A4/A5/A6 servo driver via pin-to-pin SCSI-50P.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and provide 24V power supply for limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.). The table below shows the factory defaults.

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

#### Jumper Settings

| Function | Setting A (Default) | Setting B |
| :--- | :--- | :--- |
| **Input/Output Polarity** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO Control** | **EMO Disable (Built-in Resistor)**<br/>R1/R2 = OR | **EMO Ext. Control (External)**<br/>R1/R2 = NC |

---

### 4.5 Mitsubishi MR-J4 / JE

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_22_img_X232.png" alt="Mitsubishi J4 Board" width="60%" />
</div>

- SCSI-50P connectors of CN1 and CN2 can be connected to Mitsubishi MR-J4/JE servo driver via pin-to-pin SCSI-50P.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and provide 24V power supply for limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.). The table below shows the factory defaults.

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

---

### 4.6 Mitsubishi MR-J2S

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_23_img_X240.png" alt="Mitsubishi J2S Board" width="60%" />
</div>


- SCSI-20P connectors of CN1A, CN1AB, CN2A and CN2B can be connected to Mitsubishi MR-J2S servo driver via pin-to-pin SCSI-50P.
- Euro terminal blocks of T1 and T2 can be used to connect limit switches, and provide 24V power supply for limit switches.
- Capture and Breakpoint signals are in 5V TTL format, which can be used to synchronize with external devices (such as cameras, DAQ, etc.).

#### Factory Defaults

| Signal Type | Logic Setting | Note |
| :--- | :--- | :--- |
| **Output Signal** | Sinking Output | |
| **Input Signal** | Sourcing Input | |
| **Emergency Stop** | Enable | Breakout board has built-in resistor, no need to connect external EMO |

#### Jumper Settings

| Function | Setting A (Default) | Setting B |
| :--- | :--- | :--- |
| **Input/Output Polarity** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO Control** | **EMO Disable (Built-in Resistor)**<br/>R1/R2 = OR | **EMO Ext. Control (External)**<br/>R1/R2 = NC |
