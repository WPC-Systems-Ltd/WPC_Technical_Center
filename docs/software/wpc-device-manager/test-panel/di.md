---
sidebar_position: 5
sidebar_label: 'DI'
---

# DI

DI (Digital Input) 面板提供使用者讀取數位輸入訊號的狀態。透過此介面，您可以即時監控各連接埠的數位訊號變化，確認外部裝置的輸入狀態。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/di.png" alt="DI Test Panel" width="60%" />
</div>

## 支援產品與連接埠

本功能支援具備數位輸入 (DI) 功能的裝置。請依照您的裝置型號，確認對應的連接埠 (Port) 編號：

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

透過下方的控制按鈕來啟動或停止訊號讀取功能：

| 按鈕      | 功能                                              |
| :-------- | :------------------------------------------------ |
| **Start** | 開始讀取 DI 數值。介面上的燈號將即時反映輸入狀態。 |
| **Stop**  | 停止讀取 DI 數值。                                |
