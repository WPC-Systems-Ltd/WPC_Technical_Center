---
title: Product Introduction
sidebar_position: 1
description: WPC Drone Features and Specifications
---

# Product Introduction

**WPC Drone - 6Kg-Class UAV Platform** is a high-performance flight platform designed for research, education, and professional applications.

It uses a self-developed high-efficiency flight control algorithm with a response time as fast as 2.5 ms, providing excellent wind resistance, maintaining stable flight even in level 7 gusts. With a high-speed Attitude and Heading Reference System (AHRS), overall control is faster and vibration resistance is better, ensuring high stability and reliability for flight missions.

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_1_X5.png" alt="WPC Drone" width="60%" />
</div>

## Key Technical Features

### Precise Positioning and Navigation
- **Centimeter-level Positioning**: Equipped with optical flow positioning combined with GPS (expandable to RTK), achieving precise X and Y axis hovering capabilities.
- **Altitude Control**: Equipped with ToF laser rangefinder and barometer, providing precise Z-axis altitude control, adapting to complex terrain and indoor/outdoor environments.

### Openness and Expandability
- **Edge Computing Integration**: Supports NVIDIA Jetson Nano mission computer, easily importing AI visual recognition and edge computing applications.
- **API Support**: Provides complete **LabVIEW** and **Python** APIs, and opens the UART communication protocol, allowing developers to quickly perform autonomous navigation control, path planning, or customized payload integration.

## Professional Services and Support (Services)

WPC Systems not only provides hardware platforms but is also committed to being your strongest technical backing:

- **Made in Taiwan, Local Maintenance Guaranteed**
    - Designed and manufactured in Taiwan (Made in Taiwan).
    - Provides local fast repair services, eliminating the long wait and high cost of overseas repairs.

- **Dedicated Maintenance of Flight Control and Fusion Algorithms, Continuous Upgrades**
    - A professional team continuously optimizes the flight control core and sensor fusion algorithms.
    - Regularly releases firmware updates to ensure continuous access to the latest functions and performance improvements.

- **Years of System Integration Experience, Drone Integration Applications Worry-Free**
    - Extensive experience in electromechanical integration and software development.
    - Provides professional consultation to assist you in solving integration challenges such as sensor mounting, data transmission, and mission logic.

- **Detailed Operation Manuals and Technical Documents**
    - Provides complete and well-structured operation manuals and development documents.
    - Includes complete example code from unboxing and flight operation to API development, significantly lowering the learning threshold.

---

## System Architecture and Connection Interfaces

### Connection Diagram between Mission Computer and Flight Controller
Transmission of instructions and status reporting with high bandwidth and low latency via UART interface.

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_9_X115.png" alt="mission computer and flight controller" width="60%" />
</div>

---

### Communication Architecture between Ground Station and Drone
Supports multiple communication links such as WiFi and telemetry radio, achieving remote monitoring and real-time parameter adjustment.

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/page_10_X123.png" alt="ground station and flight controller" width="60%" />
</div>
