---
sidebar_position: 2
sidebar_label: '控制器規格'
description: GECO 系列控制器型號比較與詳細規格 (UNO / UNO DB9 / UNO-27)
---

# GECO 控制器系列

GECO 提供多種控制器版本，滿足不同應用場景的需求。

---

## 1. GECO UNO 標準控制器

GECO UNO 是 WPC 推出的標準控制器，具有最小體積和最經濟的價格。
*   核心版本：可選配 sbRIO-9606 或 sbRIO-9607。
*   介面：不提供 RS-232 和 CAN 連接器。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_5_X103.jpg" alt="GECO UNO" width="60%" />
</div>
<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_5_X106.jpg" alt="GECO UNO" width="60%" />
</div>

### 核心規格: NI sbRIO-9606
sbRIO-9606 是一款嵌入式控制器，整合了即時處理器、可重置的 FPGA 和 I/O 功能於單一 PCB 上。
*   CPU: 400 MHz
*   DRAM: 256 MB
*   Storage: 512 MB
*   FPGA: Spartan-6 LX45
*   RMC: 內建 RIO Mezzanine Card 接頭，直接連接處理器與數位 I/O FPGA 通道 (96 個 3.3V DIO)，提供高速頻寬。
*   介面: Ethernet, CAN, USB, Serial Ports。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_6_X113.png" alt="sbRIO-9606" width="60%" />
</div>

---

## 2. GECO UNO DB9 控制器

GECO UNO DB9 機身寬度較寬。
*   核心版本：可選配 sbRIO-9606 或 sbRIO-9607。
*   介面：新增 RS-232 和 CAN 連接器 (DB9 介面)，提供更多連接選擇。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_7_X120.jpg" alt="GECO UNO DB9" width="60%" />
</div>

### DB9 連接器腳位定義

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_7_X119.png" alt="DB9 Pinout" width="60%" />
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
  <img src="/img/embedded-system/geco/geco_page_8_X128.png" alt="sbRIO-9607" width="60%" />
</div>

---

## 3. GECO UNO-27 控制器

GECO UNO-27 是 WPC 推出的高階控制器，擁有最寬的寬度。
*   核心版本：搭載 sbRIO-9627。
*   功能：具備原生的 AIO (類比輸入/輸出) 功能。
*   介面：同時具備 RS-232 和 CAN 連接器 (DB9)。

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/geco/geco_page_9_X136.jpg" alt="GECO UNO-27" width="60%" />
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
  <img src="/img/embedded-system/geco/geco_page_9_X137.png" alt="sbRIO-9627" width="60%" />
</div>
