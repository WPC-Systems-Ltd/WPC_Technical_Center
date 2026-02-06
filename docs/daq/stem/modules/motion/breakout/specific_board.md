---
title: 專用型子板
sidebar_position: 3
sidebar_label: '專用型子板'
description: 針對各大廠牌伺服驅動器設計的專用對接板
---

# 專用型子板

## 1. 產品概述

本系列子板專為各大廠牌伺服驅動器量身打造，旨在簡化配線複雜度並提升系統可靠性。透過專用的 SCSI-50P 線材，使用者可實現 **Pin-to-Pin 直連**，免去繁瑣的單線對接工序，大幅降低配線錯誤風險。專用型子板上的歐規端子主要用於連接極限開關、斷點和捕獲訊號，這些訊號與馬達驅動器無關，因此需要額外連接。

子板適用於以下主流伺服馬達品牌：
*   **Delta (台達)**: ASDA-A2 / ASDA-B2
*   **Panasonic (松下)**: Minas A4 / A5 / A6
*   **Yaskawa (安川)**: SGDV / SGD7
*   **Mitsubishi (三菱)**: MR-J4 / JE / MR-J2S

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_16_img_X178.png" alt="專用型子版" width="60%" />
</div>

## 2. 支援型號列表

:::warning 客製化服務
若您的驅動器型號未列於下表，WPC 提供付費客製化子板設計服務，歡迎洽詢。
:::

| 廠牌       | 型號           | 專用子板標示 | 備註                  |
| :--------- | :------------- | :----------- | :-------------------- |
| Yaskawa    | SGDV/SGD7      | S7           | SGDV/SGD7 腳位相同    |
| Mitsubishi | MR-J4/JE       | J4           | J4/JE 腳位相同        |
| Mitsubishi | MR-J2S         | J2S          | 舊款，與 J4/JE 不同   |
| Panasonic  | Minas A4/A5/A6 | A5           | A4/A5/A6 腳位相同     |
| Delta      | ASDA-B2        | B2           | 與 A2 腳位不同        |
| Delta      | ASDA-A2        | A2           | 與 B2 腳位不同        |

## 3. 功能配置與接線

### 3.1 系統架構
每張運動控制卡可支援兩個專用型子板，單一子板可控制 **2 軸**，兩塊子板組合即可達成完整的 **4 軸** 控制。

### 3.2 訊號連接
*   **伺服驅動訊號 (CN1 / CN2)**：
    *   透過 SCSI-50P 線材直接連接至驅動器。
*   **極限與觸發訊號 (T1 / T2 端子台)**：
    *   **極限開關 (Limit Switch)**：需連接至 T1/T2 歐規端子 (提供 24V 供電)。
    *   **位置捕捉/比較 (Capture/Breakpoint)**：提供 5V TTL 訊號介面，供外部設備 (如相機、DAQ) 同步觸發使用。

---

## 4. 各廠牌接線詳情

### 4.1 Delta ASDA-B2

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_18_img_X200.png" alt="Delta B2 Board" width="60%" />
</div>

- CN1 和 CN2 的 SCSI-50P 連接器可以通過 pin-to-pin SCSI-50P 接到 Delta ASDA-B2 伺服驅動器。
- T1 和 T2 的歐規端子台可用於連接極限開關，且上面的 24V 電源可以供應極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

#### 跳線設定

| 功能           | 設定 A (預設) | 設定 B         |
| :------------- | :------------ | :------------- |
| **輸出/輸入極性** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO 控制**   | **EMO Disable (內建電阻)**<br/>R1/R2 = OR | **EMO Ext. Control (外接)**<br/>R1/R2 = NC |

---

### 4.2 Delta ASDA-A2

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_19_img_X208.png" alt="Delta A2 Board" width="60%" />
</div>

- CN1 和 CN2 的 SCSI-50P 連接器可通過 pin-to-pin SCSI-50P 接到 Delta ASDA-A2 伺服驅動器。
- T1 和 T2 的歐規端子台可用於連接極限開關，並提供 24V 電源以供極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。下表顯示了出廠預設值。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

#### 跳線設定

| 功能           | 設定 A (預設) | 設定 B         |
| :------------- | :------------ | :------------- |
| **輸出/輸入極性** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO 控制**   | **EMO Disable (內建電阻)**<br/>R1/R2 = OR | **EMO Ext. Control (外接)**<br/>R1/R2 = NC |

---

### 4.3 Yaskawa SGDV / SGD7

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_17_img_X189.png" alt="Yaskawa Board" width="60%" />
</div>

- CN1 和 CN2 的 SCSI-50P 連接器可通過 pin-to-pin SCSI-50P 接到 Yaskawa SGDV/SGD7 伺服驅動器，兩者的接線圖相容。
- T1 和 T2 的歐規端子台可用於連接極限開關，並提供 24V 電源以供極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。下表顯示了出廠預設值。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

---

### 4.4 Panasonic Minas A4 / A5 / A6

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_21_img_X224.png" alt="Panasonic Board" width="60%" />
</div>

- CN1 和 CN2 的 SCSI-50P 連接器可通過 pin-to-pin SCSI-50P 接到 Panasonic Minas A4/A5/A6 伺服驅動器。
- T1 和 T2 的歐規端子台可用於連接極限開關，並提供 24V 電源以供極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。下表顯示了出廠預設值。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

#### 跳線設定

| 功能           | 設定 A (預設) | 設定 B         |
| :------------- | :------------ | :------------- |
| **輸出/輸入極性** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO 控制**   | **EMO Disable (內建電阻)**<br/>R1/R2 = OR | **EMO Ext. Control (外接)**<br/>R1/R2 = NC |

---

### 4.5 Mitsubishi MR-J4 / JE

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_22_img_X232.png" alt="Mitsubishi J4 Board" width="60%" />
</div>

- CN1 和 CN2 的 SCSI-50P 連接器可通過 pin-to-pin SCSI-50P 接到 Mitsubishi MR-J4/JE 伺服驅動器。
- T1 和 T2 的歐規端子台可用於連接極限開關，並提供 24V 電源以供極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。下表顯示了出廠預設值。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

---

### 4.6 Mitsubishi MR-J2S

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_23_img_X240.png" alt="Mitsubishi J2S Board" width="60%" />
</div>


- CN1A、CN1AB、CN2A 和 CN2B 的 SCSI-20P 連接器可以透過 pin-to-pin SCSI-50P 接到 Mitsubishi MR-J2S 伺服驅動器。
- T1 和 T2 的歐規端子台可用於連接極限開關，並提供 24V 電源以供極限開關使用。
- Capture 和 Breakpoint 信號為 5V TTL 格式，可用於與外部裝置（如相機、DAQ 等）同步。

#### 出廠預設值

| 訊號類型     | 邏輯設定       | 備註                           |
| :----------- | :------------- | :----------------------------- |
| **輸出訊號** | Sinking Output |                                |
| **輸入訊號** | Sourcing Input |                                |
| **緊急停止** | Enable         | 子板已內建電阻，不須外接 EMO   |

#### 跳線設定

| 功能           | 設定 A (預設) | 設定 B         |
| :------------- | :------------ | :------------- |
| **輸出/輸入極性** | **Sinking Out / Sourcing In**<br/>R6/R3 = OR<br/>R5/R4 = NC | **Sourcing Out / Sinking In**<br/>R6/R3 = NC<br/>R5/R4 = OR |
| **EMO 控制**   | **EMO Disable (內建電阻)**<br/>R1/R2 = OR | **EMO Ext. Control (外接)**<br/>R1/R2 = NC |
