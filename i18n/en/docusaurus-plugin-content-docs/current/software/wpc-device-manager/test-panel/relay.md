---
sidebar_position: 15
sidebar_label: 'Relay'
---

# Relay

Relay panel provides users with the ability to control the relay switch status on the device, and set the power-up initial state.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/relay.png" alt="Relay Test Panel" width="60%" />
</div>

## Supported Products and Ports

| Product Name | Port |
| :--- | :--- |
| [`Ethan-L`](../../../daq/ethan/products/ethan-l.md) | 0 |

## Operation

| Button | Function Description |
| :--- | :--- |
| **Start** | Enable relay control and real-time status feedback. |
| **Stop** | Stop control. |
| **Power-Up State** | Set the default state when the device powers up and restarts. |

## Power-Up State

Click the **Power-Up State** button to enter the detailed setting page:

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/relay-power-state.png" alt="Relay Power-Up State" width="60%" />
</div>

In this page, you can specify whether each relay channel should remain **ON** or **OFF** at the moment the device powers on. Please save after setting, and this setting will be automatically applied when the device restarts next time.
