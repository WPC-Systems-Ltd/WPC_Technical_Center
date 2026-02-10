---
sidebar_position: 3
sidebar_label: 'RMC Breakout'
description: WPC sbRIO RMC Breakout
---

# WPC sbRIO RMC Breakout

WPC's RMC (RIO Mezzanine Card) breakout board designed for the NI sbRIO series helps users develop FPGA I/O more conveniently.

---

## 1. Introduction

sbRIO is the lowest-priced Re-configurable I/O (RIO) device officially provided by NI. It has 100% LabVIEW support and can be fully developed using LabVIEW. Despite its affordable price, it does not sacrifice reliability and works stably within the temperature range of -40°C to 85°C. Its unique Micro-controller + FPGA architecture can effectively solve most embedded application problems. All sbRIO external communication serves are based on Ethernet interface, providing a reliable connection method.

### 1.1 RIO Architecture
The RIO architecture mainly consists of a microcontroller and an FPGA chip, connected using a high-speed PCI bus.
*   Microcontroller: Development language can use LabVIEW Real-time module or C, capable of processing loop speeds from millisecond (ms) to hundreds of micro-seconds (us).
*   FPGA Chip: Development language can use LabVIEW FPGA module or VHDL, capable of processing loop speeds from micro-second (us) to nano-second (ns).

This architecture allows RIO to adapt flexibly to different application scenarios and meet various speed requirements.

### 1.2 RMC Connector Difficulties
The connector uses BGA packaging, making assembly and repair relatively difficult. Due to low quantity, purchasing is also relatively not easy. High-speed FPGA I/O circuit boards require special design. In the manufacturing process, stencils, soldering temperature profiles, and flux all require additional control. If manufacturing conditions are not well controlled, yield reduction may occur during mass production.

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_3_X62.png" alt="RMC Connector" width="60%" />
</div>

---

## 2. RMC Breakout Series

WPC provides various RMC Breakout boards to solve the above connection difficulties, facilitating users to access 96-pin 3.3V FPGA DIO.

### 2.1 RMC-BK (Supports UNO Case)
Suitable for the entire sbRIO series. Divides 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Directly connected to FPGA chip, no isolation
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_3_X63.png" alt="RMC-BK" width="60%" />
</div>

### 2.2 RMC-BK-SERIAL (Does Not Support Case)
Suitable for the entire sbRIO series. Divides 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Directly connected to FPGA chip, no isolation
*   **Support RS-232 / CAN breakout**
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_5_X76.jpg" alt="RMC-BK-SERIAL" width="60%" />
</div>

### 2.3 RMC-BK-ETH (Does Not Support Case)
Suitable for the entire sbRIO series. Divides 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Directly connected to FPGA chip, no isolation
*   **Support 2nd Ethernet breakout**
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_6_X81.png" alt="RMC-BK-ETH" width="60%" />
</div>

---

## 3. Connector Pinout

### 3.1 IDC-50P Definition
This interface brings out FPGA signals to an IDC 50-pin header connector.

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_7_X88.png" alt="IDC-50P Pinout" width="60%" />
</div>

Using the GECO driver does not require direct control of these pins; this definition is only needed when customizing the FPGA.

### 3.2 DSUB-37P Definition

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_8_X95.png" alt="DSUB-37P" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_9_X102.png" alt="DSUB-37P Pinout" width="60%" />
</div>
