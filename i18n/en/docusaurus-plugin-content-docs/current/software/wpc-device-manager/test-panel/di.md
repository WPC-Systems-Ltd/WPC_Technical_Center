---
sidebar_position: 5
sidebar_label: 'DI'
---

# DI

The DI (Digital Input) panel allows users to read the status of digital input signals. Through this interface, you can monitor the digital signal changes of each port in real-time to confirm the input status of external devices.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_di.png" alt="WDM_testPanel_di" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with Digital Input (DI). Please confirm the corresponding port (Port) number according to your device model:

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

Use the control buttons below to start or stop the signal reading function:

| Button      | Function                                              |
| :-------- | :------------------------------------------------ |
| **Start** | Start reading DI values. The lights on the interface will reflect the input status in real-time. |
| **Stop**  | Stop reading DI values.                                |
