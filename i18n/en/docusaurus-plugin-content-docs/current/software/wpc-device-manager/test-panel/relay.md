---
sidebar_position: 15
sidebar_label: 'Relay'
---

# Relay

The Relay panel allows users to control the switch status of relays on the device and set the initial power-up state.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_relay.png" alt="WDM_testPanel_relay" width="60%" />
</div>

## Supported Products and Ports

| Product Name                                            | Port |
| :-------------------------------------------------- | :------------ |
| [`Ethan-L`](../../../daq/ethan/products/ethan-l.md) | 0             |

## Function Operation

| Button               | Function Description                       |
| :----------------- | :----------------------------- |
| **Start**          | Enable relay control and real-time status feedback. |
| **Stop**           | Stop control.                     |
| **Power-Up State** | Set the default status when the device powers up or reboots. |

## Power-Up State Settings

Click the **Power-Up State** button to enter the detailed setting page:

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_relay_powe_state.png" alt="WDM_testPanel_relay_powe_state" width="60%" />
</div>

On this page, you can specify whether each relay channel should remain **ON** or **OFF** at the moment the device is powered on (Power On). Please save after settings are complete, and this setting will be automatically applied the next time the device reboots.
