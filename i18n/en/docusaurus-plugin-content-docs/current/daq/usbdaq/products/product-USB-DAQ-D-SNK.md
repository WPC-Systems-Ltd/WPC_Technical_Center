---
title: USB-DAQ-D-SNK
sidebar_position: 4
description: "USB-DAQ-D-SNK provides industrial-grade 24V isolated digital I/O (8 DI + 8 DO), featuring 2.5kV opto-isolation protection and a rated output current of up to..."
keywords: [USBDAQDSNK, data acquisition, DAQ card, measurement hardware, WPC DAQ, signal acquisition]
---
USB-DAQ-D-SNK provides industrial-grade **24V isolated digital I/O** (8 DI + 8 DO), featuring **2.5kV opto-isolation** protection and a rated output current of up to **300mA** (NPN sinking), specifically designed for harsh industrial environments.

# USB-DAQ-D-SNK

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. Digital Output (DO): 12-channel NPN, opto-isolated 24V
3. Digital Input (DI): 14-channel NPN, opto-isolated 24V
4. PWM/Counter
5. External 24V DC power required
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/docs/driver/wpc-device-driver/intro/)

> âš ï¸ Requires external 24V power.

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_pinout.webp').default} alt="USB-DAQ-D-SNK Pinout" width="60%" /></div>

### DAQ Wiring Instructions
---

USB-DAQ-D-SNK is a sinking output, sourcing input module, also known as NPN type. Outputs can be directly looped back to inputs for testing. During use, additional power must be provided at Pins 15, 16 (24V) and Pins 13, 14 (0V).

> ðŸ’¡ WPC has not yet released PNP type USB I/O hardware.

> The following is the DO equivalent circuit diagram. When DO outputs, the output pin is connected to 0V; the load side requires common anode 24V.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_DO_wiring.webp').default} alt="DO Wiring" width="60%" /></div>

> The following is the DI equivalent circuit diagram. All DI channels are internally common anode to 24V. Therefore, if the DI input pin is connected to 0V, a TRUE value can be read from that DI pin. DI pins can also be tested via DO pin loop-back.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_DI_wiring.webp').default} alt="DI Wiring" width="60%" /></div>

### Product Specifications

---

#### Digital Input
---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input High Voltage|                     | 3     | 5       | 5.5   | V    |
| Input Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Input Impedance   |                     | 50k   |         |       | Ω    |

#### Digital Output

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output High Voltage|                     | 3.1   | 3.3     | 3.5   | V    |
| Output Low Voltage |                     | -0.5  | 0       | 0.5   | V    |
| Output Current (Source)|                 |       |         | 10    | mA   |
| Output Current (Sink)|                   |       |         | -10   | mA   |

#### Industrial Digital Input

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Input Type       | Sourcing Input      |       |         |       |      |
| Isolation Voltage|                     |       | 2.5     |       | kV   |
| Input High Voltage|                     |       | 30      |       | V    |
| Input Low Voltage |                     |       | 12      |       | V    |
| Input Resistance |                     |       | 6.8k    |       | Ω    |

#### Industrial Digital Output

---

| Parameter        | Test Condition/Note | Min   | Typical | Max   | Unit |
| :--------------- | :------------------ | :---: | :-----: | :---: | :--: |
| Output Type      | Sinking Output      |       |         |       |      |
| Isolation Voltage|                     |       | 2.5     |       | kV   |
| Output High Voltage|                     |       | 30      |       | V    |
| Output Low Voltage |                     |       | 12      |       | V    |
| Output Current Sink (Peak)|              |       | -400    | -500  | mA   |
| Output Current Sink (Cont.)|             |       | -300    | -350  | mA   |

