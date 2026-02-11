---
sidebar_position: 10
sidebar_label: 'I2C'
---

# I2C

I2C (Inter-Integrated Circuit) 面板提供使用者進行 I2C 通訊協定測試。您可以設定時脈速率，對從屬裝置 (Slave) 進行讀寫與查詢操作。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/i2c.png" alt="I2C Test Panel" width="60%" />
</div>

## 支援產品與連接埠

本功能支援具備 I2C 介面的裝置。請依照您的裝置型號，確認對應的連接埠 (Port) 編號：

| 產品名稱                                                                          | 連接埠 |
| :-------------------------------------------------------------------------------- | :----- |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)             | 1~2    |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)           | 1~2    |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)             | 1~2    |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)               | 1~2    |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)             | 1~2    |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)             | 1~2    |

## 參數設定

### I2C 時脈速率 (Clock Rate)

支援四種標準傳輸速率，請依據您的硬體需求選擇：

1.  **Standard**：100 kbit/s
2.  **Fast**：400 kbit/s
3.  **Fast Plus**：1 Mbit/s
4.  **High Speed**：3.4 Mbit/s

## 操作說明

透過下方的控制按鈕來執行特定的 I2C 指令：

| 按鈕              | 功能                                                        |
| :---------------- | :---------------------------------------------------------- |
| **Write Address** | 設定目標 I2C 從屬裝置的位址 (Slave Address)。               |
| **Write**         | 將資料寫入至指定位址的從屬裝置。                            |
| **Read Address**  | 設定要讀取的從屬裝置位址。                                  |
| **Read**          | 從從屬裝置讀取資料。                                        |
| **Query**         | 執行複合操作：先寫入指令，隨後讀取回應數據 (Repeated Start)。 |
| **Bytes to Read** | 指定欲讀取的資料長度 (Byte)。                               |
| **Read Delay**    | 設定讀取指令發送後的等待時間 (毫秒)，亦即時序上的間隔。     |
