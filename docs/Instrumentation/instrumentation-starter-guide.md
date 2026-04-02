---
title: 儀器設備入門指南
sidebar_label: 儀器設備入門指南
sidebar_position: 1
slug: /instrumentation-starter-guide
---

import { Rocket, Cpu, Code, HelpCircle, Layers, Wifi, Settings2, Search, Zap, RefreshCw, Wrench, Network, Layout, Briefcase } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>歡迎探索 WPC 儀器設備</h1>
  <p>WPC 自行研發的 gStack-RIO 系列採用 Rack 機箱設計，專為分散式、高密度 I/O 應用而生。透過靈活的插槽設計與強大的 LabVIEW 支援，您可以快速建構精密控制與量測系統。</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 起步學習路徑

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>選擇 gStack-RIO 控制器與機箱</h3>
      <p>根據您的通道數量與應用場景（PC 遠端控制或 Stand-alone 獨立運行），選擇合適的 gStack-RIO 控制器。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>配置 I/O 模組卡片</h3>
      <p>gStack-RIO 機箱提供 8 個插槽，可根據需求自由搭配類比 (AI/AO)、數位 (DI/DO)、繼電器、串列通訊 (RS232/485) 或 CAN 匯流排模組。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>硬體接線與電源配置</h3>
      <p>連接 24VDC 電源與 Ethernet 網路線。gStack-RIO 採用前置面板抽換設計，方便實體接線與後續維護。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>安裝 gStack-RIO Manager</h3>
      <p>透過官方管理工具進行機箱掃描、卡片功能配置與測試面板驗證。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">5</div>
    <div className="gs-timeline-content">
      <h3>開發與佈署 (LabVIEW)</h3>
      <p>下載 WPC 驅動程式，透過 LabVIEW 或 LabVIEW Real-time 進行高效開發與邏輯控制。</p>
    </div>
  </div>
</div>

---

## <Cpu size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 選擇您的儀器設備

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/Instrumentation/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Layers size={24} color="var(--brand-electric-blue)"/> gStack-RIO 系列</h2>
    <p>**分散式、高密度 I/O 解決方案**</p>
    <p>機箱式設計，支援 1 個控制器與 8 個功能模組，提供靈活的抽換式卡片介面與穩定的工業級控制環境。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Instrumentation/modules" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Layout size={24} color="var(--brand-electric-blue)"/> I/O 模組卡片</h2>
    <p>**多樣化的功能擴充選擇**</p>
    <p>涵蓋電壓/電流擷取、類比輸出、數位 I/O、Relay 切換及多種工業通訊協定 (CAN FD, RS232/485/422)。</p>
  </a>
</div>

:::tip[需要更多建議？]
如果您不確定哪種模組最符合您的應用，請參考 **[產品介紹](/WPC_Technical_Center/docs/Instrumentation/intro)** 以了解詳細的機箱架構與控制器配置。
:::

---

## <Settings2 size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> gStack-RIO 產品管理工具 - gStack-RIO Manager

**gStack-RIO Manager** 是管理 gStack 系統的核心公用程式。它提供直觀的介面，讓您無需撰寫程式碼即可完成初步設定：

<div className="gs-card-grid gs-card-grid-4">
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Search size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>機箱掃描</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>自動掃描並識別網路中可用的 gStack-RIO 控制器。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Zap size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>卡片配置</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>設定各插槽內模組卡片的功能、模式與虛擬卡片分配。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Wrench size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>測試面板</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>內建互動式面板，可針對個別模組進行快速的功能驗證。</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Network size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>腳位查詢</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>即時查詢各類模組卡片的接線定義與腳位圖。</p>
  </div>
</div>

:::note[下載與安裝]
請前往 **[gStack-RIO Manager 簡介與安裝](/WPC_Technical_Center/docs/software/gstack-rio-manager/intro)** 頁面，下載管理軟體並確認必要的 LabVIEW Run-time 與 NI VISA 驅動環境。
:::

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 驅動程式與軟體開發

gStack-RIO 深度整合 LabVIEW 環境，讓工程師能發揮最佳的系統效能。

| 開發環境 | 特色簡介 | 詳細教學連結 |
| :------- | :------- | :----------- |
| **LabVIEW** | 提供豐富的 VIs 與 Demo 範例，支援 PC Remote 控制模式。 | [LabVIEW 入門](/WPC_Technical_Center/docs/driver/gstack-rio-driver/intro) |
