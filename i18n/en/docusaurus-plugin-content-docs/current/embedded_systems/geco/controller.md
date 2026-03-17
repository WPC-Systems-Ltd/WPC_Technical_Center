---
sidebar_position: 2
sidebar_label: 'Controller Specifications'
description: GECO Series Controller model comparison and detailed specifications (UNO / UNO DB9 / UNO-27)
---

# GECO Controller Series

GECO controllers are primarily composed of NI sbRIO, featuring a built-in 32-bit microprocessor and FPGA chips, developed using the LabVIEW Real-Time module and LabVIEW FPGA module, respectively. They can be fully developed and deployed using LabVIEW via an Ethernet interface. They can be remote-controlled by a PC or run completely independently (stand-alone).

There are four slots on top for expanding with GECO modules. For example, a single controller can support up to 4 WPC motion control cards, controlling up to 16 axes simultaneously.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_controller_support.png" alt="geco_controller_support" width="60%" />
</div>

GECO controllers are products formed by the combination of **"Carrier Boards"** and **"Core Modules"**.

---

## 1. Carrier Board Options

GECO carrier boards provide three different physical interface designs to meet various application requirements.

### 1.1 GECO UNO Series (GECO UNO-06 / GECO UNO-07)

The GECO UNO series is the standard controller launched by WPC, featuring the smallest size and the most economical price. It has a streamlined interface without DB9 connectors.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_controller1.png" alt="geco_uno_controller1" width="60%" />
</div>

**GECO UNO Series Layout**
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_controller_layout.png" alt="geco_controller_layout" width="60%" />
</div>

:::info Tip
The core module can be freely paired with **NI sbRIO-9606** (forming GECO UNO-06) or **NI sbRIO-9607** (forming GECO UNO-07) based on performance requirements.
:::

### 1.2 GECO UNO DB9 Series (GECO UNO DB9-06 / GECO UNO DB9-07)

The GECO UNO DB9 series features a wider chassis, with RS-232 and CAN communication connectors (DB9 interface) added to the I/O interface compared to the GECO UNO series.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_db9_controller.png" alt="GECO UNO DB9" width="60%" />
</div>

**DB9 Connector Pin Definitions**
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_db9_controller_pin_assignment.png" alt="geco_uno_db9_controller_pin_assignment" width="60%" />
</div>

:::info Tip
The core module can also be freely paired with **NI sbRIO-9606** (forming GECO UNO DB9-06) or **NI sbRIO-9607** (forming GECO UNO DB9-07).
:::

### 1.3 GECO UNO-27 Controller

GECO UNO-27 is a high-end controller launched by WPC, featuring the widest chassis. It possesses native AIO (Analog Input/Output) functionality, along with RS-232 and CAN connectors (DB9 interface).

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_27_controller.png" alt="geco_uno_27_controller" width="60%" />
</div>

:::info Tip
This model has a fixed configuration, specifically equipped with the top-tier **NI sbRIO-9627** core module featuring built-in native AIO channels.
:::

---

## 2. Core Module Options

Based on computational power and built-in resource requirements, GECO offers the following three NI sbRIO core modules:

### 2.1 NI sbRIO-9606 (Base Model)

sbRIO-9606 is an embedded controller that integrates a real-time processor, reconfigurable FPGA, and I/O functionality on a single PCB.
*   **CPU**: 400 MHz
*   **DRAM**: 256 MB
*   **Storage**: 512 MB
*   **FPGA**: Spartan-6 LX45
*   **RMC**: Features a built-in RIO Mezzanine Card connector, directly connecting the processor and digital I/O FPGA channels (96 3.3V DIO) for high speed and bandwidth.
*   **Interfaces**: Ethernet, CAN, USB, Serial Ports.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/NI_sbRIO_9606.png" alt="NI_sbRIO_9606" width="60%" />
</div>

### 2.2 NI sbRIO-9607 (Advanced Dual Core)

sbRIO-9607 combines a powerful NI Linux Real-Time processor.
*   **CPU**: 667 MHz Dual Core
*   **DRAM**: 512 MB
*   **Storage**: 512 MB
*   **FPGA**: Zynq-7020
*   **RMC**: Supports RMC connector, directly connecting the processor and digital I/O FPGA channels.
*   **Interfaces**: Gigabit Ethernet, CAN, Serial, USB, 96 3.3V DIO channels.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/NI_sbRIO_9606.png" alt="sbRIO-9607" width="60%" />
</div>

### 2.3 NI sbRIO-9627 (Flagship Model, for UNO-27 only)

sbRIO-9627 integrates an NI Linux Real-Time processor, FPGA, and high-density I/O.
*   **CPU**: 667 MHz
*   **DRAM**: 512 MB
*   **Storage**: 512 MB
*   **FPGA**: Zynq-7020
*   **RMC**: Supports RMC connector.
*   **Built-in I/O**:
    *   16 16-bit Analog Inputs (AI)
    *   4 16-bit Analog Outputs (AO)
    *   100 Digital Channels (DIO)
*   **Interfaces**: Gigabit Ethernet, CAN, USB, Serial, SDHC ports.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/NI_sbRIO_9627.png" alt="NI_sbRIO_9627" width="60%" />
</div>
