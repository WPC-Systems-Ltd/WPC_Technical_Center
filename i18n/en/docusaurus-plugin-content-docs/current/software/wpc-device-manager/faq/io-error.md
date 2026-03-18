---
title: WDM Cannot Open
sidebar_label: WDM Cannot Open
sidebar_position: 1
description: "Resolving the path length issue causing Generic file I/O error when opening WDM"
---

## Problem Description

When opening WPC Device Manager (WDM), a "Generic file I/O error" window pops up as shown in the figure below, preventing the program from starting normally.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/faq/io-error-01.png').default} alt="Generic file I/O error message 1" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/faq/io-error-02.png').default} alt="Generic file I/O error message 2" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/faq/io-error-03.png').default} alt="Generic file I/O error message 3" width="40%" />
</div>

### Possible Causes

This error is usually caused by the **file path length limit** of the Windows system. When the application's folder path is too deep (the number of characters is too long), the system may not be able to correctly read the relevant resource files.

### Solution

Please move the WDM application folder to a **shallower directory** (for example, directly move to `D:\WDM\` or the desktop) to resolve this issue.
