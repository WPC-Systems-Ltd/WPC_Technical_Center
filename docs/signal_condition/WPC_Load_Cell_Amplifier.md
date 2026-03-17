---
title: 1ch Load Cell Amplifier (LCA)
sidebar_position: 9
description: WPC 1ch Load Cell Amplifier (LCA) 產品簡介、特點與規格說明
---

# 1ch Load Cell Amplifier (LCA)

WPC Load Cell Amplifier (LCA) 是一款專為荷重元量測設計的信號處理前端模組。它能將 Load Cell 輸出的微小電壓訊號（通常為 mV 等級）精確放大為標準電壓訊號，使使用者能透過一般用途的類比輸入通道進行高品質的力學量測。

### 核心特色
*   **高倍率精確放大**：提供固定 1000 倍增益 (Gain)，確保微小訊號能被清晰擷取。
*   **穩定的激勵電壓**：內建 5V 激勵電壓 (Excitation voltage)，可直接驅動外部橋式感測器。
*   **高頻寬量測**：頻寬達 9KHz，適用於快速力學變化與衝擊量測。
*   **極低噪訊表現**：噪訊峰對峰值 (Vp-p) 約 10mV，有效值 (Vrms) 小於 2mV，提供純淨的訊號輸出。
*   **精密零點調校**：配備可調式電阻 (VR)，方便使用者進行零點偏移 (Offset) 補償。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier.png" alt="Load_Cell_Amplifier" width="60%" />
</div>

---

## 產品規格與特點

WPC LCA 為荷重元應用提供優異的性能表現，其主要規格如下：

*   **供電輸入**：24 VDC
*   **增益 (Gain)**：1000
*   **頻寬 (Bandwidth)**：9 KHz
*   **激勵電壓 (Excitation Voltage)**：5 V
*   **噪訊位準 (Noise Level)**：Vp-p ≈ 10 mV, Vrms < 2 mV
*   **輸出範圍**：±10 V (建議使用差動輸出)
*   **類型**：外部橋式放大器 (External bridge, w/o built-in bridge)

---

## 接腳定義與硬體介面

以下為 WPC LCA 的詳細接腳配置說明：

| 接腳編號 | 標籤      | 方向  | 功能說明                            |
| :------- | :-------- | :--- | :---------------------------------- |
| 1        | Bias-     | EX-  | 激勵電壓 負端                       |
| 2        | Bias+     | EX+  | 激勵電壓 正端 (5V)                  |
| 3        | GND       | AGND | 類比接地 (隔離設計)                 |
| 4        | IN-       | SIG- | 訊號輸入 負端                       |
| 5        | IN+       | SIG+ | 訊號輸入 正端                       |
| 6        | Out-      | AO-  | 訊號輸出 負端 (建議採差動連接)      |
| 7        | -         | -    | 未定義                              |
| 8        | Out+      | AO+  | 訊號輸出 正端 (建議採差動連接)      |
| VR       | Offset    | -    | 偏移調整電阻 (順時針旋轉可增加偏移) |
| 24V+     | 24V       | -    | 電源輸入 正極                       |
| 24V-     | 0V        | -    | 電源輸入 負極                       |

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_pinout.png" alt="Load_Cell_Amplifier_pinout" width="60%" />
</div>

## Gain Selection

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_gain_selection.png" alt="Load_Cell_Amplifier_gain_selection" width="60%" />
</div>
---

## 系統連線與應用

### 連線範例 (Connection Diagram)
下圖展示了 LCA 與典型荷重元的連線方式，請注意激勵電源與訊號輸入的對應關係。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_connection.png" alt="Load_Cell_Amplifier_connection" width="60%" />
</div>

### 接地與遮蔽 (Grounding & Shielding)
:::tip
為確保量測精度並降低電磁干擾，建議使用遮蔽線進行連線，並將遮蔽層單點接地。同時，確保模組的 AGND 與量測設備的接地參考位準一致。
:::

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_grounding.png" alt="Load_Cell_Amplifier_grounding" width="80%" />
</div>
---

## 進階特性與測試結果

### 噪訊位準 (Noise Level)
在 50ms/div 的時間軸與 10mV/div 的量程設定下，LCA 的基本噪訊約在 5~10 mV 之間。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_noise.png" alt="Load_Cell_Amplifier_noise" width="60%" />
</div>

### Correlation

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_correlation.png" alt="Load_Cell_Amplifier_correlation" width="60%" />
</div>

### 簡單測試 (Simple Test)
下圖展示了放大前後的訊號對比（藍色：放大前，黃色：放大後），可觀察到 1000 倍增益的顯著放大效果。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_test.png" alt="Load_Cell_Amplifier_test" width="60%" />
</div>

---

## 尺寸圖 (Dimensional Drawing)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_dimension.png" alt="Load_Cell_Amplifier_dimension" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/signal-condition/Load_Cell_Amplifier_dimension1.png" alt="Load_Cell_Amplifier_dimension1" width="60%" />
</div>

