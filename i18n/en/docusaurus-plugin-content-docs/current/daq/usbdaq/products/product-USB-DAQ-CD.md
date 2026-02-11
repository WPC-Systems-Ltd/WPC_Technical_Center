---
title: USB-DAQ-CD
sidebar_position: 3
---
# USB-DAQ-CD

### Product Features
---

1. USB 2.0 Full-Speed Bus Powered
2. 20-channel 3.3V Digital I/O (5V Tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. CAN V2.0B Transmission Rate up to 1Mb/sec
5. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://wpc-systems-ltd.github.io/WPC_LabVIEW_driver_release/)

### Pinout
---

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/usb-daq-cd-pinout.png" alt="USB-DAQ-CD Pinout" width="60%" /></div>

### CAN Bus Wiring Guide
---

Wiring the CAN bus is very simple; just connect the CAN_H and CAN_L signals to the CAN network. Pin 35 and 36 of the USB-DAQ-CD provide a 120-ohm internal Termination Resistor. If you need to use the termination resistor, simply short-circuit Pin 35 and Pin 36.

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/can-bus-wiring.png" alt="CAN Bus Wiring" width="60%" /></div>
