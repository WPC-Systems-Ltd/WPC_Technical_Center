---
title: 網路連線設定 (AP Mode)
sidebar_position: 3
---

# 網路連線設定 (AP Mode)

若您的 WIFI-DAQ 無法連線至預設路由器 (例如更換環境或初次使用)，裝置將自動進入 **AP 模式 (Access Point Mode)**。請依照以下步驟重新設定網路。

## 步驟 1：確認裝置狀態

當 WIFI-DAQ 上電後若持續顯示 **紅色 LED 燈**，即代表裝置處於 AP 模式，等待設定。

<img src="/img/daq/wifi-daq/wifi-daq-change-domain-ip.png" alt="AP Mode" width="600" />

## 步驟 2：電腦連線至裝置

1. 開啟電腦的 Wi-Fi 列表。
2. 搜尋並連接名稱為 **`WPC_DAQ_xxxxxx`** 的網路 (xxxxxx 為裝置唯一識別碼，例如 `WPC_DAQ_62e814`)。

<img src="/img/daq/wifi-daq/wifi-daq-ap-mode-pc-connect.png" alt="Connect to WIFI-DAQ" width="400" />

:::note
此時電腦無法連上網際網路是正常現象，請維持連線以進入設定頁面。
:::
:::

## 步驟 3：進入設定頁面

1. 開啟網頁瀏覽器 (Chrome, Edge 等)。
2. 在網址列輸入 **`192.168.4.1`** 並按 Enter。
3. 您將看到 WIFI-DAQ 的設定介面。

<img src="/img/daq/wifi-daq/wifi-daq-browser.png" alt="Web Config" width="600" />

## 步驟 4：設定 Wi-Fi

1. 從列表中選擇您要連線的路由器 (SSID)。
2. 輸入該 Wi-Fi 的密碼。
3. 點擊 **Save** 儲存設定。

<img src="/img/daq/wifi-daq/wifi-daq-ssid-list.png" alt="Wifi List" width="600" />

:::warning
- 請確保輸入的 Wi-Fi 密碼正確。
- WIFI-DAQ 僅支援 2.4GHz 頻段，請勿連接 5GHz 網路。
:::
:::

## 步驟 5：重啟裝置

完成設定後 (點擊 Save)，WIFI-DAQ 會自動重新啟動。

- 重新上電後，若設定成功，LED 將轉為 **綠色** (待機) 或 **藍色** (已連線)。
- 若 LED 仍為紅色，請重複上述步驟檢查 Wi-Fi 密碼是否輸入錯誤。

> 💡 關於詳細的 LED 燈號含義，請參考 **[LED 狀態說明](./intro.md#led-狀態說明)**。
