---
sidebar_position: 2
sidebar_label: '12ch DI/12ch DO Module'
---

# 12ch DI / 12ch DO Module

This module provides 12-channel digital input (DI) and 12-channel digital output (DO) functions, suitable for 24V industrial control interfacing.

## Specifications

| Item              | Specification                               |
| :---------------- | :------------------------------------------ |
| **Connector**     | IDC 50P Connector                           |
| **Digital Output (DO)**| 12 ch, supports NPN/PNP, opto-isolated (24V) |
| **Digital Input (DI)** | 12 ch, supports NPN/PNP, opto-isolated (24V) |

## Appearance

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_module_DIO.png" alt="DIO Module Appearance" width="60%" />
</div>

## Pinout

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_module_DIO_layout.png" alt="DIO Module Pinout" width="60%" />
</div>

## Wiring Instructions

This module supports Sinking and Sourcing wiring modes, which need to be configured via resistors on the breakout board.

### Sinking Out + Sourcing In

*   ⚠️ Install the **top row** of resistors
*   Output is Sinking (0V active)
*   Input must be Common Anode (24V)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_module_DIO_sinkingout.png" alt="Sinking Out + Sourcing In" width="60%" />
</div>

### Sourcing Out + Sinking In

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_module_DIO_sourcingout.png" alt="Sourcing Out + Sinking In" width="60%" />
</div>

*   ⚠️ Install the **bottom row** of resistors
*   Output is Sourcing (24V active)
*   Input must be Common Cathode (0V)


## Quick Reference for GECO FPGA Users

| 12-12 DIO Module | RMC-Breakout C4 | RMC-Breakout C3 | RMC-Breakout C2 | RMC-Breakout C1 |
| :--------------- | :-------------- | :-------------- | :-------------- | :-------------- |
| **DI_1**         | DIO 80          | DIO 20          | DIO 24          | DIO 28          |
| **DI_2**         | DIO 48          | DIO 35          | DIO 39          | DIO 43          |
| **DI_3**         | DIO 16          | DIO 3           | DIO 7           | DIO 11          |
| **DI_4**         | DIO 81          | DIO 85          | DIO 89          | DIO 93          |
| **DI_5**         | DIO 17          | DIO 21          | DIO 25          | DIO 29          |
| **DI_6**         | DIO 64          | DIO 68          | DIO 72          | DIO 76          |
| **DI_7**         | DIO 0           | DIO 4           | DIO 8           | DIO 12          |
| **DI_8**         | DIO 82          | DIO 86          | DIO 90          | DIO 94          |
| **DI_9**         | DIO 49          | DIO 53          | DIO 57          | DIO 61          |
| **DI_10**        | DIO 65          | DIO 59          | DIO 73          | DIO 77          |
| **DI_11**        | DIO 32          | DIO 36          | DIO 40          | DIO 44          |
| **DI_12**        | DIO 50          | DIO 54          | DIO 58          | DIO 62          |
| **DO_1**         | DIO 18          | DIO 22          | DIO 26          | DIO 30          |
| **DO_2**         | DIO 33          | DIO 37          | DIO 41          | DIO 45          |
| **DO_3**         | DIO 1           | DIO 5           | DIO 9           | DIO 13          |
| **DO_4**         | DIO 83          | DIO 87          | DIO 91          | DIO 95          |
| **DO_5**         | DIO 19          | DIO 23          | DIO 27          | DIO 31          |
| **DO_6**         | DIO 66          | DIO 70          | DIO 74          | DIO 78          |
| **DO_7**         | DIO 2           | DIO 6           | DIO 10          | DIO 14          |
| **DO_8**         | DIO 84          | DIO 88          | DIO 92          | DIO 63          |
| **DO_9**         | DIO 51          | DIO 55          | DIO 59          | DIO 79          |
| **DO_10**        | DIO 67          | DIO 71          | DIO 75          | DIO 46          |
| **DO_11**        | DIO 34          | DIO 38          | DIO 42          | DIO 47          |
| **DO_12**        | DIO 52          | DIO 56          | DIO 60          | DIO 15          |
