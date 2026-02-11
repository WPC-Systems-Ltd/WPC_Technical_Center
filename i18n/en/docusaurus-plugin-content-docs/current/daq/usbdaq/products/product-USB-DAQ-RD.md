---
title: USB-DAQ-RD
sidebar_position: 6
---
# USB-DAQ-RD

### Product Features
---

1. USB 2.0 Full-Speed Bus Powered
2. 21-channel 3.3V Digital I/O (5V Tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. 2-channel RTD Input
5. Supports PT-100 or PT-1000
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://wpc-systems-ltd.github.io/WPC_LabVIEW_driver_release/)

### Pinout
---

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/usb-daq-rd-pinout.png" alt="USB-DAQ-RD Pinout" width="60%" /></div>

### RTD Sensor Wiring Guide
---

The figure below shows the equivalent circuit for the USB-DAQ-RD Resistance Temperature Detector (RTD) input. The measurement principle involves using a precision current source (Excitation Current) of about 1~4 mA, injecting current into the RTD via EX+ and EX- pins. As current flows through the RTD, a voltage drop is generated and measured via the internal amplifier and ADC at the RTD+ and RTD- pins. Therefore, when measuring temperature, all four pins (EX+, EX-, RTD+, RTD-) must be used; there will be no floating connection.

Wiring instructions for three common types of RTDs are as follows:

- For very short distances (within 3 meters), measurement errors between these three types are negligible.
- If the distance between the sensor and USB-DAQ-RD is long (exceeding 5 meters), a 4-Wire RTD is recommended.
- When using a 4-wire sensor, refer directly to the 4-wire connection diagram below.
- When using a 3-wire sensor, use an external wire to short-circuit one side's RTD- with EX- (or RTD+ with EX+).
- When using a 2-wire sensor, individually short-circuit RTD+ with EX+, and RTD- with EX-.

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/rtd-wiring.png" alt="RTD Wiring" width="60%" /></div>
