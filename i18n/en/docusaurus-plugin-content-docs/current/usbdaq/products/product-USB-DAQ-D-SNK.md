---
title: USB-DAQ-D-SNK
sidebar_position: 4
---
# USB-DAQ-D-SNK

### Product Features
---

1. USB 2.0 Full-Speed Bus Powered
2. Digital Output (DO): 12-channel NPN, Opto-isolated 24V
3. Digital Input (DI): 14-channel NPN, Opto-isolated 24V
4. PWM/Counter
5. Requires External 24V DC Power
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

> ⚠️ External 24V power supply required.

### Pinout
---

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/usb-daq-d-snk-pinout.png" alt="USB-DAQ-D-SNK Pinout" width="60%" /></div>

### DAQ Wiring Guide
---

USB-DAQ-D-SNK is a sinking output, sourcing input module, also known as NPN type. Outputs can be looped back to inputs for testing. When using, you must provide 24V to Pins 15 & 16, and 0V to Pins 13 & 14 respectively.

> 💡 WPC currently does not offer PNP type USB I/O hardware.

> The figure below shows the DO equivalent circuit. When generating output, the DO pin connects to 0V. The load side requires a common anode 24V connection.

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/d-snk-do-wiring.png" alt="DO Wiring" width="60%" /></div>

> The figure below shows the DI equivalent circuit. All DI channels internally share a common anode 24V. Therefore, connecting a DI input pin to 0V will result in reading TRUE from that DI pin. DI pins can also be loop-back tested via DO pins.

<div style={{textAlign: 'center'}}><img src="/img/daq/usb-daq/d-snk-di-wiring.png" alt="DI Wiring" width="60%" /></div>
