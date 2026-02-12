---
title: WIFI 裝置功能
sidebar_label: WIFI 裝置功能
sidebar_position: 6
description: "Wi-Fi參數配置、AP模式設定、訊號監控與韌體更新"
---

## 重新整理

點擊 **"Refresh"** 按鈕可重新讀取並更新 WIFI 裝置資訊。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-refresh.png" alt="重新整理 WIFI 裝置" width="60%" />
</div>

---

## 腳位圖

點擊 **"Pinout"** 按鈕可開啟腳位定義視窗。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-pinout.png" alt="腳位圖按鈕" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/pinout.png" alt="WIFIDAQ 腳位圖範例" width="60%" />
</div>

---

## 設定 IP 位址

更改裝置 IP 位址之步驟如下：

1.  在 **IP Address** 欄位輸入新的 IP 位址（例如：`192.168.5.37`）。
2.  點擊 **"Set IP"** 按鈕。
3.  確認 IP 位址無誤後，點擊 **"OK"**。
4.  系統將提示需重新啟動裝置以套用設定，請點擊 **"OK"**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-set-ip.png" alt="設定 IP" width="60%" />
</div>

---

## 重新啟動

若需軟體重啟裝置，請點擊 **"Reboot"** 按鈕。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-reboot.png" alt="重新啟動裝置" width="60%" />
</div>

---

## 更新韌體

若需更新 WIFI 裝置韌體，請依下列步驟操作：

1.  點擊 **"Update Firmware"** 按鈕。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-update-firmware.png" alt="更新韌體按鈕" width="60%" />
    </div>

    *   **⚠️ 圖示**：表示目前韌體版本較舊。
    *   **✅ 圖示**：表示目前韌體已是最新版本。

2.  在檔案瀏覽器中選擇對應的韌體檔案 (`.bin`)。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-bin.png" alt="選擇韌體檔案" width="60%" />
    </div>

3.  系統將跳出確認視窗，點擊 **"OK"** 開始寫入。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/confirm-bin.png" alt="開始更新韌體" width="60%" />
    </div>

4.  等待進度條完成。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/updating.png" alt="韌體更新中" width="60%" />
    </div>

:::danger
更新過程中 **請勿關閉電源或中斷無線連結**。若因中斷導致更新失敗，裝置可能無法運作並需送回原廠維修。
:::


---

## AP 模式

1.  點擊 **"AP Mode"** 按鈕以開啟 WIFI 裝置的 AP 模式。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-apmode.png" alt="AP 模式按鈕" width="60%" />
    </div>

2.  WDM 將跳出確認視窗，請點擊 **"OK"** 繼續。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/apmode-confirm.png" alt="確認 AP 模式" width="60%" />
    </div>

3.  請透過 Wi-Fi 將電腦連線至指定的 AP 裝置。連線成功後，請點擊 **"OK"**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/apmode-connect-pc.png" alt="電腦連線至 AP" width="60%" />
    </div>

4.  點擊 "OK" 後，WDM 將自動開啟網頁。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/apmode-browser.png" alt="開啟設定網頁" width="60%" />
    </div>

5.  請透過該網頁進行網路配置。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/apmode-config.png" alt="網路配置頁面" width="60%" />
    </div>

:::caution
*   請確保電腦已成功連線至指定的 AP，否則將無法進入設定頁面。
*   若需更改 WIFI 裝置的網域或其他網路參數，設定完成後請點擊設定頁面上的 **"Save"**。
:::

---

## 設定 SSID/PW

點擊 **"SSID/PW"** 按鈕即可設定裝置欲連線的 Wi-Fi SSID 與密碼，或將裝置設定為 AP 模式。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-ssid.png" alt="選擇 SSID 與 PW" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/set-ssid.png" alt="設定 SSID 與 PW" width="60%" />
</div>
---

## 訊號監控

點擊 **"Monitor"** 按鈕可檢視裝置目前的電池電量與無線訊號強度 (RSSI)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/choose-monitor.png" alt="監控電池電量與 RSSI 強度" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/get-monitor.png" alt="監控頁面範例" width="60%" />
</div>
