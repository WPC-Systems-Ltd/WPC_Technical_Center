---
sidebar_position: 3
sidebar_label: 'RMC 轉接板'
description: WPC sbRIO RMC Breakout
---

# WPC sbRIO RMC Breakout 轉接板

WPC 專門為 NI sbRIO 系列設計的 **RMC (RIO Mezzanine Card) 轉接板 (Breakout)**，旨在解決硬體開發者在處理高密度 FPGA I/O 時面臨的痛點，協助使用者更便利、更快速地完成硬體系統的整合與開發。

---

## 1. 什麼是 RMC (RIO Mezzanine Card) 介面？

NI sbRIO (Single-Board RIO) 是一款功能強大的嵌入式控制器。為了保留最大的靈活性，sbRIO 將 FPGA 龐大數量的 I/O (包含高達 96 個 3.3V 數位 I/O 通道) 以及處理器的高速訊號，全數整合在一個被稱為 **RMC (RIO Mezzanine Card)** 的高密度擴充接頭上。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_connector.png" alt="rmc_connector" width="60%" />
</div>

使用者可以透過這個 RMC 接頭，設計並客製化自己專屬的周邊電路板 (Mezzanine Card)，從而將 sbRIO 的效能發揮到極致。

## 2. 為什麼需要 WPC RMC Breakout？

雖然 RMC 介面提供了極高的自由度，但自行設計並生產客製化 RMC 擴充板，對於多數使用者與中小型開發團隊而言，卻是一項艱鉅的挑戰：

### 2.1 高難度的 BGA 封裝
sbRIO 採用的 RMC 連接器屬於高密度的 **BGA (Ball Grid Array)** 封裝或者類似極細間距的夾層連接器。這種接頭無法使用一般的手工焊接，且零件採購不易、最小訂購量 (MOQ) 通常要求很高。

### 2.2 嚴苛的製程與良率要求
高速的 FPGA I/O 電路板在硬體設計時，需嚴格考慮阻抗匹配與訊號完整性 (Signal Integrity)。在實際的 SMT (表面黏著) 生產製程中，對鋼板厚度、迴焊爐的溫度曲線控制、以及助焊劑的選擇都有極高的要求。一旦生產條件控管不佳，極容易發生 BGA 空焊或內部微短路，導致量產時良率大幅下降，造成嚴重的成本損失。

### 2.3 維修與替換困難
BGA 或高密度夾層連接器一旦發生損壞或接觸不良，由於接頭藏在電路板底部，幾乎無法以人工方式進行拆焊與維修，通常只能整片電路板報廢。

---

## 3. WPC RMC Breakout 的解決方式

為了讓開發者能直接享受到 sbRIO 的圖形化系統設計 (GSD) 優勢，而不需要陷入底層硬體開發的泥沼，WPC 設計了 **RMC Breakout** 轉接板。

WPC RMC Breakout 直接將難以處理的 sbRIO RMC 接頭，轉換為工業測試與自動化領域中 **最常見、最易於加工與插拔的標準介面** (例如 IDC 牛角排線座 或 D-Sub 連接器)。

**核心優勢：**
*   **隨插即用**：免除自行設計 BGA 電路板的風險，即刻開始軟體開發與驗證。
*   **高可靠度**：WPC 已確保轉接板的阻抗與生產良率，為穩定運作提供保障。
*   **彈性擴充**：不僅引出原始的 DIO，部分型號更整合了 RS-232、CAN 甚至第二組 Ethernet 晶片，擴充 sbRIO 的原生通訊能力。

---

## 4. WPC RMC Breakout 系列產品

目前 WPC 提供了以下三種不同規格的 RMC Breakout 轉接板：

### 4.1 RMC-BK (支援 UNO 外殼)
最基礎的轉接款式，適用於 sbRIO 全系列，並完美相容於 GECO UNO 控制器外殼。此轉接板純粹將 96-pin 的 3.3V FPGA DIO 均勻分配引出。

*   將 96-pin DIO 分成 **4 個插槽 (Slots)**。
*   每個 Slot 包含 **24-pin DIO**，並額外出線供應 5V 電源供外部使用。
*   直接點對點連接至 FPGA 晶片 (無額外光隔離保護)。
*   內建 RTC (即時時鐘) 備用電池座。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_bk_support_enclosure.png" alt="rmc_bk_support_enclosure" width="60%" />
</div>

### 4.2 RMC-BK-SERIAL (不支援外殼)
在基礎 DIO 擴充之外，專門針對需要增加通訊介面的應用場景所設計。此板型較寬，不支援標準 UNO 外殼。

*   同樣將 96-pin DIO 分成 **4 個插槽** (每個 24-pin DIO，供應 5V 電源)。
*   直接連接至 FPGA 晶片 (無隔離)。
*   **亮點：內建轉換晶片，直接支援 RS-232 / CAN 通訊轉接匯出。**
*   內建 RTC 備用電池座。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_bk_serial_not_support_enclosure.png" alt="rmc_bk_serial_not_support_enclosure" width="60%" />
</div>

### 4.3 RMC-BK-ETH (不支援外殼)
為需要更高網路頻寬或雙網段隔離的應用而生。此板型亦較寬，不支援標準 UNO 外殼。

*   同樣將 96-pin DIO 分成 **4 個插槽**。
*   直接連接至 FPGA 晶片 (無隔離)。
*   **亮點：內建乙太網路控制器晶片，支援 2nd Ethernet (第二組 Gigabit 乙太網路) RJ-45 連接埠。**
*   內建 RTC 備用電池座。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/rmc_bk_eth_not_support_enclosure.png" alt="rmc_bk_eth_not_support_enclosure" width="60%" />
</div>

---

## 5. 連接器腳位定義 (Connector Pinout)

若使用者需要客製化 LabVIEW FPGA 程式，或設計與之對接的外掛電路，請參考以下轉接板的接頭腳位定義。
*(備註：若僅使用 WPC 提供之公版 GECO driver，則不需直接控制這些底層腳位)*

### 5.1 IDC-50P 腳位定義
此介面為 4 組 Slot 所使用的 IDC 50-pin (牛角排線) 連接器定義。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/IDC_50P_connector_pinout.png" alt="IDC_50P_connector_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/IDC_50P_connector_pinout_c1_c4.png" alt="IDC_50P_connector_pinout_c1_c4" width="60%" />
</div>
### 5.2 DSUB-37P 腳位定義
部分特規轉接或通訊介面所使用的 DSUB 37-pin 連接器。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/DSUB_37P_connector_pinout.png" alt="DSUB_37P_connector_pinout" width="60%" />
</div>


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/DSUB_37P_connector_pinout_c1_c4.png" alt="DSUB_37P_connector_pinout_c1_c4" width="60%" />
</div>

