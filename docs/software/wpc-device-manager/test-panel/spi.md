---
sidebar_position: 16
sidebar_label: 'SPI'
---

# SPI

SPI (Serial Peripheral Interface) 面板提供使用者進行 SPI 串列通訊測試。您可以設定 SPI 模式與傳輸速率，與周邊裝置進行全雙工通訊。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_spi.png" alt="WDM_testPanel_spi" width="60%" />
</div>

## 支援產品與連接埠

本功能支援具備 SPI 介面的裝置。請依照您的裝置型號，確認對應的連接埠 (Port) 編號：

| 產品名稱                                                                          | 連接埠 |
| :-------------------------------------------------------------------------------- | :----- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)             | 2      |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)             | 2      |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)               | 1~2    |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)             | 2      |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)             | 2      |

## 參數設定

### SPI 模式 (Mode)

支援四種標準 SPI 模式，由時脈極性 (CPOL) 與時脈相位 (CPHA) 決定：

| 模式 (Mode) | 時脈極性 (CPOL, Clock Polarity) | 時脈相位 (CPHA, Clock Phase) |
| :---------- | :------------------------------ | :--------------------------- |
| 0           | 0 (Idle Low)                    | 0 (Leading Edge)             |
| 1           | 0 (Idle Low)                    | 1 (Trailing Edge)            |
| 2           | 1 (Idle High)                   | 0 (Leading Edge)             |
| 3           | 1 (Idle High)                   | 1 (Trailing Edge)            |

## 操作說明

| 按鈕/參數      | 說明                                                           |
| :------------- | :------------------------------------------------------------- |
| **SPI Rate**   | 設定 SPI 時脈速率 (最大 1 MHz)。                               |
| **CS Pin**     | 選擇使用的晶片選擇腳位 (Chip Select)，具體定義視產品規格而定。 |
| **Bytes to Read** | 設定欲讀取的資料長度 (Byte)。                                  |
| **Write**      | 傳送數據至 SPI 裝置 (僅寫入)。                                 |
| **Read**       | 接收 SPI 裝置的數據 (僅讀取)。                                 |
| **Write+Read** | 全雙工操作：在寫入數據的同時讀取回傳數據。                     |
