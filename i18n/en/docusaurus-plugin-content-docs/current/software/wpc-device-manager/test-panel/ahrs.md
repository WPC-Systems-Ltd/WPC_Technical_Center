---
sidebar_position: 3
sidebar_label: 'AHRS'
---

# AHRS

AHRS (Attitude and Heading Reference System) panel provides users with the ability to read attitude and heading reference system data. Through the built-in accelerometer, gyroscope, and magnetometer, it calculates and displays the 3D attitude of the device in real-time.

## Supported Products

This feature supports devices equipped with AHRS modules:

| Product Name | Description |
| :--- | :--- |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | Built-in IMU Inertial Measurement Unit |
| [`Wifi-DAQ-E3-AO`](../../../daq/wifidaq/product-general.md) | Built-in IMU Inertial Measurement Unit |

## Data Display (Data & 3D Model)

The panel is divided into numerical data display and 3D model attitude display:

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ahrs.png" alt="AHRS Data" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ahrs-3dmodel.png" alt="AHRS 3D Model" width="60%" />
</div>

| Parameter | Description | Range |
| :--- | :--- | :--- |
| **Roll** | Rotation angle around X axis | -180° ~ +180° |
| **Pitch** | Rotation angle around Y axis | -90° ~ +90° |
| **Yaw** | Rotation angle around Z axis | -180° ~ +180° |

## Operation Instructions

| Button/Parameter | Description |
| :--- | :--- |
| **Start** | Start reading and updating AHRS attitude data. |
| **Stop** | Stop reading. |
| **Unit** | Switch display unit:<br/>• **Degrees**<br/>• **Rad**: Radians |
| **Mode** | Sampling mode, currently only **On Demand** (Single read update) mode is supported. |
