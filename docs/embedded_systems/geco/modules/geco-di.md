---
sidebar_position: 5
sidebar_label: '24ch DI'
description: 24ch 數位輸入模組規格與腳位定義
---

# 24ch DI 模組

本模組提供 24 通道數位輸入，支援 NPN/PNP 架構，具備光耦合隔離保護。

## 1. 規格

| 項目           | 規格                                    |
| :------------- | :-------------------------------------- |
| **外部電源**   | 24V DC                                 |
| **連接器**     | IDC 50P Connector                       |
| **通道數**     | 24 ch (NPN/PNP)                        |
| **隔離**       | Opto-isolated (24V)                     |

## 2. 外觀與腳位圖

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_20_X219.jpg" alt="DI Module Appearance" width="60%" />
</div>

### Pinout

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_21_X225.png" alt="DI Module Pinout" width="60%" />
</div>

#### Port A

| Pin Description | Pin Number | Pin Number | Pin Description |
| :-------------- | :--------: | :--------: | :-------------- |
| GND             |     1      |     2      |                 |
| DI_1            |     3      |     4      | GND             |
| DI_2            |     5      |     6      | GND             |
| DI_3            |     7      |     8      | GND             |
| DI_4            |     9      |     10     |                 |
| DI_5            |     11     |     12     | GND             |
| DI_6            |     13     |     14     | GND             |
| DI_7            |     15     |     16     | GND             |
| DI_8            |     17     |     18     | GND             |
| DI_9            |     19     |     20     | GND             |
| DI_10           |     21     |     22     | GND             |
| DI_11           |     23     |     24     | GND             |
| DI_12           |     25     |     26     | GND             |

#### Port B

| Pin Description | Pin Number | Pin Number | Pin Description |
| :-------------- | :--------: | :--------: | :-------------- |
| DI_13           |     27     |     28     | GND             |
| DI_14           |     29     |     30     | GND             |
| DI_15           |     31     |     32     |                 |
| DI_16           |     33     |     34     | GND             |
| DI_17           |     35     |     36     | GND             |
| DI_18           |     37     |     38     | GND             |
| DI_19           |     39     |     40     | GND             |
| DI_20           |     41     |     42     | GND             |
| DI_21           |     43     |     44     | 5V              |
| DI_22           |     45     |     46     | GND             |
| DI_23           |     47     |     48     | 5V              |
| DI_24           |     49     |     50     | GND             |

### Quick reference for GECO FPGA User

| 24ch DI module | RMC-Breakout | RMC-Breakout | RMC-Breakout | RMC-Breakout |
| :------------- | :----------: | :----------: | :----------: | :----------: |
|                |      C4      |      C3      |      C2      |      C1      |
| DI_1           |    DIO 80    |    DIO 20    |    DIO 24    |    DIO 28    |
| DI_2           |    DIO 48    |    DIO 35    |    DIO 39    |    DIO 43    |
| DI_3           |    DIO 16    |    DIO 3     |    DIO 7     |    DIO 11    |
| DI_4           |    DIO 81    |    DIO 85    |    DIO 89    |    DIO 93    |
| DI_5           |    DIO 17    |    DIO 21    |    DIO 25    |    DIO 29    |
| DI_6           |    DIO 64    |    DIO 68    |    DIO 72    |    DIO 76    |
| DI_7           |    DIO 0     |    DIO 4     |    DIO 8     |    DIO 12    |
| DI_8           |    DIO 82    |    DIO 86    |    DIO 90    |    DIO 94    |
| DI_9           |    DIO 49    |    DIO 53    |    DIO 57    |    DIO 61    |
| DI_10          |    DIO 65    |    DIO 59    |    DIO 73    |    DIO 77    |
| DI_11          |    DIO 32    |    DIO 36    |    DIO 40    |    DIO 44    |
| DI_12          |    DIO 50    |    DIO 54    |    DIO 58    |    DIO 62    |
| DI_13          |    DIO 18    |    DIO 22    |    DIO 26    |    DIO 30    |
| DI_14          |    DIO 33    |    DIO 37    |    DIO 41    |    DIO 45    |
| DI_15          |    DIO 1     |    DIO 5     |    DIO 9     |    DIO 13    |
| DI_16          |    DIO 83    |    DIO 87    |    DIO 91    |    DIO 95    |
| DI_17          |    DIO 19    |    DIO 23    |    DIO 27    |    DIO 31    |
| DI_18          |    DIO 66    |    DIO 70    |    DIO 74    |    DIO 78    |
| DI_19          |    DIO 2     |    DIO 6     |    DIO 10    |    DIO 14    |
| DI_20          |    DIO 84    |    DIO 88    |    DIO 92    |    DIO 63    |
| DI_21          |    DIO 51    |    DIO 55    |    DIO 59    |    DIO 79    |
| DI_22          |    DIO 67    |    DIO 71    |    DIO 75    |    DIO 46    |
| DI_23          |    DIO 34    |    DIO 38    |    DIO 42    |    DIO 47    |
| DI_24          |    DIO 52    |    DIO 56    |    DIO 60    |    DIO 15    |



### Sourcing Input

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_23_X236.png" alt="Sourcing Input" width="60%" />
</div>

### Sinking Input

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_23_X242.png" alt="Sinking Input" width="60%" />
</div>

