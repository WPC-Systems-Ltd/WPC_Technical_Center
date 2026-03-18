---
title: PYCO WIFI
sidebar_position: 1
---

# PYCO WIFI

PYCO WIFI is a full-featured Python programmable controller, integrating **8-channel AI/AO/DI/DO**, with built-in **Wi-Fi** and an **OLED display**, and supporting SD card expansion, making it ideal for independent operation and IoT applications.

## Product Appearance

---

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/embedded-system/pyco/pyco-wifi.png').default} alt="PYCO WIFI Appearance" width="60%" />
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
*   **Web-based Configurator**: Web-based configuration interface.
*   **Wi-Fi**: 802.11 b/g/n (2.4 GHz to 2.5 GHz).

## Component Names
---

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/embedded-system/pyco/pyco-wifi-general.png').default} alt="PYCO WIFI Components" width="60%" />
</div>

1.  **OLED Display**: Shows network information, firmware details, serial number, and other functional information.
2.  **24V DC Input**: Primary power input.
3.  **Secondary 24V DC Input**: Secondary power input.
4.  **Protective Earth (PE)**.
5.  **Analog Connector**.
6.  **USB A to Mini USB Connector**.
7.  **Digital I/O Connector**.
8.  **SD Card Slot**.
9.  **Reset Button**:
    - Short press: Reboots the device.
    - Press and hold FUNC while pressing Reset: Reboots and enters bootloader mode.
10. **FUNC Button**:
    - User-customizable.

---

## Pinout

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/embedded-system/pyco/pyco-wifi-mini-ai-pinout.png').default} alt="PYCO WIFI Pinout Diagram" width="60%" />
</div>


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
