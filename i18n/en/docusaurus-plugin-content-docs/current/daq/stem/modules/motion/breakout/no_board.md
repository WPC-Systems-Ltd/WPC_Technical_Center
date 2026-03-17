---
title: Without Breakout Board
sidebar_position: 1
description: If you do not plan to use the breakout boards provided by WPC, you can also directly connect wiring to the interfaces on the module.
---

## Interface Definition

**DIN 41612**: This is the main signal output interface. We recommend using an original WPC breakout board to ensure signal integrity.

:::warning
- Direct soldering or connection to the DIN 41612 interface is highly difficult and prone to damage. Unless necessary, it is strongly recommended to use a breakout board.
:::

## Appearance of Axis Card Without Breakout Board

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/motion_card.png" alt="Motion Module Appearance" width="60%" />
</div>

*   Top left **2-pin European-style terminal**: External power supply 24VDC.
*   Top right **IDC 50P**: Connect to GECO/STEM controller.
*   Bottom **DIN41612 48P**: Connect to general or specific breakout boards.

## System Installation

:::warning
- During installation, the DIN rail clip will raise the module by approximately 7.4 mm.
- A clearance of approximately 82mm is recommended above the axis card to allow for the bending of the SCSI cable.
:::
