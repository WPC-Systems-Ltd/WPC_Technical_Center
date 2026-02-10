---
sidebar_position: 2
sidebar_label: 'AO'
---

# AO

AO (Analog Output) panel provides users with voltage or current analog signal output control. Through this interface, you can manually set the output value of each channel, or update multiple channels synchronously.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ao.png" alt="AO Test Panel" width="60%" />
</div>

## Supported Products

This function only supports devices equipped with Analog Output (AO) function. Please confirm your device model and supported output range:

| Product Name | Output Specification |
| :--- | :--- |
| [`Ethan-O`](../../../daq/ethan/products/ethan-o.md) | 8-channel Voltage Output (Range: `+/-10V`) |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 8-channel Voltage Output (Range: `+/-5V`) |

## Operation Instructions

### 1. Single Channel Value Setting

Directly adjust the value input box or slider of each Channel in the interface to set the target output voltage of that channel.

- **Update**: After entering the value, press the `Update` button next to the channel, and the device will output the set voltage value immediately.

### 2. Multi-channel Synchronous Setting (Set all to)

If you need to set all channels to the same value, please use the **Set all to** function above:
1. Enter the target voltage value in the `Set all to` input box.
2. Press the `Set all to` button, and the values of all channels will be updated simultaneously.

### 3. Start and Stop Output

Use the control buttons below to start or stop the signal output function:

| Button | Function |
| :--- | :--- |
| **Start** | Start AO function. The device will start outputting signals according to the set values. |
| **Stop** | Stop AO function. After stopping, the device will maintain the last output voltage value or return to zero (depending on device hardware settings). |
