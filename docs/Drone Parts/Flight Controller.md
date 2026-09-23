---
title: 飛行控制器
sidebar_label: 飛行控制器
slug: /drone-parts/flight-controller
---

# 飛行控制器 | 支援 ArduPilot 與 PX4

本飛行控制器是一款基於 Pixhawk Autopilot v6X 標準所開發的頂尖通用控制器（飛控）。核心採用 STM32H753 雙精度浮點運算 FMU 處理器，並搭配 STM32F103 I/O 協同處理器，兩者具備獨立的匯流排架構與電源供應系統。系統內建多組 IMU，包含 6 軸慣性感測器、氣壓與溫度感測器，以及地磁感測器，專為確保高度飛行安全性與豐富擴充能力而設計。透過整合 10/100M 乙太網路實體層（PHY），飛控能與任務電腦（機載電腦/隨同電腦）、高階測繪相機及其他 UxV 載荷設備進行高速直接通訊，滿足先進無人載具系統的嚴苛需求。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/outlook.png').default} alt="flight-controller" width="60%" />
</div>

---

## 產品資訊

### 硬體規格摘要

| 項目 | 規格與描述 |
| :--- | :--- |
| **FMU 處理器** | STM32H753（Arm® Cortex®-M7，480 MHz） |
| **IO 處理器** | STM32F103（Arm® Cortex®-M3，72 MHz） |
| **記憶體** | 2 MB 快閃記憶體（Flash）、1 MB RAM |
| **感測器** | • Bosch BMI088 IMU 感測器（具減震隔離）<br />• TDK InvenSense ICM-42688-P IMU 感測器 ×2（其中 1 組具減震隔離）<br />• TDK ICP-20100 氣壓與溫度感測器 ×2（其中 1 組具減震隔離）<br />• PNI RM3100 地磁感測器（具減震隔離） |
| **IO 介面** | • 2 組 CAN 匯流排（CAN1 與 CAN2）<br />• 3 組 TELEM 數傳埠（TELEM1、TELEM2 與 TELEM3）<br />• 2 組 GPS 埠（安全開關/LED/蜂鳴器，以及 GPS2）<br />• 1 組 PPM 輸入（PPM IN）<br />• 1 組 SBUS 輸出（SBUS OUT）<br />• 2 組 USB 埠（1 組 Type-C 與 1 組 JST GH1.25）<br />• 1 組 10/100Base-T 乙太網路埠<br />• 1 組 DSM / SBUS RC 接收介面<br />• 1 組 UART4<br />• 1 組 AD&IO 類比與數位埠<br />• 2 組偵錯埠（1 組 IO Debug 與 1 組 FMU Debug）<br />• 1 組 SPI6 匯流排<br />• 2 組含 I2C 匯流排的電源輸入（Power 1 與 Power 2）<br />• 2 組含 CAN 匯流排的電源輸入（Power C1 與 Power C2）<br />• 16 組 PWM 伺服舵機輸出（A1–A8 來自 FMU 板的 STM32H753；M1–M8 來自 IO 板的 STM32F103）<br />• 1 組 MicroSD 插槽（推拉式 Push-Pull，支援 SD 4.1 與 SDIO 4.0，提供 1-bit 預設與 4-bit 兩種資料匯流排模式） |
| **MicroSD 卡** | 包裝內未隨附（需自行選購） |
| **電源需求** | 4.6 V 至 5.7 V |
| **額定輸出電流** | • TELEM1 與 GPS2 輸出電流總和：最大 1.5 A<br />• 其他所有連接埠合併輸出電流：最大 1.5 A |
| **作業溫度** | -40 °C 至 +55 °C |
| **儲存溫度** | -40 °C 至 +70 °C |
| **作業濕度** | 5% 至 95%（無冷凝） |
| **外殼材質** | ABS（載板）、壓鑄鋁合金（IMU 上蓋） |
| **外觀尺寸** | 92.2 mm（長）× 51.2 mm（寬）× 28.3 mm（高） |
| **重量** | 77.6 g（含 IMU 之載板重量） |

---

### 腳位定義

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/pin_definition.jpg').default} alt="pin-definition" width="60%" />
</div>

---

### 配線總覽

下圖展示本飛行控制器與各周邊設備的連接配置。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/wiring.jpg').default} alt="wiring" width="60%" />
</div>


