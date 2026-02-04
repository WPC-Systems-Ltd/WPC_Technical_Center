---
title: 通用功能
sidebar_label: 通用功能
sidebar_position: 3
---

## 搜尋與重整

WDM 提供自動搜尋功能，可掃描網域內的 WPC 裝置。若需手動更新列表，請依據裝置類型執行以下操作：

*   **USB 裝置**：將滑鼠游標移至 **"My Computer"** 區域，按右鍵選擇 **"Refresh My Computer"**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/refresh-my-computer.png" alt="重整 USB 裝置" width="60%" />
    </div>

*   **網路裝置**：將滑鼠游標移至 **"Network"** 區域，按右鍵選擇 **"Refresh Network"**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/refresh-network.png" alt="重整網路裝置" width="60%" />
    </div>

:::caution
若無法於列表中找到您的網路裝置，請確認電腦主機與裝置的 IP 位址是否位於 **同一子網域**。
:::

---

## 新增模擬裝置

WDM 支援模擬裝置功能，允許使用者在無實體硬體的情況下，預覽腳位圖 (Pinout) 與測試面板功能。

**操作步驟：**

1.  點擊選單列中的 **"View"**。
2.  選擇 **"Add Simulated Device"**。
3.  在彈出的裝置列表中選擇欲模擬的型號（可按住 **Ctrl 鍵** 進行多選）。
4.  點擊 **"OK"** 確認新增。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/add-simulated-device.png" alt="新增模擬裝置" width="60%" />
</div>

---

## 識別網路裝置

當同時連接多台網路裝置時，可透過 LED 閃爍功能快速識別特定裝置。

**操作步驟：**

1.  在 **"Network device list"** 中，將滑鼠游標移至目標裝置。
2.  按右鍵選擇 **"Toggle Blink State"**。
3.  此時該裝置上的 LED 指示燈將開始快速閃爍。
4.  若欲停止閃爍，請再次選擇 **"Toggle Blink State"** 或點擊該選項以取消。

:::note
此功能僅支援 WPC 網路系列裝置。
:::

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/toggle-blink.png" alt="辨識網路裝置 LED" width="60%" />
</div>
