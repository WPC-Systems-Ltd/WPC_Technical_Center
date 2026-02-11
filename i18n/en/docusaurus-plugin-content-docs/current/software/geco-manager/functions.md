---
title: Advanced Functions
sidebar_label: Advanced Functions
sidebar_position: 3
description: "GECO Manager advanced functions: Refresh, View Pinout, Reboot, Change Personality"
---

## Refresh

Click the **"Refresh"** button to reload product information.

## View Pinout

Click the **"Pinout"** button to display the pinout diagram. The window size can be adjusted according to user needs.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page11_X121.png" alt="Pinout Window" width="60%" />
</div>

## Reboot

Click the **"Reboot"** button to restart the product.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page12_X127.png" alt="Reboot" width="60%" />
</div>

## Change Personality

Click the **"Change"** button to change the FPGA Personality of GECO.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page13_X133.png" alt="Change Personality" width="60%" />
</div>

### Personality Table

The following table lists the module configuration for each slot (C1 - C4) corresponding to different Personalities:

| Personality | C1 | C2 | C3 | C4 |
| :--- | :--- | :--- | :--- | :--- |
| **Motion-4HX** | Motion | Motion | Motion | Motion |
| **Motion-2HX** | DIO | Motion | Motion | DIO |
| **Motion-1HX** | DIO | Motion | DIO | DIO |
| **Motion-2HX** | DIO  | Motion | Motion | Serial |
| **A2D** | Motion | AIO | DIO | DIO |
| **AIO** | AIO | AIO | AIO | AIO |
| **DIO** | DIO | DIO | DIO | DIO |
| **Switch** | Switch | Switch | Switch | Switch |
| **Thermo** | Thermo | Thermo | Thermo | Thermo |

> **Note**: HX represents Motion axis card.
