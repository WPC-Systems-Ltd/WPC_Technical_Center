---
sidebar_position: 6
sidebar_label: '伺服馬達接線範例'
description: 各大廠牌伺服驅動器的位置控制模式接線圖集
---

# 常見伺服馬達接線範例

## 1. 控制模式說明

伺服馬達驅動器通常支援多種控制模式，主要包括：
1.  **位置控制模式 (Position Control Mode)**：透過脈波指令控制位置。
2.  **速度控制模式 (Speed Control Mode)**：透過類比電壓或指令控制轉速。
3.  **扭力控制模式 (Torque Control Mode)**：透過類比電壓控制輸出轉矩。

由於 Emotion 屬於 **脈波命令型 (Pulse-Train Command)** 運動控制卡，因此**僅支援伺服驅動器的「位置控制模式」**。

:::info 速度控制
雖然接線必須使用位置模式，但使用者仍可透過軟體改變脈波發送頻率，來達成精確的 **速度控制 (Velocity Mode)** 效果。
:::

---

## 2. 各廠牌接線圖集

以下提供主流伺服驅動器的標準接線範例。
圖中 **紅色框線** 標示處為必須連接至軸卡的重要 I/O 訊號點。

:::info 設定生效
更改驅動器參數設定或接線後，務必將驅動器 **斷電重啟 (Power Cycle)** 以確保設定生效。
:::

### 2.1 Mitsubishi (三菱) MR-J4 / JE
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/example_Mitsubishi_MR_J4_JE.png" alt="Mitsubishi J4 Wiring" width="60%" />
</div>

### 2.2 Delta (台達) ASDA-B2
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/example_Delta_ASDA_B2.png" alt="Delta B2 Wiring" width="60%" />
</div>

### 2.3 Panasonic (松下) Minas A4 / A5 / A6
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/example_Panasonic_Minas_A4_A5_A6.png" alt="Panasonic Wiring" width="60%" />
</div>

### 2.4 Yaskawa (安川) SGDV / SGD7
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/example_Yaskawa_SGDV_SGD7.png" alt="Yaskawa Wiring" width="60%" />
</div>
