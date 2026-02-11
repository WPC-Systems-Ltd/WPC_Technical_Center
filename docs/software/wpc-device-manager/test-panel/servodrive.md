---
sidebar_position: 17
sidebar_label: 'Servo Drive'
---

# Servo Drive

**WPC-EDrive-SRV** 是一款具備網路介面的單軸伺服馬達整合型驅動器。透過 Servo Drive 面板，使用者可以直觀地設定驅動器參數、執行馬達調機程序 (Auto-tuning) 以及進行運動控制測試。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-connect.png" alt="Servo Drive Connect" width="60%" />
</div>

## 系統管理 (System Configuration)

提供驅動器設定檔管理與韌體更新功能。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-file-config.png" alt="System Configuration" width="60%" />
</div>

| 按鈕功能          | 說明                                           |
| :---------------- | :--------------------------------------------- |
| **Import file**   | 匯入先前的驅動器設定檔 (*.ini)。               |
| **Export file**   | 將目前的驅動器參數匯出備份。                   |
| **Restore default** | 重置驅動器參數至原廠預設值。                   |
| **Update firmware** | 更新 **驅動器內部** 的韌體 (Firmware)。        |

:::tip
注意：此處的更新是針對驅動器本體；若是 WPC Device Manager 軟體介面的更新，請透過一般軟體更新流程進行。
:::

## 控制調教 (Control Tuning)

為獲得最佳的馬達控制表現，初次安裝或更換馬達時，建議依序執行以下調機步驟：

### Step 1. 選擇馬達型號

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-fill-motor.png" alt="Fill motor specification" width="60%" />
</div>

請在 `Model No.` 下拉選單中選擇您的馬達型號。系統會自動填入對應的額定規格 (扭力、電流、頻率、轉速等)。
若選單中無您的型號，請依據馬達銘牌 (Nameplate) 手動輸入參數。

:::info
Panasonic 系列馬達的型號通常標示於馬達側面的貼紙上。
:::

### Step 2. 確認電氣參數

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-config-electric-param.png" alt="Configure electric parameter" width="60%" />
</div>

顯示馬達的詳細電氣參數 (如相電阻、相電感)。若上一步驟已正確選擇型號，此處通常不需修改，點擊 **Next** 繼續。

### Step 3. 解除煞車 (Release Brake)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-release-break.png" alt="Release brake" width="60%" />
</div>

若您的馬達配有煞車 (Brake) 機構，請依照指示解除煞車，以確保馬達軸心可自由轉動。詳細接線請參閱 **WPC-EDrive-SRV 硬體使用手冊**。

### Step 4. 系統鑑別 - 電氣特性 (Electrical ID)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-system-identify.png" alt="System Identification Electrical" width="60%" />
</div>

自動測量馬達的實際相電阻與電感值。

1. 設定 **Target Current** (建議至少 0.5A)。
2. 按下 **Run**。
3. 馬達將輕微轉動並鎖定，約 2 秒後發出「嗶」長音，且檢測狀態顯示打勾符號，即表示成功。

:::caution
注意：Target Current 設定值不可超過馬達的最大容許電流，以免損壞馬達。
:::

### Step 5. 系統鑑別 - 機械特性說明

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-system-identify-mechnical.png" alt="System Identification Mechanical" width="60%" />
</div>

此頁面為說明頁，請點擊 **Next** 繼續。

### Step 6. 系統鑑別 - 執行機械識別 (Mechanical ID)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-perform-sustem.png" alt="Perform System Identification Mechanical" width="60%" />
</div>

自動測量負載慣量、黏滯係數等機械參數。

**操作步驟：**
1. 按下 **Servo On** 激磁馬達。
2. 手動測試並設定一組可使馬達轉動的 **Torque** 值。
3. 操作按鈕將馬達移動至 **Start Position** (起始點)。
4. 操作按鈕將馬達移動至 **End Position** (結束點)。**⚠️ 請確保移動範圍內無機構干涉。**
5. 按下 **Start identification**。
6. 馬達將在起始點與結束點之間往返測試，並自動調整輸出。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-fitting.png" alt="Fitting Result" width="60%" />
</div>

**結果判讀：**
*   **擬合曲線 (右上圖表)**：橘色虛線應貼近藍色實線。若大幅漂移，可能代表機構配重不平衡 (重力影響)。
*   **R Square (左側數據)**：擬合度指標。若大於 **80%** 即可視為成功，請按 **Next** 繼續。

### Step 7. 設定控制頻寬 (Controller Bandwidth)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-controller-bandwidth.png" alt="Configure Controller Bandwidth" width="60%" />
</div>

調整馬達的響應頻寬 (Bandwidth)。

*   **頻寬越高**：響應越快，剛性越強，定位更精準。
*   **頻寬過高**：可能引發機構共振與噪音。

設定完成後按 **Next**，系統將詢問是否儲存。選擇 **Yes** 將參數寫入驅動器並備份設定檔至 `(WDM路徑)\data\ServoTune\data\Configs\`。

## 進階功能

### 摩擦補償 (Friction Compensation)

針對短行程、高精度的移動需求，可開啟此功能以消除靜摩擦力造成的「黏滯滑動 (Stick-Slip)」現象 (即起步時的遲滯或轉折處的停頓)。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-friction-compensation2.png" alt="Friction Compensation" width="60%" />
</div>

**設定步驟：**
1. **往返測試**：設定 Amplitude 與 Frequency，執行 **Round trip**。
2. **啟用補償**：設定 **Pos bound** (建議為振幅的 1/10) 與 **Switching gain** (預設 0.95)。
3. **微調**：啟用 **Enable**，觀察誤差曲線。若仍有影響，可微調 Pos bound 或提高控制頻寬。

### 自適應陷波濾波器 (Adaptive Notch Filter)

用於抑制機構共振 (Resonance)。當馬達帶動皮帶或懸臂結構時，若產生特定頻率的嗡嗡聲，可使用此功能。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-notch-filter.png" alt="Adaptive Notch Filter" width="60%" />
</div>

**操作步驟：**
1. 讓馬達進行往返運動 (**Round trip**)，誘發共振聲音。
2. 點擊 **Enable ANF** 開啟濾波器。
3. 點擊 **Frequency estimator** 開始偵測共振頻率。觀察右下圖表，頻率應會收斂至某數值。
4. 點擊 **Suppress vibration** 執行抑制。共振聲應會明顯變小或消失。
5. 若聲音消失，關閉估測器並儲存設定。

## 其他保護設定

### 電流保護 (Current Protection)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-current-protection.png" alt="Current Protection" width="60%" />
</div>

設定過電流保護機制，防止馬達因堵轉或撞機而燒毀。

| 參數                         | 說明                                |
| :--------------------------- | :---------------------------------- |
| **Peak current limit**       | 允許的瞬間最大電流值。              |
| **Continuous current limit** | 允許的持續電流上限 (均值)。         |
| **Saturation current**       | 驅動器輸出的絕對飽和電流上限。      |

### 到位判定 (In-Position)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-inposition.png" alt="Inposition" width="60%" />
</div>

定義「到位 (In-Position)」訊號的觸發條件。

| 參數                      | 說明                                                          |
| :------------------------ | :------------------------------------------------------------ |
| **In range [deg]**        | 容許的位置誤差範圍。                                          |
| **In range time [sec]**   | 位置誤差需保持在範圍內的持續時間，滿足此時間才視為真正到位。  |
