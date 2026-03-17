---
title: USB-DAQ-TD
sidebar_position: 5
---

USB-DAQ-TD is specifically designed for temperature measurement, providing **2-channel thermocouple input**, supporting eight types: **K, J, N, R, S, T, E, B**. It has a measurement range of **-210°C ~ 1800°C**, with built-in cold-junction compensation and 50/60Hz noise filtering.

# USB-DAQ-TD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 21-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. 2-channel thermocouple input
5. Supports sensor types: K, J, N, R, S, T, E, & B
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://www.wpc.com.tw)

### Pinout
---

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQTD_pinout.png" alt="USB-DAQ-TD Pinout" width="60%" /></div>

### Thermocouple Wiring Instructions
---

The USB-DAQ-TD uses standard-specification thermocouple connectors; simply plug in the connector for use. If you purchase thermocouple wire separately and connect it to a standard connector, reverse polarity may occur. If the positive and negative poles of the thermocouple are reversed, the DAQ temperature reading will show a decrease when heating and an increase when cooling. In such cases, swapping the positive and negative wires will resolve the issue.

<div style={{textAlign: 'center'}}><img src="/WPC_Technical_Center/img/daq/usb-daq/USBDAQTD_thermocouple.png" alt="Thermocouple Wiring" width="60%" /></div>
