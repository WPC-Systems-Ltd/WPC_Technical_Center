---
title: WDM 閃退
sidebar_label: WDM 閃退
sidebar_position: 2
description: "解決因顯卡驅動或節能設定導致的 WDM 閃退問題"
---

## 問題描述

在特定電腦環境下，執行包含 **3D Picture Control** 元件的 LabVIEW 應用程式（或編譯後的 EXE）時，可能會發生以下異常：
*   應用程式圖示在工作列出現後立即消失。
*   程式無法啟動，且無任何錯誤訊息提示。

:::note
WDM 工具在 **v1.2.1.29 以前的版本**，在特定環境中可能會遭遇此問題。
:::

### 可能原因

這是 **LabVIEW 2019 的已知問題 (Known Issue)**。
LabVIEW 的 3D Picture Control元件依賴 **OpenGL** 技術。若電腦的顯示卡驅動程式與 LabVIEW 所使用的 OpenGL 版本相容性不佳，或顯卡處於節能模式，可能導致程式崩潰。

### 解決方案

請嘗試以下步驟排除問題：

1.  **更新顯示卡驅動程式**

    請前往 [Microsoft 支援頁面](https://support.microsoft.com/zh-tw/windows/%E5%9C%A8-windows-%E4%B8%AD%E9%80%8F%E9%81%8E-%E8%A3%9D%E7%BD%AE%E7%AE%A1%E7%90%86%E5%93%A1-%E6%9B%B4%E6%96%B0%E9%A9%85%E5%8B%95%E7%A8%8B%E5%BC%8F-ec62f46c-ff14-c91d-eead-d7126dc1f7b6) 參考手動更新驅動程式的步驟，確保顯卡驅動為最新版本。

2.  **調整電源設定為「高效能模式」**

    部分使用者回報，當顯示卡運作於 **節能模式** 時易觸發此問題。請將電源計畫或顯卡控制面板設定調整為 **「高效能 (High Performance)」**。

    📺 **參考教學影片**：[YouTube 連結](https://www.youtube.com/watch?v=fJXPXgEXvcU)
