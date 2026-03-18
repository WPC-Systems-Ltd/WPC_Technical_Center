---
sidebar_position: 6
sidebar_label: 'DO'
---

# DO

The DO (Digital Output) panel allows users to control the status of digital output signals. Through this interface, you can manually toggle the high and low potential outputs of each channel and set the initial power-up state.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_do.png').default} alt="WDM_testPanel_do" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with Digital Output (DO). Please confirm the corresponding port (Port) number according to your device model:

| Product Name                                                                   | Port |
| :------------------------------------------------------------------------- | :----- |
| [`Ethan-D`](../../../daq/ethan/products/ethan-d.md)                        | 1      |
| [`Ethan-EX-D`](../../../daq/ethan/products/ethan-ex-d.md)                  | 2, 3   |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)      | 0~3    |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)    | 0~3    |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)      | 0~3    |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)        | 0~3    |
| [`USB-DAQ-F1-DSNK`](../../../daq/usbdaq/products/product-USB-DAQ-D-SNK.md) | 0~3    |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)      | 0~3    |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)      | 0~3    |

## Operation Description

You can click the switch icon on the screen to toggle the output status and use the buttons below for global control:

| Button               | Function                               |
| :----------------- | :--------------------------------- |
| **Start**          | Enable DO control function, allowing status changes. |
| **Stop**           | Disable DO control function.                 |
| **Power-Up state** | Open the "Power-Up State Settings" window.         |

### Power-Up State Settings

This function allows you to set the default initial state (High or Low) for each DO channel when the device powers up or reboots. This setting is written to the device's non-volatile memory.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_do_power_state.png').default} alt="WDM_testPanel_do_power_state" width="60%" />
</div>

1. Click the **Power-Up state** button to open the settings window.
2. Toggle the switches for each channel to your desired initial state.
3. Press the **Set** button to write the settings to the device.

| Button    | Function                                         |
| :------ | :------------------------------------------- |
| **Set** | Write the current switch configuration to the device as the power-up initial state. |
