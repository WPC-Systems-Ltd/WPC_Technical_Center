---
sidebar_position: 2
sidebar_label: '12ch DI / 12ch DO Module'
---

# 12ch DI / 12ch DO Module

本模組提供 12 通道數位輸入 (DI) 與 12 通道數位輸出 (DO) 功能，適用於 24V 工業控制轉接。

## 規格

| 項目              | 規格                                  |
| :---------------- | :------------------------------------ |
| **外部電源**      | 24 VDC                                |
| **連接器**        | IDC 50P Connector                     |
| **數位輸出 (DO)** | 12 ch，支援 NPN/PNP，光耦合隔離 (24V) |
| **數位輸入 (DI)** | 12 ch，支援 NPN/PNP，光耦合隔離 (24V) |

## 外觀

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_8_img_X118.png" alt="DIO Module Appearance" width="60%" />
</div>

## 腳位圖

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_9_img_X126.png" alt="DIO Module Pinout" width="60%" />
</div>

## 接線說明

本模組支援 Sinking 與 Sourcing 接線模式，需透過轉接板上的電阻進行配置。


### Sinking Out + Sourcing In

*   ⚠️ 安裝**上排**電阻
*   輸出 (Output) 為 Sinking (0V active)
*   輸入 (Input) 必須為共陽極 (Common Anode, 24V)

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_11_img_X141.png" alt="Sourcing Out + Sinking In" width="60%" />
</div>

### Sourcing Out + Sinking In

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_12_img_X150.png" alt="Sourcing Out + Sinking In" width="60%" />
</div>

*   ⚠️ 安裝**下排**電阻
*   輸出 (Output) 為 Sourcing (24V active)
*   輸入 (Input) 必須為共陰極 (Common Cathode, 0V)


## Quick reference for GECO FPGA User

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


