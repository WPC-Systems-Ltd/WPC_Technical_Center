---
title: 快速入門
sidebar_position: 1
slug: /daq/ethan/getting-started
---

import { Rocket, Cpu, Code, HelpCircle, Network, Usb, Wifi, Settings2, Search, Zap, RefreshCw, Wrench, ChevronsRight } from 'lucide-react';

# 快速入門

## 歡迎使用！



## 準備事項

**硬體:**

1. Ethan
2. 網路線
3. 24V DC 電源供應器
4. 電腦

**軟體:**

1. [WPC Device Manager](/docs/software/wpc-device-manager/intro) (推薦)
2. [WPC Device Driver](/docs/driver/wpc-device-driver/intro)

---

## 步驟 1: 安裝軟體
:::tip 安裝教學
詳細請參考 [WPC Device Manager 安裝](/docs/software/wpc-device-manager/intro)。
:::
1. 請前往 [WPC 官方網站](https://www.wpc.com.tw/wpc-device-manager.html)，下載最新版本的 WPC Device Manager。
2. 將下載的檔案解壓縮至您選擇的資料夾。
3. 雙擊執行檔以開啟編輯器。

## 步驟 2: 連接硬體

1.  將 24V DC 電源供應器連接至您的 Ethan。
2.  將網路線連接至您的 Ethan 與電腦。
3.  等待電腦辨識裝置 (驅動程式應會自動安裝)。

## 步驟 3: 執行您的第一個範例

1.  開啟 WPC Device Manager。
2.  從 [官方範例頁面](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples/PYCO_WIFI/System/get_system_info.html) 下載範例程式碼。
3.  在編輯器中開啟範例檔案。
4.  確保您的 Ethan 已選取為目標裝置 (檢查編輯器的裝置選單)。
5.  點擊 "Run" 按鈕以在開發板上執行程式碼。

## 恭喜！

您已成功建立開發環境並在 Ethan 上執行了第一個程式。