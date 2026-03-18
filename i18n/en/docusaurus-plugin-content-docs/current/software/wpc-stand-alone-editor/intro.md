---
title: Introduction and Installation
sidebar_label: Intro & Installation
sidebar_position: 1
description: "WPC Stand-alone Python Editor software introduction, download, and installation guide"
---

# Introduction and Installation

## Introduction

WPC Stand-alone Python Editor is a LabVIEW-based standalone Python IDE (Integrated Development Environment). It is specifically designed for WPC PYCO products, allowing users to easily write and execute Python programs.

## Download and Installation

### Step 1: Download Stand-Alone Python Editor

Please download the latest version of Stand-Alone Python Editor from the WPC official website.

> [Download Stand-Alone Python Editor](https://www.wpc.com.tw/stand-alone-python-editor.html)

:::caution
To run this software, you must first install the **LabVIEW Run-Time Engine 2018**.
:::

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-stand-alone-editor/stand_alone_editor_download_page.png').default} alt="stand_alone_editor_download_page" width="60%" />
</div>


### Step 2: Download and Install LabVIEW Run-time Engine 2018

> [Download LabVIEW 2018 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2018.html)


<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-stand-alone-editor/runtime2018_download_page.png').default} alt="runtime2018_download_page" width="60%" />
</div>

## Open Stand-Alone Python Editor

1.  Decompress the downloaded Stand-Alone Python Editor file.
2.  Open `WPC Stand-Alone Python Editor.exe`.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-stand-alone-editor/stand_alone_editor_open.png').default} alt="stand_alone_editor_open" width="60%" />
</div>

### Handling Windows Security Warnings

If Windows displays a "Windows protected your PC" or "Unrecognized app" warning:

1.  Click **"More info"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-stand-alone-editor/windows_protection_1.png').default} alt="windows_protection_1" width="60%" />
    </div>

2.  Click **"Run anyway"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc-stand-alone-editor/windows_protection_2.png').default} alt="windows_protection_2" width="60%" />
    </div>

### Firewall Settings

Upon the first opening, the Windows Firewall might block some functions.

1.  Check **"Private networks"** and **"Public networks"**.
2.  Click **"Allow access"**.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-stand-alone-editor/windows_firewall.png').default} alt="windows_firewall" width="60%" />
</div>

When opening the Stand-Alone Python Editor for the first time, it will attempt to connect to the COM Port.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-stand-alone-editor/stand_alone_editor_connect_COM_port.png').default} alt="stand_alone_editor_connect_COM_port" width="60%" />
</div>
