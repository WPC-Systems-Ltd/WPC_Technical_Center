---
sidebar_position: 19
sidebar_label: 'Thermo'
---

# Thermo

The Thermo panel is specifically designed for temperature measurement, supporting Thermocouple and RTD (Resistance Temperature Detector) sensors. It provides various sensor type selections and signal filtering functions.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_thermo.png" alt="WDM_testPanel_thermo" width="60%" />
</div>

## Supported Products and Ports

Please confirm the port settings according to your sensor type and device model:

### 1. Thermocouple

| Product Name                                                               | Port |
| :------------------------------------------------------------------------- | :----- |
| [`Ethan-T`](../../../daq/ethan/products/ethan-t.md)                        | 1      |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)  | 1      |

### 2. RTD (Resistance Temperature Detector)

| Product Name                                                               | Port |
| :------------------------------------------------------------------------- | :----- |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)  | 1      |

## Parameter Settings

| Parameter           | Description                                                  |
| :------------------ | :----------------------------------------------------------- |
| **Type**            | Select sensor type (e.g., B, E, J, K, N, R, S, T type thermocouples). |
| **Oversampling**    | Oversampling setting (2, 4, 8, 16, 32).<br/>Increasing the number of samples to take an average can reduce noise but will decrease the update rate. |
| **Noise Rejection** | Power frequency noise rejection setting (60Hz or 50Hz), used to filter out mains interference. |

## Operation Description

| Button      | Function               |
| :-------- | :----------------- |
| **Start** | Start reading temperature values. |
| **Stop**  | Stop reading.         |
