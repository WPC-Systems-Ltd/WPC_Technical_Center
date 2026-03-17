---
sidebar_position: 2
sidebar_label: 'AO'
---

# AO

The AO (Analog Output) panel allows users to perform analog signal output control for voltage or current. Through this interface, you can manually set the output values for each channel or update multiple channels simultaneously.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_ao.png" alt="WDM_testPanel_ao" width="60%" />
</div>

## Supported Products

This function only supports devices with Analog Output (AO) capability. Please confirm your device model and supported output range:

| Product Name                                                                | Output Specification Description                    |
| :---------------------------------------------------------------------- | :------------------------------ |
| [`Ethan-O`](../../../daq/ethan/products/ethan-o.md)                     | 8-channel voltage output (Range: `+/-10V`) |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 8-channel voltage output (Range: `+/-5V`)  |

## Operation Description

### 1. Single Channel Value Setting

Directly adjust the value input box or slider for each channel (Channel) in the interface to set the target output voltage for that channel.

- **Update**: After entering the value, press the `Update` button next to the channel, and the device will immediately output the set voltage value.

### 2. Multi-channel Synchronization Setting (Set all to)

If you need to set all channels to the same value, please use the **Set all to** function at the top:
1. Fill in the target voltage value in the `Set all to` input box.
2. Press the `Set all to` button, and the values for all channels will be updated simultaneously.

### 3. Start and Stop Output

Use the control buttons below to start or stop the signal output function:

| Button       | Function                                                                               |
| :--------- | :--------------------------------------------------------------------------------- |
| **Start**  | Start the AO function. The device will begin to output signals according to the set values.                                       |
| **Stop**   | Stop the AO function. After stopping, the device will maintain the last output voltage value or return to zero (depending on the device hardware settings). |
