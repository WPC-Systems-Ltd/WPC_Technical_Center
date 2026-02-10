---
sidebar_position: 4
sidebar_label: 'Layout and Installation'
description: Hardware dimensions, interface layout and installation guide of 4-axis motion control module
---

# Layout and Installation

## 1. Layout and Dimensions

The module adopts standard DIN rail mounting design, with a compact industrial-grade appearance.

### 1.1 Interface Configuration
*   **Power Input (CN3)**: Top left 2-pin Euro terminal, input voltage **24VDC**.
*   **System Bus (CN4)**: Top right IDC 50-pin interface, used to connect GECO or STEM controller.
*   **Daughter Board Connector (CN1)**: Bottom DIN 41612 48-pin interface, used to connect motion control breakout board.

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_28_img_X278.png" alt="Motion Module Layout" width="60%" />
</div>

### 1.2 System Installation Precautions
Before connecting the motor driver, please confirm the following steps:
1.  **Daughter Board Combination**: Through the bottom DIN 41612 connector, tightly combine the axis card body with the selected breakout board (General/Specific).
2.  **Mounting Method**:
    *   First fix the dedicated DIN Rail Clip to the back of the axis card.
    *   Mount the assembled module onto the standard 35mm aluminum rail.

:::warning Space Reservation
*   **Height Reservation**: The DIN rail clip will raise the module by about **7.4 mm**.
*   **Top Space**: It is recommended to reserve at least **82.36 mm** of space from the top of the aluminum rail to accommodate the bending radius of the SCSI cable and avoid excessive stress on the wire.
:::

---

## 2. Power Connection

This module requires external **24VDC** power supply to drive internal circuits and isolation interfaces.

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_29_img_X285.png" alt="Power Connection" width="60%" />
</div>

### 2.1 Wiring Instructions
*   Please use the top left 2-pin Euro terminal for wiring.
*   If using a non-WPC original power supply, be sure to use a multimeter to confirm polarity.

:::danger Polarity Check
Do NOT reverse the power polarity!
Please **use a multimeter to reconfirm the polarity of 24V and GND** before inserting the power terminal. Reverse power connection will cause permanent damage to the module circuit and is not covered by warranty.
:::
