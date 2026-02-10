---
sidebar_position: 1
sidebar_label: 'Product Introduction'
description: GECO Product Introduction, Architecture, and Appearance Description
---

# GECO Product Introduction

## 1. What is GECO?

Graphical Embedded COntroller (GECO) is a controller composed of sbRIO, LabVIEW, and [WPC RMC Breakout](rmc_breakout.md), featuring a complete graphical development environment.

### Core Features
*   Graphical Development: Users can edit, download, and deploy applications through LabVIEW.
*   Industrial IoT (IIoT): Supports Ethernet download and communication functions, especially suitable for rapid implementation of IIoT applications.
*   Powerful Core: Uses NI sbRIO controller as the core, with built-in 32-bit microprocessor and FPGA chip.
    *   Real-Time: Developed using LabVIEW Real-Time Module.
    *   FPGA: Developed using LabVIEW FPGA Module.
*   Flexible Deployment: Designed to allow all development and deployment work to be completed via Ethernet interface, supporting remote control or running independently in Stand-alone mode.
*   Benefits: GECO's Graphical System Design (GSD) characteristics can effectively simplify complex application processes, shorten development time, and reduce subsequent maintenance costs.

---

## 2. GECO Architecture Composition

GECO has 4 expansion slots on the top, which can be used to install various GECO modules. Currently supports 13 types of modules, covering the following categories:

### Supported Module List

*   AIO Modules (Analog Input/Output)
    *   24ch AI / 8ch AO
    *   64ch AO
    *   16ch Digital Potentiometers
    *   16ch Thermocouple
*   DIO Modules (Digital Input/Output)
    *   24ch DO
    *   24ch DI
    *   12ch DI / 12ch DO
    *   24ch-5V TTL
*   Motion Modules
    *   4-axis Motion Control
*   Switch / Multiplexer Modules
    *   4x6 Matrix Switch
    *   24ch-2wire Multiplexer
    *   12ch Tri-state Switch
*   Serial Interface Module
    *   RS-232 / 422 / 485

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_2_X79.png" alt="GECO Composition" width="60%" />
</div>

---

## 3. Appearance Description

 This section describes the external interface and indicator status of the GECO controller.

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_3_X91.png" alt="GECO Appearance" width="60%" />
</div>

(Described from left to right)

### 3.1 Indicators

#### LED 1: Power LED
| LED Color | LED Status | Description |
| :--- | :--- | :--- |
| Green | Solid | GECO power is **ON**. |
| — | Off | GECO power is **OFF**. |

#### LED 2: Status LED
| LED Status | Description |
| :--- | :--- |
| Blinks 2 times and pauses | **Safe Mode**: Software not installed (factory default) or installed incorrectly. Please reinstall software through MAX. |
| Blinks 3 times and pauses | **User-Defined Safe Mode**: Indicates installation mode, or user forced entry into safe mode (hold Reset key > 5 seconds). |
| Blinks 4 times and pauses | **Safe Mode (Crash)**: Software has crashed twice consecutively without restarting. |
| Continuous blinking | **Boot Failure**: GECO failed to enter NI Linux Real-Time (unsupported OS or unrecoverable error occurred). |
| Temporarily lit | **Booting**: No action required. |
| Off | **Run Mode**: Software installed and OS functioning normally. |

#### LED 3: User1 LED
User-programmable FPGA LED (User Defined).

#### LED 4: User FPGA1 LED
User-programmable FPGA LED (User Defined).

### 3.2 Hardware Interface
*   Reset Button: Reset system or enter Safe Mode (long press 5 seconds).
*   Network Port (RJ50): Specification is RJ50 (10P), used to connect PC for development and communication.
*   USB Port: Can connect Flash Drive (Storage) or Camera.
*   Power Input: 24V DC power input connector.
