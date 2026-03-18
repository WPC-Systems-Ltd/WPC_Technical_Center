---
title: Remote Control Tutorial
sidebar_position: 3
description: Drone remote controller operation and flight process
---

## Drone Remote Control Operation Video

<div style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MCejJsEQymk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



## Remote Controller Button Descriptions

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/remote_controller_main.png').default} alt="remote_controller_main" width="60%" />
</div>

| Position           | Function         | Description                                                                 |
| :----------------- | :--------------- | :-------------------------------------------------------------------------- |
| **① Top Right Toggle** | Takeoff Button   | Toggle this switch to execute the takeoff action.                           |
| **② Top Right Toggle** | Upper Control Mode | **Switch Control Authority:**<br/>- **Remote controller**: Manual control via RC<br/>- **Mission computer**: Autonomous control via mission computer |
| **③ Middle Right Toggle** | Flight Control Mode | - **Stop**: Stop motors<br/>- **Attitude**: Attitude mode (more flexible)<br/>- **Position**: Position mode (more stable) |
| **④ Left Stick**     | Z ( ↕ ) / Yaw ( ↔ ) | - **Z ( ↕ )**: Controls ascent and descent (throttle)<br/>- **Yaw ( ↔ )**: Controls in-place left and right rotation |
| **⑤ Right Stick**    | Roll ( ↔ ) / Pitch ( ↕ ) | - **Roll ( ↔ ) / Y**: Controls left and right flight (strafe)<br/>- **Pitch ( ↕ ) / X**: Controls forward and backward flight (tilt) |


## Takeoff Operation

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/remote_controller_takeoff.png').default} alt="remote_controller_takeoff" width="60%" />
</div>


| Step Order              | Description                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------ |
| **Step 1 Set Flight Mode** | Toggle the "Flight Control Mode" to **Attitude mode** (middle) or **Position mode** (bottom). |
| **Step 2 Confirm Authority** | Confirm the "Upper Control Mode" switch is set to **Remote controller** (top).         |
| **Step 3 Execute Takeoff** | Press and hold the "Takeoff Button" until the drone takes off.                        |
| **System Response**      | The automatic takeoff sequence is as follows:<br/>1. Rotors spin at low speed for 2s<br/>2. Rotation speed increases to a set value<br/>3. Constant speed maintained for 2s<br/>4. Drone lifts off the ground |

## Landing Operation


<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/remote_controller_landing.png').default} alt="remote_controller_landing" width="60%" />
</div>

Move the left stick (Z-axis control stick) ( ↕ ) to the lowest position. After the drone nears the ground, it will automatically disarm the flight mode.

## Emergency Shutdown
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/remote_controller_emergency.png').default} alt="remote_controller_emergency" width="60%" />
</div>

**Emergency Shutdown:**

| Method                | Operation Steps                            | Result and Logic                                                                                                     |
| :-------------------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Method ①: RC**      | Disarm Flight Mode: Toggle to the top (Stop) | This tells the flight controller to "stop executing missions". This is a software command, usually fast and standard. |
| **Method ②: FC Switch** | Force Power Cut: Press the OFF button      | This directly cuts the power supply to the flight control system. Similar to pulling a plug, it is the most thorough shutdown. ⚠️ **The drone may lose power instantly and fall.** |
