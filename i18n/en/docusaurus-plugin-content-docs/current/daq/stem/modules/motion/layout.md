---
sidebar_position: 4
sidebar_label: 'Dimensions and Installation'
description: Hardware dimensions, interface layout, and installation guide for the 4-axis motion control module
---

# Dimensions and Installation

## 1. Dimensions

The module features a standard DIN rail mounting design with a compact industrial-grade form factor.

### 1.1 Interface Layout
*   **Power Input (CN3)**: 2-pin European-style terminal on the top left, input voltage **24VDC**.
*   **System Bus (CN4)**: IDC 50-pin connector on the top right, used to connect to GECO or STEM controllers.
*   **Breakout Connector (CN1)**: DIN 41612 48-pin connector at the bottom, used to connect to motion control breakout boards.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/STEM_controller_layout.png').default} alt="Motion Module Layout" width="60%" />
</div>

### 1.2 Installation Notes
Before connecting the motor driver, please make sure to follow these steps:
1.  **Breakout Board Assembly**: Combine the main axis card with the selected breakout board (general/specific) through the DIN 41612 connector at the bottom.
2.  **Mounting**:
    *   First, fix the DIN Rail Clip to the back of the axis card.
    *   Mount the assembled module onto a standard 35mm DIN rail.

:::info Clearances
*   **Height Clearance**: The DIN rail clip will raise the module by approximately **7.4 mm**.
*   **Overhead Space**: It is recommended to reserve at least **82.36 mm** of space above the DIN rail to accommodate the bending radius of the SCSI cable and avoid excessive stress on the wires.
:::

---

## 2. Power Connection

This module requires an external **24VDC** power supply to drive the internal circuits and isolation interfaces.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/STEM_controller_layout2.png').default} alt="Power Connection" width="60%" />
</div>

### 2.1 Wiring Instructions
*   Please use the 2-pin European-style terminal on the top left for wiring.
*   If using a non-WPC original power supply, please use a multimeter to verify the polarity.

:::danger Polarity Check
Reverse connection of the power supply is strictly prohibited!
Before inserting the power terminal, **always use a multimeter to re-confirm the polarity of 24V and GND**. Reverse connection will cause permanent damage to the module circuit and is not covered by the warranty.
:::

