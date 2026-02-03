---
title: 變更 Wi-Fi 設定 (使用 WDM)
sidebar_position: 4
---

# 變更 Wi-Fi 設定 (使用 WDM)

若您的 WIFI-DAQ 已經連線至路由器 (Station Mode)，但需要更改連線至另一個路由器 (例如：從 "WPC Systems 1" 更改至 "WPC Systems 100")，您可以透過 **WDM (WPC Device Manager)** 工具快速切換至 AP 模式進行設定。

## 步驟 1：啟用 AP 模式 (AP Mode)

請先開啟 WDM 軟體，在列表中找到您的 WIFI-DAQ 裝置，並點擊右側的 **AP Mode** 按鈕。

<img src="/img/daq/wifi-daq/wifi-daq-go-to-ap-mode.png" alt="Go to AP Mode" width="600" />

## 步驟 2：確認執行

WDM 將跳出視窗詢問是否確認要切換至 AP 模式。請點擊 **OK** 繼續。

<img src="/img/daq/wifi-daq/wifi-daq-keep-to-ap-mode.png" alt="Keep AP Mode" width="600" />

## 步驟 3：連線至裝置熱點

接下來 WDM 會提示將您的電腦 Wi-Fi 切換連線至 WIFI-DAQ 的熱點 (AP)。
請手動將電腦連線至對應的裝置 AP 後，點擊對話框中的 **OK**。

<img src="/img/daq/wifi-daq/wdm-auto-connect-to-wifidaq.png" alt="Auto Connect to WIFI-DAQ" width="600" />

## 步驟 4：自動進入設定頁面

點擊 OK 後，WDM 會自動開啟網頁瀏覽器，並跳轉至 WIFI-DAQ 的設定頁面 (`192.168.4.1`)。

<img src="/img/daq/wifi-daq/wdm-open-wifi-configuration-page.png" alt="Open WIFI Configuration Page" width="600" />

## 步驟 5：設定新的 Wi-Fi

進入網頁後，請執行以下步驟連接至新的路由器：

1. 從列表中選擇您要連線的**新路由器 SSID** (例如 "WPC Systems 100")。
2. 輸入該路由器的 Wi-Fi 密碼。
3. 點擊 **Save** 儲存設定。

<img src="/img/daq/wifi-daq/wifi-daq-ssid-list.png" alt="Wifi List" width="600" />

## 步驟 6：重啟裝置

點擊 Save 後，裝置將會自動重啟並嘗試連線至新的路由器。
重啟後觀察 LED 燈號，若轉為 **藍燈** 或 **綠燈**，即表示切換成功。
