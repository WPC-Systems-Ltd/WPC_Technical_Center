---
title: USB-DAQ-D-SNK
sidebar_position: 4
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
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://www.wpc.com.tw)

> âš ï¸ Requires external 24V power.

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_pinout.png').default} alt="USB-DAQ-D-SNK Pinout" width="60%" /></div>

### DAQ Wiring Instructions
---

USB-DAQ-D-SNK is a sinking output, sourcing input module, also known as NPN type. Outputs can be directly looped back to inputs for testing. During use, additional power must be provided at Pins 15, 16 (24V) and Pins 13, 14 (0V).

> ðŸ’¡ WPC has not yet released PNP type USB I/O hardware.

> The following is the DO equivalent circuit diagram. When DO outputs, the output pin is connected to 0V; the load side requires common anode 24V.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_DO_wiring.png').default} alt="DO Wiring" width="60%" /></div>

> The following is the DI equivalent circuit diagram. All DI channels are internally common anode to 24V. Therefore, if the DI input pin is connected to 0V, a TRUE value can be read from that DI pin. DI pins can also be tested via DO pin loop-back.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQDSNK_DI_wiring.png').default} alt="DI Wiring" width="60%" /></div>

