---
sidebar_position: 2
sidebar_label: 'Appearance and Hardware'
---

# Appearance and Hardware Configuration

## Appearance Description

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/STEM_controller.png').default} alt="STEM Appearance" width="60%" />
</div>

In order from top to bottom:
*   **C1 (Slot C1)**: 24ch 3.3V DIO
*   **C2 (Slot C2)**: 24ch 3.3V DIO
*   **C3 (Slot C3)**: 24ch 3.3V DIO
*   **C4 (Slot C4)**: 24ch 3.3V DIO

## Interface Description

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/STEM_controller_front.png').default} alt="STEM Interface" width="80%" />
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
| Top Left    | Power          | â€¢ **Solid on**: Power is on. |
| Top Right   | Bootloader     | â€¢ **Blinks twice**: Bootloader initialization successful on startup.<br/>â€¢ **Solid on**: Bootloader is running. |
| Bottom Left | Status         | â€¢ **Blinks twice**: Main program initialization successful on startup.<br/>â€¢ **Solid on**: System is running.<br/>â€¢ **Periodic blinking**: Error occurred. |
| Bottom Right| OS             | â€¢ **Blinks at ~4 Hz**: Ethernet cable connected.<br/>â€¢ **Blinks at ~2 Hz**: Ethernet cable not connected.<br/>â€¢ **Off**: OS stopped. |

### Button Functions

| Button    | Function Description                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| **Reset** | â€¢ **Short press**: Restart STEM.<br/>â€¢ **Press with FUNC**: Restart and enter Bootloader mode. |
| **FUNC**  | â€¢ **Long press for 3s**: Reset IP to default `192.168.1.110`.                                 |

