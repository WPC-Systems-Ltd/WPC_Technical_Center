---
title: USB-DAQ-RD
sidebar_position: 6
---

USB-DAQ-RD supports **2-channel PT-100/PT-1000 RTD temperature sensors**, providing **15-bit** resolution with temperature resolution of up to **0.03125Â°C** and a total accuracy of **0.05%**, suitable for high-precision temperature monitoring.

# USB-DAQ-RD

### Product Features
---

1. USB 2.0 Full Speed bus-powered
2. 21-channel 3.3V Digital I/O (5V tolerant)
3. Supports I2C/SPI/UART/PWM/Counter
4. 2-channel RTD input
5. Supports PT-100 or PT-1000
6. Supports [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](https://www.wpc.com.tw)

### Pinout
---

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQRD_pinout.png').default} alt="USB-DAQ-RD Pinout" width="60%" /></div>

### RTD Sensor Wiring Instructions
---

The following is the equivalent circuit diagram for the RTD inputs of the USB-DAQ-RD. The measurement principle involves using a precision citation current (Excitation Current) of approximately 1~4 mA, which is sent into the RTD sensor via the EX+ and EX- pins. As the current flows through the RTD sensor, a voltage drop occurs across it, which is then measured by an internal amplifier and ADC via the RTD+ and RTD- pins. Therefore, all four pins (EX+, EX-, RTD+, and RTD-) must be used when measuring temperature; none should be left as "No Connection" (Floating).

Wiring instructions for three common types of RTD sensors are as follows:

- For short distances (within 3 meters), the measurement error between these three types of sensors is negligible.
- If the sensor is more than 5 meters from the USB-DAQ-RD, a 4-wire RTD sensor is recommended.
- For 4-wire sensors, refer directly to the 4-wire connection diagram below.
- For 3-wire sensors, an external wire must be used to short RTD- and EX- on one side (or RTD+ and EX+ on the other side).
- For 2-wire sensors, RTD+ must be shorted to EX+, and RTD- must be shorted to EX-.

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQRD_wiring.png').default} alt="RTD Wiring" width="60%" /></div>

### 4-Wire Connection

<div style={{textAlign: 'center'}}><img src={require('@site/static/img/daq/usb-daq/USBDAQD_4wire.png').default} alt="RTD 4-Wire Connection" width="30%" /></div>

---

