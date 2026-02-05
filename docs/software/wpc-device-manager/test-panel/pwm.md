---
sidebar_position: 14
sidebar_label: 'PWM'
---

# PWM

PWM (Pulse Width Modulation) 面板提供使用者產生脈衝寬度調變訊號的功能。您可以控制數位訊號的頻率與工作週期 (Duty Cycle)，適用於馬達控制、LED 調光等應用。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/pwm.png" alt="PWM Test Panel" width="60%" />
</div>

## 支援產品與通道

本功能支援具備 PWM 輸出功能的裝置。請依照您的裝置型號，確認對應的通道 (Channel) 編號：

| 產品名稱                                                                          | 通道 |
| :-------------------------------------------------------------------------------- | :--- |
| [`Ethan-D`](../../../daq/ethan/products/ethan-d.md)                               | 0~1  |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md)             | 0~1  |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)           | 0~1  |
| [`USB-DAQ-F1-CD`](../../../daq/usbdaq/products/product-USB-DAQ-CD.md)             | 0~1  |
| [`USB-DAQ-F1-D`](../../../daq/usbdaq/products/product-USB-DAQ-D.md)               | 0~1  |
| [`USB-DAQ-F1-DSNK`](../../../daq/usbdaq/products/product-USB-DAQ-D-SNK.md)        | 0~1  |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)             | 0~1  |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)             | 0~1  |

:::caution
注意：PWM 功能與計數器 (Counter) 功能共用硬體資源，無法同時在相同的通道上開啟。
:::

## 參數設定與操作

設定 PWM 輸出的頻率與工作週期，並透過下方按鈕控制輸出：

| 參數/按鈕          | 說明                                                                   |
| :----------------- | :--------------------------------------------------------------------- |
| **Frequency (Hz)** | 設定 PWM 訊號的頻率 (Hz)，即每秒鐘訊號切換的次數。                     |
| **Duty Cycle (%)** | 設定工作週期 (%)，即在一個完整週期內，訊號處於高電位 (On) 的時間比例。 |
| **Start**          | 開始產生並輸出 PWM 訊號。                                              |
| **Stop**           | 停止輸出 PWM 訊號。                                                    |
