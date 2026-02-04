---
title: USB 裝置功能
sidebar_label: USB 裝置功能
sidebar_position: 4
description: "查詢腳位圖與更新韌體"
---

## 重新整理

點擊 **"Refresh"** 按鈕可重新讀取並更新裝置資訊。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/refresh.png" alt="重新整理 USB 裝置" width="60%" />
</div>

---

## 腳位圖

點擊 **"Pinout"** 按鈕可開啟腳位定義視窗，供使用者查詢各腳位功能。視窗大小可自由調整。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/pinout.png" alt="腳位圖按鈕" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/pinout-detail.png" alt="USB-DAQ 腳位圖範例" width="60%" />
</div>

---

## 更新韌體

若需更新 USB 裝置韌體，請依下列步驟操作：

1.  點擊 **"Update Firmware"** 按鈕。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/update-firmware.png" alt="更新韌體按鈕" width="60%" />
    </div>

    *   **⚠️ 圖示**：表示目前韌體版本較舊。
    *   **✅ 圖示**：表示目前韌體已是最新版本。

2.  系統將跳出確認視窗，點擊 **"OK"** 繼續。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/update-confirm.png" alt="確認更新韌體" width="60%" />
    </div>

3.  在檔案瀏覽器中選擇對應的韌體檔案 (`.bin`)。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/choose-bin.png" alt="選擇韌體檔案" width="60%" />
    </div>

4.  再次確認更新，點擊 **"OK"** 開始寫入。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/confirm-bin.png" alt="開始更新韌體" width="60%" />
    </div>

5.  等待進度條完成。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/updating.png" alt="韌體更新中" width="60%" />
    </div>

:::danger
更新過程中 **請勿關閉電源或拔除 USB 連線**。若因中斷導致更新失敗，裝置可能無法運作並需送回原廠維修。
:::
