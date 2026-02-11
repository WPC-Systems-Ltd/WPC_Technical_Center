---
title: WDM Cannot Open
sidebar_label: WDM Cannot Open
sidebar_position: 1
description: "Solve the path length issue causing Generic file I/O error when opening WDM"
---

## Problem Description

When opening WPC Device Manager (WDM), a "Generic file I/O error" window pops up as shown below, causing the program to fail to start normally.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-01.png" alt="Generic file I/O error Message 1" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-02.png" alt="Generic file I/O error Message 2" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-03.png" alt="Generic file I/O error Message 3" width="40%" />
</div>

### Possible Causes

This error is usually caused by the **file path length limit** of the Windows system. When the folder path where the application is located is too deep (too many characters), the system may not be able to correctly read the related resource files.

### Solution

Please **move the WDM application folder to a shallower directory** (for example, move directly to `D:\WDM\` or Desktop) to solve this problem.
