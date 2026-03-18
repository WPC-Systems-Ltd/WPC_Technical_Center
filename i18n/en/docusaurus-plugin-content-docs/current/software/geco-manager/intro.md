---
title: Introduction and Installation
sidebar_label: Intro & Installation
sidebar_position: 1
description: "GECO Manager software introduction, download, and installation guide"
---

# Introduction and Installation

## Introduction

GECO Manager is a powerful utility designed specifically for managing GECO controllers and their peripheral modules.

With GECO Manager, users can:
*   Select the **FPGA Personality** for the GECO controller.
*   Open the **Test Panel** for GECO modules in each slot (C1 - C4) to directly control module functions and verify their normal operation.
*   Check the **Pinout** for each module.

## Download and Installation

### Step 1: Download GECO Manager

Please visit the official WPC website to download the latest version of GECO Manager.

> [Download GECO Manager](https://www.wpc.com.tw/geco-manager.html)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_download_page.png').default} alt="GECO Manager Download Page" width="60%" />
</div>

:::caution
To run this software, you must first install the **LabVIEW Run-Time Engine 2019**.
:::

### Step 2: Download and Install LabVIEW Run-time Engine 2019

> [Download LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/runtime2019_download_page.png').default} alt="LabVIEW 2019 Run-time Engine Download Page" width="60%" />
</div>

### Step 3: Download and Install NI CompactRIO 15.5

> [Download NI CompactRIO 15.5](https://www.wpc.com.tw/ni-compactrio-155.html)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/compactRIO_15_5_download_page.png').default} alt="NI CompactRIO 15.5 Download Page" width="60%" />
</div>

## Opening GECO Manager

1.  Extract the downloaded GECO Manager zip file.
2.  Open `GECO Manager.exe`.

### Handling Windows Security Warnings

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-geco-manager/windows_protect.png').default} alt="Windows Protect" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-geco-manager/windows_protect1.png').default} alt="Run Anyway" width="60%" />
    </div>

### Firewall Settings

When opening for the first time, Windows Firewall may block some features.

1.  Check both **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/windows_firework.png').default} alt="Windows Firewall" width="60%" />
</div>

Once opened, GECO Manager will automatically search for WPC GECO controllers.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_search.png').default} alt="GECO Manager Searching" width="60%" />
</div>
