---
sidebar_position: 2
sidebar_label: '16ch Digital Potentiometers'
description: 16ch 可變電阻模組規格與腳位定義
---

# 16ch Digital Potentiometers 模組

本模組提供 16 通道數位可變電阻，可透過軟體控制電阻值。

## 1. 規格

| 項目           | 規格                                   |
| :------------- | :------------------------------------- |
| **連接器**     | IDC 50P Connector                      |
| **通道數**     | 16 ch (同步輸出)                       |
| **輸出範圍**   | 10K Ω / 50K Ω / 100K Ω                 |
| **更新率**     | 100 Hz                                 |
| **隔離**       | Channel to ground isolation            |

## 2. 外觀與腳位圖

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_11_X156.jpg" alt="DPOT Module Appearance" width="60%" />
</div>

### Pinout

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_12_X162.png" alt="DPOT Module Pinout" width="60%" />
</div>

| Pin Description | Pin Number | Pin Number | Pin Description |
| :-------------- | :--------: | :--------: | :-------------- |
| GND             |     1      |     2      |                 |
| CS1             |     3      |     4      |                 |
| CS2             |     5      |     6      | GND             |
| CS3             |     7      |     8      | GND             |
| CS4             |     9      |     10     | GND             |
| CS5             |     11     |     12     |                 |
| CS6             |     13     |     14     | GND             |
| CS7             |     15     |     16     | GND             |
| CS8             |     17     |     18     | GND             |
| CS9             |     19     |     20     | GND             |
| CS10            |     21     |     22     | GND             |
| CS11            |     23     |     24     | GND             |
| CS12            |     25     |     26     | GND             |
| CS13            |     27     |     28     | GND             |
| CS14            |     29     |     30     | GND             |
| CS15            |     31     |     32     |                 |
| CS16            |     33     |     34     | GND             |
| -               |     35     |     36     | GND             |
| -               |     37     |     38     | GND             |
| -               |     39     |     40     | GND             |
|                 |     41     |     42     | GND             |
|                 |     43     |     44     | 5V              |
|                 |     45     |     46     | GND             |
|                 |     47     |     48     | 5V              |
|                 |     49     |     50     | GND             |


### Quick reference for GECO FPGA User

| Digital Pot | RMC-Breakout | RMC-Breakout | RMC-Breakout | RMC-Breakout |
| :---------- | :----------: | :----------: | :----------: | :----------: |
|             |      C4      |      C3      |      C2      |      C1      |
| Ch1         |    DIO 80    |    DIO 20    |    DIO 24    |    DIO 28    |
| Ch2         |    DIO 48    |    DIO 35    |    DIO 39    |    DIO 43    |
| Ch3         |    DIO 16    |    DIO 3     |    DIO 7     |    DIO 11    |
| Ch4         |    DIO 81    |    DIO 85    |    DIO 89    |    DIO 93    |
| Ch5         |    DIO 17    |    DIO 21    |    DIO 25    |    DIO 29    |
| Ch6         |    DIO 64    |    DIO 68    |    DIO 72    |    DIO 76    |
| Ch7         |    DIO 0     |    DIO 4     |    DIO 8     |    DIO 12    |
| Ch8         |    DIO 82    |    DIO 86    |    DIO 90    |    DIO 94    |
| Ch9         |    DIO 49    |    DIO 53    |    DIO 57    |    DIO 61    |
| Ch10        |    DIO 65    |    DIO 59    |    DIO 73    |    DIO 77    |
| Ch11        |    DIO 32    |    DIO 36    |    DIO 40    |    DIO 44    |
| Ch12        |    DIO 50    |    DIO 54    |    DIO 58    |    DIO 62    |
| Ch13        |    DIO 18    |    DIO 22    |    DIO 26    |    DIO 30    |
| Ch14        |    DIO 33    |    DIO 37    |    DIO 41    |    DIO 45    |
| Ch15        |    DIO 1     |    DIO 5     |    DIO 9     |    DIO 13    |
| Ch16        |    DIO 83    |    DIO 87    |    DIO 91    |    DIO 95    |
|             |    DIO 19    |    DIO 23    |    DIO 27    |    DIO 31    |
|             |    DIO 66    |    DIO 70    |    DIO 74    |    DIO 78    |
|             |    DIO 2     |    DIO 6     |    DIO 10    |    DIO 14    |
|             |    DIO 84    |    DIO 88    |    DIO 92    |    DIO 63    |
|             |    DIO 51    |    DIO 55    |    DIO 59    |    DIO 79    |
|             |    DIO 67    |    DIO 71    |    DIO 75    |    DIO 46    |
|             |    DIO 34    |    DIO 38    |    DIO 42    |    DIO 47    |
|             |    DIO 52    |    DIO 56    |    DIO 60    |    DIO 15    |


## 3. DIO ctrl.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_14_X175.png" alt="DIO ctrl." width="60%" />
</div>


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_14_X177.png" alt="DIO ctrl." width="60%" />
</div>


### Paralleling or Stacking


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_15_X183.png" alt="Paralleling or Stacking." width="60%" />
</div>


### Voltage diff. across a resistor


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_15_X185.png" alt="Voltage diff. across a resistor." width="60%" />
</div>
