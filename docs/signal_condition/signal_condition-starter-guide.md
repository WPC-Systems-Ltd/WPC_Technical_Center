---
title: 訊號調節器入門指南
sidebar_label: 訊號調節器入門指南
sidebar_position: 1
slug: /signal-conditioner-starter-guide
description: "歡迎探索 WPC 訊號調節器 我們提供高精度、高穩定性的訊號處理模組，協助您將各種感測器訊號轉換為標準電壓或電流格式，以利後端資料擷取設備 (DAQ) 與工業控制系統讀取。 1ch Low Power Current Source 高精度微小電流輸出 可將電壓訊號轉換為高精度微小電流輸出的訊號..."
keywords: [訊號調節器入門指南 Signal Conditioner Getting Started, 訊號調節器, 電壓隔離, 訊號放大, 濾波器, Load Cell 放大器]
---
import { Cpu, Activity, Zap, Settings, Settings2, Thermometer, Power } from 'lucide-react';
import Link from '@docusaurus/Link';

<div className="gs-hero glow-effect">
  <h1>歡迎探索 WPC 訊號調節器</h1>
  <p>我們提供高精度、高穩定性的訊號處理模組，協助您將各種感測器訊號轉換為標準電壓或電流格式，以利後端資料擷取設備 (DAQ) 與工業控制系統讀取。</p>
</div>

## <Activity size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> 模組產品線

<div className="gs-card-grid">
  <Link to="./signal_condition/Voltage/WPC_1ch_PGA" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Cpu size={24} color="var(--brand-electric-blue)"/> 電壓 </h2>
    <p>**1ch PGA**</p>
    <p>提供 0.125 至 128 的動態增益調整，支援差動輸入與通道對地隔離，有效抑制工業環境中的共模雜訊。</p>
  </Link>
  <Link to="./signal_condition/Current/WPC_1ch_LPCS" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Zap size={24} color="var(--brand-electric-blue)"/> 電流 </h2>
    <p>**1ch LPCS**</p>
    <p>將電壓精確轉換為微小電流輸出 (最大 200mA)，支援四線式感測技術以消除線材阻抗誤差，極佳的線性度適合接觸電阻精密量測。</p>
  </Link>
  <Link to="./signal_condition/Force/WPC_Load_Cell_Amplifier" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings2 size={24} color="var(--brand-electric-blue)"/> 荷重 </h2>
    <p>**1ch LCA**</p>
    <p>專為荷重元設計，內建穩定 5V 激勵電壓並提供固定 1000 倍高增益精密放大，具備 9KHz 高頻寬及零點偏移調校。</p>
  </Link>
  <Link to="./signal_condition/Strain/WPC_Strain_Gauge_Amplifier" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> 應變 </h2>
    <p>**1ch SGA**</p>
    <p>專為 120Ω 的 1/4 橋應變計設計，提供 1000 倍精密放大，頻寬高達 300KHz，適用於高速動態應力與結構衝擊分析。</p>
  </Link>
  <Link to="./signal_condition/Displacement/WPC_LVDT_Signal_Conditioner" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> 位移 </h2>
    <p>**1ch LVDT**</p>
    <p>整合激勵驅動、解調濾波與訊號放大，提供 7kHz 驅動頻率及 ±10V 輸出，支援增益 (VR1) 與零點偏移 (VR2) 細緻調校。</p>
  </Link>
  <Link to="./signal_condition/Acceleration/IEPE-ICP" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> 加速度 </h2>
    <p>**IEPE-ICP**</p>
    <p>專為壓電式加速度計與動態力感測器設計，內建精密定電流源驅動，支援 AC 耦合並提供 ±5V 的電壓輸出。</p>
  </Link>
  <Link to="./signal_condition/Optical/PDA-1ch-5V-100k" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> 光感測 </h2>
    <p>**PDA-1ch-5V-100k**</p>
    <p>專為光電偵測器設計，相容矽與鍺光電二極體，提供 100K 阻抗增益與 1KHz 頻寬，具備極低雜訊以精確量測微弱光電流。</p>
  </Link>
  <Link to="./signal_condition/Temperature/WPC-8ch-PT-100" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Thermometer size={24} color="var(--brand-electric-blue)"/> 溫度 </h2>
    <p>**PT-100/1000 訊號調節模組**</p>
    <p>專為 PT-100/1000 溫度感測器設計的訊號調節模組，支援 4 通道與 8 通道版本，提供精確的溫度至電壓轉換。</p>
  </Link>
  <Link to="./signal_condition/Isolation/WPC-LC-EX-10V" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Power size={24} color="var(--brand-electric-blue)"/> 隔離 </h2>
    <p>**隔離模組系列**</p>
    <p>提供多種隔離模組，如 NI 9237 荷重元激發電源及各類 DC/DC 隔離轉換器，確保訊號量測的純淨與安全。</p>
  </Link>
</div>