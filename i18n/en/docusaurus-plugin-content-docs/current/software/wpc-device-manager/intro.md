---
title: Introduction and Installation
sidebar_label: Intro & Installation
sidebar_position: 1
description: "Software introduction, download, and installation guide"
---

## Introduction

WPC Device Manager (WDM) is a comprehensive management tool designed specifically for WPC products, aimed at assisting users in efficiently operating, configuring, and maintaining various devices. Through an intuitive operation interface, users can easily complete device management tasks without needing a programming background.

The core functions of WDM include:

*   **Device Search**: Automatically scan and identify available WPC devices within the local area network.
*   **Device Configuration**: Provide complete network parameter settings and Simple Network Time Protocol (SNTP) timing functions.
*   **Pin Status**: Real-time monitoring and display of the device's digital I/O and digital pin status.
*   **Test Panel**: Built-in interactive test panel for users to perform functional verification and control.
*   **Firmware Update**: Provide a quick and secure firmware update mechanism to ensure the device maintains the latest version.

---

## Download and Installation

### Step 1: Download WPC Device Manager

Please visit the official WPC website to download the latest version of WPC Device Manager.

> [Download WPC Device Manager (WDM)](https://www.wpc.com.tw/wpc-device-manager.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/WDM_download_page.png" alt="WDM_download_page" width="60%" />
</div>

:::caution
Before running this software, the **LabVIEW Run-Time Engine 19.0** environment must be installed.
:::

### Step 2: Download and Install LabVIEW Run-time Engine 2019

> [Download LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/runtime2019_download_page.png" alt="runtime2019_download_page" width="60%" />
</div>

## Open WPC Device Manager

1.  Decompress the downloaded WPC Device Manager file.
2.  Open `WPC Device Manager.exe`.

### Handling Windows Security Warnings

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_protect.png" alt="windows_protect" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_protect1.png" alt="windows_protect" width="60%" />
    </div>

### Firewall Settings

Upon the first opening, the Windows Firewall might block some functions.

1.  Check **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/windows_firework.png" alt="windows_firework" width="60%" />
</div>

Once opened, WPC Device Manager will automatically search for WPC devices.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/WDM_search.png" alt="WDM_search" width="60%" />
</div>
