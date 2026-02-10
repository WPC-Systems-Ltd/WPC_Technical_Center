---
sidebar_position: 4
sidebar_label: 'Counter'
---

# Counter

Counter panel provides users with pulse signal counting and frequency measurement. You can set the trigger edge and frequency measurement time interval to adapt to different signal characteristics.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/counter.png" alt="Counter Test Panel" width="60%" />
</div>

## Parameter Setting and Operation

Before using the counter function, please confirm your device channel settings and signal source.

:::caution
Note: Counter function and PWM function share hardware resources, so they cannot be enabled on the same channel at the same time.
:::

### Parameter Description

The following parameters can be adjusted in the interface:

| Parameter | Description |
| :--- | :--- |
| **Counter channel** | Select the counter channel to operate (e.g., 0 or 1). |
| **Active Edge** | Set the signal edge that triggers counting:<br/>- **Rising**: Rising edge trigger<br/>- **Falling**: Falling edge trigger |
| **Frequency Window (ms)** | Set the time sampling interval (milliseconds) for frequency measurement. The longer the interval, the higher the frequency resolution, but the slower the update speed. |

### Control Buttons

Operate the buttons below to control the counting function:

| Button | Function |
| :--- | :--- |
| **Start** | Start counting and frequency measurement. |
| **Stop** | Stop counting and frequency measurement. |
| **Reset** | Reset current count value to zero. |

### Value Display

After starting, the panel will display the following information in real-time:

- **Current Count**: The current cumulative count value.
- **Current Frequency**: The current signal frequency (Hz).
