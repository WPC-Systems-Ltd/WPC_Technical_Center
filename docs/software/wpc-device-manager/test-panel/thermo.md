---
sidebar_position: 19
sidebar_label: 'Thermo'
---

# Thermo

Thermo 面板專為溫度量測設計，支援熱電偶 (Thermocouple) 與熱電阻 (RTD) 感測器。提供多種感測器類型選擇與訊號濾波功能。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_thermo.png" alt="WDM_testPanel_thermo" width="60%" />
</div>

## 支援產品與連接埠

請依照您的感測器類型與裝置型號，確認連接埠設定：

### 1. 熱電偶 (Thermocouple)

| 產品名稱                                                               | 連接埠 |
| :--------------------------------------------------------------------- | :----- |
| [`Ethan-T`](../../../daq/ethan/products/ethan-t.md)                    | 1      |
| [`USB-DAQ-F1-TD`](../../../daq/usbdaq/products/product-USB-DAQ-TD.md)  | 1      |

### 2. 熱電阻 (RTD)

| 產品名稱                                                               | 連接埠 |
| :--------------------------------------------------------------------- | :----- |
| [`USB-DAQ-F1-RD`](../../../daq/usbdaq/products/product-USB-DAQ-RD.md)  | 1      |

## 參數設定

| 參數                | 說明                                                                                |
| :------------------ | :---------------------------------------------------------------------------------- |
| **Type**            | 選擇感測器類型 (例如 B, E, J, K, N, R, S, T 型熱電偶)。                             |
| **Oversampling**    | 過取樣設定 (2, 4, 8, 16, 32)。<br/>增加取樣次數取平均值，可降低雜訊但會降低更新率。 |
| **Noise Rejection** | 電源頻率雜訊抑制設定 (60Hz 或 50Hz)，用於濾除市電干擾。                             |

## 操作說明

| 按鈕      | 功能               |
| :-------- | :----------------- |
| **Start** | 開始讀取溫度數值。 |
| **Stop**  | 停止讀取。         |
