---
title: Introduction and Installation
sidebar_label: Introduction and Installation
sidebar_position: 1
description: "GECO Manager software introduction, download and installation guide"
---

## Introduction

**GECO Manager** is a powerful utility designed specifically for managing **GECO controllers** and their peripheral modules.

Through GECO Manager, users can:
*   Select the **FPGA Personality** of the GECO controller.
*   Open the **Test Panel** of GECO modules on each slot (C1 - C4) to directly control module functions and confirm their normal operation.
*   Query the **Pinout** of each module.

## Download and Installation

### Step 1: Download GECO Manager

Please download the latest version of GECO Manager from the WPC official website.

### Step 2: Download and Install LabVIEW Run-time Engine 2019

:::caution Important
To run this software, you must install **LabVIEW Run-Time Engine 2019** first.
:::

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page2_X50.png" alt="LabVIEW Runtime Download Page" width="60%" />
</div>

### Step 3: Download and Install NI CompactRIO 15.5

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page3_X64.png" alt="NI CompactRIO Download Page" width="60%" />
</div>

## Open GECO Manager

1.  Unzip the downloaded GECO Manager file.
2.  Open `GECO Manager.exe`.

### Windows Security Warning Handling

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Please click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc-geco-manager/geco_manager_page4_X74.png" alt="Windows Protect Warning" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc-geco-manager/geco_manager_page4_X75.png" alt="Run anyway" width="60%" />
    </div>

### Firewall Settings

When opening for the first time, Windows Firewall may block some features.

1.  Please check **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page5_X82.png" alt="Firewall Settings" width="60%" />
</div>

After opening, GECO Manager will automatically search for devices on the network.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-geco-manager/geco_manager_page6_X88.png" alt="GECO Manager Startup Screen" width="60%" />
</div>