| 介面名稱 | 功能與連接說明 |
| :--- | :--- |
| **POWER C1** | 連接 CAN PMU（電源管理模組）至 POWER C1，適用於 UAVCAN 電源模組。 |
| **POWER C2** | 連接 CAN PMU 至 POWER C2，適用於 UAVCAN 電源模組。 |
| **POWER 1** | 連接至 SMBus（I2C）電源模組。 |
| **POWER 2** | 連接至 SMBus（I2C）電源模組。 |
| **GPS & SAFETY** | 連接主要 GPS 模組（整合 GPS 接收器、安全開關與蜂鳴器介面）。 |
| **GPS2** | 連接第二組 GPS 或 RTK 模組。 |
| **UART4** | 提供使用者客製化通訊擴充使用。 |
| **TELEM1 / 2 / 3** | 連接數傳電台（Telemetry）或 MAVLink 設備。 |
| **MicroSD CARD** | 插入 MicroSD 記憶卡以儲存飛行日誌與任務數據。 |
| **A1–A8** | 可自訂為 PWM 或 GPIO。支援雙向 DShot（Bdshot），可用於連接相機快門/熱靴、伺服舵機等。 |
| **M1–M8** | 來自 IO 協同處理器的 PWM 輸出，主要連接電子調速器（ESC）與伺服舵機。 |
| **USB** | 連接電腦以進行通用控制器通訊（例如韌體燒錄、參數調校）。 |
| **CAN1 / CAN2** | 連接 DroneCAN / UAVCAN 外部設備。 |
| **DSM / SBUS / RSSI** | DSM、SBUS 或 RSSI 的訊號輸入介面。可連接 DSM 衛星接收機、SBUS 接收機或 RSSI 訊號模組。 |
| **PPM** | 連接 PPM RC 接收機。 |
| **ETH** | 連接機載乙太網路設備。 |
| **AD&IO** | 類比輸入介面（ADC 3.3V 或 ADC 6.6V），通常保留不接。 |
| **FMU Debug** | 供專業人員與開發者進行 FMU 系統偵錯使用。 |
| **IO Debug** | 供專業人員與開發者進行 IO 協同處理器偵錯使用。 |

---

### 序列埠對應

| 序列埠 | 系統裝置路徑 | 預設分配功能 |
| :--- | :--- | :--- |
| **USART1** | `/dev/ttyS0` | GPS |
| **USART2** | `/dev/ttyS1` | TELEM3 |
| **USART3** | `/dev/ttyS2` | 偵錯主控台（Debug Console） |
| **UART4** | `/dev/ttyS3` | UART4（使用者自訂） |
| **UART5** | `/dev/ttyS4` | TELEM2 |
| **USART6** | `/dev/ttyS5` | PX4IO / RC |
| **UART7** | `/dev/ttyS6` | TELEM1 |
| **UART8** | `/dev/ttyS7` | GPS2 |

---

### 功耗資訊

#### 作業電壓

| 參數 | 最小值 | 典型值 | 最大值 |
| :--- | :--- | :--- | :--- |
| **輸入電壓** | 4.6 V | 5.0 V | 5.4 V |

#### 電流消耗

| 運作狀態 | 典型值 | 最大值 |
| :--- | :--- | :--- |
| **飛控主機 + 連接之周邊配備** | 3.0 A | 3.44 A |
| **飛控主機本體** | 0.44 A | 0.58 A |

---

## 快速上手

本快速導覽說明如何為通用飛行控制器供電並連接關鍵周邊設備。

