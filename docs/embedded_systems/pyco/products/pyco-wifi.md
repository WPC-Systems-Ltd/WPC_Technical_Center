---
title: PYCO WIFI
sidebar_position: 1
---

# PYCO WIFI

PYCO WIFI 是一款全功能型 Python 可程式化控制器，整合 **8 通道 AI/AO/DI/DO**，並內建 **Wi-Fi** 與 **OLED 螢幕**，支援 SD 卡擴充，適合獨立運作與物聯網應用。

## 產品外觀

---

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/pyco/pyco-wifi.png" alt="PYCO WIFI 外觀" width="60%" />
</div>


## 主要特色
---

*   **Python Programmable**: 支援 Stand-Alone Python 應用程式開發。
*   **數位輸出 (DO)**:
    - 8 通道 NPN/PNP (光耦合隔離 24V)。
*   **數位輸入 (DI)**:
    - 8 通道 NPN/PNP (光耦合隔離 24V)。
*   **類比輸出 (AO)**:
    - 8 通道同步輸出，16-bit 單端。
    - 輸出範圍: ±10V。
*   **類比輸入 (AI)**:
    - 8 通道同步取樣，16-bit 單端。
    - 輸入範圍: ±10V。
*   **24V DC 電源輸入**。
*   **Web-based Configurator**: 網頁式設定介面。
*   **Wi-Fi**: 802.11 b/g/n (2.4 GHz to 2.5 GHz)。

## 各部名稱
---

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/pyco/pyco-wifi-general.png" alt="PYCO WIFI 外觀" width="60%" />
</div>

1.  **LCD 螢幕**: 顯示網路資訊、韌體詳細資料、序號及其他功能資訊。
2.  **24V DC 輸入**: 主要電源輸入。
3.  **Secondary 24V DC 輸入**: 次要電源輸入。
4.  **保護接地 (PE)**。
5.  **類比 (Analog) 連接器**。
6.  **USB A to Mini USB 連接器**。
7.  **數位 (Digital) I/O 連接器**。
8.  **SD 卡插槽**。
9.  **Reset 按鈕**:
    - 短按：重啟裝置。
    - 按住 FUNC 同時按下 Reset：重啟並進入 bootloader 模式。
10. **FUNC 按鈕**:
    - 使用者可自定義 (User-customizable)。

---

## 腳位定義

<div style={{textAlign: 'center'}}>
  <img src="/img/embedded-system/pyco/pyco-wifi-mini-ai-pinout.png" alt="PYCO WIFI 腳位" width="60%" />
</div>


### 類比 I/O 連接器 (Analog I/O Connector)

| AO0   | AO2   | AO4   | AO6   | AGND  | AI0   | AI2   | AI4   | AI6   | AGND  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1     | 3     | 5     | 7     | 9     | 11    | 13    | 15    | 17    | 19    |
| 2     | 4     | 6     | 8     | 10    | 12    | 14    | 16    | 18    | 20    |
| **AO1** | **AO3** | **AO5** | **AO7** | **AGND** | **AI1** | **AI3** | **AI5** | **AI7** | **AGND** |

### 數位 I/O 連接器 (Digital I/O Connector)

| DO0   | DO2   | DO4   | DO6   | 0V    | DI0   | DI2   | DI4   | DI6   | 24Vo  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1     | 3     | 5     | 7     | 9     | 11    | 13    | 15    | 17    | 19    |
| 2     | 4     | 6     | 8     | 10    | 12    | 14    | 16    | 18    | 20    |
| **DO1** | **DO3** | **DO5** | **DO7** | **0V**  | **DI1** | **DI3** | **DI5** | **DI7** | **24Vo** |