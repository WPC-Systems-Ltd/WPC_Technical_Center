---
title: 馬達驅動入門指南
sidebar_label: 馬達驅動入門指南
sidebar_position: 1
slug: /motion-starter-guide
displayed_sidebar: motionSidebar
---

import { Rocket, Cpu, Code, HelpCircle, Zap, Settings, Network, Usb, Settings2, Search, RefreshCw, Wrench, ChevronsRight } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>歡迎來到 WPC 馬達驅動方案</h1>
  <p>我們提供步進馬達、伺服馬達驅動器與多軸運動控制軸卡，涵蓋從單軸驅動到四軸同步控制的完整解決方案。只需一台電腦與一條網路線，即可快速啟動您的馬達控制專案。</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 起步學習路徑

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>選擇適合的驅動器</h3>
      <p>根據馬達類型選擇：步進馬達請選 EDriveST，伺服馬達請選 EDriveSRV，多軸控制請選 Emotion。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>硬體接線配置</h3>
      <p>依照腳位說明完成馬達、編碼器及極限開關的接線，並確認電源供應符合規格。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>安裝 WPC Device Manager</h3>
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
  <a href="/WPC_Technical_Center/docs/Motion/EDriveST/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Zap size={24} color="var(--brand-electric-blue)"/> EDriveST</h2>
    <p>**單軸步進馬達整合型驅動器**</p>
    <p>配備網路介面，直接連接兩相步進馬達、編碼器與極限開關，無須額外軸卡即可完成位置與速度控制。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Motion/EDriveSRV/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> EDriveSRV</h2>
    <p>**單軸伺服馬達整合型驅動器**</p>
    <p>支援 Panasonic A6 系列伺服馬達，最高 48V 直流電源，最大輸出功率 400W，適合高精度運動控制。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Motion/EMotion/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Cpu size={24} color="var(--brand-electric-blue)"/> Emotion</h2>
    <p>**四軸運動控制軸卡**</p>
    <p>支援多種知名品牌伺服驅動器（安川、三菱、台達、國際牌），提供專用與通用子板，快速整合至現有系統。</p>
  </a>
</div>

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