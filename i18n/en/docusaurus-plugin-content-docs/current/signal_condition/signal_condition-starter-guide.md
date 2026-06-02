---
title: Signal Conditioner Getting Started
sidebar_label: Getting Started
sidebar_position: 1
slug: /signal-conditioner-starter-guide
description: "Welcome to Explore WPC Signal Conditioners We provide high-precision, high-stability signal processing modules to help you convert various sensor signals int..."
keywords: [Signal Conditioner Getting Started, signal conditioner, signal isolation, amplifier, filter, load cell]
---
import { Cpu, Activity, Zap, Settings, Settings2, Thermometer, Power } from 'lucide-react';
import Link from '@docusaurus/Link';

<div className="gs-hero glow-effect">
  <h1>Welcome to Explore WPC Signal Conditioners</h1>
  <p>We provide high-precision, high-stability signal processing modules to help you convert various sensor signals into standard voltage or current formats, facilitating easier data acquisition by back-end equipment (DAQ) and industrial control systems.</p>
</div>

## <Activity size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Module Product Line

<div className="gs-card-grid">
  <Link to="./signal_condition/Voltage/WPC_1ch_PGA" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Cpu size={24} color="var(--brand-electric-blue)"/> Voltage </h2>
    <p>**1ch PGA**</p>
    <p>Provides dynamic gain adjustment from 0.125 to 128, supports differential input and channel-to-GND isolation, and effectively suppresses common-mode noise in industrial environments.</p>
  </Link>
  <Link to="./signal_condition/Current/WPC_1ch_LPCS" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Zap size={24} color="var(--brand-electric-blue)"/> Current </h2>
    <p>**1ch LPCS**</p>
    <p>Precisely converts voltage to minute current output (up to 200mA) and supports 4-wire sensing to eliminate wire resistance errors. Exceptional linearity makes it ideal for precision contact resistance measurement.</p>
  </Link>
  <Link to="./signal_condition/Force/WPC_Load_Cell_Amplifier" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings2 size={24} color="var(--brand-electric-blue)"/> Force </h2>
    <p>**1ch LCA**</p>
    <p>Specifically designed for load cells, featuring a stable built-in 5V excitation voltage and fixed 1000x high-gain precision amplification, with 9KHz high bandwidth and zero offset tuning.</p>
  </Link>
  <Link to="./signal_condition/Strain/WPC_Strain_Gauge_Amplifier" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> Strain </h2>
    <p>**1ch SGA**</p>
    <p>Designed specifically for 120Ω quarter-bridge strain gauges, providing fixed 1000x precision amplification and up to 300KHz bandwidth, ideal for high-speed dynamic stress and structural impact analysis.</p>
  </Link>
  <Link to="./signal_condition/Displacement/WPC_LVDT_Signal_Conditioner" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> Displacement </h2>
    <p>**1ch LVDT**</p>
    <p>Integrates excitation drive, demodulation filtering, and signal amplification. It provides a 7kHz drive frequency and ±10V output, supporting delicate adjustment of gain (VR1) and zero offset (VR2).</p>
  </Link>
  <Link to="./signal_condition/Acceleration/IEPE-ICP" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> Acceleration </h2>
    <p>**IEPE-ICP**</p>
    <p>Specially designed for piezoelectric accelerometers and dynamic force sensors, with built-in precision constant current excitation, AC coupling, and stable ±5V output.</p>
  </Link>
  <Link to="./signal_condition/Optical/PDA-1ch-5V-100k" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Activity size={24} color="var(--brand-electric-blue)"/> Optical Sensing </h2>
    <p>**PDA-1ch-5V-100k**</p>
    <p>Designed specifically for photodiode detectors, compatible with Silicon and Germanium photodiodes. It provides a 100K transimpedance gain and 1KHz bandwidth with extremely low noise for precise weak photocurrent measurement.</p>
  </Link>
  <Link to="./signal_condition/Temperature/WPC-8ch-PT-100" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Thermometer size={24} color="var(--brand-electric-blue)"/> Temperature </h2>
    <p>**PT-100/1000 Signal Conditioner**</p>
    <p>Designed for PT-100/1000 temperature sensors, available in 4-channel and 8-channel versions, providing precise temperature-to-voltage conversion.</p>
  </Link>
  <Link to="./signal_condition/Isolation/WPC-LC-EX-10V" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Power size={24} color="var(--brand-electric-blue)"/> Isolated </h2>
    <p>**Isolated Modules**</p>
    <p>Provides various isolated power modules such as the NI 9237 load cell excitation power supply and DC/DC isolated converters, ensuring signal purity and safety.</p>
  </Link>
</div>
