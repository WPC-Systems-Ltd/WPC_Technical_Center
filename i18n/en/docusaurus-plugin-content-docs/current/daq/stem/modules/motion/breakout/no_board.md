---
title: No Breakout Board
sidebar_position: 1
description: If you do not intend to use the breakout board provided by WPC, you can also connect the signal line directly to the interface on the module.
---

## Interface Definition

**DIN 41612**: This is the main signal output interface. It is recommended to use the WPC original breakout board to ensure signal integrity.

:::warning
- Direct welding or connecting to the DIN 41612 interface is difficult and easy to cause damage. Unless necessary, it is strongly recommended to use a breakout board.
:::

## Appearance of Axis Card without Breakout Board

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_15_img_X168.png" alt="Motion Module Appearance" width="60%" />
</div>

*   Top Left **2 pin Euro Terminal**: External power supply 24VDC.
*   Top Right **IDC 50P**: Connect to GECO/STEM controller.
*   Bottom **DIN41612 48P**: Connect to general or specific breakout board.

## System Installation

:::warning
- During installation, the DIN rail clip will raise the body by about 7.4 mm.
- It is recommended to reserve about 82mm height above the axis card for SCSI cable bending.
:::
