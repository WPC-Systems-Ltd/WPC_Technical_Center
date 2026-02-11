---
sidebar_position: 5
sidebar_label: 'Limit Switch Wiring'
description: Wiring principle and safety suggestions for common photoelectric limit switches
---

# Common Limit Switch Wiring

This chapter uses industry-standard photoelectric switches (such as OMRON EE-SX67x series) as an example to explain the wiring mode and safety configuration suggestions for limit switches.

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_29_img_X286.png" alt="Omron EE-SX67x Series" width="60%" />
</div>

## 1. Wiring Mode Description

Photoelectric switches usually provide two operation modes, the switching of which depends on the wiring of the **L Terminal**:

### 1.1 Light-ON Mode (Active-HIGH)
*   **Setting Method**: **L pin Floating**.
*   **Action Logic**:
    *   Light Interrupted (Object detected): Output OFF (High Impedance / High Logic).
    *   Light Incident (No obstruction): Output ON (Low Logic).

### 1.2 Dark-ON Mode (Active-LOW)
*   **Setting Method**: **L pin connected to VCC (Brown wire)**.
*   **Action Logic**:
    *   Light Interrupted (Object detected): Output ON (Low Logic).
    *   Light Incident (No obstruction): Output OFF (High Impedance / High Logic).

## 2. Safety Suggestions

In industrial automation applications, **it is strongly recommended to use Dark-ON mode** as the configuration standard for limit switches.

### Why Choose Dark-ON?
This mode constitutes a **"Fail-Safe"** mechanism.

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_30_img_X295.png" alt="Wiring Configuration" width="60%" />
</div>

### Safety Configuration Guidelines
WPC recommends users set the limit switch to **Dark-ON mode** (as shown on the right in the figure above, short L and VCC).

*   **Configuration Reason**:
    In this mode, if **Broken Wire** or **Poor Contact** occurs, the axis card input terminal will detect the signal state of the limit being triggered.
*   **Protection Mechanism**:
    When the system determines that the limit has been triggered, the axis card will prohibit the motor from moving in that limit direction. Although this will cause the machine to stop temporarily, it can effectively **avoid machine collision accidents caused by limit switch failure**, ensuring the safety of equipment and personnel.
