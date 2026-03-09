---
sidebar_position: 1
sidebar_label: '產品介紹'
description: GECO 產品簡介、架構與外觀說明
---

# GECO 產品介紹

## 1. 什麼是 GECO?

Graphical Embedded COntroller (GECO) 是一款由 sbRIO、LabVIEW 和 [WPC RMC Breakout](rmc_breakout.md)組成的控制器，具備完整的圖形化開發環境。

### 核心特色
*   圖形化開發：使用者可透過 LabVIEW 編輯、下載及部署應用程式。
*   工業物聯網 (IIoT)：支援乙太網路下載與通訊功能，特別適合快速導入 IIoT 應用。
*   強大核心：採用 NI sbRIO 控制器作為核心，內建 32-bit 微處理器與 FPGA 晶片。
    *   Real-Time：利用 LabVIEW Real-Time 模組開發。
    *   FPGA：利用 LabVIEW FPGA 模組開發。
*   靈活部署：設計允許透過 Ethernet 介面完成所有開發和部署工作，支持遠端操控或以 Stand-alone 模式獨立運行。
*   效益：GECO 的 圖形化系統設計 (GSD) 特性，能有效簡化複雜應用流程，縮短開發時間，並降低後續維護成本。

---

## 2. GECO 架構組成

GECO 上方設有 4 個擴充插槽，可用於安裝各類 GECO 模組。目前支援 13 種模組，涵蓋以下類別：

### 支援模組列表

*   AIO Modules (類比輸入/輸出)
    *   24ch AI / 8ch AO
    *   64ch AO
    *   16ch Digital Potentiometers
    *   16ch Thermocouple
*   DIO Modules (數位輸入/輸出)
    *   24ch DO
    *   24ch DI
    *   12ch DI / 12ch DO
    *   24ch-5V TTL
*   Motion Modules (運動控制)
    *   4-axis Motion Control
*   Switch / Multiplexer Modules (開關/多工器)
    *   4x6 Matrix Switch
    *   24ch-2wire Multiplexer
    *   12ch Tri-state Switch
*   Serial Interface Module (序列通訊)
    *   RS-232 / 422 / 485

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_2_X79.png" alt="GECO Composition" width="60%" />
</div>

---

## 3. 外觀說明

本節說明 GECO 控制器的外部介面與指示燈狀態。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_3_X91.png" alt="GECO Appearance" width="60%" />
</div>

(由左至右依序說明)

### 3.1 指示燈

#### 1 號燈: Power LED (電源指示燈)
| LED 顏色  | LED 狀態    | 說明                          |
| :-------- | :---------- | :---------------------------- |
| 綠燈      | 恆亮        | GECO 電源 **已開啟 (ON)**。   |
| —         | 熄滅        | GECO 電源 **已關閉 (OFF)**。  |

#### 2 號燈: Status LED (狀態指示燈)
| LED 狀態              | 說明                                                                                                 |
| :-------------------- | :--------------------------------------------------------------------------------------------------- |
| 閃爍 2 次並暫停       | **安全模式**：軟體未安裝 (出廠預設值) 或安裝不正確。請透過 MAX 重新安裝軟體。                        |
| 閃爍 3 次並暫停       | **使用者自定義安全模式**：表示正在安裝模式，或使用者強制進入安全模式 (按住 Reset 鍵 > 5秒)。         |
| 閃爍 4 次並暫停       | **安全模式 (崩潰)**：軟體已連續崩潰兩次且未重新啟動。                                                |
| 持續閃爍              | **開機失敗**：GECO 未能進入 NI Linux Real-Time (不支援的作業系統或發生無法復原的錯誤)。              |
| 暫時亮起              | **開機中**：無需動作。                                                                               |
| 熄滅                  | **運行模式**：軟體已安裝且作業系統運作正常。                                                         |

#### 3 號燈: User1 LED
使用者可編程定義的 FPGA LED (User Defined)。

#### 4 號燈: User FPGA1 LED
使用者可編程定義的 FPGA LED (User Defined)。

### 3.2 硬體介面
*   Reset 鍵：重置系統或進入 Safe Mode (長按 5 秒)。
*   網路孔 (RJ50)：規格為 RJ50 (10P)，用於連接 PC 進行開發與通訊。
*   USB Port：可連接隨身碟 (Storage) 或相機 (Camera)。
*   電源輸入：24V DC 電源輸入連接器。
