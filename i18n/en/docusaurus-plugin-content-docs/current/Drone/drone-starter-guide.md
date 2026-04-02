---
title: Drone Getting Started
sidebar_label: Drone Getting Started
sidebar_position: 1
slug: /drone-starter-guide
---

import { Rocket, PlaneTakeoff, Settings, RadioTower, HelpCircle, Network, Code } from 'lucide-react';

<div className="gs-hero glow-effect">
  <h1>Explore WPC Drone Solutions</h1>
  <p>The drone in your hands is a professional flight platform designed and manufactured entirely in Taiwan (MIT). It is equipped with our self-developed high-efficiency flight control algorithm, featuring an ultra-fast response time of 2.5 ms, allowing it to maintain stable flight even in harsh environments with wind speeds up to 17.2 m/s (Level 7 gusts).</p>
</div>

## <Rocket size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Getting Started Learning Path

<div className="gs-timeline">
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">1</div>
    <div className="gs-timeline-content">
      <h3>Install Drivers</h3>
      <p>We provide native API support. Please visit the Technical Support Center to download the dedicated [LabVIEW](/docs/driver/driver_intro) or [Python](/docs/driver/driver_intro) drivers to accelerate your custom development.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">2</div>
    <div className="gs-timeline-content">
      <h3>Watch Tutorial Videos</h3>
      <p>For your operational safety, please be sure to watch our [Remote Control Operation Tutorial Video](https://youtu.be/MCejJsEQymk?si=x_JAGVxeK_ln8VU9) and [Battery Charging Tutorial Video](https://youtu.be/nEynb3iW2Kc?si=RNXUJJ2hdrq8ycAr).</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">3</div>
    <div className="gs-timeline-content">
      <h3>Hardware Confirmation and Architecture Analysis</h3>
      <p>If your project requires integration with AI edge computing or custom sensors, please read the [appendix](/docs/Drone/appendix) in the WPC Drone User Guide before mounting any equipment. This will help you clarify the system architecture.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">4</div>
    <div className="gs-timeline-content">
      <h3>Standard Flight Operation Procedures</h3>
      <p>Before conducting actual flights, please be sure to read the [Standard Flight Operation Procedures](/docs/Drone/takeoff-guide) to ensure flight safety.</p>
    </div>
  </div>
  <div className="gs-timeline-item">
    <div className="gs-timeline-icon">5</div>
    <div className="gs-timeline-content">
      <h3>Actual Flight and Operation</h3>
      <p>In a safe, open area, wear protective gear and perform the first takeoff unlock and basic hover test.</p>
    </div>
  </div>
</div>

---

## <PlaneTakeoff size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Core Teaching Resources

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/Drone/intro" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> Introduction</h2>
    <p>**Understand System Architecture**</p>
    <p>Includes introductions to drone components, sensor principles.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/specification" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Settings size={24} color="var(--brand-electric-blue)"/> Product Specifications</h2>
    <p>**Understand Product Specifications**</p>
    <p>Includes detailed product specifications.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/takeoff-guide" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><PlaneTakeoff size={24} color="var(--brand-electric-blue)"/> Takeoff Guide</h2>
    <p>**From Zero to the Sky**</p>
    <p>Provides a detailed pre-flight checklist, as well as standard procedures for safe operation and emergency handling.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/remote-control-guide" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> Remote Control and Communication</h2>
    <p>**Take Control of Your Drone**</p>
    <p>Definitions of control sticks and switches, and guides on configuring flight modes and failsafe protections.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/battery-charge" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> Battery Charging Tutorial</h2>
    <p>**Battery Charging Tutorial**</p>
    <p>Introduces precautions for battery charging and how to charge the battery correctly.</p>
  </a>
  <a href="/WPC_Technical_Center/docs/Drone/appendix" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RadioTower size={24} color="var(--brand-electric-blue)"/> Appendix</h2>
    <p>**Hardware Confirmation and Payload Installation**</p>
    <p>Confirm communication status between the mission computer and flight control computer, and familiarize yourself with the UART pin definitions of the flight control computer.</p>
  </a>
</div>

---

## <Code size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Driver Support Overview

WPC provides hardware drivers for multiple programming languages, allowing users to quickly integrate WPC hardware devices and develop their own applications. You can click the language link below to go to the detailed tutorial:

| Programming Language | Features | Detailed Tutorial Link |
| :------- | :------- | :----------- |
| **LabVIEW** | Provides a complete set of VI packages and ready-made graphical panels, allowing engineers to quickly integrate automated testing and measurement workflows. | [LabVIEW Getting Started](/docs/driver/driver_intro) |
| **Python** | Open-source and easy-to-use API with a consistent interface and rich examples, suitable for developers of all levels to get started quickly. | [Python Getting Started](https://github.com/WPC-Systems-Ltd/WPC_Python_driver_release) |

---

## <HelpCircle size={28} style={{verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--brand-electric-blue)'}} /> Frequently Asked Questions (FAQ)

<div className="gs-card-grid">
  <a href="/WPC_Technical_Center/docs/drone-faq" className="theme-doc-card gs-card">
    <h2 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Network size={24} color="var(--brand-electric-blue)"/> WPC Drone</h2>
    <p>**Common Issues and Troubleshooting Guide**</p>
  </a>
</div>