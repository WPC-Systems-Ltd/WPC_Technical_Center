---
title: 1ch Low Pass Filter (LPF-150)
sidebar_position: 7
description: WPC 1ch Low Pass Filter (LPF-150) 產品簡介、特點與規格說明
---

# 1ch Low Pass Filter (LPF-150)

WPC Low Pass Filter (LPF-150) 是一個專為濾除高頻雜訊而設計的訊號處理前端模組。本產品採用主動式四階 MFB 濾波架構，能有效清除訊號中的高頻干擾，確保資料量測的準確性與穩定性。

### 核心特色
*   **高品質濾波運算**：採用主動式四階 (Active 4-order) MFB (Multiple Feedback) 低通濾波架構。
*   **精確截止頻率**：具備 150Hz 的截止頻率 (-3dB)，專為中低頻訊號量測優化。
*   **多樣化訊號轉換**：支援單端 (Single-ended) 輸入並轉換為差動 (Differential) 訊號輸出。
*   **標準化增益**：固定增益為 1，確保訊號強度在濾波過程中保持不變。
*   **精密偏移調整**：配備可調式電阻 (VR)，使用者可根據需求手動校正零點偏移 (Offset)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter.png" alt="Low_Pass_Filter" width="60%" />
</div>

---

## 產品規格與特點

WPC LPF-150 提供精準的頻率過濾功能，其主要規格如下：

*   **供電輸入**：24 VDC
*   **濾波類別**：主動式四階 MFB 低通濾波器
*   **頻寬 (-3dB)**：150 Hz
*   **增益 (Gain)**：1
*   **輸入電壓範圍**：±10 V (單端 Single-ended)
*   **輸出電壓範圍**：±10 V (差動 Differential)
*   **零點調整**：可透過內建 VR 調整 Offset

---

## 接腳定義與硬體介面

以下為 WPC LPF-150 的詳細接腳與電源配置說明：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_pinout.png" alt="Low_Pass_Filter_pinout" width="60%" />
</div>

| 接腳編號 | 功能說明                       |
| :------- | :----------------------------- |
| 1        | - (未定義)                     |
| 2        | - (未定義)                     |
| 3        | GND (訊號接地)                 |
| 4        | IN- (訊號輸入 負端)             |
| 5        | IN+ (訊號輸入 正端)             |
| 6        | GND (訊號接地)                 |
| 7        | - (未定義)                     |
| 8        | Output (訊號輸出)              |
| VR       | Offset Tuning (零點偏移調整)   |
| 24V+     | 24V (電源輸入 正極)            |
| 24V-     | 0V (電源輸入 負極)             |

---

## 進階設定與說明

### 偏移調整 (Offset Tuning)
WPC LPF-150 在出廠前皆已手動完成零點校核。本模組保留了偏移調整功能，方便客戶根據特定應用場景進行微調。例如：您可以透過調整 VR，將原本介於 ±2.5V 之間的訊號平移至 0 ~ 5V 的範圍，以便直接使用僅支援 5V 單一電源範圍的資料擷取設備 (DAQ)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_offset_tuning.png" alt="Low_Pass_Filter_offset_tuning" width="60%" />
</div>

---

## 特性曲線 (Characteristic Curves)

### 頻率響應 (Frequency Response)
下圖展示了 LPF-150 的頻率響應曲線，截止點精確設定於 150Hz。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_frequency_response.png" alt="Low_Pass_Filter_frequency_response" width="60%" />
</div>

### 增益/相位頻譜 (Gain/Phase Spectrum)
這張圖表詳細描述了訊號在不同頻率下的增益與相位變化情形。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_gain_phase.png" alt="Low_Pass_Filter_gain_phase" width="60%" />
</div>

---

## 尺寸圖 (Dimensional Drawing)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_dimension.png" alt="Low_Pass_Filter_dimension" width="60%" />
</div>
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Low_Pass_Filter_dimension1.png" alt="Low_Pass_Filter_dimension1s" width="60%" />
</div>
