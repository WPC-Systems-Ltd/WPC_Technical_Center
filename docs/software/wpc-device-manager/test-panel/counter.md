---
sidebar_position: 4
sidebar_label: 'Counter'
---

# Counter

Counter (計數器) 面板提供使用者進行脈衝訊號的計數與頻率量測。您可以設定觸發邊緣與頻率量測的時間區間，以適應不同的訊號特性。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/counter.png" alt="Counter Test Panel" width="60%" />
</div>

## 參數設定與操作

在使用計數器功能前，請先確認您的裝置通道設定與訊號來源。

:::caution
請注意：計數器 (Counter) 功能與 PWM 功能共用硬體資源，因此無法同時在相同的通道上開啟。
:::

### 參數說明

在介面中可調查以下參數：

| 參數                      | 說明                                                                                 |
| :------------------------ | :----------------------------------------------------------------------------------- |
| **Counter channel**       | 選擇要操作的計數器通道 (例如：0 或 1)。                                              |
| **Active Edge**           | 設定觸發計數的訊號邊緣：<br/>- **Rising**：上升緣觸發<br/>- **Falling**：下降緣觸發  |
| **Frequency Window (ms)** | 設定頻率量測的時間取樣區間 (毫秒)。區間越長，頻率解析度越高，但更新速度越慢。        |

### 控制按鈕

操作下方按鈕來控制計數功能：

| 按鈕      | 功能                                  |
| :-------- | :------------------------------------ |
| **Start** | 開始進行計數與頻率量測。              |
| **Stop**  | 停止計數與頻率量測。                  |
| **Reset** | 將目前的計數值 (Current Count) 歸零。 |

### 數值顯示

啟動後，面板將即時顯示以下資訊：

- **Current Count**：目前的累計計數值。
- **Current Frequency**：目前的訊號頻率 (Hz)。
