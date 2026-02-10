---
title: 用 WIFI 和 myRIO 連線
sidebar_position: 6
description: 設定 myRIO 無線網路連線的兩種模式指南
---

# 用 WIFI 和 myRIO 連線

您可以透過 **NI MAX** 設定 myRIO 的無線通訊模式，依據您的網路環境需求，選擇以下任一種連線方式。

## 模式一：建立無線基地台 (Access Point)

此模式將 myRIO 設定為無線基地台，讓電腦直接連線至 myRIO 發出的 Wi-Fi 訊號。適用於無外部網路環境的點對點連線。

### 設定步驟
1. 開啟 **NI MAX**。
2. 將 myRIO 的網路設定改為 **Wireless Access Point**。
3. 在電腦端的 Wi-Fi 列表中，尋找並連線至 myRIO 的 SSID。
4. 連線成功後，LabVIEW 專案即可與 myRIO 進行通訊。

### 參考文件
- [How do I Set NI myRIO as an Access Point?](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YH5zCAG&l=zh-TW)

## 模式二：連線至現有無線網路 (Station Mode)

此模式將 myRIO 連線至現有的 Wi-Fi 基地台（如路由器或手機熱點），電腦也需連線至同一網路。適用於需同時存取網際網路的場景。

### 設定步驟
1. 開啟 **NI MAX**。
2. 將 myRIO 的網路設定改為 **Connect to wireless network**。
3. 選擇並輸入現有 Wi-Fi 網路 (基地台或手機熱點) 的名稱與密碼。
4. 將電腦端的 Wi-Fi 連線至**同一個** Wi-Fi 網路。
5. 確認兩者在同一網段後，LabVIEW 專案即可與 myRIO 進行通訊。

### 參考文件
- [Connecting myRIO to a Host Computer (myRIO Toolkit)](https://www.ni.com/docs/zh-TW/bundle/labview-myrio-toolkit/page/myriohelp/myrio_usb_wifi_config.html)
