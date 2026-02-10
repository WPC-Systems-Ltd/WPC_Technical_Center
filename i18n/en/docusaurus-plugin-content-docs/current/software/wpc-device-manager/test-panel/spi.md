---
sidebar_position: 16
sidebar_label: 'SPI'
---

# SPI

SPI (Serial Peripheral Interface) panel provides users with SPI serial communication testing. You can set the SPI mode and transmission rate to perform full-duplex communication with peripheral devices.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/spi.png" alt="SPI Test Panel" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with SPI interface. Please confirm the corresponding Port number according to your device model:

| Product Name | Port |
| :--- | :--- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 2 |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md) | 2 |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md) | 1~2 |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 2 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 2 |

## Parameter Settings

### SPI Mode

Supports four standard SPI modes, determined by Clock Polarity (CPOL) and Clock Phase (CPHA):

| Mode | Clock Polarity (CPOL) | Clock Phase (CPHA) |
| :--- | :--- | :--- |
| 0 | 0 (Idle Low) | 0 (Leading Edge) |
| 1 | 0 (Idle Low) | 1 (Trailing Edge) |
| 2 | 1 (Idle High) | 0 (Leading Edge) |
| 3 | 1 (Idle High) | 1 (Trailing Edge) |

## Operation Instructions

| Button/Parameter | Description |
| :--- | :--- |
| **SPI Rate** | Set SPI clock rate (Max 1 MHz). |
| **CS Pin** | Select Chip Select pin, specific definition depends on product specifications. |
| **Bytes to Read** | Set the length of data to read (Byte). |
| **Write** | Send data to SPI device (Write only). |
| **Read** | Receive data from SPI device (Read only). |
| **Write+Read** | Full-duplex operation: Read returned data while writing data. |
