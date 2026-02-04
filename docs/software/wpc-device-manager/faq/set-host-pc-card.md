---
title: 設定 Host PC 端網卡
sidebar_label: 設定 Host PC 端網卡
sidebar_position: 6
description: "確認電腦端與 WPC 裝置連線的網卡是否在相同網域"
---

> 💡 請先確認電腦端與 WPC 裝置連線的網卡是否在相同網域？

*   例如：`192.168.1.110` 與 `192.168.1.xxx` 屬於相同的網域。
*   例如：`192.168.1.xxx` 與 `192.168.0.xxx` 及 `192.168.2.xxx` 屬於不同的網域。

> 💡 建議先關閉 DHCP 盡量使用 Static IP，並且設定正確 IP address 及 submask

*   **WPC 裝置**：`192.168.1.110` 遮罩 `255.255.255.0`
*   **用戶端電腦**：`192.168.1.20` 遮罩 `255.255.255.0`

正確的網域設定對於與 WPC 網路裝置的正常通訊至關重要。請按照以下步驟進行網域設定的變更：

---

## 1. 開啟 Windows 設定

點擊「開始」按鈕，選擇「設定」圖標進入設定頁面。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/windows-settings.png" alt="在windows下搜尋設定" width="60%" />
</div>

---

## 2. 進入乙太網路設定頁面

在「設定」頁面中，選擇「網路和網際網路」選項，然後在左側選擇「乙太網路」。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/network-settings.png" alt="選擇網路及網際網路" width="60%" />
</div>

---

## 3. 變更介面卡選項

在乙太網路設定頁面中，點擊「變更介面卡選項」。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/change-adapter-options.png" alt="選擇變更介面卡選項" width="60%" />
</div>

---

## 4. 選擇網路連線

在「網路連線」視窗中，找到您正在使用的乙太網路連接，按右鍵並選擇「內容」。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ethernet-properties.png" alt="選擇內容" width="60%" />
</div>

---

## 5. 配置 IPv4 設定

在「內容」視窗中，雙擊「網際網路通訊協定第 4 版 (TCP/IPv4)」，進入 IPv4 設定頁面。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ipv4-properties.png" alt="選擇網際網路通訊協定第4版(TCP/IPv4)" width="60%" />
</div>

---

## 6. 設定 IP 位址

選擇「使用下列 IP 位址」並手動輸入 IP 位址、子網路遮罩和預設閘道。確保 IP 位址在同一網段內，且不與任何其他裝置的 IP 位址衝突。

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/set-static-ip.png" alt="選擇使用下列 IP 位址" width="60%" />
</div>

| 參數 | 設定值 |
| :--- | :--- |
| **IP 位址** | `192.168.1.38` (切勿跟 WPC 裝置同一個 IP) |
| **子網路遮罩** | `255.255.255.0` |

完成設定後，點擊「確定」保存變更。然後再點擊「確定」以關閉視窗。

---

## 7. 確認連線狀態

打開命令提示字元 (Command Prompt)，輸入以下指令以測試連線：

```bash
ping 192.168.1.110
```

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/cmd-ping.png" alt="輸入 ping 指令" width="60%" />
</div>

若出現如下回應，即代表 WPC 裝置與電腦已成功連線：

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ping-result.png" alt="Ping 成功回應" width="60%" />
</div>

若仍遇到通訊問題，您可以嘗試更換一條新的網路線，或尋求 WPC 的技術支援。
