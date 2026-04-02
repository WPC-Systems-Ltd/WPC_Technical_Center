---
title: 無人機入門指南
sidebar_label: 無人機入門指南
sidebar_position: 1
slug: /drone-starter-guide
---

import { Rocket, PlaneTakeoff, Settings, RadioTower, HelpCircle, Network, Code } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>歡迎探索 WPC 無人機</h1>
  <p>您手上的這台無人機是全機台灣設計與製造 (MIT) 的專業飛行平台。它搭載了我們自研的高效飛控演算法，具備極速 2.5 ms 的反應時間，讓您即使在高達 17.2m/s (7 級陣風) 的嚴苛環境下也能維持穩定飛行。</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 起步學習路徑

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>安裝驅動程式</h3>
      <p>我們提供原生的 API 支援。請至技術支援中心下載專屬的 [LabVIEW](/docs/driver/driver_intro) 或 [Python](/docs/driver/driver_intro)，以加速您的客製化開發。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>觀看教學影片</h3>
      <p>為了您的操作安全，請務必觀看我們提供的 [遙控器操作教學影片](https://youtu.be/MCejJsEQymk?si=x_JAGVxeK_ln8VU9) 以及 [電池充電教學影片](https://youtu.be/nEynb3iW2Kc?si=RNXUJJ2hdrq8ycAr)。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>硬體確認與架構解析</h3>
      <p>若您的專案需要結合 AI 邊緣運算或客製化感測器，請在掛載設備前先詳閱 [WPC Drone User Guide](/WPC_Technical_Center/docs/Drone/appendix) 中的附錄說明，這能幫您釐清系統架構。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>標準飛行操作程序</h3>
      <p>在進行實際飛行前，請務必詳閱 [標準飛行操作程序](/WPC_Technical_Center/docs/Drone/takeoff-guide)，以確保飛行安全。</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">5</div>
    <div className="gs-timeline-content">
      <h3>實際試飛與操作</h3>
      <p>在安全的空曠場地帶上護具，進行首次起飛解鎖與基礎懸停測試。</p>
    </div>
  </div>
</div>

---

## <PlaneTakeoff size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 核心教學資源

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/Drone/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> 無人機介紹</h2>
    <p>**深入了解核心技術特色**</p>
    <p>介紹 WPC 在無人機領域的技術優勢、專業服務與支援。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/specification" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> 產品規格</h2>
    <p>**深入了解產品規格**</p>
    <p>介紹 WPC 無人機的產品規格。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/takeoff-guide" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><PlaneTakeoff size={24} color="var(--brand-electric-blue)"/> 起飛教學</h2>
    <p>**從零到飛上天空**</p>
    <p>提供詳細的起飛前檢查清單 (Pre-flight checklist)，以及安全操作與緊急處置的標準流程。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/remote-control-guide" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> 遙控器操作教學</h2>
    <p>**掌控您的無人機**</p>
    <p>遙控器各個舵角與撥桿功能的定義，以及教您如何配置飛行模式與失控保護 (Failsafe)。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/battery-charge" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> 電池充電教學</h2>
    <p>**電池充電教學**</p>
    <p>介紹電池充電的注意事項，以及如何正確地為電池充電。</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/appendix" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> 硬體確認與負載安裝</h2>
    <p>**硬體確認與負載安裝**</p>
    <p>確認任務電腦與飛控電腦之間的通訊狀態，並熟悉飛控電腦的 UART 腳位定義</p>
  </a>
</div>

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 驅動程式支援一覽表

WPC 提供多種程式語言的硬體驅動程式，讓使用者能夠快速整合 WPC 硬體裝置，開發自己的應用程式。您可以點擊下方語言連結前往詳細教學：

| 程式語言 | 特色簡介 | 詳細教學連結 |
| :------- | :------- | :----------- |
| **LabVIEW** | 提供完整的 VI 套件與現成圖形化面板，讓工程師能快速整合自動化測試與量測流程。| [LabVIEW 入門](/docs/driver/driver_intro) |
| **Python** | 開源且易於使用的 API，具備一致的介面與豐富範例，適合各階層開發者快速上手。 | [Python 入門](https://github.com/WPC-Systems-Ltd/WPC_Python_driver_release) |

---

## <HelpCircle size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 常見問題 (FAQ)

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/drone-faq" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> WPC Drone </h2>
    <p>**常見問題與問題排除指南**</p>
  </a>
</div>