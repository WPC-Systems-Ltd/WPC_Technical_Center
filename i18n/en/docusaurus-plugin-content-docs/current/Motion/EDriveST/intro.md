---
sidebar_position: 1
sidebar_label: 'Product Introduction'
description: Product introduction for EDrive-ST stepper motor driver
---

# EDrive-ST

## Product Introduction

WPC EDrive-ST is a **single-axis stepper motor integrated driver** equipped with a network interface. It can directly connect to two-phase stepper motors, incremental encoders, and limit switches. No additional axis cards are required; control can be achieved with just a computer and an Ethernet cable.

Compact in size and simple to wire, it is widely used in semiconductor equipment, small laboratory setups, and scientific research instruments. Powered by DC power, it supports up to 36V, making it suitable for DC environments like mobile vehicles, solar photovoltaics, and energy storage systems.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST.png').default} alt="EDriveST" width="60%" />
</div>

### Core Features

| Feature              | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| Integrated Design    | Built-in driver and network control interface, no extra axis card needed |
| Flexible Control     | Supports position control and velocity control modes         |
| High-Res Microstepping| Up to 51200 steps/rev (adjustable)                          |
| Rich I/O             | Supports ABZ differential encoder, Home / FWD / REV limit switches |
| Intelligent Functions| Stall detection, smart energy saving, and driver diagnostics |
| Multi-language SDKs  | Supports Python, C#, and LabVIEW                             |

### System Architecture Diagram

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_system_diagram.png').default} alt="EDriveST System Diagram" width="60%" />
</div>

:::caution
EDrive-ST only supports **two-phase** stepper motors.
:::

---

## Main Specifications

| Item                 | Description                       |
| :------------------- | :-------------------------------- |
| Power Input          | 24VDC (supports up to 36V)        |
| Network Interface    | 10/100 T-based Ethernet           |
| Motor Type           | 2-phase stepper motor             |
| Microstep Resolution | 51200 steps/rev (adjustable)      |
| Max Output Current   | 2.1A (5A peak)                    |
| Encoder              | ABZ Incremental (8MHz nominal)    |
| Limit Switch Input   | Home / FWD / REV                  |
| Other Functions      | Stall detection / Smart energy saving / Diagnostics |
| Accel/Decel Curve    | 8-segment ramp smooth acceleration |
| Supported SDKs       | Python, C#, LabVIEW               |

---

## Appearance

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_IO.png').default} alt="EDriveST I/O" width="60%" />
</div>

Interfaces identified by numbers:

1. Protective earth (PE)
2. Ethernet RJ-45 connector
3. LED1 / LED2
4. Encoder I/O (Differential / RSE)
5. Limit switches
6. Stepper motor (2-phase only)
7. DC power input
8. OLED panel
9. FUNC button
10. RESET button

---

## Connector 4 — Encoder Input

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_connector.png').default} alt="EDriveST Connector" width="60%" />
</div>

| Pin | Name     | Description                              |
| :-: | :------- | :--------------------------------------- |
|  1  | 5V (out) | 5V power output for encoder use          |
|  2  | GND      | Ground                                   |
|  3  | ENC_A+   | Encoder Phase A positive                 |
|  4  | ENC_A-   | Encoder Phase A negative                 |
|  5  | ENC_B+   | Encoder Phase B positive                 |
|  6  | ENC_B-   | Encoder Phase B negative                 |
|  7  | ENC_Z+   | Encoder Phase Z positive                 |
|  8  | ENC_Z-   | Encoder Phase Z negative                 |

Pin 1 provides 5V power and Pin 2 is Ground, which can be used directly to power the encoder.

### Differential Encoder

Differential encoders are supported by default, with 5V TTL voltage levels.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_diff.png').default} alt="EDriveST Differential" width="60%" />
</div>

### Single-ended Encoder

Connect the encoder outputs to the ENC_A/B/C+ terminals, leaving the ENC_A/B/C- terminals floating.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_single.png').default} alt="EDriveST Single-ended" width="60%" />
</div>

:::note
If you need to use a single-ended encoder, please inform WPC or your distribution partner before shipment.
:::

---

## Connector 5 — Limit Switch Input

| Pin | Name     | Description                 |
| :-: | :------- | :-------------------------- |
|  1  | LIM_REV+ | Reverse limit positive      |
|  2  | LIM_REV- | Reverse limit negative      |
|  3  | LIM_FWD+ | Forward limit positive      |
|  4  | LIM_FWD- | Forward limit negative      |
|  5  | LIM_HOM+ | Home switch positive        |
|  6  | LIM_HOM- | Home switch negative        |

### Internal Current Limiting Resistor

A 6.8kΩ current limiting resistor is built-in; no external resistor is required.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_current_limit_resistor.png').default} alt="EDriveST Current Limiting" width="60%" />
</div>

### NPN Type Limit Switch

Connect LIM_FWD/REV/HOM+ to 24V (common anode), and the limit switch output to LIM_FWD/REV/HOM-.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_NPN.png').default} alt="EDriveST NPN" width="60%" />
</div>

### PNP Type Limit Switch

Connect LIM_FWD/REV/HOM- to 0V (common cathode), and the limit switch output to LIM_FWD/REV/HOM+.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_PNP.png').default} alt="EDriveST PNP" width="60%" />
</div>

### Mechanical Limit Switch

One of the following two wiring methods can be selected:

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_traditional_1.png').default} alt="EDriveST Mechanical 1" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_traditional_2.png').default} alt="EDriveST Mechanical 2" width="60%" />
</div>

---

## Connector 6 — Stepper Motor Output

| Pin | Name | Description      |
| :-: | :--- | :--------------- |
|  1  | B\   | Phase B negative |
|  2  | B    | Phase B positive |
|  3  | A\   | Phase A negative |
|  4  | A    | Phase A positive |

### 4-Wire Wiring

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_4wire.png').default} alt="EDriveST 4-wire" width="60%" />
</div>

### 6-Wire Wiring

Do not connect the common terminals in the middle of the coils; only connect the two ends of each coil.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/motion/EDriveST_6wire.png').default} alt="EDriveST 6-wire" width="60%" />
</div>

---

## Connector 7 — Power Input

| Pin | Name | Description          |
| :-: | :--- | :------------------- |
|  1  | 24V  | DC power positive    |
|  2  | 0V   | Ground               |

The standard input voltage is 24VDC.
