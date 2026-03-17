---
sidebar_position: 2
sidebar_label: 'Appearance and Hardware'
---

# Appearance and Hardware Configuration

## Appearance Description

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_controller.png" alt="STEM Appearance" width="60%" />
</div>

In order from top to bottom:
*   **C1 (Slot C1)**: 24ch 3.3V DIO
*   **C2 (Slot C2)**: 24ch 3.3V DIO
*   **C3 (Slot C3)**: 24ch 3.3V DIO
*   **C4 (Slot C4)**: 24ch 3.3V DIO

## Interface Description

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_controller_front.png" alt="STEM Interface" width="80%" />
</div>

In order from left to right:
1.  **24V DC Power Input**
2.  **Protective Earth (PE)**
3.  **LED Status Indicators**
4.  **10/100M Ethernet Port**
5.  **Reset Button**
6.  **FUNC Button** (next to Reset)

### LED Indicator Definition

| Position    | Name           | Behavior Description |
| :---------- | :------------- | :---------------------------------------------------------------------------------- |
| Top Left    | Power          | • **Solid on**: Power is on. |
| Top Right   | Bootloader     | • **Blinks twice**: Bootloader initialization successful on startup.<br/>• **Solid on**: Bootloader is running. |
| Bottom Left | Status         | • **Blinks twice**: Main program initialization successful on startup.<br/>• **Solid on**: System is running.<br/>• **Periodic blinking**: Error occurred. |
| Bottom Right| OS             | • **Blinks at ~4 Hz**: Ethernet cable connected.<br/>• **Blinks at ~2 Hz**: Ethernet cable not connected.<br/>• **Off**: OS stopped. |

### Button Functions

| Button    | Function Description                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| **Reset** | • **Short press**: Restart STEM.<br/>• **Press with FUNC**: Restart and enter Bootloader mode. |
| **FUNC**  | • **Long press for 3s**: Reset IP to default `192.168.1.110`.                                 |
