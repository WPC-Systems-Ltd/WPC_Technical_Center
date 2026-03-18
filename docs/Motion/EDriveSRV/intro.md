---
sidebar_position: 1
sidebar_label: '產品介紹'
description: EDrive-SRV 步進馬達驅動器產品簡介
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
