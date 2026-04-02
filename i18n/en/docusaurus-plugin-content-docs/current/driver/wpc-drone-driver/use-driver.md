---
title: Use WPC Drone Driver
sidebar_label: Use WPC Drone Driver
sidebar_position: 2
description: "Introduction to using WPC Drone Driver API in LabVIEW"
---

## Open LabVIEW and Driver Panel

Open LabVIEW, right-click on the Block Diagram, and expand the Functions palette. You will see the **"WPC Driver"** category, and all **WPC Drone** related functions are located under this category.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/driver/wpc_drone_driver/wpc_drone_driver_api.png" alt="wpc_drone_driver_api" width="60%" />
</div>

---

## WPC Drone Driver API

WPC Drone Driver provides APIs for drone control and data acquisition, including:

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/driver/wpc_drone_driver/wpc_drone_driver_api2.png" alt="wpc_drone_driver_api2" width="60%" />
</div>

| API 類別                      | 描述                                                                |
|:----------------------------  | :----------------------------------------------------------------- |
|Open Drone                     | Initialize and establish communication connection with the drone.       |
|Close Drone                    | Close the communication connection with the drone and release related resources.  |
|Active                         | Control the drone's arming and disarming status.                      |
|Takeoff, Landing               | Control the drone's takeoff and landing actions.                      |
|Vehicle Frame                  | Handle operations and data acquisition relative to the drone's own body coordinate system (Vehicle Frame).    |
|NED Frame                      | Handle operations and data acquisition relative to the North-East-Down (NED) coordinate system.    |
|System                         | Used to read or set system-related information of the drone (e.g., battery level, system status, etc.).        |