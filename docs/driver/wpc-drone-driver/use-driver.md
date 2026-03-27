---
title: 使用 WPC Drone Driver
sidebar_label: 使用驅動程式
sidebar_position: 2
description: "介紹如何在 LabVIEW 中使用 WPC Drone Driver API"
---

## 開啟 LabVIEW 與驅動程式面板

開啟 LabVIEW，在程式區 (Block Diagram) 點擊滑鼠右鍵，展開 Functions 面板。您將會看到 **"WPC Driver"** 分類，所有的 **WPC Drone** 相關功能皆位於 **"WPC Driver"** 分類之下。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/driver/wpc_drone_driver/wpc_drone_driver_api.png" alt="wpc_drone_driver_api" width="60%" />
</div>

---

## WPC Drone Driver API

WPC Drone Driver 提供無人機控制與資料擷取相關的 API，包含：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/driver/wpc_drone_driver/wpc_drone_driver_api2.png" alt="wpc_drone_driver_api2" width="60%" />
</div>

| API 類別                      | 描述                                                                |
|:----------------------------  | :----------------------------------------------------------------- |
|Open Drone                     | 初始化並建立與無人機的通訊連線。                                      |
|Close Drone                    | 關閉與無人機的通訊連線並釋放相關資源。                                 |
|Active                         | 控制無人機的啟動（Arm）與解除啟動（Disarm）狀態。                      |
|Takeoff, Landing               | 控制無人機的起飛與降落動作。                                          |
|Vehicle Frame                  | 處理相對於無人機本身機身座標系（Vehicle Frame）的相關操作與數據取得。    |
|NED Frame                      | 處理相對於北東地（North-East-Down, NED）座標系的相關操作與數據取得。    |
|System                         | 用於讀取或設定無人機的系統相關資訊（例如：電池電量、系統狀態等）。        |