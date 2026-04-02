---
title: Instrumentation Starter Guide
sidebar_label: Starter Guide
sidebar_position: 1
slug: /instrumentation-starter-guide
---

import { Rocket, Cpu, Code, HelpCircle, Layers, Wifi, Settings2, Search, Zap, RefreshCw, Wrench, Network, Layout, Briefcase } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>Welcome to Explore WPC Instrumentation</h1>
  <p>WPC's self-developed gStack-RIO series adopts a Rack chassis design, specifically for distributed, high-density I/O applications. Through flexible slot design and powerful LabVIEW support, you can quickly build precision control and measurement systems.</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Getting Started Path

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>Choose gStack-RIO Controller and Chassis</h3>
      <p>Select the appropriate gStack-RIO controller based on your channel count and application scenario (PC Remote Control or Stand-alone operation).</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>Configure I/O Module Cards</h3>
      <p>The gStack-RIO chassis provides 8 slots, allowing you to freely mix and match analog (AI/AO), digital (DI/DO), relay, serial communication (RS232/485), or CAN bus modules as needed.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>Hardware Wiring and Power Configuration</h3>
      <p>Connect the 24VDC power supply and Ethernet cable. gStack-RIO features a front-panel swappable design, facilitating physical wiring and subsequent maintenance.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>Install gStack-RIO Manager</h3>
      <p>Use the official management tool for chassis scanning, module configuration, and test panel verification.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">5</div>
    <div className="gs-timeline-content">
      <h3>Development and Deployment (LabVIEW)</h3>
      <p>Download the WPC driver and perform efficient development and logic control through LabVIEW or LabVIEW Real-time.</p>
    </div>
  </div>
</div>

---

## <Cpu size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Choose Your Instrumentation Equipment

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/Instrumentation/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Layers size={24} color="var(--brand-electric-blue)"/> gStack-RIO Series</h2>
    <p>**Distributed, High-Density I/O Solution**</p>
    <p>Chassis design supporting 1 controller and 8 functional modules, providing a flexible swappable card interface and a stable industrial-grade control environment.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Instrumentation/modules" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Layout size={24} color="var(--brand-electric-blue)"/> I/O Module Cards</h2>
    <p>**Diverse Functional Expansion Options**</p>
    <p>Covers voltage/current acquisition, analog output, digital I/O, relay switching, and various industrial communication protocols (CAN FD, RS232/485/422).</p>
  </a>
</div>

:::tip[Need more advice?]
If you are unsure which module best fits your application, please refer to the **[Product Introduction](/WPC_Technical_Center/docs/Instrumentation/intro)** to learn about detailed chassis architecture and controller configurations.
:::

---

## <Settings2 size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> gStack-RIO Product Management Tool - gStack-RIO Manager

**gStack-RIO Manager** is the core utility for managing gStack systems. It provides an intuitive interface for completing initial setups without writing any code:

<div className="gs-card-grid gs-card-grid-4">
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Search size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Chassis Scan</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Automatically scans and identifies available gStack-RIO controllers on the network.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Zap size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Card Configuration</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Set functions, modes, and virtual card assignments for modules in each slot.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Wrench size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Test Panel</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Built-in interactive panels for fast functional verification of individual modules.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Network size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Pin Query</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Instantly query wiring definitions and pinout diagrams for various module cards.</p>
  </div>
</div>

:::note[Download and Installation]
Please go to the **[gStack-RIO Manager Introduction and Installation](/WPC_Technical_Center/docs/software/gstack-rio-manager/intro)** page to download the management software and confirm the necessary LabVIEW Run-time and NI VISA driver environment.
:::

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Driver and Software Development

gStack-RIO is deeply integrated with the LabVIEW environment, allowing engineers to achieve optimal system performance.

| Development Environment | Feature Summary | Detailed Tutorial Link |
| :---------------------- | :-------------- | :--------------------- |
| **LabVIEW** | Provides rich VIs and demo examples, supporting PC Remote control mode. | [LabVIEW Getting Started](/WPC_Technical_Center/docs/driver/gstack-rio-driver/intro) |