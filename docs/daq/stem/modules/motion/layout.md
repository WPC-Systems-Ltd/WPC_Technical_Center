---
sidebar_position: 4
sidebar_label: '外觀尺寸與安裝'
description: 4 軸運動控制模組的硬體尺寸、介面佈局與安裝指南
---

# 外觀尺寸與安裝

## 1. 外觀尺寸圖

模組採用標準 DIN 導軌安裝設計，具備緊湊的工業級外形。

### 1.1 介面配置
*   **電源輸入 (CN3)**：左上方 2-pin 歐規端子，輸入電壓 **24VDC**。
*   **系統匯流排 (CN4)**：右上方 IDC 50-pin 接口，用於連接 GECO 或 STEM 控制器。
*   **子板連接器 (CN1)**：下方 DIN 41612 48-pin 接口，用於連接運動控制子板 (Breakout Board)。

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_28_img_X278.png" alt="Motion Module Layout" width="60%" />
</div>

### 1.2 系統安裝注意事項
在連接馬達驅動器前，請務必確認以下步驟：
1.  **子板組合**：透過下方的 DIN 41612 連接器，將軸卡主體與選定的轉接子板 (通用型/專用型) 緊密結合。
2.  **固定方式**：
    *   首先將專用鋁軌扣件 (DIN Rail Clip) 固定於軸卡背面。
    *   將組合好的模組掛載至標準 35mm 鋁軌上。

:::warning 空間預留
*   **高度預留**：鋁軌扣將墊高模組約 **7.4 mm**。
*   **上方空間**：建議從鋁軌上方算起預留至少 **82.36 mm** 的空間，以容納 SCSI 纜線的彎曲半徑，避免線材過度受力。
:::

---

## 2. 電源連接

本模組需要外部供應 **24VDC** 電源以驅動內部電路與隔離介面。

<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_29_img_X285.png" alt="Power Connection" width="60%" />
</div>

### 2.1 配線須知
*   請使用左上方的 2-pin 歐規端子進行配線。
*   若使用非 WPC 原廠提供的電源供應器，請務必使用三用電表確認極性。

:::danger 極性檢查
嚴禁將電源正負極反接！
請在插入電源端子前，**務必使用電表再次確認 24V 與 GND 的極性**。電源反接將導致模組電路永久性損壞，且不在保固範圍內。
:::