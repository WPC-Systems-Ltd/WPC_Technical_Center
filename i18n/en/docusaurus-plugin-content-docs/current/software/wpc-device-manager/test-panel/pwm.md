---
sidebar_position: 14
sidebar_label: 'PWM'
---

# PWM

PWM (Pulse Width Modulation) panel provides users with the ability to generate pulse width modulation signals. You can control the frequency and duty cycle of digital signals, suitable for motor control, LED dimming, and other applications.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/pwm.png" alt="PWM Test Panel" width="60%" />
</div>

## Supported Products and Channels

This function supports devices equipped with PWM output functionality. Please confirm the corresponding Channel number according to your device model:

| Product Name | Channel |
| :--- | :--- |
| [`Ethan-D`](../../../daq/ethan/products/ethan-d.md) | 0~1 |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 0~1 |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md) | 0~1 |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md) | 0~1 |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md) | 0~1 |
| [`USB-DAQ-F1-DSNK`](../../../daq/usbdaq/products/product-USB-DAQ-D-SNK.md) | 0~1 |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md) | 0~1 |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md) | 0~1 |

:::caution
Note: PWM function and Counter function share hardware resources, so they cannot be enabled on the same channel at the same time.
:::

## Parameter Setting and Operation

Set the frequency and duty cycle of the PWM output, and control the output via the buttons below:

| Parameter/Button | Description |
| :--- | :--- |
| **Frequency (Hz)** | Set the frequency of the PWM signal (Hz), i.e., the number of signal switches per second. |
| **Duty Cycle (%)** | Set the duty cycle (%), i.e., the proportion of time the signal is at high potential (On) within a complete cycle. |
| **Start** | Start generating and outputting PWM signal. |
| **Stop** | Stop outputting PWM signal. |
