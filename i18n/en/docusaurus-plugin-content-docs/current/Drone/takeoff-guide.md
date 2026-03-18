---
title: Takeoff Tutorial
sidebar_position: 2
description: Drone takeoff and flight process
---


## Pre-flight Checklist
1. Confirm the drone's center of gravity is balanced.
2. Check that all payloads are securely fastened.
3. Confirm all screws on the drone are tightened.
4. Check that the drone battery voltage is full (approximately 12.5 V).
5. Confirm the USB drive has sufficient capacity to store flight data for this session.
    - The USB drive must be plugged into the flight control computer.

:::warning
If a USB drive is not inserted, the drone will not operate.
:::

## 1. Connect Battery Power
After connecting the battery to the drone power supply, the motors will emit a short "beep" every second, which is a normal standby prompt.


## 2. Disarm Emergency Switch
Toggle the emergency power cut-off switch to the **ON** position to power up the flight controller.


:::warning
If the emergency power cut-off switch is not set to ON, the drone will not start.
:::

## 3. Wait for Flight Controller Startup
It takes approximately 2 minutes for the flight controller to start. Upon completion, the motors will emit a longer "beep", indicating the flight controller is ready.

## 4. Flight Direction Confirmation

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/drone_flight_direction.png').default} alt="drone_flight_direction" width="60%" />
</div>

### Ascend/Descend

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/drone_flight_up_down.gif').default} alt="drone_flight_up_down" width="60%" />
</div>

### Rotate (Yaw)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/drone_flight_rotate.gif').default} alt="drone_flight_rotate" width="60%" />
</div>

### Move (Translation)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/drone_flight_move.gif').default} alt="drone_flight_move" width="60%" />
</div>


## 5. Landing and Shutting Down
If the battery is low, please land immediately and remove the battery for replacement.
