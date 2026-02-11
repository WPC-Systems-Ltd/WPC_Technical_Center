---
sidebar_position: 9
sidebar_label: 'Function Generator'
---

# Function Generator

Function Generator (函數產生器) 面板允許使用者透過類比輸出通道，產生各種標準波形訊號。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/function-gen.png" alt="Function Generator Test Panel" width="60%" />
</div>

## 支援產品

本功能需搭配具備類比輸出 (AO) 的高效能 DAQ 裝置：

| 產品名稱                                            | 說明                           |
| :-------------------------------------------------- | :----------------------------- |
| [`Ethan-O`](../../../daq/ethan/products/ethan-o.md) | 8 通道 (`+/-10V`) 類比電壓輸出 |

## 功能設定

### 1. 輸出模式 (Mode)

選擇波形的輸出行為模式：

| 模式           | 說明                                          |
| :------------- | :-------------------------------------------- |
| **N Sample**   | 有限點輸出。產生指定點數的波形後自動停止。    |
| **Continuous** | 連續輸出。波形將持續循環輸出，直到按下 Stop。 |

### 2. 波形種類 (Waveform)

支援以下標準波形：

1.  **DC Voltage**：直流電壓輸出。
2.  **Rectangular**：方波。
3.  **Triangular**：三角波。
4.  **Sine**：正弦波。

### 3. 參數設定

調整波形的細部參數。請注意輸出電壓需符合硬體規格限制 (`+/-10V`)。

| 參數              | 說明                                                                                                                                                                                                                            |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sampling Rate** | 設定取樣率 (最大支援 10K S/s)。                                                                                                                                                                                                 |
| **Frequency**     | 設定波形頻率。請遵循 [奈奎斯特定理](https://www.ni.com/en/shop/data-acquisition/measurement-fundamentals/analog-fundamentals/acquiring-an-analog-signal--bandwidth--nyquist-sampling-theorem-.html?srsltid=AfmBOopdJ6kb6dv79V2sWONvyrQaWi3EFlfxDpCNI8cNKDntnCxG9_W1) 設定合適的取樣率以避免失真。 |
| **Amplitude (V)** | 波形振幅 (單峰值)。                                                                                                                                                                                                             |
| **Offset (V)**    | 直流偏壓。<br/>**限制條件**：<br/>• Offset + Amplitude ≤ +10V<br/>• Offset - Amplitude ≥ -10V                                                                                                                                   |

## 操作說明

| 按鈕      | 功能                     |
| :-------- | :----------------------- |
| **Start** | 開始產生並輸出波形訊號。 |
| **Stop**  | 停止輸出。               |
