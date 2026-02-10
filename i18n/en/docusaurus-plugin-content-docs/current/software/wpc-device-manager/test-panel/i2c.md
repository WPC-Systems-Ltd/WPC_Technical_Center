---
sidebar_position: 10
sidebar_label: 'I2C'
---

# I2C

I2C (Inter-Integrated Circuit) panel provides users with I2C communication protocol testing. You can set the clock rate to read, write, and query Slave devices.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/i2c.png" alt="I2C Test Panel" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with I2C interface. Please confirm the corresponding Port number according to your device model:

| Product Name | Port |
| :--- | :--- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 1~2 |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 1~2 |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md) | 1~2 |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md) | 1~2 |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 1~2 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 1~2 |

## Parameter Settings

### I2C Clock Rate

Supports four standard transmission rates, please choose according to your hardware requirements:

1.  **Standard**: 100 kbit/s
2.  **Fast**: 400 kbit/s
3.  **Fast Plus**: 1 Mbit/s
4.  **High Speed**: 3.4 Mbit/s

## Operation Instructions

Operate the buttons below to execute specific I2C commands:

| Button | Function |
| :--- | :--- |
| **Write Address** | Set the I2C Slave Address. |
| **Write** | Write data to the slave device at the specified address. |
| **Read Address** | Set the slave address to read from. |
| **Read** | Read data from the slave device. |
| **Query** | Perform a compound operation: Write command first, then read response data immediately (Repeated Start). |
| **Bytes to Read** | Specify the length of data to read (Byte). |
| **Read Delay** | Set the wait time (ms) after sending the read command, i.e., the timing interval. |
