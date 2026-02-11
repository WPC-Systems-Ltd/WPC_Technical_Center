---
title: WDM Crash
sidebar_label: WDM Crash
sidebar_position: 2
description: "Solve WDM crash issue caused by graphics driver or power saving settings"
---

## Problem Description

In certain computer environments, when running LabVIEW applications (or compiled EXEs) containing **3D Picture Control** components, the following anomalies may occur:
*   The application icon appears on the taskbar and disappears immediately.
*   The program cannot start, and there is no error message prompt.

:::note
WDM tools in versions **prior to v1.2.1.29** may encounter this issue in specific environments.
:::

### Possible Causes

This is a **Known Issue of LabVIEW 2019**.
LabVIEW's 3D Picture Control component relies on **OpenGL** technology. If the compatibility between the computer's graphics card driver and the OpenGL version used by LabVIEW is poor, or the graphics card is in power saving mode, it may cause the program to crash.

### Solution

Please try the following steps to troubleshoot the problem:

1.  **Update Graphics Card Driver**

    Please visit [Microsoft Support Page](https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6) to refer to the steps for manually updating drivers, ensuring the graphics card driver is the latest version.

2.  **Adjust Power Settings to "High Performance"**

    Some users report that this issue is easily triggered when the graphics card operates in **Power Saving Mode**. Please adjust the power plan or graphics card control panel settings to **"High Performance"**.

    📺 **Reference Video**: [YouTube Link](https://www.youtube.com/watch?v=fJXPXgEXvcU)
