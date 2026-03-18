---
sidebar_position: 3
sidebar_label: 'AHRS'
---

# AHRS

The AHRS (Attitude and Heading Reference System) panel allows users to read data from the attitude and heading reference system. Through built-in accelerometers, gyroscopes, and magnetometers, it calculates and displays the device's 3D attitude in real-time.

## Supported Products

This function supports devices equipped with an AHRS module:

| Product Name                                                 | Description               |
| :----------------------------------------------------------- | :------------------------ |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | Built-in IMU inertial measurement unit |
| [`Wifi-DAQ-E3-AO`](../../../daq/wifidaq/product-general.md) | Built-in IMU inertial measurement unit |

## Data Display (Data & 3D Model)

The panel is divided into two parts: numerical data display and 3D model attitude display:

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_ahrs.png').default} alt="WDM_testPanel_AHRS" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_ahrs_3dmodel.png').default} alt="WDM_testPanel_ahrs_3dmodel" width="60%" />
</div>

| Parameter          | Description                         | Range         |
| :----------------- | :---------------------------------- | :------------ |
| **Roll**       | Rotation angle around the X-axis | -180° ~ +180° |
| **Pitch** | Rotation angle around the Y-axis | -90° ~ +90°   |
| **Yaw**     | Rotation angle around the Z-axis | -180° ~ +180° |

## Operation Description

| Button/Parameter | Description                                                  |
| :--------------- | :----------------------------------------------------------- |
| **Start**        | Start reading and updating AHRS attitude data.               |
| **Stop**         | Stop reading.                                                |
| **Unit**         | Switch display units:<br/>• **Degrees**<br/>• **Rad** (Radians) |
| **Mode**         | Sampling mode, currently only supports **On Demand** (single read update) mode. |
