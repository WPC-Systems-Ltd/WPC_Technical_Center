---
sidebar_position: 6
sidebar_label: 'DO'
---

# DO

DO (Digital Output) panel provides users with the ability to control the status of digital output signals. Through this interface, you can manually switch the high and low potential output of each channel and set the power-up initial state.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/do.png" alt="DO Test Panel" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with Digital Output (DO) functionality. Please confirm the corresponding Port number according to your device model:

| Product Name | Port |
| :--- | :--- |
| [`Ethan-D`](../../../daq/ethan/products/ethan-d.md) | 1 |
| [`Ethan-EX-D`](../../../daq/ethan/products/ethan-ex-d.md) | 2, 3 |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 0~3 |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 0~3 |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md) | 0~3 |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md) | 0~3 |
| [`USB-DAQ-F1-DSNK`](../../../daq/usbdaq/products/product-USB-DAQ-D-SNK.md) | 0~3 |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 0~3 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 0~3 |

## Operation Instructions

You can click the switch icon on the screen to switch the output status, and use the buttons below for global control:

| Button | Function |
| :--- | :--- |
| **Start** | Enable DO control function, allowing change of output status. |
| **Stop** | Stop DO control function. |
| **Power-Up state** | Open "Power-Up State Setting" window. |

### Power-Up State Setting

This function allows you to set the default initial state (High or Low) of each DO channel when the device powers up or restarts. This setting will be written to the device's non-volatile memory.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/do-power-state.png" alt="DO Power-Up State" width="60%" />
</div>

1. Click **Power-Up state** button to open the setting window.
2. Toggle the switch of each channel to your desired initial state.
3. Press **Set** button to write the setting to the device.

| Button | Function |
| :--- | :--- |
| **Set** | Write the current switch configuration to the device as the power-up initial state. |
