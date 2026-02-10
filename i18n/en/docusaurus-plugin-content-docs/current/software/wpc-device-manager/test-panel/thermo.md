---
sidebar_position: 19
sidebar_label: 'Thermo'
---

# Thermo

Thermo panel is designed for temperature measurement, supporting Thermocouple and RTD sensors. Provides multiple sensor type selections and signal filtering functions.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/thermo.png" alt="Thermo Test Panel" width="60%" />
</div>

## Supported Products and Ports

Please confirm the port setting according to your sensor type and device model:

### 1. Thermocouple

| Product Name | Port |
| :--- | :--- |
| [`Ethan-T`](../../../daq/ethan/products/ethan-t.md) | 1 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 1 |

### 2. RTD

| Product Name | Port |
| :--- | :--- |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 1 |

## Parameter Settings

| Parameter | Description |
| :--- | :--- |
| **Type** | Select sensor type (e.g., B, E, J, K, N, R, S, T type Thermocouple). |
| **Oversampling** | Oversampling setting (2, 4, 8, 16, 32).<br/>Increase sampling times and take average to reduce noise but will reduce update rate. |
| **Noise Rejection** | Power frequency noise rejection setting (60Hz or 50Hz), used to filter out mains interference. |

## Operation Instructions

| Button | Function |
| :--- | :--- |
| **Start** | Start reading temperature values. |
| **Stop** | Stop reading. |
