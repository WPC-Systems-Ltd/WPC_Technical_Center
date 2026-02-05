---
sidebar_position: 12
sidebar_label: 'Motion'
---

# Motion

Motion (運動控制) 面板提供完整的軸控功能測試環境。您可以即時監控軸卡狀態、設定 I/O 參數、執行原點復歸 (Find Reference)、以及直接下達運動指令控制馬達。

此外，面板支援將當前設定儲存為組態檔案 (*.INI)，方便後續程式開發快速載入。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/motion.png" alt="Motion Test Panel" width="60%" />
</div>

## 即時狀態監控 (Status Monitor)

面板上方區域顯示各軸的即時狀態資訊：

| 狀態指示燈/數值        | 說明                                                 |
| :--------------------- | :--------------------------------------------------- |
| **Logical Pos**        | 邏輯位置 (即軸卡輸出的脈波累積位置)。                |
| **Encoder Pos**        | 編碼器 (Encoder) 回授的實際位置。                    |
| **F**                  | 正向極限 (Forward Limit) 開關觸發狀態。              |
| **R**                  | 反向極限 (Reverse Limit) 開關觸發狀態。              |
| **H**                  | 原點 (Home) 開關觸發狀態。                           |
| **INP**                | 到位訊號 (In-Position)，指示馬達是否已到達目標位置。 |
| **ALM**                | 警報訊號 (Alarm)，指示驅動器是否發生錯誤。           |
| **Stop(紅)/Start(綠)** | 馬達運轉狀態指示。                                   |

## 功能工具列

| 圖示                                                                               | 功能說明                                                  |
| :--------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| <img src="/img/wpc_device_manager/testPanel/open-config-panel.png" width="30" />   | **Open Configuration Panel**：開啟運動控制 I/O 設定面板。 |
| <img src="/img/wpc_device_manager/testPanel/servo-on-off.png" width="30" />       | **Servo On/Off**：切換伺服激磁狀態。                      |
| <img src="/img/wpc_device_manager/testPanel/halt.png" width="30" />               | **Halt**：緊急暫停馬達運轉。                              |
| <img src="/img/wpc_device_manager/testPanel/move.png" width="30" />               | **Interactive Control**：開啟互動式移動控制面板。         |
| <img src="/img/wpc_device_manager/testPanel/reset.png" width="30" />              | **Reset Position**：重置邏輯位置計數為 0。                |

## I/O 設定面板 (Configuration)

點擊設定圖示後，可針對軸卡 I/O 行為進行詳細組態：

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/motion-config.png" alt="Motion I/O config panel" width="60%" />
</div>

| 參數設定              | 選項                                | 說明                                                                  |
| :-------------------- | :---------------------------------- | :-------------------------------------------------------------------- |
| **Stepper Output**    | `Step/Dir` (1P)<br/>`CW/CCW` (2P)   | 設定脈波輸出模式：單脈波或雙脈波。                                    |
| **Axis Direction**    | `Original`<br/>`Inverse`            | 設定馬達旋轉方向。                                                    |
| **Encoder Direction** | `Original`<br/>`Inverse`            | 設定編碼器計數方向。                                                  |
| **Servo On Polarity** | `Active Low`<br/>`Active High`      | 設定 Servo On 訊號的極性。                                            |
| **Encoder Ring**      | `Disable`<br/>`Enable`              | 啟用或停用環狀計數模式。                                              |
| **Step Per Revolution**| (數值)                              | 設定馬達轉一圈所需的脈波數。                                          |
| **Encoder Divisor**   | (數值)                              | 設定編碼器除頻比例。                                                  |
| **Limit Protection**  | `Disable`<br/>`Enable`              | 分別啟用 Forward/Reverse 極限保護。                                   |
| **Signal Polarity**   | `Active Low`<br/>`Active High`      | 設定 Forward, Reverse, Home, Index, Alarm, In-position 等訊號的極性。 |
| **Limit Stop Type**   | `Decelerate`<br/>`Halt`             | 設定觸發限位時的停止方式 (減速停止或立即煞停)。                       |
| **Apply All**         | (按鈕)                              | 將目前設定套用至所有軸。                                              |

## 互動控制與測試

### 1. 簡易移動 (Simple Move)

提供基本的 PTP (點對點) 移動測試功能。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/simple-move.png" alt="Simple Move" width="60%" />
</div>

| 參數              | 說明                                                                                        |
| :---------------- | :------------------------------------------------------------------------------------------ |
| **Operation Mode**| 移動模式選擇：<br/>• **Absolute**：絕對位置移動<br/>• **Relative**：相對位置移動<br/>• **Velocity**：速度模式 (連續運轉) |
| **Target Position**| 設定目標位置 (Step)。                                                                       |
| **Velocity**      | 設定運行速度 (Step/sec)。                                                                   |
| **Accel / Decel** | 設定加速度與減速度 (Step/sec²)。                                                            |
| **Blend**         | 用於在運轉中即時更新目標位置或速度。                                                        |
| **Run / Stop**    | 啟動或停止馬達運轉。                                                                        |

### 2. 原點復歸 (Find Reference)

執行自動尋原點程序。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/find-ref.png" alt="Find Ref" width="60%" />
</div>

| 參數              | 說明                                                          |
| :---------------- | :------------------------------------------------------------ |
| **Target Mode**   | 選擇參考點類型：Home, Forward Limit, Reverse Limit, 或 Index。|
| **Search Direction**| 設定初次搜尋的方向。                                          |
| **Velocity Profile**| 設定搜尋速度、加速度及接近速度 (Approach Velocity)。          |
| **Offset Position**| 尋獲原點後的偏移移動量。                                      |
| **Reset Position**| 尋獲後是否將位置歸零。                                        |
| **Find / Stop**   | 執行或停止尋原點動作。                                        |
| **State**         | 顯示目前狀態：Idle (閒置), Finding (搜尋中), Found (已尋獲)。 |
