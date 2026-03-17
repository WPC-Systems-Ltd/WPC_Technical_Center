---
title: Product Compatibility
sidebar_position: 3
description: Overview of functions and channel counts with hardware resource exclusion table, clearly indicating collision limits for I2C/SPI/UART/PWM/AI/AO, etc.
---


## Functions and Channel Count List

|               | Function  | 3.3V-DIO | 24V-DO | 24V-DI |  AI   |  AO   |  TC   |  RTD  |  CAN  |
| :------------ | :-------- | :------: | :----: | :----: | :---: | :---: | :---: | :---: | :---: |
| USB-DAQ-D     | DIO       |    26    |        |        |       |       |       |       |       |
| USB-DAQ-D-SNK | 24V-DIO   |          |   12   |   14   |       |       |       |       |       |
| USB-DAQ-AD    | DIO+AI    |    20    |        |        |   8   |       |       |       |       |
| USB-DAQ-AOD   | DIO+AI+AO |    16    |        |        |   8   |   8   |       |       |       |
| USB-DAQ-TD    | DIO+TC    |    21    |        |        |       |       |   2   |       |       |
| USB-DAQ-RD    | DIO+RTD   |    21    |        |        |       |       |       |   2   |       |
| USB-DAQ-CD    | DIO+CAN   |    20    |        |        |       |       |       |       |   1   |

## Compatibility Notes

---

WPC-USB-DAQ series products use a highly integrated microcontroller architecture. Some functional modules (such as PWM, Encoder, SPI, etc.) share key internal hardware resources (including Timers, Interrupts, or physical DMA channels). Therefore, certain combinations of functions are mutually exclusive at the hardware level and cannot operate simultaneously.

This section provides a "Resource Mutual Exclusion Table" to assist users in evaluating functional feasibility during the system design and software development phases.

> 💡 **Note**: Please refer to the table below before purchasing products or writing programs. If your application scenario requires multiple functions to be enabled simultaneously, please confirm that they are **not** marked as resource conflicts in the table.

### How to Read the Resource Mutual Exclusion Table

The table below lists the compatibility status between functional modules.
- **Rows and Columns**: Represent the two functions to be enabled.
- **Marked "X"**: Indicates a resource conflict between the two functions; they **cannot be enabled simultaneously**.
- **Blank**: Indicates that the two functions use independent hardware resources and can be enabled simultaneously.

### USB-DAQ-D-SNK

|      | PWM0 | PWM1 | CTR0 | CTR1 | Enc |
| :--- | :--: | :--: | :--: | :--: | :-: |
| PWM0 |      |      |      |      |     |
| PWM1 |      |      |      |  X   |  X  |
| CTR0 |      |      |      |      |     |
| CTR1 |      |  X   |      |      |  X  |
| Enc  |      |  X   |      |  X   |     |

> 💡 X indicates that Function A and Function B cannot be enabled at the same time.

### Other Models (Except USB-DAQ-D-SNK)

---

|       | I2C1 | I2C2 | SPI1 | SPI2 | UART1 | UART2 | PWM0 | PWM1 | CTR0 | CTR1 | Enc |  AI   |  AO   |  TC   |  RTD  |  CAN  |
| :---- | :--: | :--: | :--: | :--: | :---: | :---: | :--: | :--: | :--: | :--: | :-: | :---: | :---: | :---: | :---: | :---: |
| I2C1  |      |      |  X   |      |       |       |      |      |      |      |     |   X   |       |   X   |   X   |   X   |
| I2C2  |      |      |      |  X   |       |       |      |      |      |      |     |       |   X   |       |       |       |
| SPI1  |  X   |      |      |      |       |       |      |      |      |      |     |   X   |       |   X   |   X   |   X   |
| SPI2  |      |  X   |      |      |       |       |      |      |      |      |     |       |   X   |       |       |       |
| UART1 |      |      |      |      |       |       |      |      |      |      |     |       |       |       |       |       |
| UART2 |      |      |      |      |       |       |      |      |      |      |     |       |       |       |       |       |
| PWM0  |      |      |      |      |       |       |      |      |  X   |      |     |       |       |       |       |       |
| PWM1  |      |      |      |      |       |       |      |      |      |  X   |  X  |       |       |       |       |       |
| CTR0  |      |      |      |      |       |       |  X   |      |      |      |     |       |       |       |       |       |
| CTR1  |      |  X   |      |      |       |       |      |  X   |      |      |  X  |       |       |       |       |       |
| Enc   |      |  X   |      |      |       |       |      |  X   |      |  X   |     |       |       |       |       |       |
| AI    |  X   |      |  X   |      |       |       |      |      |      |      |     |       |       |       |       |       |
| AO    |      |  X   |      |  X   |       |       |      |      |      |      |     |       |       |       |       |       |
| TC    |  X   |      |  X   |      |       |       |      |      |      |      |     |       |       |       |       |       |
| RTD   |  X   |      |  X   |      |       |       |      |      |      |      |     |       |       |       |       |       |
| CAN   |  X   |      |  X   |      |       |       |      |      |      |      |     |       |       |       |       |       |

> 💡 X indicates that Function A and Function B cannot be enabled at the same time.
