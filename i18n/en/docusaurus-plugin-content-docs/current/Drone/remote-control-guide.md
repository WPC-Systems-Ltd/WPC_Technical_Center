---
title: Remote Control Guide
sidebar_position: 3
description: Drone Remote Control Operation and Flight Process
---

## Drone Remote Control Operation Video

<div style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MCejJsEQymk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



## Remote Controller Button Description

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_4_X75.png" alt="Remote Controller Button Layout" width="60%" />
</div>

| Position | Function | Description |
| :--- | :--- | :--- |
| **① Top Right Switch** | Takeoff Switch | Toggle this switch to perform takeoff. |
| **② Top Right Switch** | Upper Control Mode | **Switch Control Authority:**<br/>- **Remote controller**: Manual control via remote<br/>- **Mission computer**: Control via mission computer |
| **③ Middle Right Switch** | Flight Control Mode | - **Stop**: Stop<br/>- **Attitude**: Attitude mode (More agile)<br/>- **Position**: Position mode (More stable) |
| **④ Left Joystick** | Z ( ↕ ) / Yaw ( ↔ ) | - **Z ( ↕ )**: Control Ascend/Descend (Throttle)<br/>- **Yaw ( ↔ )**: Control Rotate Left/Right (Yaw) |
| **⑤ Right Joystick** | Roll ( ↔ ) / Pitch ( ↕ ) | - **Roll ( ↔ ) / Y**: Control Fly Left/Right (Roll)<br/>- **Pitch ( ↕ ) / X**: Control Fly Forward/Backward (Pitch) |


## Takeoff Instructions

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_5_X86.png" alt="Joystick Control - Left Side" width="60%" />
</div>


| Step Sequence | Description |
| :--- | :--- |
| **Step 1 Set Flight Mode** | Switch "Flight Control Mode" to **Attitude mode** (Middle) or **Position mode** (Bottom). |
| **Step 2 Confirm Authority** | Confirm "Upper Control Mode" switch is at **Remote controller** (Top). |
| **Step 3 Execute Takeoff** | Hold the "Takeoff Switch" until the drone takes off. |
| **System Reaction** | The drone's automatic takeoff process is as follows:<br/>1. Spin rotors at low speed for 2 seconds<br/>2. Increase rotation speed to set value<br/>3. Maintain fixed speed for 2 seconds<br/>4. Take off and leave the ground |

## Landing Operation


<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_6_X91.png" alt="Joystick Control - Right Side" width="60%" />
</div>

Move the left joystick (Z-axis control stick) ( ↕ ) to the lowest position. After the drone approaches the ground, it will automatically disarm the flight mode.

## Emergency Shutdown
<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_6_X93.png" alt="Joystick Control - Direction" width="60%" />
</div>

**Emergency Shutdown:**

| Method | Operation Step | Result and Principle |
| :--- | :--- | :--- |
| **Method ①: Remote Controller** | Disarm control mode: Toggle to the topmost (Stop) position | This tells the flight computer to "stop executing the mission". This is a software-level command, usually faster and standard. |
| **Method ②: Flight Control Switch** | Force power cut: Press the OFF button | This directly cuts off the power supply to the flight control system. It is like unplugging the plug, the most thorough way to shut down. ⚠️ **The drone may instantly lose power and fall** |
