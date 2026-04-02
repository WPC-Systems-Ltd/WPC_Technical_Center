---
sidebar_position: 1
sidebar_label: '產品介紹'
description: EDrive-SRV 伺服馬達驅動器產品簡介
---

# EDrive-SRV

## 產品介紹

WPC EDrive-SRV，體積小、接線單純、容易使用的特性使得它適合應用於半導體設備、小型實驗設備、科研儀器等系統開發。

電源上使用直流電源，最高可支援到 48V，最大輸出功率 400W，適合應用於直流供電的環境，比如移動載具、太陽能光電、儲能系統、電池、電瓶供電環境下使用。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV.png" alt="EDriveSRV" width="60%" />
</div>

:::info
EDrive-SRV 目前僅支援 Panasonic A6 系列的伺服馬達。
:::

:::info
EDrive-SRV 電源上使用直流電源，最高可支援到 48V。
:::

## 系統架構圖

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_system_diagram.png" alt="EDriveSRV_system_diagram" width="60%" />
</div>

---

## 主要規格


| 規格項目         | 說明                                      |
| :--------------- | :---------------------------------------- |
| 馬達種類         | Panasonic A6 系列（AC 伺服馬達）          |
| 極限開關         | FWD、REV（不含 Home）                     |
| 其他 I/O         | Brake release、Break-point                |
| 編碼器           | 23-bit 絕對型編碼器                       |
| 電源輸入         | 12～48V 直流（最大輸出功率 400W）         |
| 支援開發環境     | Python、C#、LabVIEW                      |


## 外觀說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_IO.png" alt="EDriveSRV_IO" width="60%" />
</div>

說明 EDrive-SRV 的各項硬體介面功能：

| 編號 | 組件名稱                              | 功能說明                                                                   |
| :--: | :----------------------------------- | :----------------------------------------------------------------------- |
| **1**| **重置按鈕**                          | 1. **重新啟動**：直接按下即可重新啟動裝置。<br/> 2. **Bootloader 模式**：同時按住 **FUNC** 按鈕與重置按鈕，裝置將重新啟動並進入 Bootloader 模式。 |
| **2**| **FUNC 按鈕**                         | 1. **重置 IP**：長按約 3 秒可將 IP 重置為預設值 `192.168.1.110`。<br/> 2. **切換顯示**：短按可切換 OLED 面板顯示頁面。 |
| **3**| **LED1 狀態指示燈**                   | 顯示系統主程式運作狀態 (詳見[LED 指示燈狀態](#led-指示燈狀態)說明)。                                      |
| **4**| **LED2 作業系統指示燈**               | 顯示作業系統狀態 (詳見[LED 指示燈狀態](#led-指示燈狀態)說明)。                                            |
| **5**| **USB孔**                            | **Micro-USB 介面**，可用於韌體更新、參數配置與裝置偵錯。          |
| **6**| **乙太網路孔**                        | 10/100M 乙太網路介面，用於資料傳輸與通訊。                                   |
| **7**| **I/O connector (CN1, 36P)**         | **數位 I/O 介面**，包含**極限開關 (FWD/REV)**、**煞車釋放 (Brake)** 及**觸發點 (Break-point)** 訊號。 |
| **8**| **Encoder/Hall sensor (CN2, 20P)**   | **馬達回授介面**，接收編碼器與霍爾感測器訊號，實現動態位置監測與閉迴路控制。 |
| **9**| **OLED 面板**                        | 顯示網路設定資訊、韌體版本、序號及其他系統狀態。                              |
| **10**| **Abs. Encoder Input(ENC, 6P)**     | **絕對型編碼器輸入**，專用於讀取 **Panasonic 23-bit** 高解析度編碼器數據。     |
| **11**| **A6 Motor Power Output(CN4, 4P)**  | **伺服馬達動力輸出**，連接至 **Panasonic A6 系列**伺服馬達動力輸入端。     |
| **12**| **Earth Ground**                    | **保護接地 (PE)**，提升系統穩定性並確保設備安全。                         |
| **13**| **12-48V DC 電源輸入(CN3, 2P)**      | 供電介面，輸入電壓為 12~48V DC。                                           |

---

## LED 指示燈狀態

### LED1：系統狀態

| 燈號行為       | 狀態說明           |
| :------------- | :----------------- |
| **啟動時閃爍** | 主程式初始化正常 (閃爍兩次) |
| **恆亮**       | 系統運作正常       |
| **週期性閃爍** | 發生錯誤           |

### LED2：作業系統狀態

| 燈號行為       | 狀態說明           |
| :------------- | :----------------- |
| **啟動時閃爍** | Bootloader 初始化正常 (閃爍兩次) |
| **恆亮**       | Bootloader 運作中  |
| **週期性閃爍** | 作業系統正常運作   |
| **頻率 4 Hz**  | 已連接乙太網路線   |
| **頻率 2 Hz**  | 未連接乙太網路線   |
| **熄滅**       | 作業系統停止運作   |

---

## 腳位說明

### I/O 及 Encoder 腳位接線說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_connector1.png" alt="EDriveSRV_connector1" width="60%" />
</div>


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_connector1_pinout.png" alt="EDriveSRV_connector1_pinout" width="60%" />
</div>

### I/O connector 接線範例

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_IO_connector_example.png" alt="EDriveSRV_IO_connector_example" width="60%" />
</div>

---

### 電源的腳位接線說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_connector3.png" alt="EDriveSRV_connector3" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_connector_voltage.png" alt="EDriveSRV_connector_voltage" width="60%" />
</div>

---

### 編碼器的腳位接線說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/motion/EDriveSRV_connector_encoder.png" alt="EDriveSRV_connector_encoder" width="60%" />
</div>
