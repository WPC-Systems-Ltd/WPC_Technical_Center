---
title: Introduction and Installation
sidebar_label: Intro & Installation
sidebar_position: 1
description: "Introduction, download, and installation guide for GECO Manager software"
---

# Introduction and Installation

## Introduction

GECO Manager is a powerful utility specifically designed for managing GECO controllers and their peripheral modules.

Through GECO Manager, users can:
*   Select the **FPGA Personality** of the GECO controller.
*   Open the **Test Panel** for GECO modules in each slot (C1 - C4) to directly control module functions and confirm normal operation.
*   Inquire about the **Pinout** of each module.

## Download and Installation

### Step 1: Download GECO Manager

Please visit the official WPC website to download the latest version of GECO Manager.

> [Download GECO Manager](https://www.wpc.com.tw/geco-manager.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_download_page.png" alt="geco_manager_download_page" width="60%" />
</div>

:::caution
To run this software, you must first install the **LabVIEW Run-Time Engine 2019**.
:::

### Step 2: Download and Install LabVIEW Run-time Engine 2019

> [Download LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/runtime2019_download_page.png" alt="runtime2019_download_page" width="60%" />
</div>

### Step 3: Download and Install NI CompactRIO 15.5

> [Download NI CompactRIO 15.5](https://www.wpc.com.tw/ni-compactrio-155.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/compactRIO_15_5_download_page.png" alt="compactRIO_15_5_download_page" width="60%" />
</div>

## Open GECO Manager

1.  Decompress the downloaded GECO Manager file.
2.  Open `GECO Manager.exe`.

### Handling Windows Security Warnings

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_protect.png" alt="windows_protect" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_protect1.png" alt="windows_protect1" width="60%" />
    </div>

### Firewall Settings

Upon the first opening, the Windows Firewall might block some functions.

1.  Check **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/windows_firework.png" alt="windows_firework" width="60%" />
</div>

Once opened, GECO Manager will automatically search for WPC GECO controllers.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-geco-manager/geco_manager_search.png" alt="geco_manager_search" width="60%" />
</div>
