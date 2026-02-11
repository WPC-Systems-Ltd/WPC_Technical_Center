---
sidebar_position: 20
sidebar_label: 'UART'
---

# UART

UART (Universal Asynchronous Receiver/Transmitter) panel provides users with asynchronous serial communication testing. You can set baud rate, parity check, and other parameters to perform data transmission and reception.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/uart.png" alt="UART Test Panel" width="60%" />
</div>

## Supported Products and Ports

This function supports devices equipped with UART interface. Please confirm the corresponding Port number according to your device model:

| Product Name | Port |
| :--- | :--- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 1~2 |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 1~2 |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md) | 1~2 |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md) | 1~2 |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 1~2 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 1~2 |

## Parameter Settings

Before opening the port, please set the communication protocol parameters:

| Parameter | Description |
| :--- | :--- |
| **Baud Rate** | Transmission rate (bits per second), e.g., 9600, 115200. |
| **Data Bit** | Data bit length, usually 8 bits. |
| **Parity** | Parity check bit (None, Odd, Even), used for error detection. |
| **Stop Bit** | Stop bit length (1, 1.5, 2), used to indicate the end of data frame. |

## Operation Instructions

| Button | Function |
| :--- | :--- |
| **Open Port** | Open UART port according to set parameters. |
| **Close Port** | Close UART port. |
| **Write** | Send the string in the input box out. |
| **Read** | Read data in the receive buffer. |
| **Query** | Query mode: Automatically wait and read returned data after sending command. |
| **Bytes to Read** | Specify the number of bytes to read in read mode. |
| **Read Delay** | Delay wait time before reading (milliseconds). |
