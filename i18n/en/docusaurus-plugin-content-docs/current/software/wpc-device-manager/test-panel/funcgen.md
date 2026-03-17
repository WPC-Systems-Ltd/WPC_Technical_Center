---
sidebar_position: 9
sidebar_label: 'Function Generator'
---

# Function Generator

The Function Generator panel allows users to generate various standard waveform signals through analog output channels.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_function_gen.png" alt="WDM_testPanel_function_gen" width="60%" />
</div>

## Supported Products

This function requires a high-performance DAQ device equipped with Analog Output (AO):

| Product Name                                            | Description                           |
| :-------------------------------------------------- | :----------------------------- |
| [`Ethan-O`](../../../daq/ethan/products/ethan-o.md) | 8-channel (`+/-10V`) analog voltage output |

## Function Settings

### 1. Output Mode (Mode)

Select the waveform output behavior mode:

| Mode           | Description                                          |
| :------------- | :-------------------------------------------- |
| **N Sample**   | Finite point output. Automatically stops after generating the specified number of waveform points.    |
| **Continuous** | Continuous output. The waveform will continue to cycle through output until Stop is pressed. |

### 2. Waveform Type

The following standard waveforms are supported:

1.  **DC Voltage**: DC voltage output.
2.  **Rectangular**: Square wave.
3.  **Triangular**: Triangle wave.
4.  **Sine**: Sine wave.

### 3. Parameter Settings

Adjust the detailed parameters of the waveform. Please note that the output voltage must comply with the hardware specification limits (`+/-10V`).

| Parameter              | Description                                                                                                                                                                                                                            |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sampling Rate** | Set the sampling rate (maximum supported 10k S/s).                                                                                                                                                                                                 |
| **Frequency**     | Set the waveform frequency. Please follow the [Nyquist Theorem](https://www.ni.com/en/shop/data-acquisition/measurement-fundamentals/analog-fundamentals/acquiring-an-analog-signal--bandwidth--nyquist-sampling-theorem-.html?srsltid=AfmBOopdJ6kb6dv79V2sWONvyrQaWi3EFlfxDpCNI8cNKDntnCxG9_W1) to set an appropriate sampling rate to avoid distortion. |
| **Amplitude (V)** | Waveform amplitude (Peak value).                                                                                                                                                                                                             |
| **Offset (V)**    | DC offset.<br/>**Constraints**:<br/>• Offset + Amplitude ≤ +10V<br/>• Offset - Amplitude ≥ -10V                                                                                                                                   |

## Operation Description

| Button      | Function                     |
| :-------- | :----------------------- |
| **Start** | Start generating and outputting waveform signals. |
| **Stop**  | Stop output.               |
