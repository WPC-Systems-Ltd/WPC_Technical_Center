---
sidebar_position: 1
sidebar_label: 'AI'
---

# AI

AI (Analog Input) panel provides users with voltage or current analog signal measurement. Through this interface, you can set acquisition channels, sampling mode, and sampling rate, and view signal waveforms in real-time.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ai.png" alt="AI Test Panel" width="80%" />
</div>

## Operation Flow

Please follow the steps below to set up AI signal measurement:

### 1. Port Selection

First confirm your device model, and select the corresponding Port and Channel.

| Product Name | Port | Measurement Type |
| :--- | :--- | :--- |
| [`Ethan-A`](../../../daq/ethan/products/ethan-a.md) | 0 | Voltage |
| [`Ethan-A2`](../../../daq/ethan/products/ethan-a2.md) | 0 | Voltage |
| [`Ethan-I`](../../../daq/ethan/products/ethan-i.md) | 0 | Current |
| [`Ethan-IA`](../../../daq/ethan/products/ethan-ia.md) | 0, 1 | 0: Current<br/>1: Voltage |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 0 | Voltage |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)| 0 | Voltage |
| [`Wifi-DAQ-E3-A`](../../../daq/wifidaq/product-general.md) | 0 | Voltage |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | 0 | Voltage |
| [`Wifi-DAQ-F4-A`](../../../daq/wifidaq/product-general.md) | 0 | Voltage |

### 2. Channel Selection

Select the channel range to enable in the **Channel Selection** drop-down menu.

| Option | Description |
| :--- | :--- |
| `port0/ai 0` | Enable channel 0 only |
| `port0/ai 0:1` | Enable channels 0 to 1 (Total 2 channels) |
| `port0/ai 0:3` | Enable channels 0 to 3 (Total 4 channels) |
| `port0/ai 0:7` | Enable channels 0 to 7 (Total 8 channels) |

### 3. Mode Setting

Select the appropriate acquisition mode according to your measurement needs:

- **On Demand**: Software sends a command once, and the device returns a single value at that moment. Suitable for low-speed monitoring that does not require continuous waveforms.
- **N Sample**: Set a fixed number of sampling points, and stop immediately after acquisition is complete.
- **Continuous**: Continuously acquire data until the Stop button is pressed. Suitable for long-term signal recording or oscilloscope monitoring.

### 4. Sampling Rate Setting

Set the number of points acquired per second (Samples per second). The maximum sampling rates supported by different devices are as follows:

| Product Name | Sampling Rate Description |
| :--- | :--- |
| [`Ethan-A`](../../../daq/ethan/products/ethan-a.md) | 20 kS/s (8 channels synchronous) |
| [`Ethan-A2`](../../../daq/ethan/products/ethan-a2.md) | 10 kS/s (8 channels synchronous) |
| [`Ethan-I`](../../../daq/ethan/products/ethan-i.md) | Supports `On Demand` mode only |
| [`Ethan-IA`](../../../daq/ethan/products/ethan-ia.md) | Supports `On Demand` mode only |
| [`Wifi-DAQ-E3-A`](../../../daq/wifidaq/product-general.md) | 10 kS/s (8 channels synchronous) |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | 10 kS/s (8 channels synchronous) |
| [Other USB-DAQ](../../../daq/usbdaq/sampling_rate.md) | Please refer to the product specification |

### 5. Other Parameter Settings

Adjust the following advanced parameters as needed:

- **Number of Sample**: The number of points read from the buffer each time (affects chart update frequency).
- **Timeout (ms)**: Timeout for reading data. If no data is read within this time, an error is returned.
- **Ignore Timeout Error**: If checked, timeout errors will be ignored and the program will continue to execute.
- **Trigger**: Set trigger condition (Select `None` if there are no special requirements).
  - `RTC-Absolute`: Absolute time trigger.
  - `RTC-Relative`: Relative time trigger.

### 6. Start Measurement

After setting, operate the buttons below to control measurement:

| Button | Function |
| :--- | :--- |
| Start | Start signal acquisition |
| Stop | Stop signal acquisition |
