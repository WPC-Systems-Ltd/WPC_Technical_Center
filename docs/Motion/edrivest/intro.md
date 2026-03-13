---
sidebar_position: 1
sidebar_label: '產品介紹'
description: EDrive-ST 步進馬達驅動器產品簡介
---

# EDrive-ST

## 產品介紹

WPC EDrive-ST 是一款配備網路介面的**單軸步進馬達整合型驅動器**，能直接連接兩相（2-phase）步進馬達、增量型編碼器與極限開關。無需額外的軸控卡，只需一台電腦與一條網路線，即可完成步進馬達的控制。

憑藉小巧的體積與簡單的接線，EDrive-ST 廣泛應用於半導體設備、小型實驗設備及科研儀器等領域。採用直流電源供電，最高支援 36V，特別適合移動載具、太陽能光電、儲能系統等直流供電環境。


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST.png" alt="EDriveST" width="60%" />
</div>


### 核心特色

| 特色                | 說明                                                         |
| :------------------ | :----------------------------------------------------------- |
| 整合型設計          | 內建馬達驅動器與網路控制介面，無須搭配額外軸卡               |
| 彈性控制            | 支援位置控制與速度控制模式                                   |
| 高解析微步進        | 最高 51200 steps/rev（可依需求調整）                         |
| 豐富 I/O            | 支援 ABZ 差動編碼器、Home / FWD / REV 極限開關               |
| 智慧功能            | 具備失速偵測、智慧節能與驅動器診斷功能                       |
| 多語言 SDK          | 支援 Python、C# 及 LabVIEW 開發環境                         |

### 系統架構圖

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_system_diagram.png" alt="EDriveST_system_diagram" width="60%" />
</div>

:::caution
EDrive-ST 僅支援**兩相**步進馬達（2-phase stepper motor）。
:::

## 主要規格

| 規格項目                 | 說明                                      |
| :----------------------- | :---------------------------------------- |
| 電源輸入                 | 24VDC（最高支援 36V）                     |
| 網路介面                 | 10/100 T-based Ethernet                   |
| 馬達種類                 | 兩相（2-phase）步進馬達                   |
| 微步進解析度             | 51200 steps/rev（可調整）                 |
| 最大輸出電流             | 2.1A（峰值 5A）                           |
| 編碼器                   | ABZ 增量型（標稱 8MHz）                   |
| 極限開關輸入             | Home / FWD / REV                          |
| 其他功能                 | 失速偵測 / 智慧節能 / 診斷功能            |
| 加減速曲線               | 8 段斜坡加速平滑                          |
| 支援開發環境             | Python、C#、LabVIEW                      |


## 外觀說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_IO.png" alt="EDriveST_IO" width="60%" />
</div>


以下說明由數字大小依序：

1. Protective earth (PE)
2. Ethernet RJ-45 connector
3. LED1 / LED2
4. Encoder IO (Differential / RSE)
5. Limit switches
6. Stepper motor (2-phase only)
7. DC power input
8. OLED panel
9. FUNC button
10. RESET button

## Connector 4 — 編碼器輸入

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_connector.png" alt="EDriveST_connector" width="60%" />
</div>

| Pin | 名稱    | 說明                          |
| :-: | :------ | :---------------------------- |
|  1  | 5V (out)| 5V 電源輸出，可供編碼器使用   |
|  2  | GND     | 接地                          |
|  3  | ENC_A+  | 編碼器 A 相正端               |
|  4  | ENC_A-  | 編碼器 A 相負端               |
|  5  | ENC_B+  | 編碼器 B 相正端               |
|  6  | ENC_B-  | 編碼器 B 相負端               |
|  7  | ENC_Z+  | 編碼器 Z 相正端               |
|  8  | ENC_Z-  | 編碼器 Z 相負端               |

Connector 4 為編碼器輸入端子，上方的 Pin1為 5V 電源、Pin2 為GND，可用來作為編碼器電源使用。

### 差動式編碼器（Differential）

EDrive-ST 預設支援差動式編碼器，電壓準位為 5V TTL。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_diff.png" alt="EDriveST_diff" width="60%" />
</div>

### 單端式編碼器（Single-ended）

若使用單端式編碼器，則須將編碼器輸出分別連接至 ENC_A/B/C+ 端，ENC_A/B/C- 端則懸空不接。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_single.png" alt="EDriveST_single" width="60%" />
</div>

:::info
若需使用單端式（Single-ended）編碼器，請於出貨前告知 WPC 或經銷夥伴。
:::

## Connector 5 — 極限開關輸入

| Pin | 名稱      | 說明                  |
| :-: | :-------- | :-------------------- |
|  1  | LIM_REV+  | 反向極限開關正端      |
|  2  | LIM_REV-  | 反向極限開關負端      |
|  3  | LIM_FWD+  | 正向極限開關正端      |
|  4  | LIM_FWD-  | 正向極限開關負端      |
|  5  | LIM_HOM+  | 原點極限開關正端      |
|  6  | LIM_HOM-  | 原點極限開關負端      |

### 內建 6.8k 限流電阻

EDrive-ST 極限輸入等效電路，內建 6.8k 限流電阻（無須外接）。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_current_limit_resistor.png" alt="EDriveST_current_limit_resistor" width="60%" />
</div>

### NPN 型極限開關

LIM_FWD/REV/HOM+ 接 24V（共陽極），極限開關 Output 接 LIM_FWD/REV/HOM-。


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_NPN.png" alt="EDriveST_NPN" width="60%" />
</div>

### PNP 型極限開關

LIM_FWD/REV/HOM- 接 0V（共陰極），極限開關 Output 接 LIM_FWD/REV/HOM+。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_PNP.png" alt="EDriveST_PNP" width="60%" />
</div>

### 機械式極限開關

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_traditional_1.png" alt="EDriveST_traditional_1" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_traditional_2.png" alt="EDriveST_traditional_2" width="60%" />
</div>

## Connector 6 — 步進馬達輸出

| Pin | 名稱 | 說明         |
| :-: | :--- | :----------- |
|  1  | B\   | B 相負端     |
|  2  | B    | B 相正端     |
|  3  | A\   | A 相負端     |
|  4  | A    | A 相正端     |

### 四線式步進馬達接線方式

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_4wire.png" alt="EDriveST_4wire" width="60%" />
</div>

### 六線式步進馬達接線方式

線圈中間的 common 不接，只接頭尾

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveST_6wire.png" alt="EDriveST_6wire" width="60%" />
</div>

## Connector 7 — 電源輸入

| Pin | 名稱 | 說明          |
| :-: | :--- | :------------ |
|  1  | 24V  | 直流電源正端  |
|  2  | 0V   | 接地          |

標準電源輸入值為 24VDC。
