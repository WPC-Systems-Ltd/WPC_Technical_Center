---
title: DAQ Getting Started Guide
sidebar_label: Getting Started
sidebar_position: 1
slug: /daq-starter-guide
---

import { Rocket, Cpu, Code, HelpCircle, Network, Usb, Wifi, Settings2, Search, Zap, RefreshCw, Wrench, ChevronsRight } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>Explore WPC DAQ Solutions</h1>
  <p>We provide complete solutions from sensor data acquisition and various motor controls to drone system integration. Just select the hardware device that suits your needs and your familiar programming language to quickly start your precision control project.</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Getting Started Learning Path

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>Choose Hardware Device</h3>
      <p>According to your needs (network distance, portability, wireless applications), choose the appropriate DAQ device or system.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>Hardware Connection Setup</h3>
      <p>According to your hardware device, complete the physical connection setup.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>Install WPC Device Manager</h3>
      <p>Through our official hardware management tool, quickly scan devices and confirm connection status and firmware version.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>Install Driver</h3>
      <p>Choose your familiar programming language (Python, C# or LabVIEW), download WPC Device Driver and start development.</p>
    </div>
  </div>
</div>

---

## <Cpu size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Choose Your Hardware Platform

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/daq/ethan/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> Ethernet-DAQ Series</h2>
    <p>**Stable, High-Bandwidth Industrial Measurement Solution**</p>
    <p>Ideal for industrial sites requiring long-distance connections and multi-node synchronous monitoring. Features an RJ45 interface with high stability and bandwidth.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/usbdaq/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Usb size={24} color="var(--brand-electric-blue)"/> USB DAQ Series</h2>
    <p>**Plug-and-play High Precision Measurement**</p>
    <p>Quickly connect to PC via USB, supports Windows, ideal for lab R&D and portable testing applications.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/wifidaq/product-general" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Wifi size={24} color="var(--brand-electric-blue)"/> WIFI-DAQ</h2>
    <p>**Wireless Deployment and IoT Applications**</p>
    <p>Designed for data acquisition needs in areas difficult to wire or for mobile carriers. Supports wireless network transmission for sensing everywhere.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/daq/stem/layout" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings2 size={24} color="var(--brand-electric-blue)"/> STEM Series</h2>
    <p>**Education and Automation Prototyping**</p>
    <p>Rich Analog and Digital I/O, supports multiple dev environments, ideal for automation learning and prototyping.</p>
  </a>
</div>

:::tip[What Else?]
Beyond the standard DAQ series, we also provide **[Embedded Systems Getting Started](/docs/embedded-intro)** and a full **[Drone Control Getting Started](/docs/drone-intro)**.
:::

---

## <Settings2 size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> WPC Device Manager

Before you start writing code, we strongly recommend installing **WPC Device Manager**. This is a management software specifically designed for WPC hardware that helps you:

<div className="gs-card-grid gs-card-grid-4">
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Search size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Auto Scan</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Automatically scan and identify available WPC devices within the local area network.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Zap size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Device Configuration</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Provide complete network parameter settings and Simple Network Time Protocol (SNTP) timing functions.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <RefreshCw size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Firmware Updates</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Provide a quick and secure firmware update mechanism to ensure the device maintains the latest version.</p>
  </div>
  <div className="theme-doc-card gs-card" style={{padding: '1.2rem', textAlign: 'center'}}>
    <div style={{marginBottom: '0.8rem', display: 'flex', justifyContent: 'center'}}>
      <Wrench size={32} color="var(--brand-electric-blue)" />
    </div>
    <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem'}}>Test Panel</h3>
    <p style={{fontSize: '0.9rem', marginBottom: 0}}>Built-in interactive test panel for users to perform functional verification and control.</p>
  </div>
</div>

:::note[Learn More]
**[WPC Device Manager](/docs/software/wpc-device-manager/intro)**
Download and install the management tool to manage and configure your WPC DAQ devices more efficiently.
:::

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Software SDK Support Overview

WPC provides hardware drivers in various programming languages, allowing users to quickly integrate WPC hardware and develop their own applications. You can click the language links below for detailed tutorials:

| Programming Language | Feature Summary | Detailed Tutorial Link |
| :------------------- | :-------------- | :--------------------- |
| **LabVIEW** | Provides a complete VI package and ready-made graphical panels, enabling engineers to quickly integrate automated test and measurement processes. | [LabVIEW Getting Started](/docs/driver/driver_intro) |
| **Python** | Open-source and easy-to-use API with a consistent interface and rich examples, suitable for developers of all levels. | [Python Getting Started](https://github.com/WPC-Systems-Ltd/WPC_Python_driver_release) |
| **C#** | Open-source driver optimized for .NET environments, using intuitive Open/Read-Write/Close logic, significantly lowering the development threshold. | [C# Getting Started](https://github.com/WPC-Systems-Ltd/WPC_CSharp_driver_release) |

---

## <HelpCircle size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Frequently Asked Questions (FAQ)

<div className="gs-card-grid">
  <a href="/docs/wdm-faq" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> WPC Device Manager</h2>
    <p>**Frequently Asked Questions and Troubleshooting Guide**</p>
  </a>
</div>
