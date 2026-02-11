---
sidebar_position: 3
sidebar_label: 'RMC 轉版'
description: WPC sbRIO RMC Breakout
---

# WPC sbRIO RMC Breakout

WPC 為 NI sbRIO 系列設計的 RMC (RIO Mezzanine Card) 轉接板，協助使用者更便利地開發 FPGA I/O。

---

## 1. 簡介

sbRIO 是 NI 官方提供的最低價位的可重置 I/O 裝置 (RIO, Re-configurable I/O)。它具有 100% 的 LabVIEW 支援度，完全可使用 LabVIEW 進行開發。儘管價格親民，但不犧牲其可靠性，在 -40°C 至 85°C 的溫度範圍內能夠穩定運作。其獨特的 Micro-controller + FPGA 架構能夠有效解決大多數嵌入式應用問題。所有 sbRIO 的對外通訊都基於 Ethernet 介面，提供了可靠的連接方式。

### 1.1 RIO 架構
RIO 架構主要由一顆微控制器和一顆 FPGA 晶片所組成，中間使用高速 PCI 匯流排連接。
*   微控制器：開發語言可使用 LabVIEW Real-time 模組或是 C，能夠處理 millisecond (ms) 到數百 micro-second (us) 級的迴圈速度。
*   FPGA 晶片：開發語言則可使用 LabVIEW FPGA 模組或 VHDL，能夠處理 micro-second (us) 到 nano-second (ns) 級的迴圈速度。

這種架構使得 RIO 在不同的應用場景下能夠靈活適配，並且能夠滿足各種速度要求。

### 1.2 RMC Connector 困難點
連接器採用 BGA 封裝，裝配和維修都相對困難。由於數量較少，購買也相對不容易。高速 FPGA I/O 電路板需要經過特殊設計。在製造過程中，鋼板、焊接溫度曲線和助焊劑都需要額外的控制。如果製造條件未得到良好控制，大量生產時可能會導致良率降低的情況發生。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_3_X62.png" alt="RMC Connector" width="60%" />
</div>

---

## 2. RMC Breakout 系列

WPC 提供了多種 RMC Breakout 轉接板，解決上述連接困難，方便使用者將 96-pin 3.3V FPGA DIO 引出使用。

### 2.1 RMC-BK (支援 UNO 外殼)
適用於 sbRIO 全系列。將 96-pin 3.3V FPGA DIO 分成 4 個 slots。

*   每個 slot 有 24-pin DIO 且供應 5V 電源
*   可直接接到 FPGA 晶片、沒有隔離
*   內建 RTC 電池

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_3_X63.png" alt="RMC-BK" width="60%" />
</div>

### 2.2 RMC-BK-SERIAL (不支援外殼)
適用於 sbRIO 全系列。將 96-pin 3.3V FPGA DIO 分成 4 個 slots。

*   每個 slot 有 24-pin DIO 且供應 5V 電源
*   直接接到 FPGA 晶片、沒有隔離
*   **支援 RS-232 / CAN 的轉接**
*   內建 RTC 電池

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_5_X76.jpg" alt="RMC-BK-SERIAL" width="60%" />
</div>

### 2.3 RMC-BK-ETH (不支援外殼)
適用於 sbRIO 全系列。將 96-pin 3.3V FPGA DIO 分成 4 個 slots。

*   每個 slot 有 24-pin DIO 且供應 5V 電源
*   直接接到 FPGA 晶片、沒有隔離
*   **支援 2nd Ethernet (第二組乙太網路) 轉接**
*   內建 RTC 電池

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_6_X81.png" alt="RMC-BK-ETH" width="60%" />
</div>

---

## 3. 連接器腳位定義 (Connector Pinout)

### 3.1 IDC-50P 定義
此介面將 FPGA 訊號引出至 IDC 50-pin 牛角連接器。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_7_X88.png" alt="IDC-50P Pinout" width="60%" />
</div>

使用 GECO driver 並不會需要直接控制這些腳位，需自行客製化 FPGA 時才會需要參考此定義。

### 3.2 DSUB-37P 定義

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_8_X95.png" alt="DSUB-37P" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/rmc_page_9_X102.png" alt="DSUB-37P Pinout" width="60%" />
</div>
