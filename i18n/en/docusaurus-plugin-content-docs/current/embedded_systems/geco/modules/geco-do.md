---
sidebar_position: 4
sidebar_label: '24ch DO'
description: Specifications and pinout definitions for the 24ch DO digital output module
---

# 24ch DO Module

This module provides 24 channels of digital output, supporting NPN/PNP architectures, with opto-isolated protection.

## 1. Specifications

| Item                   | Specification                           |
| :--------------------- | :-------------------------------------- |
| **External Power**     | 24V DC                                 |
| **Connector**          | IDC 50P Connector                       |
| **Channels**           | 24 ch (NPN/PNP)                        |
| **Isolation**          | Opto-isolated (24V)                     |

## 2. Appearance and Pinout

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_module_24ch_DO.png" alt="24ch DO Module" width="60%" />
</div>

### Pinout

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_module_24ch_DO_pinout.png" alt="24ch DO Pinout" width="60%" />
</div>

#### Port A

| Pin Description | Pin Number | Pin Number | Pin Description |
| :-------------- | :--------: | :--------: | :-------------- |
| GND             |     1      |     2      |                 |
| DO_1            |     3      |     4      |                 |
| DO_2            |     5      |     6      | GND             |
| DO_3            |     7      |     8      | GND             |
| DO_4            |     9      |     10     | GND             |
| DO_5            |     11     |     12     |                 |
| DO_6            |     13     |     14     | GND             |
| DO_7            |     15     |     16     | GND             |
| DO_8            |     17     |     18     | GND             |
| DO_9            |     19     |     20     | GND             |
| DO_10           |     21     |     22     | GND             |
| DO_11           |     23     |     24     | GND             |
| DO_12           |     25     |     26     | GND             |

#### Port B

| Pin Description | Pin Number | Pin Number | Pin Description |
| :-------------- | :--------: | :--------: | :-------------- |
| DO_13           |     27     |     28     | GND             |
| DO_14           |     29     |     30     | GND             |
| DO_15           |     31     |     32     |                 |
| DO_16           |     33     |     34     | GND             |
| DO_17           |     35     |     36     | GND             |
| DO_18           |     37     |     38     | GND             |
| DO_19           |     39     |     40     | GND             |
| DO_20           |     41     |     42     | GND             |
| DO_21           |     43     |     44     | 5V              |
| DO_22           |     45     |     46     | GND             |
| DO_23           |     47     |     48     | 5V              |
| DO_24           |     49     |     50     | GND             |

### Quick reference for GECO FPGA User

| 24ch DO Module | RMC-Breakout | RMC-Breakout | RMC-Breakout | RMC-Breakout |
| :------------- | :----------: | :----------: | :----------: | :----------: |
|                |      C4      |      C3      |      C2      |      C1      |
| DO_1           |    DIO 80    |    DIO 20    |    DIO 24    |    DIO 28    |
| DO_2           |    DIO 48    |    DIO 35    |    DIO 39    |    DIO 43    |
| DO_3           |    DIO 16    |    DIO 3     |    DIO 7     |    DIO 11    |
| DO_4           |    DIO 81    |    DIO 85    |    DIO 89    |    DIO 93    |
| DO_5           |    DIO 17    |    DIO 21    |    DIO 25    |    DIO 29    |
| DO_6           |    DIO 64    |    DIO 68    |    DIO 72    |    DIO 76    |
| DO_7           |    DIO 0     |    DIO 4     |    DIO 8     |    DIO 12    |
| DO_8           |    DIO 82    |    DIO 86    |    DIO 90    |    DIO 94    |
| DO_9           |    DIO 49    |    DIO 53    |    DIO 57    |    DIO 61    |
| DO_10          |    DIO 65    |    DIO 59    |    DIO 73    |    DIO 77    |
| DO_11          |    DIO 32    |    DIO 36    |    DIO 40    |    DIO 44    |
| DO_12          |    DIO 50    |    DIO 54    |    DIO 58    |    DIO 62    |
| DO_13          |    DIO 18    |    DIO 22    |    DIO 26    |    DIO 30    |
| DO_14          |    DIO 33    |    DIO 37    |    DIO 41    |    DIO 45    |
| DO_15          |    DIO 1     |    DIO 5     |    DIO 9     |    DIO 13    |
| DO_16          |    DIO 83    |    DIO 87    |    DIO 91    |    DIO 95    |
| DO_17          |    DIO 19    |    DIO 23    |    DIO 27    |    DIO 31    |
| DO_18          |    DIO 66    |    DIO 70    |    DIO 74    |    DIO 78    |
| DO_19          |    DIO 2     |    DIO 6     |    DIO 10    |    DIO 14    |
| DO_20          |    DIO 84    |    DIO 88    |    DIO 92    |    DIO 63    |
| DO_21          |    DIO 51    |    DIO 55    |    DIO 59    |    DIO 79    |
| DO_22          |    DIO 67    |    DIO 71    |    DIO 75    |    DIO 46    |
| DO_23          |    DIO 34    |    DIO 38    |    DIO 42    |    DIO 47    |
| DO_24          |    DIO 52    |    DIO 56    |    DIO 60    |    DIO 15    |

### Sinking Output

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_module_12ch_DIO_sinking_output.png" alt="Sinking Output" width="60%" />
</div>

### Sourcing Output

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_module_12ch_DIO_sourcing_output.png" alt="Sourcing Output" width="60%" />
</div>

:::caution
*   **Sinking Output**: Install upper resistor pack. Output is 0V; the input end must be common anode (24V).
*   **Sourcing Output**: Install lower resistor pack. Output is 24V; the input end must be common cathode (0V).
:::
