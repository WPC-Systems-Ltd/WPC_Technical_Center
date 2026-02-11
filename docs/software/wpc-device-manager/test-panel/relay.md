---
sidebar_position: 15
sidebar_label: 'Relay'
---

# Relay

Relay (繼電器) 面板提供使用者控制裝置上的繼電器開關狀態，並可設定上電初始狀態。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/relay.png" alt="Relay Test Panel" width="60%" />
</div>

## 支援產品與連接埠

| 產品名稱                                            | 連接埠 (Port) |
| :-------------------------------------------------- | :------------ |
| [`Ethan-L`](../../../daq/ethan/products/ethan-l.md) | 0             |

## 功能操作 (Operation)

| 按鈕               | 功能說明                       |
| :----------------- | :----------------------------- |
| **Start**          | 啟用繼電器控制與即時狀態回傳。 |
| **Stop**           | 停止控制。                     |
| **Power-Up State** | 設定裝置上電重啟時的預設狀態。 |

## 上電狀態設定 (Power-Up State)

點擊 **Power-Up State** 按鈕，可進入詳細設定頁面：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/relay-power-state.png" alt="Relay Power-Up State" width="60%" />
</div>

在此頁面中，您可以指定每個繼電器通道在裝置通電瞬間 (Power On) 應保持 **開啟 (ON)** 或 **關閉 (OFF)** 狀態。設定完成後請儲存，下次裝置重啟時將自動套用此設定。
