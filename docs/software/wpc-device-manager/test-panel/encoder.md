---
sidebar_position: 8
sidebar_label: 'Encoder'
---

# Encoder

Encoder (編碼器) 面板提供使用者讀取正交編碼器 (Quadrature Encoder) 的位置與速度資訊。適用於馬達位置回授與轉速監控。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/encoder.png" alt="Encoder Test Panel" width="60%" />
</div>

## 參數與數值顯示

介面提供即時的編碼器狀態資訊：

| 參數/顯示             | 說明                                       |
| :-------------------- | :----------------------------------------- |
| **Channel**           | 選擇要讀取的編碼器通道 (預設為 0)。        |
| **Position**          | 目前的編碼器絕對位置 (Counter Value)。     |
| **Speed**             | 目前的轉速 (RPM 或其他單位，視設定而定)。  |
| **Speed window**      | 測速視窗時間，用於計算轉速的採樣區間。     |
| **Encoder Direction** | 目前的旋轉方向指標。                       |

## 操作說明

透過下方的控制按鈕來執行讀取與重置功能：

| 按鈕      | 功能                                      |
| :-------- | :---------------------------------------- |
| **Start** | 開始即時讀取編碼器數值與狀態。            |
| **Stop**  | 停止讀取。                                |
| **Reset** | 將目前的編碼器位置數值 (Position) 歸零。  |
