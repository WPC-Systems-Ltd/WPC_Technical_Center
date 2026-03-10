---
title: WIFI 裝置功能
sidebar_label: WIFI 裝置功能
sidebar_position: 6
description: "Wi-Fi參數配置、AP模式設定、訊號監控與韌體更新"
---

## 重新整理

點擊 **"Refresh"** 按鈕可重新讀取並更新 WIFI 裝置資訊。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_refresh.png" alt="WDM_WIFI_refresh" width="60%" />
</div>

---

## 腳位圖

點擊 **"Pinout"** 按鈕可開啟腳位定義視窗，視窗大小可根據使用者需求調整。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_pinout.png" alt="WDM_WIFI_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_pinout1.png" alt="WDM_WIFI_pinout1" width="60%" />
</div>

---

## 設定 IP 位址

更改裝置 IP 位址之步驟如下：

1.  在 **IP Address** 欄位輸入新的 IP 位址（例如：`192.168.5.37`）。
2.  點擊 **"Set IP"** 按鈕。
3.  確認 IP 位址無誤後，點擊 **"OK"**。
4.  系統將提示需重新啟動裝置以套用設定，請點擊 **"OK"**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_set_ip.png" alt="WDM_WIFI_set_ip" width="60%" />
</div>

---

## 重新啟動

若需軟體重啟裝置，請點擊 **"Reboot"** 按鈕。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_reboot.png" alt="WDM_WIFI_reboot" width="60%" />
</div>

---

## 更新韌體

若需更新 WIFI 裝置韌體，請依下列步驟操作：

1.  點擊 **"Update Firmware"** 按鈕。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_update_firmware.png" alt="WDM_WIFI_update_firmware" width="60%" />
    </div>

:::info
- ⚠️ 圖示：表示目前韌體版本較舊。
- ✅ 圖示：表示目前韌體已是最新版本。
:::

2.  在檔案瀏覽器中選擇對應的韌體檔案 (`.bin`)。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_choose_bin.png" alt="WDM_WIFI_choose_bin" width="60%" />
    </div>

3.  系統將跳出確認視窗，點擊 **"OK"** 開始寫入。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_confirm_bin.png" alt="WDM_WIFI_confirm_bin" width="60%" />
    </div>

4.  等待進度條完成。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_updating.png" alt="WDM_WIFI_updating" width="60%" />
    </div>

:::danger
更新過程中 **請勿關閉電源或中斷無線連結**。若因中斷導致更新失敗，裝置可能無法運作並需送回原廠維修。
:::

---

## AP 模式

1.  點擊 **"AP Mode"** 按鈕以開啟 WIFI 裝置的 AP 模式。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_apmode.png" alt="WDM_WIFI_apmode" width="60%" />
    </div>

2.  WDM 將跳出確認視窗，請點擊 **"OK"** 繼續。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_apmode_confirm.png" alt="WDM_WIFI_apmode_confirm" width="60%" />
    </div>

3.  請透過 Wi-Fi 將電腦連線至指定的 AP 裝置。連線成功後，請點擊 **"OK"**。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_apmode_connect_pc.png" alt="WDM_WIFI_apmode_connect_pc" width="60%" />
    </div>

4.  點擊 "OK" 後，WDM 將自動開啟網頁。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_apmode_browser.png" alt="WDM_WIFI_apmode_browser" width="60%" />
    </div>

5.  請透過該網頁進行網路配置，設定完成後請點擊設定頁面上的 **"Save"**。


    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_apmode_config.png" alt="WDM_WIFI_apmode_config" width="60%" />
    </div>

:::info
請確保電腦已成功連線至指定的 AP，否則將無法進入設定頁面。
:::

---

## 設定 SSID/PW

點擊 **"SSID/PW"** 按鈕即可設定裝置欲連線的 Wi-Fi SSID 與密碼，或將裝置設定為 AP 模式。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_SSID.png" alt="WDM_WIFI_SSID" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_SSID_password.png" alt="WDM_WIFI_SSID_password" width="60%" />
</div>
---

## 訊號監控

點擊 **"Monitor"** 按鈕可檢視裝置目前的電池電量與無線訊號強度 (RSSI)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_monitor.png" alt="WDM_WIFI_monitor" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/wifi/WDM_WIFI_battery_RSSI.png" alt="WDM_WIFI_battery_RSSI" width="60%" />
</div>
