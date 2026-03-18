---
title: WDM Crash
sidebar_label: WDM Crash
sidebar_position: 2
description: "Resolving WDM crash issues caused by graphics card drivers or power-saving settings"
---

## Problem Description

Under specific computer environments, when running LabVIEW applications (or compiled EXEs) containing **3D Picture Control** components, the following abnormalities may occur:
*   The application icon appears on the taskbar and disappears immediately.
*   The program fails to start, and there are no error message prompts.

:::note
WDM tools in **versions prior to v1.2.1.29** may encounter this issue in specific environments.
:::

### Possible Causes

This is a **Known Issue of LabVIEW 2019**.
The 3D Picture Control component of LabVIEW relies on **OpenGL** technology. If the compatibility between the computer's graphics card driver and the OpenGL version used by LabVIEW is poor, or if the graphics card is in power-saving mode, it may cause the program to crash.

### Solution

Please try the following steps to troubleshoot the problem:

1.  **Update Graphics Card Driver**

    Please refer to the [Microsoft support page](https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6) for steps to manually update drivers, ensuring the graphics card driver is the latest version.

2.  **Adjust Power Settings to "High Performance" Mode**

    Some users report that this problem is easily triggered when the graphics card operates in **power-saving mode**. Please adjust the power plan or graphics card control panel settings to **"High Performance"**.

    📺 **Reference Tutorial Video**: [YouTube Link](https://www.youtube.com/watch?v=fJXPXgEXvcU)
