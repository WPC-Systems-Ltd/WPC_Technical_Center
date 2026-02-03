---
title: Product Compatibility
sidebar_position: 3
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

## Compatibility Description

---

The WPC-USB-DAQ series adopts a highly integrated microcontroller architecture. Some functional modules (such as PWM, Encoder, SPI, etc.) share critical internal hardware resources (including Timers, Interrupts, or physical DMA channels). Therefore, certain functional combinations are mutually exclusive at the hardware level and cannot operate simultaneously.

This chapter provides a **Resource Conflict Matrix** to help users evaluate the feasibility of functions during the system design and software development stages.

> 💡 **Note**: Please refer to the table below before purchasing products or writing programs. If your application scenario requires enabling multiple functions simultaneously, please ensure they are **NOT** marked as resource conflicts in the comparison table.

### How to Read the Resource Conflict Matrix

The table below lists the compatibility status between functional modules.
- **Row and Column**: Represent the two functions to be enabled.
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

> 💡 X indicates that Function A and Function B cannot be enabled simultaneously.

### Models other than USB-DAQ-D-SNK

---

|       | I2C1 | I2C2 | SPI1 | SPI2 | UART1 | UART2 | PWM0 | PWM1 | CTR0 | CTR1 | Enc |  AI   |  AO   |  TC   |  RTD  |  CAN  |
| :---- | :--: | :--: | :--: | :--: | :---: | :---: | :--: | :--: | :--: | :--: | :-: | :---: | :---: | :---: | :---: | :---: |
| I2C1  |      |      |  X   |      |       |       |      |      |      |      |     |   X   |       |   X   |   X   |   X   |
| I2C2  |      |      |      |  X   |       |       |      |      |      |      |     |       |   X   |       |       |       |
| SPI1  |  X   |      |      |      |       |       |      |      |      |      |     |   X   |       |   X   |   X   |   X   |
| SPI2  |      |  X   |      |      |       |       |      |      |      |      |     |       |   X   |       |       |       |
| UART1 |      |      |      |      |       |       |      |      |      |      |     |       |       |       |       |       |
| UART2 |      |      |      |      |       |       |      |      |      |      |     |       |       |       |       |       |
| PWM0  |      |      |      |      |       |       |      |      |      |  X   |      |     |       |       |       |       |
| PWM1  |      |      |      |      |       |       |      |      |      |      |  X   |  X  |       |       |       |       |
| CTR0  |      |      |      |      |       |       |  X   |      |      |      |      |     |       |       |       |       |
| CTR1  |      |      |      |      |       |       |      |  X   |      |      |      |  X  |       |       |       |       |
| Enc   |      |      |      |      |       |       |      |  X   |      |  X   |     |       |       |       |       |       |
| AI    |  X   |      |  X   |      |       |       |      |      |      |      |      |     |       |       |       |       |
| AO    |      |  X   |      |  X   |       |       |      |      |      |      |      |     |       |       |       |       |
| TC    |  X   |      |  X   |      |       |       |      |      |      |      |      |     |       |       |       |       |
| RTD   |  X   |      |  X   |      |       |       |      |      |      |      |      |     |       |       |       |       |
| CAN   |  X   |      |  X   |      |       |       |      |      |      |      |      |     |       |       |       |       |

> 💡 X indicates that Function A and Function B cannot be enabled simultaneously.
