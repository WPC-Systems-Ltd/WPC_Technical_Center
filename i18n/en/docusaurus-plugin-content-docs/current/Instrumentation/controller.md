---
title: Controller Panel & Specifications
sidebar_position: 2
---

# gStack-RIO Controller

The gStack-RIO controller uses a high-performance embedded processor, providing a stable and flexible control core. This chapter will detail the controller's hardware interface configuration, core specification data, and software architecture related information.

### Hardware Interface Description

---

The figure below shows the physical panel configuration and the location of each connection interface of the gStack-RIO controller.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p7_00.png" alt="Controller Interface" width="60%" />
</div>

1. Protective earth (PE): Protective grounding terminal.
2. USB connector: Used to connect external storage devices or peripherals.
3. RJ-45 connector: Ethernet port, used to connect to a computer or network.
4. RESET button: System reset button.
5. LED indicators: System status indicators.
6. RS232: Serial communication interface.
7. CAN: Controller Area Network communication interface.
8. 24VDC power input: DC power input terminal.

Before using this equipment, please ensure that the power connection is correct. The power input terminal is located at the bottom of the controller, and the wiring definition is as follows:
*   Upper terminal: 0V (-) Negative
*   Lower terminal: 24V (+) Positive

To ensure the safety and stable operation of the equipment, please strictly abide by the above wiring specifications. For network communication, please use a standard RJ-45 network cable to connect to an Ethernet switch or computer.

### Core Specifications

---

The gStack-RIO controller core is equipped with an NI sbRIO-9607 embedded single-board computer, featuring a high-performance processor and programmable FPGA, suitable for real-time control and monitoring applications.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p8_00.png" alt="Controller Specs" width="60%" />
</div>

Detailed specifications are as follows:
*   Processor: 667MHz Dual core CPU
*   FPGA: Zynq-7020
*   Memory: 512MB DRAM & Flash
*   Interfaces: Ethernet, USB, CAN, RS-232
*   Development Environment: LabVIEW PC/RT programmable
*   Software Support: gStack Manager, gStack driver

### Software Architecture

---

The system software architecture of gStack-RIO is shown in the figure below. Users can develop applications in the LabVIEW environment through the PC or Real-Time (RT) driver API provided by gStack-RIO.

:::caution
The underlying system of gStack-RIO will automatically load a pre-compiled FPGA bitfile to ensure the stability and compatibility of the hardware operation, so users do not need to and cannot modify the underlying FPGA functions themselves.
:::

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p8_00.png" alt="Software Architecture" width="60%" />
</div>
