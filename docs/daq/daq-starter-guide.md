---
title: 資料擷取入門指南
sidebar_label: 資料擷取入門指南
sidebar_position: 1
slug: /daq-starter-guide
---

import { Rocket, Cpu, Code, HelpCircle, Network, Usb, Wifi, Settings2, Search, Zap, RefreshCw, Wrench, ChevronsRight } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>歡迎探索 WPC 資料擷取</h1>
  <p>我們提供資料擷取方案，只要選定適合您的硬體設備與熟悉的程式語言，就能快速啟動您的精密控制專案。</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 起步學習路徑

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>選擇硬體設備</h3>
      <p>根據您的需求（網路距離、攜帶便利性、無線應用）選擇合適的 DAQ 設備或系統。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>硬體接線配置</h3>
      <p>根據您的硬體設備，完成實體接線配置。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>安​裝 WPC Device Manager</h3>
      <p>透過我們的官方硬體管理工具，快速掃描設備並確認連線狀態與韌體版本。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>安裝驅動程式</h3>
      <p>選擇熟悉的程式語言（Python、C# 或 LabVIEW），下載 WPC Device Driver 並開始開發。</p>
    </div>
  </div>
</div>

---

## <Cpu size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 選擇您的硬體平台

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/daq/ethan/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> Ethernet-DAQ 系列</h2>
    <p>**高穩定的工業量測解決方案**</p>
    <p>適合需長距離連接、多節點同步監控的工業現場。提供 RJ45 介面，具有高穩定度特性。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/usbdaq/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Usb size={24} color="var(--brand-electric-blue)"/> USB DAQ 系列</h2>
    <p>**隨插即用的高精度量測**</p>
    <p>透過 USB 介面快速連接電腦，適合實驗室研發與可攜式測試應用。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/wifidaq/product-general" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Wifi size={24} color="var(--brand-electric-blue)"/> WIFI-DAQ</h2>
    <p>**主打無線部署與 IoT 應用**</p>
    <p>適合難以佈線或移動式載體的數據採集需求。支援無線網路傳輸，讓感測無所不在。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/stem/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings2 size={24} color="var(--brand-electric-blue)"/> STEM 系列</h2>
    <p>**多通道、混合量測控制解決方案**</p>
    <p>具備豐富的類比與數位 I/O，可搭配多種擴充模組，是自動化控制與建立原型的理想平台。</p>
  </a>
</div>

:::tip[除此之外還有什麼？]
除了標準的資料擷取系列，我們還提供 **[嵌入式系統入門](/docs/embedded-intro)** 以及完整的 **[無人機控制入門](/docs/drone-intro)**。
:::

---

## <Settings2 size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} />  WPC 產品管理工具 - WPC Device Manager
在開始撰寫程式碼之前，我們強烈建議您安裝 **WPC Device Manager**。這是一款專為 WPC 硬體設計的管理軟體，能夠協助您：

<div className="gs-card-grid gs-card-grid-4">
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Search size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>自動掃描</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>自動掃描並辨識區域網路內可用的 WPC 裝置。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Zap size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>裝置配置</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>提供完整的網路參數設定與網路時間協定 (SNTP) 校時功能。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <RefreshCw size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>韌體更新</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>一鍵檢查並升級設備至最新版韌體。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Wrench size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>測試面板</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>內建互動式測試面板，方便使用者進行功能驗證與控制。</p>
  </div>
</div>

:::note[前往了解更多]
**[WPC Device Manager](/docs/software/wpc-device-manager/intro)**
下載並安裝管理工具，幫助您更有效率地管理與設定 WPC DAQ 設備。
:::

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 驅動程式支援一覽表

WPC 提供多種程式語言的硬體驅動程式，讓使用者能夠快速整合 WPC 硬體裝置，開發自己的應用程式。您可以點擊下方語言連結前往詳細教學：

| 程式語言 | 特色簡介 | 詳細教學連結 |
| :------- | :------- | :----------- |
| **LabVIEW** | 提供完整的 VI 套件與現成圖形化面板，讓工程師能快速整合自動化測試與量測流程。 | [LabVIEW 入門](/docs/driver/driver_intro) |
| **Python** | 開源且易於使用的 API，具備一致的介面與豐富範例，適合各階層開發者快速上手。 | [Python 入門](https://github.com/WPC-Systems-Ltd/WPC_Python_driver_release) |
| **C#** | 針對 .NET 環境優化的開源驅動，採用直觀的開啟/讀寫/關閉邏輯，大幅降低開發門檻。 | [C# 入門](https://github.com/WPC-Systems-Ltd/WPC_CSharp_driver_release) |

---

## <HelpCircle size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 常見問題 (FAQ)

<div className="gs-card-grid">
  <a href="/docs/wdm-faq" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> WPC Device Manager</h2>
    <p>**常見問題與問題排除指南**</p>
  </a>
</div>



