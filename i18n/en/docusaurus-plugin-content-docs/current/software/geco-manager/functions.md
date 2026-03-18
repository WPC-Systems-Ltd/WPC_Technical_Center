---
title: General Functions
sidebar_label: General Functions
sidebar_position: 3
description: "GECO Manager general functions: Refresh, Pinout view, Reboot, and Changing Personality"
---

# General Functions

## Refresh

Click the **"Refresh"** button to re-read and update the WPC GECO device information.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_refresh.png').default} alt="Refresh Device Information" width="60%" />
</div>

## Pinout

Click the **"Pinout"** button to display the pinout diagram. The window size can be adjusted as needed.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_pinout.png').default} alt="GECO Manager Pinout View 1" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_pinout1.png').default} alt="GECO Manager Pinout View 2" width="60%" />
</div>

## Reboot

If you need to reboot the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_reboot.png').default} alt="Reboot Device" width="60%" />
</div>

## Change Personality

Click the **"Change"** button to modify the FPGA Personality of the GECO.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_change.png').default} alt="Change FPGA Personality" width="60%" />
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

:::note
**HX** represents a Motion axis card.
:::
