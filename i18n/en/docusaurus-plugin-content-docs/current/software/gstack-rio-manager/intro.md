---
title: Introduction and Installation
sidebar_label: Intro & Installation
sidebar_position: 1
description: "gStack-RIO Manager software introduction, download, and installation guide"
---

# Introduction and Installation

## Introduction

**gStack-RIO Manager** is a powerful utility specifically designed for managing gStack-RIO controllers and their peripheral modules.

Through gStack-RIO Manager, users can perform the following functions:
*   Configure the functions of cards within the gStack-RIO chassis.
*   Inquire about the pinout diagrams of gStack-RIO module cards.
*   Open the **Test Panel** for gStack-RIO module cards.
*   Add or remove functions of virtual module cards.

## Download and Installation

### Step 1: Download gStack-RIO Manager

Please download the latest version of gStack-RIO Manager from the WPC official website.

> [Download gStack-RIO Manager](https://www.wpc.com.tw/gstackrio-manager.html)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-gstack-rio-manager/gstackRIO_manager_download_page.png').default} alt="gstackRIO_manager_download_page" width="60%" />
</div>

:::caution
To run this software, you must first install the **LabVIEW Run-Time Engine 2019**.
:::

### Step 2: Download and Install LabVIEW Run-time Engine 2019

> [Download LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)


<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-gstack-rio-manager/runtime2019_download_page.png').default} alt="runtime2019_download_page" width="60%" />
</div>

### Step 3: Download and Install NI VISA Runtime 15.5

> [Download NI CompactRIO 15.5](https://www.wpc.com.tw/ni-compactrio-155.html)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-gstack-rio-manager/compactRIO_15_5_download_page.png').default} alt="compactRIO_15_5_download_page" width="60%" />
</div>

## Open gStack-RIO Manager

1.  Decompress the downloaded gStack-RIO Manager file.
2.  Open `gStack-RIO Manager.exe`.

### Handling Windows Security Warnings

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-gstack-rio-manager/windows_protection_1.png').default} alt="windows_protection_1" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-gstack-rio-manager/windows_protection_2.png').default} alt="windows_protection_2" width="60%" />
    </div>

### Firewall Settings

Upon the first opening, the Windows Firewall might block some functions.

1.  Check both **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-gstack-rio-manager/windows_firewall.png').default} alt="windows_firewall" width="60%" />
</div>

Once opened, gStack-RIO Manager will automatically search for gStackRIO controllers.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-gstack-rio-manager/gstackRIO_manager_search.png').default} alt="gstackRIO_manager_search" width="60%" />
</div>
