---
sidebar_position: 20
sidebar_label: 'UART'
---

# UART

UART (Universal Asynchronous Receiver/Transmitter) 面板提供使用者進行非同步串列通訊測試。您可以設定鮑率、同位檢查等參數，進行資料收發。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/uart.png" alt="UART Test Panel" width="60%" />
</div>

## 支援產品與連接埠

本功能支援具備 UART 介面的裝置。請依照您的裝置型號，確認對應的連接埠 (Port) 編號：

| 產品名稱                                                                          | 連接埠 |
| :-------------------------------------------------------------------------------- | :----- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)             | 1~2    |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)           | 1~2    |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)             | 1~2    |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)               | 1~2    |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)             | 1~2    |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)             | 1~2    |

## 參數設定

在開啟連接埠前，請先設定通訊協定參數：

| 參數          | 說明                                            |
| :------------ | :---------------------------------------------- |
| **Baud Rate** | 傳輸速率 (bits per second)，例如 9600, 115200。 |
| **Data Bit**  | 資料位元長度，通常為 8 bits。                   |
| **Parity**    | 同位檢查位元 (None, Odd, Even)，用於錯誤檢測。  |
| **Stop Bit**  | 停止位元長度 (1, 1.5, 2)，用於標示資料框結束。  |

## 操作說明

| 按鈕              | 功能                                         |
| :---------------- | :------------------------------------------- |
| **Open Port**     | 依照設定參數開啟 UART 連接埠。               |
| **Close Port**    | 關閉 UART 連接埠。                           |
| **Write**         | 將輸入框內的字串傳送出去。                   |
| **Read**          | 讀取接收緩衝區內的資料。                     |
| **Query**         | 查詢模式：發送指令後自動等待並讀取回傳資料。 |
| **Bytes to Read** | 讀取模式下指定要讀取的位元組數。             |
| **Read Delay**    | 讀取前的延遲等待時間 (毫秒)。                |
