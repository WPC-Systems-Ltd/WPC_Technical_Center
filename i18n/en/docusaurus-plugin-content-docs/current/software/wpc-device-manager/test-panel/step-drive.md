---
sidebar_position: 18
sidebar_label: 'Step Drive'
---

# Step Drive

**WPC-EDrive-ST** is a single-axis stepper motor integrated driver with a network interface. Through the Step Drive panel, you can set the driver current, resolution, perform motion tests, and vibration suppression functions.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/edrive-connect.png" alt="Step Drive Connect" width="60%" />
</div>

## Driver Setup

Set the stepper motor's Run Current, Hold Current, and Microstepping resolution.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/driver-setup.png" alt="Driver Setup" width="60%" />
</div>

### 1. Current Setting Description

This driver supports multi-stage current setting. Please choose the setting value closest to your motor's rated current.

| Factor | Current Range 1A (A) | Current Range 2A (A) | Current Range 3A (A) |
| :--- | :--- | :--- | :--- |
| **0** | 0.03125 | 0.0625 | 0.09375 |
| **1** | 0.0625 | 0.125 | 0.1875 |
| **⋮** | **⋮** | **⋮** | **⋮** |
| **20** | 0.65625 | 1.3125 | 1.96875 |
| **⋮** | **⋮** | **⋮** | **⋮** |
| **31** | **1.0** | **2.0** | **3.0** |

### 2. Resolution Setting Description

Select Steps per Revolution.

| Step/Revolution | Description |
| :--- | :--- |
| **200** | Full step (1.8°/step) |
| **400** | Half step |
| **⋮** | **⋮** |
| **12800** | High resolution microstepping |
| **51200** | Maximum resolution |

### 3. Motion Control Test

Provides basic jogging and positioning test functions.

| Button/Parameter | Description |
| :--- | :--- |
| **Servo on** | Enable motor excitation. |
| **⬅ Reverse** | Control motor to move in reverse direction. |
| **➡️ Forward** | Control motor to move in forward direction. |
| **Distance** | Distance per move (Step). |
| **Velocity** | Movement speed (Step/sec). |
| **Acceleration** | Acceleration (Step/sec²). |

### 4. Status

| Status Indication | Description |
| :--- | :--- |
| **Hit Rev Limit** | Reverse limit switch triggered. |
| **Hit Fw Limit** | Forward limit switch triggered. |
| **Pos Reached** | Target position reached. |
| **Vel Reached** | Set velocity reached. |
| **Stopped** | Motor is stopped. |
| **Over Torque** | Torque overload alarm. |
| **Driver Error** | Internal driver error. |
| **Cfg Reseted** | Parameters reset. |

## Anti-Vibration

Stepper motors are prone to resonance and vibration when running at low speeds. The "Low Speed Vibration Suppression" function can significantly improve smoothness.

### Step 1. Set Test Range

Set a safe round-trip movement interval.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/anti-vibration.png" alt="Set start and end position" width="60%" />
</div>

1. Press **Servo on** to excite.
2. Turn the motor to the end point, press **Set End Position**.
3. Turn the motor to the start point, press **Set Start Position**.

### Step 2. Adjust Anti-Vibration Parameters

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/anti-vibration2.png" alt="Tuning anti-vibration parameter" width="60%" />
</div>

1. Turn on **Enable** to activate anti-vibration function.
2. Press **Round Trip** to let the motor move back and forth automatically.
3. Gradually increase speed and observe if the motor starts to vibrate.
4. After finding the critical speed where vibration occurs, press **Set Threshold** to set this speed as the activation threshold for the suppression function.
5. After completion, observe if the operation becomes smooth.

## File Configuration

EDrive-ST supports configuration file export and import functions, facilitating quick copying of parameters to other machines or backup.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/file-configure.png" alt="File Configuration" width="60%" />
</div>
