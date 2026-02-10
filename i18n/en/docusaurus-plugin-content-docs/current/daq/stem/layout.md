---
sidebar_position: 2
sidebar_label: 'Layout and Hardware'
---

# Appearance and Hardware Configuration

## Appearance Description

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_1_img_X5.png" alt="STEM Appearance" width="60%" />
</div>

From top to bottom:
*   **C1 (Slot C1)**: 24ch 3.3V DIO
*   **C2 (Slot C2)**: 24ch 3.3V DIO
*   **C3 (Slot C3)**: 24ch 3.3V DIO
*   **C4 (Slot C4)**: 24ch 3.3V DIO

## Interface Description

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_5_img_X94.png" alt="STEM Interface" width="80%" />
</div>

From left to right:
1.  **24V DC Input**
2.  **Protective Earth (PE)**
3.  **LED Indicators**
4.  **10/100M Ethernet Port**
5.  **Reset Button**
6.  **FUNC Button** (Located next to Reset)

### LED Indicator Definition

| Position | Name | Behavior Description |
| :--- | :--- | :--- |
| Top Left | Power | • **Solid On**: Power is on. |
| Top Right | Bootloader | • **Blinks twice**: Bootloader initialization no error at startup.<br/>• **Solid On**: Bootloader is running. |
| Bottom Left | Status | • **Blinks twice**: Main program initialization no error at startup.<br/>• **Solid On**: System is running.<br/>• **Cyclic Blinking**: Error occurred. |
| Bottom Right | OS | • **Blinks at approx. 4 Hz**: Ethernet cable connected.<br/>• **Blinks at approx. 2 Hz**: Ethernet cable not connected.<br/>• **No Blink**: OS stopped running. |

### Button Functions

| Button | Function Description |
| :--- | :--- |
| **Reset** | • **Short Press**: Restart STEM.<br/>• **Press simultaneously with FUNC**: Restart and enter Bootloader mode. |
| **FUNC** | • **Long Press 3 sec**: Reset IP to default `192.168.1.110`. |
