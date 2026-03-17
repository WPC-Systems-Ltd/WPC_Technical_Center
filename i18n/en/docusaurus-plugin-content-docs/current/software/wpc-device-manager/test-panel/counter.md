---
sidebar_position: 4
sidebar_label: 'Counter'
---

# Counter

The Counter panel allows users to perform pulse signal counting and frequency measurement. You can set the trigger edge and the time interval for frequency measurement to adapt to different signal characteristics.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_counter.png" alt="WDM_testPanel_counter" width="60%" />
</div>

## Parameter Settings and Operation

Before using the counter function, please first confirm your device channel settings and signal source.

:::caution
Please note: The Counter function shares hardware resources with the PWM function, so they cannot be enabled on the same channel simultaneously.
:::

### Parameter Description

The following parameters can be adjusted in the interface:

| Parameter                      | Description                                                                                 |
| :------------------------ | :----------------------------------------------------------------------------------- |
| **Counter channel**       | Select the counter channel to operate (e.g., 0 or 1).                                              |
| **Active Edge**           | Set the signal edge for triggering counts:<br/>- **Rising**: Trigger on rising edge<br/>- **Falling**: Trigger on falling edge  |
| **Frequency Window (ms)** | Set the time sampling interval (milliseconds) for frequency measurement. The longer the interval, the higher the frequency resolution, but the slower the update speed.        |

### Control Buttons

Operate the buttons below to control the counting function:

| Button      | Function                                  |
| :-------- | :------------------------------------ |
| **Start** | Start pulse counting and frequency measurement.              |
| **Stop**  | Stop pulse counting and frequency measurement.                  |
| **Reset** | Reset the current counter value (**Current Count**) to zero. |

### Value Display

After startup, the panel will display the following information in real-time:

- **Current Count**: The current cumulative count value.
- **Current Frequency**: The current signal frequency (Hz).
