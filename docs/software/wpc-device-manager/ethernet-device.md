---
title: Ethernet 裝置功能
sidebar_label: Ethernet 裝置功能
sidebar_position: 5
description: "網路參數設定、腳位圖、別名設定與韌體更新"
---

## 重新整理

點擊 **"Refresh"** 按鈕可重新讀取並更新 Ethernet 裝置資訊。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-refresh.png" alt="重新整理 Ethernet 裝置" width="60%" />
</div>

---

## 腳位圖

點擊 **"Pinout"** 按鈕以顯示腳位圖。視窗大小可根據使用者需求調整

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-pinout.png" alt="腳位圖按鈕" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/pinout.png" alt="EthanA 腳位圖範例" width="60%" />
</div>

---

## 設定別名

若系統同時連接多個同型號裝置，可透過設定別名來區分不同裝置。

**操作步驟：**

1.  在 **Device Alias** 欄位中輸入欲設定的名稱（例如：`EthanA-WPC`）。
2.  點擊 **"Set Alias"** 按鈕。
3.  確認名稱無誤後，點擊 **"OK"**。
4.  系統將提示需重新啟動裝置以套用設定，請點擊 **"OK"**。
5.  裝置重啟後，左側裝置列表中的名稱將更新為 **EthanA-WPC**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-set-alias.png" alt="設定別名" width="60%" />
</div>

---

## 設定 IP 位址

更改裝置 IP 位址之步驟如下：

1.  在 **IP Address** 欄位輸入新的 IP 位址（例如：`192.168.1.120`）。
2.  點擊 **"Set IP"** 按鈕。
3.  確認 IP 位址無誤後，點擊 **"OK"**。
4.  系統將提示需重新啟動裝置以套用設定，請點擊 **"OK"**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-set-ip.png" alt="設定 IP" width="60%" />
</div>

---

## 設定閘道器

更改裝置預設閘道器之步驟如下：

1.  在 **Gateway** 欄位輸入閘道器 IP（例如：`192.168.1.18`）。
2.  點擊 **"Set Gateway"** 按鈕。
3.  確認閘道器 IP 無誤後，點擊 **"OK"**。
4.  系統將提示需重新啟動裝置以套用設定，請點擊 **"OK"**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-set-gateway.png" alt="設定閘道器" width="60%" />
</div>

---

## 重新啟動

若需軟體重啟裝置，請點擊 **"Reboot"** 按鈕。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-reboot.png" alt="重新啟動裝置" width="60%" />
</div>

---

## 更新韌體

若需更新 Ethernet 裝置韌體，請依下列步驟操作：

1.  點擊 **"Update Firmware"** 按鈕。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-update-firmware.png" alt="更新韌體按鈕" width="60%" />
    </div>

    *   **⚠️ 圖示**：表示目前韌體版本較舊。
    *   **✅ 圖示**：表示目前韌體已是最新版本。

2.  在檔案瀏覽器中選擇對應的韌體檔案 (`.bin`)。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-bin.png" alt="選擇韌體檔案" width="60%" />
    </div>

3.  系統將跳出確認視窗，點擊 **"OK"** 開始寫入。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/update-start.png" alt="開始更新韌體" width="60%" />
    </div>

4.  等待進度條完成。

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/updating.png" alt="韌體更新中" width="60%" />
    </div>

:::danger
更新過程中 **請勿關閉電源或中斷網路連線**。若因中斷導致更新失敗，裝置可能無法運作並需送回原廠維修。
:::

---

## 設定 SNTP

設定網路時間協定可確保裝置時間同步。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-sntp.png" alt="設定 SNTP" width="60%" />
</div>

SNTP 支援以下兩種設定模式：

1.  **連線至公用 NTP 伺服器池 (Public NTP Server Pool)**
    *   將 server address 設定為 `255.255.255.255`。
    *   **前提**：裝置必須具備網際網路存取能力。

2.  **連線至自建 NTP 伺服器 (Private NTP Server)**
    *   將 server address 設定為該伺服器的 IP 位址。
    *   **前提**：NTP 伺服器必須與 WPC 裝置位於同一子網域，或透過路由器可達。

:::caution
設定 IP、Submask 與 Gateway 時，請確保網路參數符合邏輯規範。
:::
