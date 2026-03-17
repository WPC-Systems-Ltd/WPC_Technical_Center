---
title: USB-DAQ-CD
sidebar_position: 7
---

USB-DAQ-CD provides a **CAN 2.0A/B communication interface**, supporting transmission rates up to **1Mbps**, and integrates **20-channel digital I/O**, suitable for vehicle networks, industrial automation, and inter-device communication applications.

# USB-DAQ-CD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 20-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. CAN V2.0B transmission rate up to 1Mb/sec
5. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://www.wpc.com.tw)

### Pinout
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQCD_pinout.png" alt="USB-DAQ-CD Pinout" width="60%" /></div>

### CAN Bus Wiring Instructions
---

CAN bus wiring is simple; just connect the CAN_H and CAN_L signals in parallel to the CAN network. Pins 35 and 36 of the USB-DAQ-CD provide an internal 120-ohm termination resistor function. If a termination resistor is required, simply short Pins 35 and 36 together.

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQCD_CANbud_wiring.png" alt="CAN Bus Wiring" width="60%" /></div>
