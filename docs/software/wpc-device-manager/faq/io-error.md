---
title: WDM 無法開啟
sidebar_label: WDM 無法開啟
sidebar_position: 1
description: "解決開啟 WDM 時出現 Generic file I/O error 的路徑長度問題"
---

## 問題描述

開啟 WPC Device Manager (WDM) 時，跳出如下圖所示的 "Generic file I/O error" 錯誤視窗，導致程式無法正常啟動。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-01.png" alt="Generic file I/O error 錯誤訊息 1" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-02.png" alt="Generic file I/O error 錯誤訊息 2" width="40%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/io-error-03.png" alt="Generic file I/O error 錯誤訊息 3" width="40%" />
</div>
### 可能原因

此錯誤通常是由於 Windows 系統的 **檔案路徑長度限制** 所致。當應用程式所在的資料夾路徑過深（字元數過長）時，系統可能無法正確讀取相關資源檔。

### 解決方案

請將 WDM 應用程式資料夾 **移動至較淺層的目錄**（例如直接移動至 `D:\WDM\` 或桌面上），即可解決此問題。
