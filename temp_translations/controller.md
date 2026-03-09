---
sidebar_position: 2
sidebar_label: 'Controller Specifications'
description: GECO Series Controller Model Comparison and Detailed Specifications (UNO / UNO DB9 / UNO-27)
---

# GECO Controller Series

GECO offers multiple controller versions to meet the needs of different application scenarios.

---

## 1. GECO UNO Standard Controller

GECO UNO is the standard controller launched by WPC, featuring the smallest size and the most economical price.
*   Core version: Optional sbRIO-9606 or sbRIO-9607.
*   Interfaces: RS-232 and CAN connectors are not provided.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_5_X103.jpg" alt="GECO UNO" width="60%" />
</div>
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_5_X106.jpg" alt="GECO UNO" width="60%" />
</div>

### Core Specifications: NI sbRIO-9606
sbRIO-9606 is an embedded controller that integrates a real-time processor, a reconfigurable FPGA, and I/O capabilities onto a single PCB.
*   CPU: 400 MHz
*   DRAM: 256 MB
*   Storage: 512 MB
*   FPGA: Spartan-6 LX45
*   RMC: Built-in RIO Mezzanine Card connector interfacing directly to the processor and digital I/O FPGA lines (96 3.3V DIO channels), providing high-speed bandwidth.
*   Interfaces: Ethernet, CAN, USB, Serial Ports.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_6_X113.png" alt="sbRIO-9606" width="60%" />
</div>

---

## 2. GECO UNO DB9 Controller

GECO UNO DB9 has a wider body width.
*   Core version: Optional sbRIO-9606 or sbRIO-9607.
*   Interfaces: Adds RS-232 and CAN connectors (DB9 interface), providing more connection options.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_7_X120.jpg" alt="GECO UNO DB9" width="60%" />
</div>

### DB9 Connector Pin Definitions

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_7_X119.png" alt="DB9 Pinout" width="60%" />
</div>

### Core Specifications: NI sbRIO-9607
sbRIO-9607 combines a powerful NI Linux Real-Time processor.
*   CPU: 667 MHz 雙核心
*   DRAM: 512 MB
*   Storage: 512 MB
*   FPGA: Zynq-7020
*   RMC: Supports RMC connector, directly connecting the processor and digital I/O FPGA lines.
*   Interfaces: Gigabit Ethernet, CAN, Serial, USB, 96 3.3V DIO channels.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_8_X128.png" alt="sbRIO-9607" width="60%" />
</div>

---

## 3. GECO UNO-27 Controller

GECO UNO-27 is a high-end controller launched by WPC, with the widest device width.
*   Core version: Equipped with sbRIO-9627.
*   Features: Native AIO (Analog Input/Output) functionality.
*   Interfaces: Equipped with both RS-232 and CAN connectors (DB9) simultaneously.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_9_X136.jpg" alt="GECO UNO-27" width="60%" />
</div>

### Core Specifications: NI sbRIO-9627
sbRIO-9627 integrates an NI Linux Real-Time processor, FPGA, and I/O.
*   CPU: 667 MHz
*   DRAM: 512 MB
*   Storage: 512 MB
*   FPGA: Zynq-7020
*   RMC: Supports RMC connector.
*   Built-in I/O:
    *   16 16-bit analog inputs (AI)
    *   4 16-bit analog outputs (AO)
    *   100 digital channels (DIO)
*   Interfaces: Gigabit Ethernet, CAN, USB, Serial, SDHC port.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_9_X137.png" alt="sbRIO-9627" width="60%" />
</div>
