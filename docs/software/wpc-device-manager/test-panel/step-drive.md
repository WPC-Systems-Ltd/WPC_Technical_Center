---
sidebar_position: 18
sidebar_label: 'Step Drive'
---

# Step Drive

**WPC-EDrive-ST** 是一款網路介面的單軸步進馬達整合型驅動器。透過 Step Drive 面板，您可以設定驅動器電流、解析度、進行運動測試以及震動抑制功能。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_edrive_connect.png" alt="WDM_testPanel_edrive_connect" width="60%" />
</div>

## 驅動器設定 (Driver Setup)

設定步進馬達的運轉電流 (Run Current)、保持電流 (Hold Current) 以及微步進解析度 (Microstepping)。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_driver_setup.png" alt="WDM_testPanel_driver_setup" width="60%" />
</div>

### 1. 電流設定說明

本驅動器支援多段電流設定。請依照您的馬達額定電流，選擇最接近的設定值。

| 設定等級 (Factor) | Current Range 1A (A) | Current Range 2A (A) | Current Range 3A (A) |
| :---------------- | :------------------- | :------------------- | :------------------- |
| **0**             | 0.03125              | 0.0625               | 0.09375              |
| **1**             | 0.0625               | 0.125                | 0.1875               |
| **⋮**             | **⋮**                | **⋮**                | **⋮**                |
| **20**            | 0.65625              | 1.3125               | 1.96875              |
| **⋮**             | **⋮**                | **⋮**                | **⋮**                |
| **31**            | **1.0**              | **2.0**              | **3.0**              |

### 2. 解析度設定說明

選擇每轉步數 (Steps per Revolution)。

| Step/Revolution | 說明                |
| :-------------- | :------------------ |
| **200**         | 全步進 (1.8°/step)  |
| **400**         | 半步進              |
| **⋮**           | **⋮**               |
| **12800**       | 高解析度微步進      |
| **51200**       | 最高解析度          |

### 3. 運動控制測試

提供基本的點動與定位測試功能。

| 按鈕/參數        | 說明                    |
| :--------------- | :---------------------- |
| **Servo on**     | 啟動馬達激磁。          |
| **⬅ 反轉**       | 控制馬達向反方向移動。  |
| **➡️ 正轉**       | 控制馬達向正方向移動。  |
| **Distance**     | 每次移動的距離 (Step)。 |
| **Velocity**     | 移動速度 (Step/sec)。   |
| **Acceleration** | 加速度 (Step/sec²)。    |

### 4. 運轉狀態 (Status)

| 狀態指示      | 說明               |
| :------------ | :----------------- |
| **Hit Rev Limit** | 觸發反向極限開關。 |
| **Hit Fw Limit**  | 觸發正向極限開關。 |
| **Pos Reached**   | 已到達目標位置。   |
| **Vel Reached**   | 已到達設定速度。   |
| **Stopped**       | 馬達停止中。       |
| **Over Torque**   | 扭力過載警報。     |
| **Driver Error**  | 驅動器內部錯誤。   |
| **Cfg Reseted**   | 參數已重置。       |

## 防震調教 (Anti-Vibration)

步進馬達在低速運轉時容易產生共振與震動。透過「低轉速震動抑制」功能，可大幅改善平順度。

### Step 1. 設定測試範圍

設定一個安全的來回移動區間。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_anti_vibration.png" alt="WDM_testPanel_anti_vibration" width="60%" />
</div>

1. 按下 **Servo on** 激磁。
2. 轉動馬達至終點，按下 **Set End Position**。
3. 轉動馬達至起點，按下 **Set Start Position**。

### Step 2. 調整防震參數

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_anti_vibration2.png" alt="WDM_testPanel_anti_vibration2" width="60%" />
</div>

1. 開啟 **Enable** 啟用防震功能。
2. 按下 **Round Trip** 讓馬達自動往返。
3. 逐漸提高速度，觀察馬達是否開始震動。
4. 找出震動發生的臨界速度後，按下 **Set Threshold** 將此速度設為抑制功能的作動門檻。
5. 完成後觀察運轉是否變得平順。

## 檔案設定 (File Configuration)

EDrive-ST 支援設定檔匯出與匯入功能，方便將參數快速複製到其他機台，或進行備份。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/testPanel/WDM_testPanel_file_configure.png" alt="WDM_testPanel_file_configure" width="60%" />
</div>
