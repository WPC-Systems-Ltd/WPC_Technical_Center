---
title: 通用型子板
sidebar_position: 2
description: 適用於各類步進與伺服馬達的通用接線板
---

# 通用型子板

## 1. 產品概述

本通用型子板專為運動控制模組設計，採用標準歐規端子台介面。其設計目的在於提供極高的配線彈性，將所有控制訊號拉出，使開發者能自由連接市面上絕大多數的步進馬達 (Stepper Motor) 與伺服馬達 (Servo Motor) 驅動器。

## 2. 硬體與應用

### 2.1 適用情境
*   **多品牌驅動器整合**：當系統需混用不同廠牌驅動器時。
*   **客製化配線**：需連接特殊規格或非標準腳位的馬達驅動器。
*   **原型開發**：在驗證階段需頻繁調整接線定義時。

### 2.2 端子配置說明
子板上配置了四組主要的歐規端子台，依據訊號特性進行分區：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/motion_card_general_board.png" alt="General Breakout Board" width="60%" />
</div>

*   **T1 / T3 端子台 (高速訊號區)**：
    *   負責處理馬達的 **脈波指令 (Pulse Output)** 與 **編碼器回授 (Encoder Input)**。
    *   **T1** 對應 **軸 1**；**T3** 對應 **軸 2**。
*   **T2 / T4 端子台 (I/O 控制區)**：
    *   負責處理 **伺服管理 (Servo On/Alarm)** 與 **極限感測 (Limit/Home)** 等 I/O 訊號。
    *   **T2** 對應 **軸 3**；**T4** 對應 **軸 4**。

## 3. 腳位定義與訊號說明

### 3.1 T1/T3 端子台 (高速訊號)

此區塊提供馬達控制所需的高速差動訊號。

*   **差動輸出 (Differential Output)**：傳送 STEP/DIR 或 CW/CCW 脈波指令至驅動器。
*   **差動輸入 (Differential Input)**：接收來自馬達的 A/B/Z 正交編碼器訊號。
    *   *註：若不使用 Z 相尋原點功能 (Find INDEX)，ENC_Z 可不接。*

#### T1/T3 訊號說明表

| Pin# | Name   | Level | Type         | Dir | Description                     |
| :--- | :----- | :---- | :----------- | :-- | :------------------------------ |
| **1**| Step   | 5V    | Differential | Out | Step/Pulse/CW output signal     |
| **2**| Step   | 5V    | Differential | Out | Step/Pulse/CW output signal     |
| **3**| Dir+   | 5V    | Differential | Out | Direction/CCW output signal     |
| **4**| Dir-   | 5V    | Differential | Out | Direction/CCW output signal     |
| **5**| Enc_A+ | 5V    | Differential | In  | Encoder Phase A+                |
| **6**| Enc_A- | 5V    | Differential | In  | Encoder Phase A-                |
| **7**| Enc_B+ | 5V    | Differential | In  | Encoder Phase B+                |
| **8**| Enc_B- | 5V    | Differential | In  | Encoder Phase B-                |
| **9**| Enc_Z+ | 5V    | Differential | In  | Encoder Phase Z+                |
| **10**| Enc_Z- | 5V    | Differential | In  | Encoder Phase Z-                |

---

### 3.2 T2/T4 端子台 (I/O 控制)

此區塊整合了運動控制所需的各類開關與觸發訊號。

*   **開集極輸出 (Open Collector Output)**：Servo On 與 Alarm Clear，適用於控制驅動器狀態。
*   **光耦合輸入 (Opto-coupler Input)**：Forward (正極限)、Reverse (負極限)、Home (原點)，此區塊支援 **24V** 電壓，方便與工業感測器介接。
*   **TTL 訊號 (5V)**：
    *   **Break-point (BP)**：位置比較輸出 (Trigger Out)。
    *   **Capture (CAP)**：位置捕捉輸入 (Trigger In)。

:::warning 注意事項
**BP** (Breakpoint) 與 **CAP** (Capture) 為 **5V TTL** 訊號，嚴禁連接 24V 電壓。
若不慎連接 24V 訊號 (如誤接至 Limit Switch 的 24V 迴路)，將導致軸卡電路即刻損壞。
:::

#### T2/T4 訊號說明表

| Pin# | Name     | Level | Type           | Dir     | Description                                     |
| :--- | :------- | :---- | :------------- | :------ | :---------------------------------------------- |
| **1**| Servo on | 24V   | Open-collector | Out     | Serve on output signal / inhibit out            |
| **2**| ALM      | 24V   | Open-collector | Out     | Alarm clear output signal                       |
| **3**| FWD      | 24V   | Optocoupler    | In      | Forward limit switch input signal               |
| **4**| REV      | 24V   | Optocoupler    | In      | Reverse limit switch input signal               |
| **5**| HOME     | 24V   | Optocoupler    | In      | Home limit switch input signal                  |
| **6**| 24V      | 24V   | Power          | Out     | Power output for limit switch                   |
| **7**| 24V      | 24V   | Power          | Out     | Power output for limit switch                   |
| **8**| GND      |       | Power          | Out/Ref | Power output for limit switch /Signal reference |
| **9**| GND      |       | Power          | Out/Ref | Power output for limit switch /Signal reference |
| **10**| BP      | 5V    | Single-ended   | Out     | Break-point output signal                       |
| **11**| CAP     | 5V    | Single-ended   | In      | Capture input signal                            |
| **12**| GND     |       | Power          | Out/Ref | Signal reference for BP / CAP                   |
