---
sidebar_position: 2
sidebar_label: '外觀與硬體'
---

# 外觀與硬體配置

## 外觀說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_controller.png" alt="STEM Appearance" width="60%" />
</div>

由上到下依序為：
*   **C1 (Slot C1)**: 24ch 3.3V DIO
*   **C2 (Slot C2)**: 24ch 3.3V DIO
*   **C3 (Slot C3)**: 24ch 3.3V DIO
*   **C4 (Slot C4)**: 24ch 3.3V DIO

## 介面說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/daq/stem/STEM_controller_front.png" alt="STEM Interface" width="80%" />
</div>

由左到右依序為：
1.  **24V 直流電輸入**
2.  **保護接地 (PE)**
3.  **LEDs 指示燈**
4.  **10/100M 乙太網路孔**
5.  **Reset 按鍵**
6.  **FUNC 按鍵** (位於 Reset 旁)

### LED 指示燈定義

| 位置        | 名稱           | 行為描述 |
| :-----------| :-------------|:----------------------------------------------------------------------------------|
| 左上角      | 電源燈 (Power) | • **恆亮**：電源開啟。|
| 右上角      | Bootloader     | • **閃爍兩次**：啟動時 Bootloader 初始化無錯誤。<br/>• **恆亮**：Bootloader 正在運行。|
| 左下角      | 狀態 (Status)  | • **閃爍兩次**：啟動時主程式初始化無錯誤。<br/>• **恆亮**：系統正在運行。<br/>• **週期閃爍**：發生錯誤。  |
| 右下角      | 作業系統 (OS)  | • **約 4 Hz 閃爍**：乙太網路線已連接。<br/>• **約 2 Hz 閃爍**：乙太網路線未連接。<br/>• **不閃爍**：OS 停止運行。 |

### 按鍵功能

| 按鍵      | 功能說明                                                                          |
| :-------- | :-------------------------------------------------------------------------------- |
| **Reset** | • **短按**：重新啟動 STEM。<br/>• **同時按下 FUNC**：重啟並進入 Bootloader 模式。 |
| **FUNC**  | • **長按 3 秒**：將 IP 重設為預設值 `192.168.1.110`。                             |
