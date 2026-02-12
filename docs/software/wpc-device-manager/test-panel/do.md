---
sidebar_position: 6
sidebar_label: 'DO'
---

# DO

DO (Digital Output) 面板提供使用者控制數位輸出訊號的狀態。透過此介面，您可以手動切換各通道的高低電位輸出，並設定上電初始狀態。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/do.png" alt="DO Test Panel" width="60%" />
</div>

## 支援產品與連接埠

本功能支援具備數位輸出 (DO) 功能的裝置。請依照您的裝置型號，確認對應的連接埠 (Port) 編號：

| 產品名稱                                                                   | 連接埠 |
| :------------------------------------------------------------------------- | :----- |
| [`Ethan-D`](../../../daq/ethan/products/ethan-d.md)                        | 1      |
| [`Ethan-EX-D`](../../../daq/ethan/products/ethan-ex-d.md)                  | 2, 3   |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)      | 0~3    |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)    | 0~3    |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)      | 0~3    |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)        | 0~3    |
| [`USB-DAQ-F1-DSNK`](../../../daq/usbdaq/products/product-USB-DAQ-D-SNK.md) | 0~3    |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)      | 0~3    |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)      | 0~3    |

## 操作說明

您可以點擊畫面上的開關圖示來切換輸出狀態，並使用下方按鈕進行全域控制：

| 按鈕               | 功能                               |
| :----------------- | :--------------------------------- |
| **Start**          | 啟用 DO 控制功能，允許更改輸出狀態。 |
| **Stop**           | 停止 DO 控制功能。                 |
| **Power-Up state** | 開啟「上電狀態設定」視窗。         |

### 上電狀態設定 (Power-Up State)

此功能允許您設定裝置在上電啟動或重新啟動時，各 DO 通道的預設初始狀態（High 或 Low）。此設定會寫入裝置的非揮發性記憶體中。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/do-power-state.png" alt="DO Power-Up State" width="60%" />
</div>

1. 點擊 **Power-Up state** 按鈕開啟設定視窗。
2. 切換各通道的開關至您期望的初始狀態。
3. 按下 **Set** 按鈕將設定寫入裝置。

| 按鈕    | 功能                                         |
| :------ | :------------------------------------------- |
| **Set** | 將目前的開關組態寫入裝置，作為上電初始狀態。 |