完整飛行軟體設定與操作說明，請參閱下列官方文件：
* [ArduPilot 官方文件手冊](https://ardupilot.org/ardupilot)
* [PX4 Autopilot 使用手冊](https://docs.px4.io/main/en/index.html)

---

### 機身安裝方向

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/orientation.jpg').default} alt="orientation" width="60%" />
</div>

:::tip 安裝方向注意事項
若因機架內部空間限制，飛控無法依預設的箭頭朝前方向安裝，使用者必須於地面控制站軟體（GCS）中重新設定飛控實際安裝的旋轉姿態角度。
:::

---

### 韌體支援

本飛行控制器完整支援 ArduPilot 與 PX4 Autopilot 自動駕駛儀韌體。

* **ArduPilot：**
  * [原始碼儲存庫](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef/AcctonGodwit_GA1)
  * [多旋翼（Copter）穩定版韌體映像檔](https://firmware.ardupilot.org/Copter/stable/AcctonGodwit_GA1)
  * [定翼機（Plane）穩定版韌體映像檔](https://firmware.ardupilot.org/Plane/stable/AcctonGodwit_GA1)
  * [無人車（Rover）穩定版韌體映像檔](https://firmware.ardupilot.org/Rover/stable/AcctonGodwit_GA1)
* **PX4 Autopilot：**
  * [PX4 原始碼儲存庫](https://github.com/PX4/PX4-Autopilot/tree/main/boards/accton-godwit/ga1)
  * [PX4 穩定版韌體釋出檔案](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.17.0)

#### 透過 Mission Planner 燒錄韌體

建議優先使用 **Mission Planner** 進行韌體載入與更新：
1. 前往官方連結下載並安裝 [Mission Planner](https://ardupilot.org/planner/docs/mission-planner-installation.html)。
2. 使用 USB Type-C 傳輸線將飛控連接至電腦。
3. 開啟 Mission Planner，至 **INITIAL SETUP**（初始設定）頁面下的 **Install Firmware**（安裝韌體），選取對應的韌體映像檔進行燒錄。

---

### 周邊設備連接指引

#### GPS 與羅盤模組
* 將 GPS/RTK 模組連接至 **GPS & SAFETY** 或 **GPS2** 連接埠。
* 主要 GPS 模組通常整合了 GPS 接收機、電子羅盤、安全開關、蜂鳴器與 RGB LED 狀態指示燈。
* 安裝模組時，應盡可能遠離大電流電源線路與馬達，並確保模組的方向箭頭指向機頭前方。
* 若使用 DroneCAN / UAVCAN GNSS 模組，可直接連接至 **CAN1** 或 **CAN2** 匯流排。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/gps.jpg').default} alt="gps" width="60%" />
</div>

#### 數傳電台與無線電控制系統
* **數傳電台（Telemetry）：** 將機載數傳端連接至 **TELEM1**、**TELEM2** 或 **TELEM3** 埠，以建立與地面控制站（GCS）的雙向資料傳輸。
* **RC 接收機：** DSM 或 SBUS 接收機請連接至 **DSM/SBUS** 介面；若使用 PPM 接收機，請連接至 **PPM** 介面。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/radio.jpg').default} alt="radio" width="60%" />
</div>

#### 電源模組（PMU）
* 本飛控支援 CAN PMU 電源模組（支援 3S 至 14S 鋰電池）。包裝內未隨附 PMU，請搭配符合規範之 CAN PMU 模組使用，並將模組之 6-pin 接頭插入飛控的 **Power C1** 或 **Power C2** 介面。
* 執行 ArduPilot 韌體時，DroneCAN PMU 具備隨插即用特性，無須額外設定；執行 PX4 時，請依 PX4 DroneCAN PMU 規範進行參數配置。
* 本飛控亦支援類比與 I2C 電源模組，請由 **Power 1** 與 **Power 2** 連接埠輸入。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/power.jpg').default} alt="power" width="60%" />
</div>

#### MicroSD 記憶卡
* 飛行前請務必將 MicroSD 記憶卡插入卡槽。高頻率飛行日誌記錄與 IMU 數據分析皆須仰賴 MicroSD 卡進行儲存。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/sdcard.jpg').default} alt="sdcard" width="60%" />
</div>

#### 馬達與伺服舵機接線
* 請依據所屬機架構型的馬達順序，依序將電子調速器（ESC）訊號線與伺服舵機連接至 **M1–M8** 與 **A1–A8** 接腳。

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone-parts/motor.jpg').default} alt="motor" width="60%" />
</div>

#### 伺服舵機排針供電說明
:::caution 伺服舵機排針需外部供電
本飛控內部電源穩壓器不對伺服舵機排針軌（M1–M8 與 A1–A8 之 `+` 電源腳位）供電。若欲驅動伺服舵機，必須額外連接外部 BEC（穩壓器）或專用電源至伺服排針的正負極端子進行供電。
:::

---

## 實用參考連結

* **ArduPilot 官方資源：**
  * [首飛設定教學指南](https://ardupilot.org/copter/docs/flying-arducopter.html)
  * [ArduPilot 飛控硬體參考頁面](https://ardupilot.org/copter/docs/common-acctongodwit-ga1.html)
* **PX4 Autopilot 官方資源：**
  * [PX4 基本概念入門](https://docs.px4.io/main/en/getting_started/px4_basic_concepts)
  * [多旋翼組裝指引](https://docs.px4.io/main/en/frames_multicopter/)
  * [PX4 飛控硬體參考頁面](https://docs.px4.io/main/en/flight_controller/accton-godwit_ga1)
  * [Pixhawk 標準自動駕駛儀總覽](https://docs.px4.io/main/en/flight_controller/autopilot_pixhawk_standard)
