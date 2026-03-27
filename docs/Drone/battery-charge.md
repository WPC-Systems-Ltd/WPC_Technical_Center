---
title: 電池充電教學
sidebar_position: 4
description: WPC Drone 電池充電教學
---

## 電池充電教學操作影片

<div style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/nEynb3iW2Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 簡介

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge.png" alt="battery_charge" width="60%" />
</div>

imax B6AC v2 是一款處理器控制的智能充電器，適用於大多數常見的電池類型。

### 支援電池類型

| 電池類型 | 中文名稱 |
| :--- | :--- |
| **LiPo** | 鋰聚合物電池 |
| **LiIon** | 鋰離子電池 |
| **LiFe** | 磷酸鐵鋰電池 |

**充電器規格：** 最大充電電流可達 **6A**，或最大功率 **50W**。

## 電池接線

電池充電器組包含：**電池充電器**、**電源線**與數條**充電線轉接線**。
電池的充/放電需要將電池上的**充/放電線**與**平衡充線**接上充電器，如下圖所示：

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_battery_wiring_diagram.png" alt="電池接線示意圖" width="60%" />
  <p>電池接線示意圖。取自 iMAX B6AC V2 Manual。</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_3S_balance_charging_port.png" alt="3S電池平衡充線位置" width="60%" />
  <p>3S 電池平衡充線位置</p>
</div>

## 充電器基本操作：選擇電池種類

imax B6AC v2 支援多種電池，必須正確切換設定以確保充電安全。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_battery_type.png" alt="電池種類" width="60%" />
  <p>電池種類選單</p>
</div>

| 步驟 | 操作方法 |
| :--- | :--- |
| **1.** | 按 **BATT/PROG** 按鈕，進入電池種類模式。 |
| **2.** | 按 **◀ (左) / ▶ (右)** 按鈕，切換至 **LiPo BATT** 模式。 |
| **3.** | 按 **ENTER** 確認選擇。 |

## 充電步驟 (以 3S LiPo 電池為例)

WPC Drone 使用的是 **3S LiPo 電池**（代表內部串聯 3 個電芯，標準電壓為 11.1V）。為確保安全，需要設定正確的**充電模式**、**充電電流**與**充電電壓**。

### 1. 選擇平衡充電模式 (BALANCE CHG)

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_select_balance_charging_mode.png" alt="選擇平衡充電模式" width="60%" />
  <p>選擇平衡充電模式</p>
</div>

在設定好電池種類 (LiPo) 後的初始畫面，按下 **◀ (左) / ▶ (右)** 按鈕切換模式，直到畫面顯示 **BALANCE CHG** (平衡充電模式)，這是 LiPo 電池最推薦且安全的充電方式。

### 2. 設定充電電流與電壓

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_setting_charging_amp.png" alt="設定充電電流與電壓" width="60%" />
  <p>設定充電電流與電壓</p>
</div>

| 設定項目 | 操作步驟 | 建議設定值 (依電池容量而異) |
| :--- | :--- | :--- |
| **充電電流 (A)** | 1. 按下 **ENTER** 一下，電流數字會閃爍。<br/>2. 按下 **◀/▶** 調整數值。<br/>3. 按下 **ENTER** 確認並自動切換至電壓設定。 | 設為 **2.0A** (請參考下方提示<br/>確認最高安全電流) |
| **電池電壓 (V)** | 1. 電流設定完成後，電壓數字 (`-.-V(-S)`) 會閃爍。<br/>2. 按下 **◀/▶** 將數值調整至符合您的電池。<br/>3. 按下 **ENTER** 完成設定。 | 設為 **11.1V (3S)** |

:::tip 充電電流設定建議
通常鋰電池安全充電電流最大值為 **1C ~ 2C**。
* **6500mAh** (即 6.5Ah) 的電池，1C 最大充電電流為 **6.5A**。
* **2200mAh** (即 2.2Ah) 的電池，1C 最大充電電流為 **2.2A**。
請勿設定超過電池負荷的電流，以免發生危險！
:::

### 3. 開始充電

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_start_charging.png" alt="開始充電" width="60%" />
  <p>確認是否開始充電的畫面</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_charging.png" alt="充電中" width="60%" />
  <p>充電中的畫面</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_charging_complete.png" alt="充電完成" width="60%" />
  <p>充電完成畫面</p>
</div>

| 步驟 | 操作方法 |
| :--- | :--- |
| **1.** | 在設定完成的畫面上，**長按 ENTER** 按鈕進入充電前檢查。 |
| **2.** | 畫面會顯示 `CONFIRM(ENTER)` 字樣，此時再次**短按 ENTER** 按鈕即可開始充電。 |
| **3.** | 充電完成後，充電器會發出提示音，畫面上可看到**總充電時間**、**當前電池電壓**與**充入的總電量 (mAh)**。 |

## 電池儲存放電 (STORAGE)

若 LiPo 電池長時間不使用，**不建議滿電或空電存放**，否則容易導致電池膨脹或電芯損壞。請利用充電器的 STORAGE 功能，將電池放電或充電至 **儲存電壓 (3.8V/cell)** 以利長期保存。

| 步驟 | 說明 | 操作方法 |
| :--- | :--- | :--- |
| **1. 切換模式** | 選擇儲存模式 | 在初始畫面按 **◀/▶** 按鈕，切換至 **STORAGE** 模式。 |
| **2. 設定電流** | 設定充放電電流 | 按 **ENTER** 一下，數字閃爍後按 **◀/▶** 將電流設為 **2.0A**。 |
| **3. 設定電壓** | 設定電池芯數 | 按 **ENTER** 確認電流並切換至電壓，數字閃爍後按 **◀/▶** 設為 **11.1V (3S)**，再按 **ENTER** 確認設定。 |
| **4. 執行儲存** | 開始放電/充電 | **長按 ENTER**，看到 `CONFIRM(ENTER)` 後，再**短按 ENTER** 即可開始執行儲存程序。 |