---
sidebar_position: 2
sidebar_label: '控制器規格'
description: GECO 系列控制器型號比較與詳細規格 (UNO / UNO DB9 / UNO-27)
---

# GECO 控制器系列

GECO 控制器主要由 NI sbRIO 所構成，內建 32-bit 微處理器以及 FPGA 晶片，分別透過 LabVIEW Real-time module 以及 LabVIEW FPGA module 進行開發。可透過 Ethernet 介面完全使用 LabVIEW 進行開發、佈署。可以透過 PC 遙控或者完全獨立運行 (stand-alone)。

上方有四個插槽，可用於擴充 GECO 模組。例如: 一台控制器最高可以同時支援 4 張 WPC motion 軸控卡，最多可同時控制 16 軸。
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_controller_support_4_axis.png" alt="GECO Controller Support 4 Axis" width="60%" />
</div>


GECO 控制器有 GECO UNO、GECO UNO DB9、GECO UNO-27 三種版本，滿足不同應用場景的需求。

---

## 1. GECO UNO-06 / GECO UNO-07

GECO UNO 系列是 WPC 推出的標準控制器，具有最小體積和最經濟的價格。


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_controller1.png" alt="geco_uno_controller1" width="60%" />
</div>

:::info
核心版本控制器可以依需求選擇 NI sbRIO-9606 或 NI sbRIO-9607。
:::

### GECO UNO 系列 Layout
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_controller_layout.png" alt="geco_controller_layout" width="60%" />
</div>


### 嵌入式控制器: NI sbRIO-9606
sbRIO-9606 是一款嵌入式控制器，整合了即時處理器、可重置的 FPGA 和 I/O 功能於單一 PCB 上。
*   CPU: 400 MHz
*   DRAM: 256 MB
*   Storage: 512 MB
*   FPGA: Spartan-6 LX45
*   RMC: 內建 RIO Mezzanine Card 接頭，直接連接處理器與數位 I/O FPGA 通道 (96 個 3.3V DIO)，提供高速頻寬。
*   介面: Ethernet, CAN, USB, Serial Ports。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/NI_sbRIO_9606.png" alt="NI_sbRIO_9606" width="60%" />
</div>

---

## 2. GECO UNO DB9-06 / GECO UNO DB9-07

GECO UNO DB9系列機身寬度較寬，I/O介面較 GECO UNO 增加了 RS-232 和 CAN 連接器 (DB9 介面)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_db9_controller.png" alt="GECO UNO DB9" width="60%" />
</div>

:::info
核心版本控制器可以依需求選擇 NI sbRIO-9606 或 NI sbRIO-9607。
:::
### DB9 連接器腳位定義

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_db9_controller_pin_assignment.png" alt="geco_uno_db9_controller_pin_assignment" width="60%" />
</div>

### 核心規格: NI sbRIO-9607
sbRIO-9607 結合了強勁的 NI Linux Real-Time 即時處理器。
*   CPU: 667 MHz 雙核心
*   DRAM: 512 MB
*   Storage: 512 MB
*   FPGA: Zynq-7020
*   RMC: 支援 RMC 接頭，直接連接處理器與數位 I/O FPGA 通道。
*   介面: Gigabit Ethernet, CAN, Serial, USB, 96 個 3.3V DIO 通道。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_page_8_X128.png" alt="sbRIO-9607" width="60%" />
</div>

---

## 3. GECO UNO-27 控制器

GECO UNO-27 是 WPC 推出的高階控制器，擁有最寬的寬度。
*   核心版本：搭載 sbRIO-9627。
*   功能：具備原生的 AIO (類比輸入/輸出) 功能。
*   介面：同時具備 RS-232 和 CAN 連接器 (DB9)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/geco_uno_27_controller.png" alt="geco_uno_27_controller" width="60%" />
</div>

### 核心規格: NI sbRIO-9627
sbRIO-9627 整合了 NI Linux Real-Time 處理器、FPGA 與 I/O。
*   CPU: 667 MHz
*   DRAM: 512 MB
*   Storage: 512 MB
*   FPGA: Zynq-7020
*   RMC: 支援 RMC 接頭。
*   內建 I/O:
    *   16 個 16-bit 類比輸入 (AI)
    *   4 個 16-bit 類比輸出 (AO)
    *   100 個數位通道 (DIO)
*   介面: Gigabit Ethernet, CAN, USB, Serial, SDHC 連接埠。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/embedded-system/geco/NI_sbRIO_9627.png" alt="NI_sbRIO_9627" width="60%" />
</div>
