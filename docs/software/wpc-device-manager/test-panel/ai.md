---
sidebar_position: 1
sidebar_label: 'AI'
---

# AI

AI (Analog Input) 面板提供使用者進行電壓或電流的類比訊號量測。透過此介面，您可以設定擷取通道、採樣模式及取樣率，並即時檢視訊號波形。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/ai.png" alt="AI Test Panel" width="80%" />
</div>

## 操作流程

請依照以下步驟進行 AI 訊號量測設定：

### 1. 選擇連接埠 (Port)

首先確認您的裝置型號，並選擇對應的連接埠 (Port) 與通道。

| 產品名稱                                                              | 連接埠 | 量測類型                |
| :-------------------------------------------------------------------- | :----- | :---------------------- |
| [`Ethan-A`](../../../daq/ethan/products/ethan-a.md)                   | 0      | 電壓                    |
| [`Ethan-A2`](../../../daq/ethan/products/ethan-a2.md)                 | 0      | 電壓                    |
| [`Ethan-I`](../../../daq/ethan/products/ethan-i.md)                   | 0      | 電流                    |
| [`Ethan-IA`](../../../daq/ethan/products/ethan-ia.md)                 | 0, 1   | 0: 電流<br/>1: 電壓     |
| [`USB-DAQ-F1-AD`](../../../daq/usbdaq/products/product-USB-DAQ-AD.md) | 0      | 電壓                    |
| [`USB-DAQ-F1-AOD`](../../../daq/usbdaq/products/product-USB-DAQ-AOD.md)| 0      | 電壓                    |
| [`Wifi-DAQ-E3-A`](../../../daq/wifidaq/product-general.md)            | 0      | 電壓                    |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md)           | 0      | 電壓                    |
| [`Wifi-DAQ-F4-A`](../../../daq/wifidaq/product-general.md)            | 0      | 電壓                    |

### 2. 設定通道 (Channel Selection)

在 **Channel Selection** 下拉選單中選擇要啟用的通道範圍。

| 選項           | 說明                           |
| :------------- | :----------------------------- |
| `port0/ai 0`   | 僅開啟通道 0                   |
| `port0/ai 0:1` | 開啟通道 0 至 1 (共 2 個通道)  |
| `port0/ai 0:3` | 開啟通道 0 至 3 (共 4 個通道)  |
| `port0/ai 0:7` | 開啟通道 0 至 7 (共 8 個通道)  |

### 3. 設定擷取模式 (Mode)

依據您的量測需求選擇合適的擷取模式：

- **On Demand (單次讀取)**：軟體發送一次指令，裝置回傳當下的一個數值。適用於不需要連續波形的低速監控。
- **N Sample (有限點讀取)**：設定固定的採樣點數，擷取完成後即停止。
- **Continuous (連續讀取)**：持續不間斷地擷取資料，直到按下 Stop 按鈕。適用於長時間訊號紀錄或示波器監控。

### 4. 設定取樣率 (Sampling Rate)

設定每秒鐘擷取的點數 (Samples per second)。不同裝置支援的最高取樣率如下：

| 產品名稱                                                    | 取樣率說明                   |
| :---------------------------------------------------------- | :--------------------------- |
| [`Ethan-A`](../../../daq/ethan/products/ethan-a.md)         | 20 kS/s (8通道同步)          |
| [`Ethan-A2`](../../../daq/ethan/products/ethan-a2.md)       | 10 kS/s (8通道同步)          |
| [`Ethan-I`](../../../daq/ethan/products/ethan-i.md)         | 僅支援 `On Demand` 模式      |
| [`Ethan-IA`](../../../daq/ethan/products/ethan-ia.md)       | 僅支援 `On Demand` 模式      |
| [`Wifi-DAQ-E3-A`](../../../daq/wifidaq/product-general.md)  | 10 kS/s (8通道同步)          |
| [`Wifi-DAQ-E3-AH`](../../../daq/wifidaq/product-general.md) | 10 kS/s (8通道同步)          |
| [其他 USB-DAQ](../../../daq/usbdaq/sampling_rate.md)        | 請參閱該產品規格書           |

### 5. 其他參數設定

視需求調整以下進階參數：

- **Number of Sample**：每次從緩衝區讀取的點數（影響圖表更新頻率）。
- **Timeout (ms)**：讀取資料的逾時時間，若超過此時間未讀到資料則回傳錯誤。
- **Ignore Timeout Error**：若勾選，當發生逾時錯誤時將被忽略，程式會繼續執行。
- **Trigger**：設定觸發條件（如無特殊需求選 `None`）。
  - `RTC-Absolute`：絕對時間觸發。
  - `RTC-Relative`：相對時間觸發。

### 6. 開始量測

設定完成後，操作下方按鈕控制量測：

| 按鈕  | 功能             |
| :---- | :--------------- |
| Start | 開始進行訊號擷取 |
| Stop  | 停止訊號擷取     |
