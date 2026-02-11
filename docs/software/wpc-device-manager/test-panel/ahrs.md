---
sidebar_position: 3
sidebar_label: 'AHRS'
---

# AHRS

AHRS (Attitude and Heading Reference System) 面板提供使用者讀取姿態與航向參考系統的數據。透過內建的加速度計、陀螺儀與磁力計，即時運算並顯示裝置的 3D 姿態。

## 支援產品

本功能支援具備 AHRS 模組的裝置：

| 產品名稱                                                    | 說明                  |
| :---------------------------------------------------------- | :-------------------- |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | 內建 IMU 慣性測量單元 |
| [`Wifi-DAQ-E3-AO`](../../../daq/wifidaq/product-general.md) | 內建 IMU 慣性測量單元 |

## 數據顯示 (Data & 3D Model)

面板分為數據數值顯示與 3D 模型姿態顯示兩部分：

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ahrs.png" alt="AHRS Data" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/ahrs-3dmodel.png" alt="AHRS 3D Model" width="60%" />
</div>

| 參數               | 說明              | 範圍          |
| :----------------- | :---------------- | :------------ |
| **Roll (翻滾角)**  | 繞 X 軸旋轉的角度 | -180° ~ +180° |
| **Pitch (俯仰角)** | 繞 Y 軸旋轉的角度 | -90° ~ +90°   |
| **Yaw (偏航角)**   | 繞 Z 軸旋轉的角度 | -180° ~ +180° |

## 操作說明

| 按鈕/參數 | 說明                                                       |
| :-------- | :--------------------------------------------------------- |
| **Start** | 開始讀取並更新 AHRS 姿態數據。                             |
| **Stop**  | 停止讀取。                                                 |
| **Unit**  | 切換顯示單位：<br/>• **Degrees**：度<br/>• **Rad**：弧度   |
| **Mode**  | 採樣模式，目前僅支援 **On Demand** (單次讀取更新) 模式。   |

