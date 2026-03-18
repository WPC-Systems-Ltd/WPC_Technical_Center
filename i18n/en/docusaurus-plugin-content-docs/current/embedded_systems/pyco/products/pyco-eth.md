---
title: PYCO ETH
sidebar_position: 2
---

# PYCO ETH

PYCO ETH is a full-featured Python programmable controller, integrating **8-channel AI/AO/DI/DO**, with built-in **Ethernet** and an **OLED display**, making it ideal for industrial applications requiring wired network connectivity.


## Product Appearance
---

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/embedded-system/pyco/pyco-eth.png').default} alt="PYCO ETH Appearance" width="60%" />
</div>



## Key Features
---

*   **Python Programmable**: Supports Stand-Alone Python application development.
*   **Digital Output (DO)**:
    - 8 channels NPN/PNP (Opto-isolated 24V).
*   **Digital Input (DI)**:
    - 8 channels NPN/PNP (Opto-isolated 24V).
*   **Analog Output (AO)**:
    - 8 channels simultaneous output, 16-bit single-ended.
    - Output range: ±10V.
*   **Analog Input (AI)**:
    - 8 channels simultaneous sampling, 16-bit single-ended.
    - Input range: ±10V.
*   **24V DC Power Input**.


## Component Names
---
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/embedded-system/pyco/pyco-eth-general.png').default} alt="PYCO ETH Components" width="60%" />
</div>


1.  **OLED Display**: Shows network information, firmware details, serial number, and other functional information.
2.  **RTC Battery Holder**: Used to maintain the real-time clock.
3.  **24V DC Input**: Primary power input.
4.  **Secondary 24V DC Input**: Secondary power input.
5.  **Protective Earth (PE)**.
6.  **10/100M Ethernet Port**.
7.  **LED Indicators**.
8.  **USB Type-A Connector**.
9.  **Analog Connector**.
10. **Digital I/O Connector**.
11. **Reset Button**:
    - Short press: Reboots the device.
    - Press and hold FUNC while pressing Reset: Reboots and enters bootloader mode.
12. **FUNC Button**:
    - Long press for approx. 3 seconds: Resets IP to default (192.168.1.110).
    - Short press: Switches the OLED display page.



## Pinout
---

### Analog I/O Connector

| AO0   | AO2   | AO4   | AO6   | AGND  | AI0   | AI2   | AI4   | AI6   | AGND  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1     | 3     | 5     | 7     | 9     | 11    | 13    | 15    | 17    | 19    |
| 2     | 4     | 6     | 8     | 10    | 12    | 14    | 16    | 18    | 20    |
| **AO1** | **AO3** | **AO5** | **AO7** | **AGND** | **AI1** | **AI3** | **AI5** | **AI7** | **AGND** |

### Digital I/O Connector

| DO0   | DO2   | DO4   | DO6   | 0V    | DI0   | DI2   | DI4   | DI6   | 24Vo  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1     | 3     | 5     | 7     | 9     | 11    | 13    | 15    | 17    | 19    |
| 2     | 4     | 6     | 8     | 10    | 12    | 14    | 16    | 18    | 20    |
| **DO1** | **DO3** | **DO5** | **DO7** | **0V**  | **DI1** | **DI3** | **DI5** | **DI7** | **24Vo** |
