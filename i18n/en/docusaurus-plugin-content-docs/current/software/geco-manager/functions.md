---
title: General Functions
sidebar_label: General Functions
sidebar_position: 3
description: "GECO Manager general functions: Refresh, Pinout view, Reboot, Change Personality"
---

# General Functions

## Refresh

Click the **"Refresh"** button to re-read and update WPC GECO device information.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page13_X140.png" alt="Refresh" width="60%" />
</div>


## Pinout

Click the **"Pinout"** button to display the pinout diagram. The window size can be adjusted based on the user's requirements.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_pinout.png" alt="geco_manager_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_pinout1.png" alt="geco_manager_pinout1" width="60%" />
</div>

## Reboot

To reboot the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_page13_X133.png" alt="Reboot" width="60%" />
</div>

## Change Personality

Click the **"Change"** button to change the FPGA Personality of the GECO.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_change.png" alt="geco_manager_change" width="60%" />
</div>

### Personality Comparison Table

The table below lists the module configurations for each slot (C1 - C4) corresponding to different personalities:

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

> **Note**: HX represents the Motion axis card.
