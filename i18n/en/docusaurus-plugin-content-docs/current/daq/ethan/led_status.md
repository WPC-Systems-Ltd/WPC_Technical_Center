---
title: Appearance & LED Status
sidebar_position: 4
---



## Hardware Appearance

<div style={{textAlign: 'center'}}><img src="/img/daq/ethan-daq/appearance-of-ethan.png" alt="Ethan Appearance" width="40%" /></div>

## Interface Description by Number

The table below corresponds to the numbers in the image above, explaining the hardware interface functions of the Ethan series:

| No.  | Component Name       | Description                                                                 |
| :--: | :------------------- | :-------------------------------------------------------------------------- |
| **0**| **Reset Button**     | 1. **Reboot**: Press once to reboot the device.<br/> 2. **Bootloader Mode**: Hold the **FUNC** button and press the Reset button simultaneously to reboot into Bootloader mode. |
| **1**| **LED1 System Status**| Indicates the system main program status (see details below).               |
| **2**| **LED2 OS Status**   | Indicates the operating system and network connection status (see details below). |
| **3**| **FUNC Button**      | 1. **Reset IP**: Long press for about 3 seconds to reset IP to default `192.168.1.110`.<br/> 2. **Switch Display**: Short press to switch OLED pages. |
| **4**| **OLED Panel**       | Displays network settings, firmware version, serial number, and other system status. |
| **5**| **24V DC Input**     | Power input interface, 24V DC.                                              |
| **6**| **Protective Earth (PE)**| Ground terminal for safety and noise immunity.                           |
| **7**| **Ethernet Port**    | 10/100M Ethernet interface for data transmission and communication.         |

---

## LED Status Indicators

### LED1: System Status

| Behavior        | Status Description |
| :-------------- | :----------------- |
| **Blinks at Startup** | Main program initialization normal (blinks twice) |
| **Steady On**   | System running normally |
| **Periodic Blink** | Error occurred |

### LED2: OS Status

| Behavior        | Status Description |
| :-------------- | :----------------- |
| **Blinks at Startup** | Bootloader initialization normal (blinks twice) |
| **Steady On**   | Bootloader running  |
| **Periodic Blink** | OS running normally |
| **Freq 4 Hz**   | Ethernet cable connected   |
| **Freq 2 Hz**   | Ethernet cable disconnected   |
| **Off**         | OS stopped   |

---