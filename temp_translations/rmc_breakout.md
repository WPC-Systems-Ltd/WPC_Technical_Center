---
sidebar_position: 3
sidebar_label: 'RMC Breakout'
description: WPC sbRIO RMC Breakout
---

# WPC sbRIO RMC Breakout

WPC provides an RMC (RIO Mezzanine Card) breakout board designed for the NI sbRIO series to help users develop FPGA I/O more conveniently.

---

## 1. Introduction

sbRIO is the lowest-priced reconfigurable I/O (RIO) device officially provided by NI. It has 100% LabVIEW support and can be developed entirely using LabVIEW. Despite its affordable price, it does not sacrifice reliability and can operate stably within a temperature range of -40°C to 85°C. Its unique Micro-controller + FPGA architecture can effectively solve most embedded application problems. All sbRIO external communications are based on the Ethernet interface, providing a reliable connection method.

### 1.1 RIO Architecture
The RIO architecture mainly consists of a microcontroller and an FPGA chip, connected via a high-speed PCI bus.
*   Microcontroller: The development language can use the LabVIEW Real-Time module or C, capable of handling loop speeds from millisecond (ms) to hundreds of microseconds (us).
*   FPGA Chip: The development language can use the LabVIEW FPGA module or VHDL, capable of handling loop speeds from microseconds (us) to nanoseconds (ns).

This architecture allows RIO to adapt flexibly in different application scenarios and meet various speed requirements.

### 1.2 RMC Connector Challenges
The connector uses BGA packaging, making assembly and maintenance relatively difficult. Due to the small quantity typically needed, purchasing is also relatively not easy. High-speed FPGA I/O circuit boards require special design. During the manufacturing process, the stencil, soldering temperature profile, and flux require extra control. If manufacturing conditions are not well controlled, it may lead to reduced yield during mass production.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_3_X62.png" alt="RMC Connector" width="60%" />
</div>

---

## 2. RMC Breakout Series

WPC provides a variety of RMC Breakout boards to solve the aforementioned connection difficulties, making it easier for users to bring out and use the 96-pin 3.3V FPGA DIO.

### 2.1 RMC-BK (Supports UNO Enclosure)
Applicable to the entire sbRIO series. Divides the 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Can be directly connected to the FPGA chip, no isolation
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_3_X63.png" alt="RMC-BK" width="60%" />
</div>

### 2.2 RMC-BK-SERIAL (Does not support enclosure)
Applicable to the entire sbRIO series. Divides the 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Directly connected to the FPGA chip, no isolation
*   **Supports RS-232 / CAN breakout**
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_5_X76.jpg" alt="RMC-BK-SERIAL" width="60%" />
</div>

### 2.3 RMC-BK-ETH (Does not support enclosure)
Applicable to the entire sbRIO series. Divides the 96-pin 3.3V FPGA DIO into 4 slots.

*   Each slot has 24-pin DIO and supplies 5V power
*   Directly connected to the FPGA chip, no isolation
*   **Supports 2nd Ethernet breakout**
*   Built-in RTC battery

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_6_X81.png" alt="RMC-BK-ETH" width="60%" />
</div>

---

## 3. Connector Pinout

### 3.1 IDC-50P Definition
This interface brings out the FPGA signals to an IDC 50-pin header connector.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_7_X88.png" alt="IDC-50P Pinout" width="60%" />
</div>

Using the GECO driver does not require direct control of these pins. Reference to this definition is only needed when customizing the FPGA.

### 3.2 DSUB-37P Definition

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_8_X95.png" alt="DSUB-37P" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_page_9_X102.png" alt="DSUB-37P Pinout" width="60%" />
</div>
